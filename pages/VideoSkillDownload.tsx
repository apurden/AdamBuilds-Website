import React, { useState } from 'react';
import { Check, Copy, Download, MessageSquareText, Clapperboard, RefreshCw, ShieldCheck, Trash2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const ZIP_URL = '/downloads/idea-to-video-skill.zip';

const INSTALL_PROMPT =
  'Install the skill in my Downloads folder called idea-to-video as a personal skill, so I can use it in any project.';

const FIRST_PROMPT =
  'Use the idea-to-video skill to make a YouTube video about [your idea in one sentence].';

const UNINSTALL_PROMPT = 'Remove the idea-to-video skill.';

const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
};

const CopyBox: React.FC<{ label: string; text: string }> = ({ label, text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="mt-4 rounded-2xl border border-white/10 overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white/[0.035] border-b border-white/10">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all shrink-0 ${
            copied
              ? 'bg-brand-accent/20 text-brand-accent'
              : 'bg-brand-cta text-brand-dark hover:bg-brand-ctaHover'
          }`}
        >
          {copied ? (
            <>
              <Check size={15} /> Copied
            </>
          ) : (
            <>
              <Copy size={15} /> Copy
            </>
          )}
        </button>
      </div>
      <p className="p-4 text-sm text-slate-300 leading-relaxed bg-black/30 break-words">
        {text}
      </p>
    </div>
  );
};

const Step: React.FC<{
  n: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
}> = ({ n, icon, title, children, delay }) => (
  <FadeIn delay={delay}>
    <div className="glass-premium rounded-2xl p-6 flex items-start gap-5">
      <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-white font-bold mb-1">
          <span className="text-slate-500 mr-2">{n}</span>
          {title}
        </h3>
        {children}
      </div>
    </div>
  </FadeIn>
);

const VideoSkillDownload: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Your Idea to Video Skill"
        description="Download the free idea to video skill for Claude and see how to install it and make your first video."
      />

      <section className="max-w-3xl mx-auto pt-20 pb-10 text-center">
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
              idea to video
            </span>{' '}
            skill
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Download it, ask Claude to install it, then type your first idea.
            Installing takes about a minute.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <a
            href={ZIP_URL}
            download
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-cta hover:bg-brand-ctaHover text-brand-dark font-bold rounded-full transition-colors"
          >
            <Download size={20} /> Download the skill (ZIP, 1.8 MB)
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Unzips to one folder called idea-to-video.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-3xl mx-auto pb-12">
        <div className="grid gap-4">
          <Step n="01" icon={<MessageSquareText size={22} />} title="Ask Claude to install it" delay={100}>
            <p className="text-slate-400 leading-relaxed">
              Unzip the download. In the Claude desktop app, open the Code tab,
              start a new chat and paste this. If the folder is somewhere else,
              say where.
            </p>
            <CopyBox label="Paste this into a new chat" text={INSTALL_PROMPT} />
          </Step>

          <Step n="02" icon={<Clapperboard size={22} />} title="Type your first idea" delay={200}>
            <p className="text-slate-400 leading-relaxed">
              Open the folder where you keep your videos, start a new chat and
              tell Claude your idea. The first time, it asks a few quick
              questions about your setup and your style: what you make, which
              voice to use, your colors and your channel.
            </p>
            <CopyBox label="Paste this and fill in your idea" text={FIRST_PROMPT} />
          </Step>

          <Step n="03" icon={<RefreshCw size={22} />} title="Correct it once, and it remembers" delay={300}>
            <p className="text-slate-400 leading-relaxed">
              When you tell it to change something, like a word you never say or
              a color you prefer, the skill updates itself and tells you what it
              saved. It keeps a backup of the old version and a short changelog.
            </p>
          </Step>
        </div>

        <FadeIn delay={100}>
          <div className="glass-card rounded-3xl p-8 mt-10">
            <h2 className="text-xl font-extrabold text-white mb-4">What it makes</h2>
            <ul className="space-y-3 text-slate-300 leading-relaxed">
              <li><strong className="text-white">The video:</strong> script, voice, full-screen animations, sound effects and captions.</li>
              <li><strong className="text-white">The package:</strong> three title options, a description with chapters, tags and a pinned comment.</li>
              <li><strong className="text-white">Ten thumbnails</strong> made in ChatGPT Images, with its pick and a backup.</li>
              <li><strong className="text-white">A private upload</strong> to YouTube Studio with everything filled in, if you let it use your browser. You review and publish.</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="glass-card rounded-3xl p-8 mt-6">
            <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-3">
              <ShieldCheck size={22} className="text-brand-accent" /> Is it safe?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              A skill is a folder of written instructions plus a few small helper
              scripts, and Claude reads them before using them. It never
              publishes anything for you, it uploads only as private, and it
              never saves passwords or keys into its files. It checks every frame
              for private details like your full name, email or address before
              anything is shared.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="glass-card rounded-3xl p-8 mt-6">
            <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-3">
              <Trash2 size={22} className="text-brand-accent" /> Want it gone?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Tell Claude to remove it. Your videos stay where they are.
            </p>
            <CopyBox label="Paste this to remove it" text={UNINSTALL_PROMPT} />
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default VideoSkillDownload;
