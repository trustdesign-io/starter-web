# Agentic Development Workflow

This document describes how development work flows through this project using Claude Code as the primary development agent.

---

## Overview

Work is tracked on **Mission Control** — a GitHub Projects board at `github.com/orgs/trustdesign-io/projects/3`. Claude Code handles the full loop: picking up tickets, implementing changes, opening PRs, self-reviewing them, and moving the ticket to In Review for human sign-off.

The human's role is to **define work** (create tickets), **review PRs**, and **merge**. Claude handles everything in between.

---

## The board

| Status | Meaning |
|--------|---------|
| Backlog | Defined but not yet prioritised for action |
| Todo | Ready to be picked up |
| In Progress | Claude is actively working on it |
| In Review | PR open, waiting for human review and merge |
| Done | Merged and closed |

Tickets have four fields: **Priority** (Critical → Low), **Size** (XS → XL), **Category** (Feature / Bug / Chore / Design / Docs / Research), and **Status**.

---

## Slash commands

All workflow actions are available as slash commands inside Claude Code.

### Board and tickets

| Command | What it does |
|---------|-------------|
| `/board` | Show open tickets for the current repo |
| `/create-ticket <title> [category:X] [priority:X] [size:X]` | Create an issue and add it to the board |
| `/update-ticket <number> [field:value ...]` | Update priority, size, category, status, title, or body |
| `/move-ticket <number> <status>` | Move a ticket to a different status column |

**Examples:**
```
/create-ticket Add user settings page category:Feature priority:High size:M
/update-ticket 42 priority:Critical
/move-ticket 42 "In Review"
```

### Doing the work

| Command | What it does |
|---------|-------------|
| `/take-task [next\|<number>]` | Pick up a ticket, implement it, open a PR, self-review, move to In Review |
| `/review-pr <number>` | Run a self-review sub-agent on an existing PR and post findings as a comment |

`/take-task next` picks the highest-priority **Todo** ticket for the current repo (Critical > High > Medium > Low; tiebreak: lowest number first). If no Todo tickets exist, it checks Backlog and asks before proceeding.

---

## End-to-end flow

```
Human                          Claude Code
  │                                │
  ├─ /create-ticket ───────────────┤  Creates GitHub issue + adds to board
  │                                │
  ├─ /move-ticket N todo ──────────┤  Moves to Todo (ready to pick up)
  │                                │
  ├─ /take-task next ──────────────┤
  │                                ├─ Moves ticket to In Progress
  │                                ├─ Creates feature branch
  │                                ├─ Implements the change
  │                                ├─ Runs: lint → type-check → build
  │                                ├─ Commits and pushes
  │                                ├─ Opens PR
  │                                ├─ Self-review via sub-agent → posts comment
  │                                └─ Moves ticket to In Review
  │                                │
  ├─ Reviews PR on GitHub ─────────┤
  ├─ Merges PR ────────────────────┤  GitHub auto-closes the issue
  │                                │
  └─ /take-task next ──────────────┘  Pick up the next ticket
```

---

## Branch and commit conventions

**Branches** are named by category:
- Feature / Docs / Chore / Research → `feature/{number}-{slug}`
- Bug → `fix/{number}-{slug}`
- Design → `design/{number}-{slug}`

**Commits** follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add user settings page

Implements the profile settings form with display name and avatar upload.

Refs #42
```

Commit types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `design`.

PRs always target `main`. Never push directly to `main`.

---

## CI

Every PR runs `.github/workflows/ci.yml`, which gates merge on:

1. `npm run lint`
2. `npm run type-check`
3. `npm run test` (Vitest unit tests)
4. `npm run build`

On merge to `main`, a second job runs `npx prisma migrate deploy` automatically.

Claude will not open a PR with a failing build. If lint or type-check fails after implementation, Claude fixes the errors before pushing.

---

## Bot identity

Tickets and PR comments from Claude appear under the **trustdesign-bot** GitHub account. The bot's personal access token is expected in `$TRUSTDESIGN_BOT_TOKEN`. If the variable is not set, actions fall back to the authenticated user's token.

See `docs/BOT_SETUP.md` for how to configure the bot token.

---

## Human checkpoints

Claude operates autonomously but always stops for human input at:

1. **Before starting a Backlog ticket** — `/take-task next` will ask before touching a ticket that isn't in Todo
2. **After opening a PR** — Claude moves to In Review and waits; it never merges
3. **Ambiguous requirements** — if the issue body doesn't make "done" clear, Claude asks one focused question before continuing

For multi-day tasks, Claude will move the ticket back to Todo, add a comment explaining what's needed, and tell you rather than producing partial work.
