import type { MetadataRoute } from 'next';
import { getAllSurahsMeta } from '@/data/index';
import { SITE_URL, ANNEXES_LINKS } from '@/lib/constants';
import { HADITH_COLLECTIONS } from '@/lib/hadith-api';
import { CATEGORIES } from '@/data/invocations/categories';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const surahs = getAllSurahsMeta();

  const apprendrePages = surahs.map((s) => ({
    url: `${SITE_URL}/apprendre/${s.numero}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const coranPages = surahs.map((s) => ({
    url: `${SITE_URL}/coran/${s.numero}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const annexePages = ANNEXES_LINKS.map((link) => ({
    url: `${SITE_URL}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const hadithPages = HADITH_COLLECTIONS.map((c) => ({
    url: `${SITE_URL}/hadiths/${c.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const invocationPages = CATEGORIES.map((c) => ({
    url: `${SITE_URL}/invocations/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/apprendre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/coran`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/annexes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/hadiths`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/horaires`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/recherche`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...apprendrePages,
    ...coranPages,
    ...annexePages,
    ...hadithPages,
    {
      url: `${SITE_URL}/invocations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...invocationPages,
  ];
}
