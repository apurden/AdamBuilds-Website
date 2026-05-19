export default async () => {
  return new Response('{}', {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};

export const config = {
  path: '/static-loader-data-manifest-:hash.json',
};
