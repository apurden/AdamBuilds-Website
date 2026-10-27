import React, { useState } from 'react';
import { Check, Copy, Download, FolderInput, MessageSquareText, Clapperboard } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const ZIP_URL = '/downloads/motion-graphics-skill.zip';

const FIRST_PROMPT =
  'Make an 8-second animated title intro that says "My first animation" with the motion-graphics skill, and render it as an MP4.';

const INSTALL_BY_ASKING =
  'Unzip motion-graphics-skill.zip from my Downloads folder and put the motion-graphics folder inside .claude/skills in this project folder. Create .claude/skills if it does not exist.';

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

const MotionSkill: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 px-6 pb-24">
      <SEO
        title="Your Motion Graphics Skill"
        description="Download the free motion graphics skill for Claude Code and see how to add it to a project folder."
      />

      <section className="max-w-3xl mx-auto pt-20 pb-10 text-center">
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 pb-2">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cta text-gradient-animate">
              motion graphics
            </span>{' '}
            skill
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Download it, add it to a project folder, then ask Claude Code for an
            animation.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <a
            href={ZIP_URL}
            download
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-cta hover:bg-brand-ctaHover text-brand-dark font-bold rounded-full transition-colors"
          >
            <Download size={20} /> Download the skill (ZIP, about 1.9 MB)
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Unzips to one folder called motion-graphics.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-3xl mx-auto pb-12">
        <div className="grid gap-4">
          <FadeIn delay={100}>
            <div className="glass-premium rounded-2xl p-6 flex items-start gap-5">
              <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0">
                <FolderInput size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold mb-1">
                  <span className="text-slate-500 mr-2">01</span>
                  Put the skill in your project folder
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Make a new, empty folder for your animations. Inside it, make a
                  folder called <strong className="text-slate-200">.claude</strong>,
                  and inside that one called{' '}
                  <strong className="text-slate-200">skills</strong>. Drop the
                  unzipped <strong className="text-slate-200">motion-graphics</strong>{' '}
                  folder into <strong className="text-slate-200">skills</strong>.
                  On a Mac, folders that start with a dot are hidden in Finder;
                  press Cmd + Shift + . to show them.
                </p>
                <p className="text-slate-400 leading-relaxed mt-3">
                  Easier: open Claude Code in your new folder and ask it to do
                  the move for you.
                </p>
                <CopyBox label="Ask Claude to install it" text={INSTALL_BY_ASKING} />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="glass-premium rounded-2xl p-6 flex items-start gap-5">
              <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0">
                <MessageSquareText size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold mb-1">
                  <span className="text-slate-500 mr-2">02</span>
                  Ask Claude in plain English
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Open Claude Code in that folder (start a fresh session so it
                  sees the skill) and describe the animation you want. Claude
                  will ask for the length and size, and check that Node.js and
                  ffmpeg are installed.
                </p>
                <CopyBox label="A good first prompt" text={FIRST_PROMPT} />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="glass-premium rounded-2xl p-6 flex items-start gap-5">
              <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0">
                <Clapperboard size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold mb-1">
                  <span className="text-slate-500 mr-2">03</span>
                  Claude builds and renders the video
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Claude writes the animation, checks frames before the full
                  render, then saves an MP4 in a renders folder and tells you
                  where it is. Ask for changes the same way: "make the title
                  bigger", "add sound effects".
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={350}>
          <p className="text-center text-sm text-slate-500 mt-8 leading-relaxed">
            You need Claude Code on a paid plan (Pro is enough). The sound
            effects are free to use in your videos; the licence details are in
            the sounds folder.
          </p>
        </FadeIn>
      </section>
    </div>
  );
};

export default MotionSkill;
