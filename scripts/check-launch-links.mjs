#!/usr/bin/env node

import { readFileSync } from "node:fs";

const files = [
  "README.md",
  "index.html",
  "agent-prompts.html",
  "power-moves.html",
  "docs/agent-demo-prompts.md",
  "docs/power-moves.md",
  "docs/waitlist-form.md",
];

const forbidden = [
  /docs\.google\.com/i,
  /forms\.gle/i,
  /mango-magic\.github\.io/i,
  /github\.io\/mangopods-mcp/i,
  /Start Free Trial/i,
  /Subscribe Now/i,
  /No credit card/i,
  /Free tier available/i,
];

const required = [
  {
    file: "README.md",
    text: "https://mangomagic.live/api",
  },
  {
    file: "README.md",
    text: "https://mangomagic.live/waitlist?ref=github",
  },
  {
    file: "index.html",
    text: "https://mangomagic.live/waitlist?ref=github",
  },
  {
    file: "agent-prompts.html",
    text: "https://mangomagic.live/waitlist?ref=github",
  },
  {
    file: "power-moves.html",
    text: "https://mangomagic.live/waitlist?ref=github",
  },
];

const failures = [];

for (const file of files) {
  const body = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

  for (const pattern of forbidden) {
    if (pattern.test(body)) {
      failures.push(`${file}: forbidden launch link/copy matched ${pattern}`);
    }
  }
}

for (const check of required) {
  const body = readFileSync(new URL(`../${check.file}`, import.meta.url), "utf8");
  if (!body.includes(check.text)) {
    failures.push(`${check.file}: missing ${check.text}`);
  }
}

if (failures.length) {
  console.error("Launch link check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Launch link check passed.");
