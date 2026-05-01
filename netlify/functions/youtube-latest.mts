const CHANNEL_ID = 'UCcoieJ1GNmyW_dbDSs4syrw';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

interface VideoEntry {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailFallback: string;
  published: string;
  url: string;
}

export default async () => {
  try {
    const res = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'AdamBuildsSite/1.0 (+https://adambuilds.io)' },
    });
    if (!res.ok) {
      return jsonResponse({ error: `feed_status_${res.status}` }, 502);
    }
    const xml = await res.text();
    const videos = parseFeed(xml).slice(0, 3);
    if (!videos.length) {
      return jsonResponse({ error: 'no_entries' }, 502);
    }
    return jsonResponse({ videos }, 200, {
      'Cache-Control': 'public, max-age=600',
      'Netlify-CDN-Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    });
  } catch (e) {
    return jsonResponse({ error: 'fetch_failed' }, 502);
  }
};

export const config = {
  path: '/api/youtube-latest',
};

function jsonResponse(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...extraHeaders,
    },
  });
}

function parseFeed(xml: string): VideoEntry[] {
  const entries: VideoEntry[] = [];
  const entryRe = /<entry>([\s\S]*?)<\/entry>/g;
  let match: RegExpExecArray | null;
  while ((match = entryRe.exec(xml))) {
    const block = match[1];
    const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = block.match(/<title>([^<]+)<\/title>/)?.[1];
    const published = block.match(/<published>([^<]+)<\/published>/)?.[1];
    if (!id || !title) continue;
    entries.push({
      id,
      title: decodeEntities(title.trim()),
      thumbnail: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      thumbnailFallback: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      published: published || '',
      url: `https://www.youtube.com/watch?v=${id}`,
    });
  }
  return entries;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}
