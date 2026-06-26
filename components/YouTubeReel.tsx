import React, { useEffect, useState, useCallback } from 'react';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailFallback?: string;
  url: string;
}

const FALLBACK_VIDEOS: Video[] = [
  {
    id: '375KzT0kweE',
    title: 'I Pushed GPT-5.5 To Its Limits… This Game Got Wild',
    thumbnail: 'https://i.ytimg.com/vi/375KzT0kweE/maxresdefault.jpg',
    thumbnailFallback: 'https://i.ytimg.com/vi/375KzT0kweE/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=375KzT0kweE',
  },
  {
    id: '4GeiyrUazd8',
    title: "Claude's Hidden Features That Change Everything (Chat, Cowork & Code)",
    thumbnail: 'https://i.ytimg.com/vi/4GeiyrUazd8/maxresdefault.jpg',
    thumbnailFallback: 'https://i.ytimg.com/vi/4GeiyrUazd8/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=4GeiyrUazd8',
  },
  {
    id: 'Tyd24xC26ro',
    title: 'AdamBuilds Intro',
    thumbnail: 'https://i.ytimg.com/vi/Tyd24xC26ro/maxresdefault.jpg',
    thumbnailFallback: 'https://i.ytimg.com/vi/Tyd24xC26ro/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Tyd24xC26ro',
  },
];

const ROTATION_MS = 3000;

const positionClasses: Record<'center' | 'left' | 'right', string> = {
  center:
    'translate-x-0 scale-100 opacity-100 z-30 shadow-[0_25px_70px_-15px_rgba(168,85,247,0.5)]',
  left:
    '-translate-x-[50%] scale-[0.7] opacity-0 md:opacity-50 z-10 blur-[2px] saturate-50',
  right:
    'translate-x-[50%] scale-[0.7] opacity-0 md:opacity-50 z-10 blur-[2px] saturate-50',
};

const YouTubeReel: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(FALLBACK_VIDEOS);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const r = await fetch('/api/youtube-latest?format=longform');
        if (!r.ok) return;
        const ct = r.headers.get('content-type') || '';
        if (!ct.includes('application/json')) return;
        const text = await r.text();
        let data: any = null;
        try {
          data = JSON.parse(text);
        } catch {
          return;
        }
        if (cancelled || !data?.videos?.length) return;
        const fetched: Video[] = data.videos
          .filter((v: any) => !String(v.url || '').includes('/shorts/'))
          .slice(0, 3)
          .map((v: any) => ({
            id: v.id,
            title: v.title,
            thumbnail:
              v.thumbnail || `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
            thumbnailFallback:
              v.thumbnailFallback ||
              `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
            url: v.url || `https://www.youtube.com/watch?v=${v.id}`,
          }));
        if (fetched.length) {
          setVideos(fetched);
          setActive(0);
        }
      } catch {
        // swallow — fallback list stays in place
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (paused || playingId || videos.length < 2) return;
    const t = window.setInterval(
      () => setActive((a) => (a + 1) % videos.length),
      ROTATION_MS
    );
    return () => window.clearInterval(t);
  }, [paused, playingId, videos.length]);

  const handleClick = useCallback(
    (index: number) => {
      if (!videos.length) return;
      if (index === active) {
        setPlayingId(videos[index].id);
      } else {
        setPlayingId(null);
        setActive(index);
      }
    },
    [active, videos]
  );

  const positionFor = (i: number): 'center' | 'left' | 'right' => {
    if (videos.length === 1) return 'center';
    const offset = (i - active + videos.length) % videos.length;
    if (offset === 0) return 'center';
    if (videos.length === 3) return offset === 1 ? 'right' : 'left';
    return offset === 1 ? 'right' : 'left';
  };

  return (
    <div className="relative w-full">
      <div
        className="relative w-full aspect-video"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {videos.map((v, i) => {
          const pos = positionFor(i);
          const isCenter = pos === 'center';
          const isPlaying = isCenter && playingId === v.id;
          return (
            <div
              key={v.id}
              className={`absolute inset-0 rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 ease-out ${positionClasses[pos]} ${
                isCenter ? 'cursor-pointer' : 'cursor-pointer'
              }`}
              onClick={() => handleClick(i)}
              role="button"
              aria-label={
                isCenter ? `Play ${v.title}` : `Switch to ${v.title}`
              }
              tabIndex={isCenter ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClick(i);
                }
              }}
            >
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (
                        v.thumbnailFallback &&
                        !img.dataset.fallbackLoaded
                      ) {
                        img.src = v.thumbnailFallback;
                        img.dataset.fallbackLoaded = '1';
                      }
                    }}
                  />
                  {isCenter && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-cta/95 flex items-center justify-center shadow-2xl ring-4 ring-white/20 hover:scale-110 transition-transform">
                          <Play
                            size={40}
                            className="text-black fill-current ml-1"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <h3 className="text-white font-bold text-base md:text-xl line-clamp-2 drop-shadow-lg">
                          {v.title}
                        </h3>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {videos.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPlayingId(null);
                setActive(i);
              }}
              aria-label={`Go to video ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? 'w-10 bg-brand-cta'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default YouTubeReel;
