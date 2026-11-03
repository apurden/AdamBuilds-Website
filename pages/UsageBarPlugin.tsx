import React, { useState } from 'react';
import { Check, Copy, Download, FolderInput, MessageSquareText, Gauge, ShieldCheck, Trash2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const ZIP_URL = '/downloads/usage-bar-plugin.zip';

const INSTALL_PROMPT =
  'Install the plugin in my Documents folder called usage-bar-plugin for every chat I start.';

const UNINSTALL_PROMPT = 'Uninstall the usage-bar plugin.';

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

const UsageBarPlugin: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Your Usage Bar Plugin"
        description="Download the free usage bar plugin for Claude and see how to install it in one sentence."
      />

      <section className="max-w-3xl mx-auto pt-20 pb-10 text-center">
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
              usage bar
            </span>{' '}
            plugin
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Download it, put the folder somewhere it can stay, then ask Claude to
            install it. It takes about a minute.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <a
            href={ZIP_URL}
            download
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-cta hover:bg-brand-ctaHover text-brand-dark font-bold rounded-full transition-colors"
          >
            <Download size={20} /> Download the plugin (ZIP, 5 KB)
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Unzips to one folder called usage-bar-plugin.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-3xl mx-auto pb-12">
        <div className="grid gap-4">
          <Step n="01" icon={<FolderInput size={22} />} title="Put the folder where it can stay" delay={100}>
            <p className="text-slate-400 leading-relaxed">
              Unzip the download, then move the{' '}
              <strong className="text-slate-200">usage-bar-plugin</strong> folder
              into your Documents folder. Claude reads the plugin from that
              folder, so if you delete it later the bar goes away.
            </p>
          </Step>

          <Step n="02" icon={<MessageSquareText size={22} />} title="Ask Claude to install it" delay={200}>
            <p className="text-slate-400 leading-relaxed">
              In the Claude desktop app, open the Code tab, start a new chat and
              paste this. If you put the folder somewhere else, say where.
            </p>
            <CopyBox label="Paste this into a new chat" text={INSTALL_PROMPT} />
          </Step>

          <Step n="03" icon={<Gauge size={22} />} title="Look above the chat box" delay={300}>
            <p className="text-slate-400 leading-relaxed">
              The bar appears right away and shows in every new chat you start.
              Filled squares are green when there is plenty of room, then turn
              yellow, orange and red as they fill.
            </p>
          </Step>
        </div>

        <FadeIn delay={100}>
          <div className="glass-card rounded-3xl p-8 mt-10">
            <h2 className="text-xl font-extrabold text-white mb-4">What the three meters mean</h2>
            <ul className="space-y-3 text-slate-300 leading-relaxed">
              <li>
                <strong className="text-white">Context</strong> is how full this
                one chat is. It is the same number as <span className="font-mono text-brand-cta">/context</span>.
              </li>
              <li>
                <strong className="text-white">5h</strong> is how much of your
                five-hour limit you have used, across all your chats.
              </li>
              <li>
                <strong className="text-white">Week</strong> is how much of your
                weekly limit you have used, across all your chats.
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              The bar updates after each reply, so it can lag a point behind{' '}
              <span className="font-mono">/usage</span>. For the exact number,
              use <span className="font-mono">/usage</span>.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="glass-card rounded-3xl p-8 mt-6">
            <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-3">
              <ShieldCheck size={22} className="text-brand-accent" /> Is it safe?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              A plugin is code that runs inside your chat, so look before you
              install anything. This one only reads the usage numbers Claude
              already has and draws one line above the chat box. It makes no
              network calls and touches no files. The whole thing is one short
              file you can read, and Claude reads it before installing.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="glass-card rounded-3xl p-8 mt-6">
            <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-3">
              <Trash2 size={22} className="text-brand-accent" /> Want it gone?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Tell Claude to remove it. Your other settings stay as they are.
            </p>
            <CopyBox label="Paste this to remove it" text={UNINSTALL_PROMPT} />
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <p className="text-center text-sm text-slate-500 mt-8 leading-relaxed">
            I tested this on one Mac with a Pro plan and the Claude desktop app.
            If the bar does not show up on yours, tell me.
          </p>
        </FadeIn>
      </section>
    </div>
  );
};

export default UsageBarPlugin;
