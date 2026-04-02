/**
 * /api/community.json
 *
 * Static JSON endpoint that exposes the community submissions data.
 * Because the site uses `output: 'static'`, this file is pre-rendered
 * at build time and served as a plain JSON file.
 *
 * Usage:
 *   GET /web/api/community.json
 *
 * Supports optional ?category=dataset|tool|guide|paper query filtering
 * at request time via the static JSON (i.e. client-side filtering should
 * be applied by consumers — this endpoint always returns the full dataset).
 */
import type { APIRoute } from 'astro';
import submissions from '@data/community-submissions.json';

export const GET: APIRoute = () => {
  const payload = {
    meta: {
      version: '1',
      total: submissions.length,
      generatedAt: new Date().toISOString(),
      description:
        'Community-contributed resources from the Community Data Libraries project.',
      license: 'CC BY 4.0',
      source: 'https://community-data-libraries.github.io/web/api/community.json',
    },
    data: submissions,
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
