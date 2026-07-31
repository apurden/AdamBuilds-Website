export interface RecordedSkillTemplate {
  id: string;
  number: string;
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  outcome: string;
  setup: string[];
  testPrompt: string;
  prompt: string;
}

export const RECORDED_SKILL_TEMPLATES: RecordedSkillTemplate[] = [
  {
    id: 'youtube-outlier-scout',
    number: '01',
    name: 'YouTube AI Outlier Scout',
    shortName: 'YouTube scout',
    eyebrow: 'The skill from the video',
    summary:
      'Find recent AI videos that are outperforming the size of the channel, then log the useful signals into a research sheet.',
    outcome:
      'A clean, verified research sheet with recent breakout videos, real thumbnails, channel links, and no invented data.',
    setup: [
      'Create a Google Sheet with the columns listed in the prompt.',
      'Replace [YOUR SHEET LINK] and [YOUR TOPICS] before sending.',
      'Connect Claude to your browser and sign in to YouTube and Google Sheets.',
      'Install vidIQ if you want its outlier multiplier included.',
    ],
    testPrompt:
      'Find and log five AI-tool YouTube outliers published in the last 14 days. Use no more than three searches, preserve my previous batch, and do not guess missing values.',
    prompt: `Create a reusable Claude Skill named "YouTube AI Outlier Scout."

The purpose of this skill is to find recent YouTube videos about [YOUR TOPICS — for example: Claude, ChatGPT, Gemini, AI automation, AI editing, or no-code AI] that are performing unusually well relative to the size of the channel, then log them in [YOUR SHEET LINK].

Write the skill so Claude knows when to use it, how to make the judgment, how to complete the spreadsheet safely, and how to recover from common browser problems.

The skill must include these requirements:

## When to use it
- Trigger when I ask to find outlier videos, scout YouTube for content ideas, research breakout videos, log a YouTube video, or add a video to my outlier sheet.
- If I provide a specific YouTube URL, skip discovery and evaluate/log that video directly.

## What counts as a candidate
- It must be relevant to [YOUR TOPICS].
- Prefer videos published within the last 14 days.
- Use [YOUR MAXIMUM CHANNEL SIZE — for example: 20,000 subscribers] as a hard channel-size cap unless I explicitly change it.
- Judge performance relative to channel size, not raw views alone.
- If vidIQ is available, record the outlier multiplier exactly as displayed and favor the strongest multipliers within the channel-size cap.
- Skip sponsored placements, unrelated topics, and large channels with ordinary performance.
- Never invent a subscriber count, view count, date, or outlier score. Leave unavailable values blank and flag them in the final summary.

## Research limits
- Use no more than three focused YouTube searches per run unless I approve more.
- Choose targeted search terms up front and stop when enough strong candidates are found.
- Collect the video link and channel link as soon as a candidate qualifies so the same page does not need to be revisited.

## Spreadsheet format
Use these columns in this exact order:
1. Days Old
2. Video Title
3. Subscribers
4. Views
5. vidIQ Outlier
6. Thumbnail
7. Channel Link

Use the real YouTube thumbnail when possible. If the spreadsheet supports formulas, build it from the video ID with:
=IMAGE("https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg")

## Preserve prior research
- Before writing, inspect the existing sheet.
- If I ask to continue or add more, append below existing rows and check titles so nothing is duplicated.
- For a fresh batch, preserve earlier research by duplicating the current tab before clearing data on the new copy.
- Never overwrite or delete past research unless I explicitly ask.

## Reliable execution
- Prefer structured browser and spreadsheet controls over pixel coordinates.
- Confirm the correct spreadsheet/tab has focus before writing a batch of values.
- If an external-image permission prompt interrupts the sheet, resolve it, clear only the affected row, and retry that row.
- Verify at least the final row and one sampled candidate against the live source before reporting success.
- If a required connection, login, browser capability, or vidIQ is missing, stop and tell me exactly what needs to be connected. Do not silently switch to a less reliable method.

## Completion report
At the end, tell me:
- how many rows were added;
- which searches were used;
- which values were left blank;
- any borderline candidates I should review;
- whether duplicates and column alignment were checked.

Keep the finished skill focused on this one workflow. Include a clear trigger description, numbered operating procedure, edge cases, and a short quality-control checklist. Do not include passwords, API keys, private cookies, machine-specific file paths, personal names, or private tool/session identifiers. Ask me for any bracketed value that I forgot to replace before finalizing the skill.`,
  },
  {
    id: 'weekly-research-brief',
    number: '02',
    name: 'Weekly Competitor & Customer Brief',
    shortName: 'Research brief',
    eyebrow: 'Know what changed',
    summary:
      'Turn the same sources you check every week into a concise, source-linked brief that separates real signals from noise.',
    outcome:
      'A repeatable weekly report covering meaningful launches, messaging shifts, customer pain points, opportunities, and recommended actions.',
    setup: [
      'List the competitors, communities, review sites, or customer sources you trust.',
      'Choose where the finished brief should live.',
      'Replace every bracketed placeholder before sending.',
    ],
    testPrompt:
      'Run this week’s research brief. Focus on changes since the last report, cite every factual claim, and give me the three actions that matter most.',
    prompt: `Create a reusable Claude Skill named "Weekly Competitor and Customer Brief."

This skill should research a fixed set of competitor and customer sources every week and turn what changed into a short, decision-ready brief.

Use these inputs:
- My company/product: [YOUR COMPANY OR PRODUCT]
- Competitors to monitor: [COMPETITOR LIST]
- Customer sources to monitor: [COMMUNITIES, REVIEW SITES, SUPPORT THEMES, SOCIAL ACCOUNTS, OR OTHER SOURCES]
- Topics that matter: [PRICING, POSITIONING, FEATURES, CUSTOMER PAIN, DISTRIBUTION, ETC.]
- Where to save the report: [DOCUMENT, FOLDER, NOTION PAGE, OR OTHER DESTINATION]
- Reporting day and lookback window: [FOR EXAMPLE: EVERY FRIDAY, PREVIOUS 7 DAYS]

Build the skill with these rules:

## Trigger
- Use it when I ask for the weekly research brief, competitor update, customer-signal report, market pulse, or "what changed this week?"

## Research procedure
1. Read the most recent prior brief first so the report emphasizes new information instead of repeating old news.
2. Check only the approved source list unless I ask to expand it.
3. Record the source URL, publication date, and observation date for every factual claim.
4. Separate direct evidence from inference. Label an inference clearly.
5. Prefer primary sources such as product pages, release notes, pricing pages, company announcements, and direct customer comments.
6. Ignore duplicated press coverage, engagement bait, and claims that cannot be verified.
7. Do not treat one customer comment as a trend. Note sample size and confidence.

## Final brief structure
1. Executive summary — the three changes that matter most
2. Competitor moves — launch, pricing, positioning, or distribution changes
3. Customer signals — repeated pains, requests, objections, or language
4. What is probably noise — items reviewed but not considered meaningful
5. Opportunities and risks — clearly marked as analysis
6. Recommended actions — owner, next step, and suggested timing
7. Sources — direct links grouped by finding

## Guardrails
- Never invent a source, quote, date, or metric.
- If a site is inaccessible or a source is ambiguous, say so.
- Do not expose private customer information. Summarize sensitive feedback and remove names, emails, account details, or identifying text.
- Do not publish, message anyone, or change source data unless I explicitly request it.
- Preserve past reports and use a consistent filename/date convention.

## Quality check
Before finishing, confirm that each important claim has a source, old news was not presented as new, direct evidence is separated from interpretation, and the recommended actions follow from the findings.

Create a focused skill with a clear trigger description, numbered steps, a reusable report template, and a short troubleshooting section. Ask me for any bracketed value I did not replace.`,
  },
  {
    id: 'meeting-follow-through',
    number: '03',
    name: 'Meeting Follow-Through',
    shortName: 'Meeting follow-up',
    eyebrow: 'Turn talk into action',
    summary:
      'Convert transcripts and notes into decisions, owner-assigned action items, and a follow-up message without losing nuance.',
    outcome:
      'Consistent meeting notes, an actionable task list, and a polished follow-up draft—ready for your review, never auto-sent.',
    setup: [
      'Choose your standard meeting-note format and task destination.',
      'Decide how owners and due dates should be handled when they are unclear.',
      'Add any names, acronyms, or recurring meeting types Claude should recognize.',
    ],
    testPrompt:
      'Process this meeting transcript. Separate decisions from ideas, assign only explicit owners, flag missing due dates, and draft the follow-up without sending it.',
    prompt: `Create a reusable Claude Skill named "Meeting Follow-Through."

This skill should turn a meeting transcript, recording notes, or rough notes into a reliable record of what was decided and what happens next.

Use these inputs:
- My preferred notes format: [FORMAT OR EXAMPLE]
- Task destination: [TASK APP, TABLE, OR DOCUMENT]
- Follow-up style: [SHORT AND DIRECT / WARM / FORMAL]
- Recurring people, teams, and acronyms: [OPTIONAL CONTEXT]

Build the skill with these rules:

## Trigger
- Use it when I ask to process a meeting, summarize a call, extract action items, update meeting notes, or draft the follow-up.

## Procedure
1. Read the full source before summarizing.
2. Identify the meeting title, date, attendees, and purpose only when supported by the source.
3. Separate confirmed decisions, open questions, ideas, risks, and action items.
4. For each action item, capture the task, owner, due date, dependency, and source context.
5. Assign an owner or due date only if it was stated or is unambiguous. Otherwise write "Owner needed" or "Date needed."
6. Preserve disagreements and material caveats; do not flatten them into false consensus.
7. Draft a concise follow-up message that confirms decisions and next steps.
8. Update [TASK DESTINATION] only after showing me the extracted actions and receiving approval.

## Output format
- One-sentence outcome
- Decisions made
- Action items in a table: Action | Owner | Due | Dependency | Confidence
- Open questions
- Risks or blockers
- Parking lot / ideas not yet approved
- Follow-up message draft

## Guardrails
- Never invent attendance, decisions, ownership, dates, or quotes.
- Do not send the follow-up or create tasks without explicit approval.
- Exclude passwords, access codes, payment information, health details, or other sensitive content unless it is essential; flag sensitive material instead of repeating it.
- If multiple speakers are unclear, avoid attributing statements by name.
- Keep the source file unchanged.

## Quality check
Compare every decision and action against the source. Confirm that tentative ideas are not labeled as decisions, every task has either a supported owner/date or a visible placeholder, and the follow-up contains no new commitments.

Create a focused skill with a precise trigger description, numbered workflow, reusable output template, approval checkpoint, and edge-case guidance. Ask me for any bracketed value I forgot to replace.`,
  },
  {
    id: 'inbox-triage',
    number: '04',
    name: 'Inbox Triage & Reply Drafts',
    shortName: 'Inbox triage',
    eyebrow: 'Protect your attention',
    summary:
      'Sort an inbox by urgency and needed action, then draft replies in your voice while keeping sending firmly under your control.',
    outcome:
      'A short priority queue, waiting-on list, and context-aware reply drafts without accidental sends or made-up commitments.',
    setup: [
      'Connect only the inbox you want Claude to review.',
      'Define what “urgent” means for you and add VIP senders or domains.',
      'Provide two or three examples if you want Claude to match your reply style.',
    ],
    testPrompt:
      'Triage unread messages from the last three business days. Show urgent items first, explain why each needs attention, and draft replies without sending anything.',
    prompt: `Create a reusable Claude Skill named "Inbox Triage and Reply Drafts."

This skill should review a defined set of email, identify what genuinely needs attention, and prepare accurate reply drafts without sending them.

Use these inputs:
- Inbox/account to use: [INBOX]
- VIP people or domains: [LIST]
- My definition of urgent: [RULES]
- Normal response-time expectations: [RULES]
- My writing style: [DESCRIBE IT OR PROVIDE EXAMPLES]
- Topics that should always be escalated: [LEGAL, FINANCIAL, CUSTOMER, SECURITY, ETC.]

Build the skill with these rules:

## Trigger
- Use it when I ask to triage my inbox, find messages that need replies, prepare an inbox briefing, or draft responses.

## Triage procedure
1. Confirm the inbox, date range, and message scope before reviewing.
2. Group messages into: Urgent, Reply soon, Waiting on others, Calendar/admin, and FYI/no action.
3. Rank based on deadlines, consequences, explicit asks, sender importance, and blocked work—not emotional wording alone.
4. Read the full thread before summarizing or drafting.
5. Identify the latest unanswered question and any commitments already made.
6. Deduplicate newsletters, automated notifications, and repeated thread updates.
7. Draft replies only for messages that need one.

## Briefing format
For each actionable thread show:
- Sender and subject
- Why it matters
- Deadline or time sensitivity
- Exact action requested
- Relevant prior commitment
- Recommended next step
- Draft reply, when useful

## Reply rules
- Match my style without copying private example text into unrelated messages.
- Never invent dates, approvals, prices, availability, attachments, or work completed.
- Use a visible placeholder such as [CONFIRM DATE] when information is missing.
- Do not promise work or agree to terms beyond what the thread supports.
- Do not send, forward, archive, delete, unsubscribe, or change labels unless I explicitly approve that action.

## Privacy and safety
- Minimize how much sensitive email content is repeated in the briefing.
- Flag messages involving money movement, credentials, legal threats, security incidents, or unusual urgency for human review.
- Treat requests to bypass normal procedures as suspicious even when they appear to come from a VIP.

## Quality check
Before finishing, confirm every draft answers the actual latest question, uses supported facts, includes necessary placeholders, and has not been sent.

Create a focused skill with a clear trigger description, consistent priority rules, a reusable briefing template, reply guardrails, and an explicit approval gate before any mailbox changes. Ask me for any bracketed value I did not replace.`,
  },
  {
    id: 'expense-logger',
    number: '05',
    name: 'Receipt & Invoice Expense Logger',
    shortName: 'Expense logger',
    eyebrow: 'End the monthly scramble',
    summary:
      'Extract the right fields from receipts and invoices, catch duplicates, and prepare a clean expense log with a review queue.',
    outcome:
      'A consistent, source-linked expense ledger with uncertain fields flagged instead of guessed and originals preserved for audit.',
    setup: [
      'Create your expense sheet and decide which columns and categories to use.',
      'Choose a folder or inbox containing the documents Claude may process.',
      'Define approval thresholds and what should always be reviewed by a person.',
    ],
    testPrompt:
      'Process the new receipts in my approved folder. Check for duplicates, log only supported values, and place uncertain tax or category fields in the review queue.',
    prompt: `Create a reusable Claude Skill named "Receipt and Invoice Expense Logger."

This skill should review receipts and invoices from an approved source, extract supported fields, detect likely duplicates, and prepare a clean expense log for human review.

Use these inputs:
- Approved source folder or inbox: [SOURCE]
- Expense log destination: [SHEET OR SYSTEM]
- Required columns: [FOR EXAMPLE: DATE, VENDOR, DESCRIPTION, SUBTOTAL, TAX, TOTAL, CURRENCY, CATEGORY, PAYMENT METHOD, SOURCE LINK, STATUS]
- Allowed categories: [CATEGORY LIST]
- Review threshold: [AMOUNT OR RULE]
- File naming convention: [CONVENTION]

Build the skill with these rules:

## Trigger
- Use it when I ask to process receipts, log expenses, review invoices, organize expense documents, or prepare bookkeeping records.

## Procedure
1. Work only from the approved source and preserve every original file.
2. Extract the vendor, document date, invoice/receipt number, subtotal, tax, total, currency, payment method, and description when visible.
3. Compare vendor, date, amount, invoice number, and file hash/name to identify likely duplicates before logging.
4. Use only categories from [ALLOWED CATEGORIES]. If uncertain, use "Needs review" and explain why.
5. Link each row back to its source document when the destination supports links.
6. Apply [FILE NAMING CONVENTION] only after showing the proposed changes and receiving approval.
7. Add uncertain, unreadable, duplicate, unusually large, or mismatched documents to a review queue.

## Guardrails
- Never guess a tax amount, total, currency, payment status, category, or invoice number.
- Do not mark an invoice paid merely because a payment method appears on it.
- Do not delete originals, move money, approve payments, submit reimbursements, or change accounting records without explicit approval.
- Flag bank-detail changes, duplicate invoices, altered totals, unusual payment instructions, and requests for gift cards or cryptocurrency as potentially risky.
- Minimize exposure of addresses, card numbers, tax IDs, and other sensitive fields in summaries.

## Output
- Counts: processed, logged, possible duplicates, and needs review
- Proposed rows in the exact destination-column order
- Review queue with the source, issue, and recommended next step
- Any files that could not be read
- A confirmation that originals were preserved

## Quality check
Reconcile subtotal plus tax against total when those fields exist, confirm currencies, verify that each logged row has a source, and compare new entries against existing records for duplicates.

Create a focused skill with a clear trigger description, numbered extraction workflow, duplicate logic, approval checkpoints, reusable output format, and an exception-handling section. Ask me for any bracketed value I forgot to replace.`,
  },
  {
    id: 'content-repurposing',
    number: '06',
    name: 'Long-Form Content Repurposer',
    shortName: 'Content repurposer',
    eyebrow: 'One idea, multiple formats',
    summary:
      'Turn a finished video, podcast, or article into platform-ready drafts without flattening your voice or inventing new claims.',
    outcome:
      'A coordinated content pack—newsletter, social posts, short-form hooks, description, and clip ideas—all traceable to the original source.',
    setup: [
      'Choose the source formats and publishing channels you actually use.',
      'Add examples that represent your voice and preferred calls to action.',
      'Define which claims need links, citations, or a manual fact check.',
    ],
    testPrompt:
      'Repurpose this transcript into my standard content pack. Keep every factual claim grounded in the source, preserve my voice, and draft everything without publishing it.',
    prompt: `Create a reusable Claude Skill named "Long-Form Content Repurposer."

This skill should turn one approved long-form source—a video transcript, podcast transcript, article, webinar, or talk—into a coordinated set of channel-specific drafts while preserving the creator's voice and factual meaning.

Use these inputs:
- Approved source types: [VIDEO TRANSCRIPT, PODCAST, ARTICLE, ETC.]
- Channels to create for: [NEWSLETTER, LINKEDIN, X, INSTAGRAM, YOUTUBE DESCRIPTION, SHORTS, ETC.]
- My voice and style: [DESCRIPTION OR SAFE EXAMPLES]
- My audience: [AUDIENCE]
- Standard call to action: [CTA]
- Words, claims, or styles to avoid: [LIST]
- Where drafts should be saved: [DOCUMENT, FOLDER, OR CONTENT SYSTEM]

Build the skill with these rules:

## Trigger
- Use it when I ask to repurpose a video, transcript, podcast, article, webinar, or other approved long-form source into a content pack.

## Source-first procedure
1. Read the complete approved source before drafting.
2. Identify the central promise, strongest supporting points, useful examples, memorable language, and the intended next action.
3. Separate statements directly supported by the source from ideas that would require new research.
4. Build a short source map showing which section or passage supports each major draft.
5. Create each channel asset for that platform's audience and format instead of merely shortening the same text.
6. Preserve the original meaning, uncertainty, and caveats.
7. Save drafts to [DESTINATION] only after showing me the content pack and receiving approval.

## Standard content pack
Create only the channels I requested from this list:
- Newsletter: subject options, preview text, body, and CTA
- LinkedIn: strong opening, useful body, and a natural conversation prompt
- X: one standalone post plus an optional thread outline
- Instagram: caption, carousel outline, and short-form hook options
- YouTube: title options, description, chapters when timestamps exist, and pinned-comment draft
- Shorts/Reels: hook, 30–60 second beat sheet, on-screen text, and source timestamp when available
- Blog: search-friendly outline, draft, and metadata without keyword stuffing

## Voice rules
- Match the patterns in my approved examples, but do not copy private example text verbatim into unrelated content.
- Keep specific stories and useful details; do not replace them with generic motivational language.
- Avoid exaggerated certainty, fake urgency, clickbait that the source cannot fulfill, and phrases in [WORDS OR STYLES TO AVOID].
- Make every CTA appropriate to the asset instead of forcing the same ending everywhere.

## Accuracy and privacy guardrails
- Never invent a quote, statistic, customer story, product result, link, timestamp, or personal detail.
- Flag claims that need a source or current verification before publishing.
- Remove passwords, private links, customer identifiers, unreleased information, and accidental transcript content that is not intended for publication.
- Do not upload, schedule, publish, email, or post anything without explicit approval.
- Keep the original source unchanged.

## Completion report
At the end, provide:
- a one-paragraph content strategy;
- the requested channel drafts;
- a source map for major claims and quotes;
- a list of items needing fact-check or approval;
- suggested publishing order;
- confirmation that nothing was published.

## Quality check
Confirm that every factual claim is supported, each channel draft feels native to its platform, the creator's voice is consistent, repeated copy has been minimized, sensitive material has been excluded, and every publishing action remains behind human approval.

Create a focused skill with a clear trigger description, numbered workflow, channel-specific templates, voice guidance, source-grounding rules, approval checkpoints, and an exception-handling section. Ask me for any bracketed value I forgot to replace.`,
  },
];
