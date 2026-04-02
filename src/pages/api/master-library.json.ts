/**
 * /api/master-library.json
 *
 * Static JSON endpoint exposing all master library entries
 * (non-sensitive, community-accessible by default).
 *
 * Usage:
 *   GET /web/api/master-library.json
 *
 * Returns the full master library collection with metadata.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { canAudienceAccess } from '@lib/data/libraryAccess';

export const GET: APIRoute = async () => {
  const all = await getCollection('master-library');

  // Default to community-accessible view for the public API
  const visible = all.filter((entry) => canAudienceAccess(entry, 'community'));

  const data = visible.map((entry) => ({
    id: entry.id,
    title: entry.data.title,
    description: entry.data.description,
    category: entry.data.category,
    tags: entry.data.tags,
    dataThemes: entry.data.dataThemes,
    pedagogicalTags: entry.data.pedagogicalTags,
    difficulty: entry.data.difficulty ?? null,
    url: entry.data.url ?? null,
    fileUrl: entry.data.fileUrl ?? null,
    featured: entry.data.featured,
    publishedDate: entry.data.publishedDate?.toISOString() ?? null,
    language: entry.data.language ?? null,
  }));

  const payload = {
    meta: {
      version: '1',
      total: data.length,
      generatedAt: new Date().toISOString(),
      description:
        'Curated master library resources from the Community Data Libraries project (community-accessible subset).',
      license: 'CC BY 4.0',
      source: 'https://community-data-libraries.github.io/web/api/master-library.json',
    },
    data,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
