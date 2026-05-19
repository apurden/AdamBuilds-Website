const ROUTE_DATA: Record<string, string | null> = {
  '0': null,
};

export default async (request: Request) => {
  const url = new URL(request.url);
  const filePath = url.pathname
    .replace(/^\/static-loader-data\//, '')
    .replace(/\.[^.]+\.json$/, '');

  const childRouteId = routeIdFor(filePath);
  const body = childRouteId
    ? { ...ROUTE_DATA, [childRouteId]: null }
    : ROUTE_DATA;

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};

export const config = {
  path: '/static-loader-data/*',
};

function routeIdFor(filePath: string): string | null {
  if (filePath === '' || filePath === '.' || filePath === 'index') return '0-0';
  if (filePath === 'tools') return '0-1';
  if (filePath === 'news') return '0-2';
  if (filePath.startsWith('news/')) return '0-3';
  if (filePath === 'glossary') return '0-4';
  if (filePath === 'about') return '0-5';
  if (filePath === 'coach') return '0-6';
  if (filePath === 'coach/prompt') return '0-7';
  return null;
}
