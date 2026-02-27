'use client';

import { useEffect, useState, useCallback } from 'react';
import { MapPin, RefreshCw, Sunrise, Sun, Moon, Plus, X, Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

interface PrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface HijriDate {
  day: string;
  month: { en: string; ar: string };
  year: string;
}

interface LocationInfo {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface SavedLocation {
  city: string;
  latitude: number;
  longitude: number;
}

const PRAYERS = [
  { key: 'Fajr', name: 'Fajr', nameAr: 'الفجر', icon: Moon, desc: 'Aube' },
  { key: 'Sunrise', name: 'Lever du soleil', nameAr: 'الشروق', icon: Sunrise, desc: 'Shurouq' },
  { key: 'Dhuhr', name: 'Dhuhr', nameAr: 'الظهر', icon: Sun, desc: 'Midi' },
  { key: 'Asr', name: 'Asr', nameAr: 'العصر', icon: Sun, desc: 'Après-midi' },
  { key: 'Maghrib', name: 'Maghrib', nameAr: 'المغرب', icon: Sunrise, desc: 'Coucher du soleil' },
  { key: 'Isha', name: 'Isha', nameAr: 'العشاء', icon: Moon, desc: 'Nuit' },
] as const;

const API_BASE = 'https://api.aladhan.com/v1';
const STORAGE_KEY = 'al-ilm-saved-locations';
const MAX_SAVED = 5;

const PARIS_LAT = 48.8566;
const PARIS_LON = 2.3522;

function formatDate(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
}

function getNextPrayer(times: PrayerTimes): string | null {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  for (const p of PRAYERS) {
    const time = times[p.key as keyof PrayerTimes];
    if (!time) continue;
    const [h, m] = time.split(':').map(Number);
    if (h * 60 + m > currentMinutes) return p.key;
  }
  return 'Fajr';
}

function loadSavedLocations(): SavedLocation[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistSavedLocations(locations: SavedLocation[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
}

export default function HorairesPage() {
  const [times, setTimes] = useState<PrayerTimes | null>(null);
  const [hijri, setHijri] = useState<HijriDate | null>(null);
  const [location, setLocation] = useState<LocationInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cityInput, setCityInput] = useState('');
  const [manualMode, setManualMode] = useState(false);
  const [savedLocations, setSavedLocations] = useState<SavedLocation[]>([]);

  // Load saved locations from localStorage on mount
  useEffect(() => {
    setSavedLocations(loadSavedLocations());
  }, []);

  const fetchByCoords = useCallback(async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);
    try {
      const date = formatDate(new Date());
      const res = await fetch(`${API_BASE}/timings/${date}?latitude=${lat}&longitude=${lon}&method=12`);
      const data = await res.json();
      if (data.code === 200) {
        setTimes(data.data.timings);
        setHijri(data.data.date.hijri);
        try {
          const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=fr`);
          const geoData = await geoRes.json();
          setLocation({
            city: geoData.address?.city || geoData.address?.town || geoData.address?.village || 'Ville inconnue',
            country: geoData.address?.country || '',
            latitude: lat,
            longitude: lon,
          });
        } catch {
          setLocation({ city: `${lat.toFixed(2)}, ${lon.toFixed(2)}`, country: '', latitude: lat, longitude: lon });
        }
      } else {
        setError('Impossible de récupérer les horaires.');
      }
    } catch {
      setError('Erreur de connexion. Vérifiez votre réseau.');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchByCity = useCallback(async (city: string) => {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1&accept-language=fr`);
      const geoData = await geoRes.json();
      if (!geoData.length) {
        setError('Ville introuvable. Essayez avec un autre nom.');
        setLoading(false);
        return;
      }
      const lat = parseFloat(geoData[0].lat);
      const lon = parseFloat(geoData[0].lon);
      const cityName = geoData[0].display_name?.split(',')[0] || city;

      const date = formatDate(new Date());
      const res = await fetch(`${API_BASE}/timings/${date}?latitude=${lat}&longitude=${lon}&method=12`);
      const data = await res.json();
      if (data.code === 200) {
        setTimes(data.data.timings);
        setHijri(data.data.date.hijri);
        setLocation({ city: cityName, country: '', latitude: lat, longitude: lon });
      } else {
        setError('Impossible de récupérer les horaires pour cette ville.');
      }
    } catch {
      setError('Erreur de connexion. Vérifiez votre réseau.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-detect location on mount
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
        () => {
          fetchByCoords(PARIS_LAT, PARIS_LON);
          setManualMode(true);
        },
        { timeout: 8000 }
      );
    } else {
      fetchByCoords(PARIS_LAT, PARIS_LON);
      setManualMode(true);
    }
  }, [fetchByCoords]);

  const handleCitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cityInput.trim()) {
      fetchByCity(cityInput.trim());
      setManualMode(true);
      setCityInput('');
    }
  };

  const isLocationSaved = location
    ? savedLocations.some(s => s.city === location.city)
    : false;

  const handleSaveLocation = () => {
    if (!location || isLocationSaved) return;
    const newSaved: SavedLocation = {
      city: location.city,
      latitude: location.latitude,
      longitude: location.longitude,
    };
    const updated = [...savedLocations, newSaved].slice(-MAX_SAVED);
    setSavedLocations(updated);
    persistSavedLocations(updated);
  };

  const handleRemoveLocation = (city: string) => {
    const updated = savedLocations.filter(s => s.city !== city);
    setSavedLocations(updated);
    persistSavedLocations(updated);
  };

  const handleSelectSaved = (saved: SavedLocation) => {
    fetchByCoords(saved.latitude, saved.longitude);
    setManualMode(true);
  };

  const nextPrayer = times ? getNextPrayer(times) : null;

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              مواقيت الصلاة
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Horaires de prière.
            </h1>
            {hijri && (
              <p className="font-amiri" style={{ fontSize: '1.125rem', color: 'var(--color-gold)', opacity: 0.7 }}>
                {hijri.day} {hijri.month.ar} {hijri.year}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Location bar */}
        <ScrollReveal delay={80}>
          <div style={{ marginBottom: '2rem' }}>
            <form onSubmit={handleCitySubmit} style={{ display: 'flex', gap: '8px', marginBottom: '0.75rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <MapPin style={{
                  position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
                  width: '14px', height: '14px', color: 'var(--color-muted)', pointerEvents: 'none',
                }} />
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  placeholder={location ? location.city : 'Entrez une ville...'}
                  style={{
                    width: '100%', padding: '12px 12px 12px 36px', fontSize: '0.875rem',
                    borderRadius: '8px', border: '1px solid var(--color-border)',
                    background: 'var(--color-surface-elevated)', color: 'var(--color-foreground)',
                    outline: 'none',
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '12px 20px', fontSize: '0.8125rem', flexShrink: 0 }}
              >
                Rechercher
              </button>
            </form>

            {/* Current location + save button */}
            {location && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin style={{ width: '12px', height: '12px', color: 'var(--color-gold)' }} />
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
                    {location.city}{location.country ? `, ${location.country}` : ''}{!manualMode && ' (GPS)'}
                  </span>
                </div>
                {!isLocationSaved && savedLocations.length < MAX_SAVED && (
                  <button
                    onClick={handleSaveLocation}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      fontSize: '0.75rem', color: 'var(--color-gold)', background: 'none',
                      border: 'none', cursor: 'pointer', padding: '4px 0',
                    }}
                  >
                    <Plus style={{ width: '12px', height: '12px' }} />
                    Enregistrer
                  </button>
                )}
                {isLocationSaved && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--color-gold)' }}>
                    <Star style={{ width: '11px', height: '11px', fill: 'var(--color-gold)' }} />
                    Enregistrée
                  </span>
                )}
              </div>
            )}

            {/* Saved locations chips */}
            {savedLocations.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {savedLocations.map((saved) => {
                  const isActive = location?.city === saved.city;
                  return (
                    <div
                      key={saved.city}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '6px 10px', borderRadius: '8px', fontSize: '0.8125rem',
                        border: `1px solid ${isActive ? 'var(--color-gold)' : 'var(--color-border)'}`,
                        background: isActive ? 'rgba(201, 168, 76, 0.1)' : 'var(--color-surface-elevated)',
                        color: isActive ? 'var(--color-gold)' : 'var(--color-foreground)',
                      }}
                    >
                      <button
                        onClick={() => handleSelectSaved(saved)}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '4px',
                          background: 'none', border: 'none', cursor: 'pointer',
                          color: 'inherit', fontSize: 'inherit', padding: 0,
                        }}
                      >
                        <MapPin style={{ width: '11px', height: '11px', flexShrink: 0 }} />
                        {saved.city}
                      </button>
                      <button
                        onClick={() => handleRemoveLocation(saved.city)}
                        aria-label={`Supprimer ${saved.city}`}
                        style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          width: '16px', height: '16px', borderRadius: '50%',
                          background: 'none', border: 'none', cursor: 'pointer',
                          color: 'var(--color-muted)', padding: 0,
                        }}
                      >
                        <X style={{ width: '10px', height: '10px' }} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Prayer times */}
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="surah-card" style={{ padding: '1.25rem', opacity: 0.4 }}>
                <div style={{ height: '20px', width: '40%', background: 'var(--color-surface-elevated)', borderRadius: '6px' }} />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="surah-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>{error}</p>
            <button onClick={() => window.location.reload()} className="btn-secondary" style={{ marginTop: '1rem' }}>
              <RefreshCw style={{ width: '14px', height: '14px', marginRight: '6px', display: 'inline' }} />
              Réessayer
            </button>
          </div>
        ) : times && (
          <ScrollReveal delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {PRAYERS.map((prayer) => {
                const time = times[prayer.key as keyof PrayerTimes];
                const isNext = prayer.key === nextPrayer;
                const Icon = prayer.icon;
                const isSunrise = prayer.key === 'Sunrise';

                return (
                  <div
                    key={prayer.key}
                    className="surah-card"
                    style={{
                      padding: '1rem 1.25rem',
                      display: 'flex', alignItems: 'center', gap: '14px',
                      borderColor: isNext ? 'var(--color-gold)' : undefined,
                      boxShadow: isNext ? '0 0 0 1px var(--color-gold), 0 4px 20px rgba(201, 168, 76, 0.15)' : undefined,
                      opacity: isSunrise ? 0.5 : 1,
                    }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                      background: isNext ? 'rgba(201, 168, 76, 0.15)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isNext ? 'rgba(201, 168, 76, 0.3)' : 'var(--color-border)'}`,
                    }}>
                      <Icon style={{ width: '18px', height: '18px', color: isNext ? 'var(--color-gold)' : 'var(--color-muted)' }} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="font-outfit font-semibold" style={{ fontSize: '1rem', color: isNext ? 'var(--color-gold)' : 'var(--color-foreground)' }}>
                          {prayer.name}
                        </span>
                        <span className="font-amiri" style={{ fontSize: '0.875rem', color: 'var(--color-muted)', opacity: 0.5 }}>
                          {prayer.nameAr}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>{prayer.desc}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {isNext && (
                        <span style={{
                          padding: '2px 8px', borderRadius: '4px', fontSize: '0.625rem', fontWeight: 600,
                          background: 'rgba(201, 168, 76, 0.15)', color: 'var(--color-gold)',
                          textTransform: 'uppercase', letterSpacing: '0.05em',
                        }}>
                          Prochaine
                        </span>
                      )}
                      <span className="font-outfit font-bold" style={{
                        fontSize: '1.25rem',
                        color: isNext ? 'var(--color-gold)' : 'var(--color-foreground)',
                      }}>
                        {time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        )}

        {/* Method note */}
        <p style={{ fontSize: '0.6875rem', color: 'var(--color-muted)', opacity: 0.5, textAlign: 'center', marginTop: '2rem' }}>
          Méthode de calcul : Union des Organisations Islamiques de France (UOIF)
        </p>
      </div>
    </div>
  );
}
