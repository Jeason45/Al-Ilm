'use client';

import { useState, useRef, useCallback } from 'react';

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentVerseKey, setCurrentVerseKey] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const playlistRef = useRef<{ keys: string[]; urls: string[]; index: number } | null>(null);

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    return audioRef.current;
  }, []);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      audio.onended = null;
    }
    setCurrentVerseKey(null);
    setIsPlaying(false);
    setIsPlayingAll(false);
    playlistRef.current = null;
  }, []);

  const playVerse = useCallback((verseKey: string, url: string) => {
    const audio = getAudio();

    // If same verse is playing, toggle pause/play
    if (currentVerseKey === verseKey && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    // Stop any "play all" mode
    setIsPlayingAll(false);
    playlistRef.current = null;

    audio.onended = () => {
      setCurrentVerseKey(null);
      setIsPlaying(false);
    };

    audio.src = url;
    audio.play();
    setCurrentVerseKey(verseKey);
    setIsPlaying(true);
  }, [currentVerseKey, getAudio]);

  const playAll = useCallback((verseKeys: string[], audioUrls: string[]) => {
    if (verseKeys.length === 0) return;

    const audio = getAudio();
    playlistRef.current = { keys: verseKeys, urls: audioUrls, index: 0 };
    setIsPlayingAll(true);

    const playNext = () => {
      const pl = playlistRef.current;
      if (!pl || pl.index >= pl.keys.length) {
        stop();
        return;
      }

      const key = pl.keys[pl.index];
      const url = pl.urls[pl.index];

      audio.onended = () => {
        if (playlistRef.current) {
          playlistRef.current.index++;
          playNext();
        }
      };

      audio.src = url;
      audio.play();
      setCurrentVerseKey(key);
      setIsPlaying(true);
    };

    playNext();
  }, [getAudio, stop]);

  return { currentVerseKey, isPlaying, isPlayingAll, playVerse, playAll, stop };
}
