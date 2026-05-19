const ROUTE_DATA: Record<string, null> = {
  '0': null,
  '0-0': null,
  '0-1': null,
  '0-2': null,
  '0-3': null,
  '0-4': null,
  '0-5': null,
  '0-6': null,
  '0-7': null,
};

export default async () => {
  return new Response(JSON.stringify(ROUTE_DATA), {
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
