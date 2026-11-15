import React, { useState } from 'react';
import { Check, Copy, Download, MessageSquareText, Hammer, Film, ShieldCheck, Trash2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const ZIP_URL = '/downloads/claude-workshop-pack.zip';
// Fill in the real size once the pack is built.
const ZIP_SIZE = '48 KB';

const INSTALL_PROMPT =
  'Install the Claude Workshop pack from the claude-workshop folder in my Downloads: the workshop, the usage bar and the badges.';

const FIRST_PROMPT =
  'Make a time-lapse of this chat with the workshop.';

const UNINSTALL_PROMPT = 'Remove the Claude Workshop pack: the workshop, the usage bar and the badges.';

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

const WorkshopDownload: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Your Claude Workshop Pack"
        description="Download the free Claude Workshop pack and see how to install it, read the workshop and make your first time-lapse."
      />

      <section className="max-w-3xl mx-auto pt-20 pb-10 text-center">
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
              Claude Workshop
            </span>{' '}
            pack
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Download it, ask Claude to install it, then use Claude like normal.
            Installing takes a few minutes the first time.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <a
            href={ZIP_URL}
            download
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-cta hover:bg-brand-ctaHover text-brand-dark font-bold rounded-full transition-colors"
          >
            <Download size={20} /> Download the pack{ZIP_SIZE ? ` (ZIP, ${ZIP_SIZE})` : ' (ZIP)'}
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Unzips to one folder called claude-workshop.
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

          <Step n="02" icon={<Hammer size={22} />} title="Use Claude like normal" delay={200}>
            <p className="text-slate-400 leading-relaxed">
              Start or continue a chat in the Code tab. The workshop appears along
              the bottom of your screen and the worker starts moving with Claude.
              It fades away after five quiet minutes and comes back on your next
              prompt. The usage bar and badges sit right above your chat box.
            </p>
          </Step>

          <Step n="03" icon={<Film size={22} />} title="Make your first time-lapse" delay={300}>
            <p className="text-slate-400 leading-relaxed">
              Click the little wrench in your menu bar (or system tray), choose
              Make a time-lapse and pick a chat. About a minute later you get two
              25-second videos, one wide and one tall for Shorts. Or just ask Claude.
            </p>
            <CopyBox label="Or paste this into a chat" text={FIRST_PROMPT} />
          </Step>
        </div>

        <FadeIn delay={100}>
          <div className="glass-card rounded-3xl p-8 mt-10">
            <h2 className="text-xl font-extrabold text-white mb-4">How to read the workshop</h2>
            <ul className="space-y-3 text-slate-300 leading-relaxed">
              <li><strong className="text-white">At the desk with the books:</strong> reading files.</li>
              <li><strong className="text-white">At the desk under the lamp:</strong> writing or editing.</li>
              <li><strong className="text-white">On the rug, with a thought bubble:</strong> thinking.</li>
              <li><strong className="text-white">At the telescope:</strong> searching the web.</li>
              <li><strong className="text-white">At the machine:</strong> running a command. Helpers with signs are background jobs.</li>
              <li><strong className="text-white">By the stove, maybe asleep:</strong> done and waiting on you.</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="glass-card rounded-3xl p-8 mt-6">
            <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-3">
              <ShieldCheck size={22} className="text-brand-accent" /> Is it safe?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Everything runs on your own computer. The workshop reads only the
              names of Claude's actions (like reading a file or running a command)
              and the short label on each background job. It never reads your
              conversation, never sends anything anywhere, and changes none of your
              Claude settings. Claude reads every file in the pack before it
              installs anything.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="glass-card rounded-3xl p-8 mt-6">
            <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-3">
              <Trash2 size={22} className="text-brand-accent" /> Want it gone?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Tell Claude to remove it. Your chats and settings stay exactly as they were.
            </p>
            <CopyBox label="Paste this to remove it" text={UNINSTALL_PROMPT} />
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default WorkshopDownload;
