<p align="center">
  <img src="assets/mangomagic-logo-card.svg" alt="MangoMagic" width="620">
</p>

<p align="center">
  <a href="https://mango-magic.github.io/mangopods-mcp/">Developer portal</a>
  ·
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSckGZ6LHc7MkKo8aSdLpC1REH-2IxNgN4kgV8uus97JBy6GvQ/viewform?usp=publish-editor">Join the waitlist</a>
  ·
  <a href="docs/power-moves.md">Power moves</a>
  ·
  <a href="docs/agent-demo-prompts.md">Agent prompts</a>
</p>

<p align="center">
  <img src="assets/mangopods-github-hero.svg" alt="MangoPods MCP turns one source asset into the full creative broadcast." width="100%">
</p>

# MangoPods MCP.

The creative backend vibe coders have been trying to hallucinate.

MangoPods is a private MCP surface for the MangoMagic production engine. It lets agents turn a source asset into the whole broadcast: edited podcasts, vertical clips, captions, thumbnails, landing pages, articles, social packs, outreach, booking flows, approval queues, publishing, analytics, and credit-backed delivery.

This is not a video editing API.

This is a creative operating system exposed through MCP.

## The Category.

Most AI apps can write a caption. MangoPods is for the thing after the caption:

- the render that actually finishes
- the site that actually ships
- the clip pack with titles, captions, thumbnails, and exports
- the approval queue before a client sees it
- the credit estimate before expensive work starts
- the published page, scheduled posts, guest kit, and report
- the next action after analytics comes back

Agents should not have to rebuild media infrastructure, publishing pipes, brand systems, rights logic, or billing rails. They should ask for the outcome and get durable assets back.

## One Recording Becomes A Broadcast.

```mermaid
flowchart LR
  A["Raw source<br/>podcast, meeting, webinar, demo"] --> B["MangoPods MCP<br/>import, transcribe, edit, generate"]
  B --> C["Media pack<br/>clips, captions, mix, thumbnails"]
  B --> D["Website pack<br/>landing page, article, embeds, SEO"]
  B --> E["Growth pack<br/>posts, emails, outreach, booking"]
  B --> F["Ops pack<br/>approvals, credits, analytics, reports"]
```

The simple demo is savage:

```json
{
  "tool": "recipe.run",
  "arguments": {
    "recipe": "episode_launch_pack",
    "source": "raw-founder-interview.mov",
    "brand_kit": "mangomagic",
    "outputs": [
      "full_podcast_mix",
      "12_vertical_clips",
      "caption_files",
      "episode_page",
      "linkedin_post_pack",
      "guest_share_kit",
      "spend_report"
    ],
    "approval_mode": "review_before_publish",
    "credit_cap": 120
  }
}
```

## Things People Should Build With This.

| If you are building | MangoPods becomes |
| --- | --- |
| A podcast app | the editing, clip, page, guest-kit, and publishing engine |
| A website builder | the media-aware page generator that can ingest real source material |
| A creator CRM | the machine that turns relationships into shows, clips, pages, and follow-up |
| An agency portal | the credit-backed client production floor |
| A sales tool | the call-to-proof, demo-to-page, webinar-to-pipeline engine |
| A community app | the member story, event recap, newsletter, and highlight system |
| An internal AI agent | the content ops backend for every team recording |
| A vibe-coded startup | a production department hiding behind one MCP connection |

## Power Moves.

- Ask Cursor to turn a customer call into a proof page, three quote clips, and a sales follow-up pack.
- Ask Claude to turn a 90-minute webinar into a launch page, 20 shorts, an email sequence, and a paid campaign brief.
- Ask ChatGPT to generate a podcast episode, guest kit, LinkedIn carousel, article, thumbnail set, and booking CTA from one recording.
- Ask an internal agent to scan a meeting folder and build a searchable library of reusable proof, quotes, objections, and customer language.
- Ask a client portal to estimate credits, reserve spend, render drafts, collect approval, publish, and report margin.

See the bigger list in [Power Moves](docs/power-moves.md).

## The Waitlist Is For Builders Who Already See It.

MangoPods is not public yet. Early access should go to people with real workflows:

- vibe coders building products around agents
- agencies packaging repeatable client outcomes
- creators and studios with back catalogs
- SaaS teams with webinars, demos, calls, and events
- internal teams tired of losing value inside recordings
- partner apps that want to resell creative work without building the factory

Join here: https://docs.google.com/forms/d/e/1FAIpQLSckGZ6LHc7MkKo8aSdLpC1REH-2IxNgN4kgV8uus97JBy6GvQ/viewform?usp=publish-editor

## What Is In This Repo.

- `index.html` - the full public developer portal and use-case atlas.
- `assets/mangopods-github-hero.svg` - branded GitHub hero artwork.
- `assets/mangomagic_wide_dark.svg` - MangoMagic logo.
- `docs/power-moves.md` - high-value product and partner use cases.
- `docs/agent-demo-prompts.md` - copy-paste prompts for vibe coding demos.
- `docs/waitlist-form.md` - live waitlist fields and routing notes.
- `scripts/create-google-form.gs` - Apps Script helper for recreating the waitlist form.

## Live Portal.

The GitHub Pages site is the real artefact:

https://mango-magic.github.io/mangopods-mcp/

It includes the developer docs, tool catalogue, schemas, recipes, use-case atlas, and signup flow.

## Private Beta.

MangoPods is private. The public repo is an invitation, not an SDK release.

If you understand why "one recording in, entire creative system out" changes the economics of software, you are exactly who this is for.

Copyright MangoMagic / Many Mangoes. All rights reserved.
