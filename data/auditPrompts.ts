// The prompts from the video "Is vidIQ Worth It? I Let It Audit My Channel".
// Prompts 1, 2 and 4 are word for word what was typed in the recording.
// Prompts 3 and 5 had the video's own titles and search phrase in them; those
// parts are now [brackets] to fill in.

export type AuditPrompt = {
  id: string;
  title: string;
  when: string;
  text: string;
  note?: string;
};

export const AUDIT_PROMPTS: AuditPrompt[] = [
  {
    id: 'audit',
    title: 'Audit my channel',
    when: 'Start here. Run it in a new chat.',
    text: "Use vidIQ to audit my YouTube channel for the last 90 days. Tell me what's working, where I'm losing viewers, and what I should stop doing. Use engaged views for any comparison. For every point, label it FROM MY DATA or GUESS.",
    note: 'The FROM MY DATA or GUESS labels are the most useful part. They show you which advice comes from your numbers and which is Claude filling a gap.',
  },
  {
    id: 'pick',
    title: 'Pick my next video',
    when: 'Send it in the same chat, right after the audit.',
    text: 'Use vidIQ to find videos breaking out in my niche this month and searches that are rising for my channel. Then pick the one next video I should make, show me the numbers behind the pick, and tie it back to what you found in my audit.',
  },
  {
    id: 'titles',
    title: 'Score my titles (honestly)',
    when: 'Same chat. Swap in your own title ideas.',
    text: 'Use vidIQ to score these four titles for that video: "[title idea 1]", "[title idea 2]", "[title idea 3]" and "[a lazy title]". Then tell me honestly whether the scores are far enough apart to choose between them.',
    note: 'Add one lazy title on purpose. If it scores far lower, the score is catching bad titles. If your good ones all land within a few points, let YouTube\'s own A/B test pick between them.',
  },
  {
    id: 'credits',
    title: 'Check my credits',
    when: 'Any time. Checking your balance is free.',
    text: 'How many vidIQ credits do I have left, and how many did this conversation use?',
  },
  {
    id: 'search',
    title: 'Check a search before you make a video',
    when: 'Any time you have an idea.',
    text: 'Use vidIQ to check monthly searches and competition for "[the search phrase]".',
  },
];

export const NEW_CHANNEL_PROMPTS: AuditPrompt[] = [
  {
    id: 'new-breakouts',
    title: 'See what is working in your topic',
    when: 'Your channel has little or no data yet, so start with other channels.',
    text: 'Use vidIQ to find videos breaking out this month about [your topic], especially from channels with under 10,000 subscribers. Show me what their titles and topics have in common. For every point, label it FROM THE DATA or GUESS.',
  },
  {
    id: 'new-first-video',
    title: 'Pick your first video',
    when: 'Same chat.',
    text: 'Use vidIQ to find searches about [your topic] that have real monthly searches and low competition. Then pick the one video I should make first, and show me the numbers behind the pick.',
  },
  {
    id: 'new-titles',
    title: 'Score your titles',
    when: 'Same chat, once you have a few title ideas.',
    text: 'Use vidIQ to score these titles for that video: "[title idea 1]", "[title idea 2]" and "[title idea 3]". Then tell me honestly whether the scores are far enough apart to choose between them.',
  },
];
