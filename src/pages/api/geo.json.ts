/**
 * /api/geo.json
 *
 * Static GeoJSON endpoint exposing all map markers.
 *
 * Usage:
 *   GET /web/api/geo.json
 *
 * Returns a valid GeoJSON FeatureCollection.
 */
import type { APIRoute } from 'astro';
import { loadGeoMarkers } from '@lib/data/geo';

export const GET: APIRoute = () => {
  const collection = loadGeoMarkers();

  return new Response(JSON.stringify(collection, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/geo+json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
