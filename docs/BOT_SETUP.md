# trustdesign-bot Setup Guide

A machine user account gives Claude Code its own GitHub identity — PRs, issues,
comments, and commits all show as coming from `trustdesign-bot` rather than you.

GitHub explicitly permits machine user accounts for automation:
https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts

---

## Step 1 — Create the GitHub account

1. Log out of GitHub (or open a private browser window)
2. Sign up at https://github.com/join with:
   - **Username**: `trustdesign-bot`
   - **Email**: a dedicated address e.g. `bot@trustdesign.io` or a Gmail alias
     like `dannychambers+trustdesignbot@gmail.com`
3. Complete email verification

---

## Step 2 — Add a profile picture

Make it obvious this is a bot — the Claude logo, a robot icon, or your brand mark.
Settings → Profile → Upload avatar.

---

## Step 3 — Add to the trustdesign-io org

As your main GitHub account:

1. Go to https://github.com/orgs/trustdesign-io/people
2. Click **Invite member**
3. Search for `trustdesign-bot` → Send invitation
4. Log in as `trustdesign-bot` and accept the invitation
5. Grant **Write** access to the repos you want it to work on:
   - https://github.com/orgs/trustdesign-io/teams → create a `bots` team with Write access
   - Or add directly to each repo: repo Settings → Collaborators → `trustdesign-bot`

---

## Step 4 — Generate a Personal Access Token

Logged in as `trustdesign-bot`:

1. Go to https://github.com/settings/tokens?type=beta (fine-grained tokens)
2. Click **Generate new token**
3. Settings:
   - **Token name**: `claude-code`
   - **Expiration**: 1 year (set a calendar reminder to rotate it)
   - **Resource owner**: `trustdesign-io`
   - **Repository access**: All repositories (or select specific ones)
   - **Permissions**:
     - Contents: Read and write
     - Issues: Read and write
     - Pull requests: Read and write
     - Projects: Read and write
     - Metadata: Read only
4. Click **Generate token** — copy it immediately, you won't see it again

Store it somewhere safe (1Password, etc.) as `TRUSTDESIGN_BOT_TOKEN`.

---

## Step 5 — Configure Claude Code to use the bot token

Add to your shell profile (`~/.zshrc` or `~/.bash_profile`):

```bash
# trustdesign-bot token for Claude Code
export TRUSTDESIGN_BOT_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxx"
```

Then reload: `source ~/.zshrc`

Claude Code slash commands will reference this via `GH_TOKEN=$TRUSTDESIGN_BOT_TOKEN`.

---

## Step 6 — Configure git commit identity

In `starter-web` (and any other trustdesign repo), set the local git author:

```bash
cd ~/Projects/trustdesign/starter-web
git config user.name "trustdesign-bot"
git config user.email "bot@trustdesign.io"
```

Or set globally for all trustdesign projects by adding to `~/.gitconfig`:

```ini
[includeIf "gitdir:~/Projects/trustdesign/"]
  path = ~/.gitconfig-trustdesign
```

Then create `~/.gitconfig-trustdesign`:

```ini
[user]
  name = trustdesign-bot
  email = bot@trustdesign.io
```

This makes all commits in trustdesign projects show as `trustdesign-bot` without
affecting your personal git identity elsewhere.

---

## Step 7 — Test it

```bash
# Verify gh uses bot token
GH_TOKEN=$TRUSTDESIGN_BOT_TOKEN gh api user -q .login
# Should print: trustdesign-bot

# Verify git identity
cd ~/Projects/trustdesign/starter-web
git config user.name
# Should print: trustdesign-bot
```

---

## Step 8 — Update Claude Code commands to use the bot token

The `/take-task`, `/create-ticket`, `/move-ticket`, `/update-ticket`, and
`/review-pr` commands should all prefix `gh` calls with the bot token:

```bash
GH_TOKEN=$TRUSTDESIGN_BOT_TOKEN gh issue create ...
GH_TOKEN=$TRUSTDESIGN_BOT_TOKEN gh pr create ...
GH_TOKEN=$TRUSTDESIGN_BOT_TOKEN gh api graphql ...
```

This is already reflected in the updated slash commands (see below).

---

## Token rotation

The PAT will expire after 1 year. When it does:
1. Log in as `trustdesign-bot`
2. Generate a new token at https://github.com/settings/tokens
3. Update `TRUSTDESIGN_BOT_TOKEN` in `~/.zshrc`
4. Run `source ~/.zshrc`

---

## Result

After setup:
- All Claude Code commits show as `trustdesign-bot` in git log and GitHub
- All PRs opened by Claude show as opened by `trustdesign-bot`
- All issue comments, reviews, and project field updates show as `trustdesign-bot`
- Your own commits and PRs are unaffected
