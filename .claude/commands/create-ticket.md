---
description: Create a GitHub issue and add it to Mission Control (trustdesign-io project board)
---

# Create Ticket: $ARGUMENTS

Create a GitHub issue in the current repository and automatically add it to the
**Mission Control** project board for trustdesign-io.

---

## Config (never change these)

```
ORG=trustdesign-io
PROJECT_NUMBER=3
PROJECT_ID=PVT_kwDODlnZic4BRn_o
```

---

## Step 1 — Gather ticket details

If `$ARGUMENTS` is non-empty, parse it as the ticket **title** and skip asking
for one. For all other fields, use sensible defaults unless the user provided
them in `$ARGUMENTS`.

Ask the user for the following (all optional — use defaults shown):

| Field       | Options                                                        | Default     |
|-------------|----------------------------------------------------------------|-------------|
| **Title**   | Short imperative sentence                                      | (required)  |
| **Body**    | Acceptance criteria, context, links                            | (empty)     |
| **Category**| `Feature` / `Bug` / `Chore` / `Design` / `Docs` / `Research`  | `Feature`   |
| **Priority**| `🔴 Critical` / `🟠 High` / `🟡 Medium` / `🟢 Low`           | `🟡 Medium` |
| **Size**    | `XS` / `S` / `M` / `L` / `XL`                                 | `M`         |
| **Status**  | `Backlog` / `Todo` / `In Progress` / `In Review` / `Done`      | `Backlog`   |
| **Labels**  | Comma-separated GitHub labels to apply (must exist on repo)    | (none)      |
| **Assignee**| GitHub username                                                | (none)      |

If `$ARGUMENTS` looks like a complete description (e.g. "Bug: login button unresponsive on mobile"),
parse it intelligently to pre-fill Type and Title, then confirm with the user before
proceeding.

---

## Step 2 — Detect the current repo

Run:
```bash
gh repo view --json nameWithOwner -q .nameWithOwner
```

Store as `REPO`. If this fails (not in a git repo), ask the user which repo to
use from the trustdesign-io org:
```bash
gh repo list trustdesign-io --json nameWithOwner -q '.[].nameWithOwner'
```

---

## Step 3 — Create the GitHub issue

Build the `gh issue create` command:

```bash
gh issue create \
  --repo "$REPO" \
  --title "$TITLE" \
  --body "$BODY" \
  [--label "$LABELS"] \
  [--assignee "$ASSIGNEE"]
```

Capture the issue URL from stdout. Extract the issue number from the URL.

---

## Step 4 — Add issue to Mission Control

```bash
# Add item to project — returns the project item ID
ITEM_ID=$(gh project item-add $PROJECT_NUMBER \
  --owner "$ORG" \
  --url "$ISSUE_URL" \
  --format json | python3 -c "import sys,json; print(json.load(sys.stdin)['id'])")
```

---

## Step 5 — Set Status, Priority, Size, and Type fields

First fetch field IDs (cache this if running multiple tickets in one session):

```bash
FIELDS=$(gh api graphql -f query='
  query($org: String!, $number: Int!) {
    organization(login: $org) {
      projectV2(number: $number) {
        fields(first: 20) {
          nodes {
            ... on ProjectV2SingleSelectField {
              id
              name
              options { id name }
            }
          }
        }
      }
    }
  }
' -F org="$ORG" -F number="$PROJECT_NUMBER")
```

Parse and set each field using:

```bash
gh api graphql -f query='
  mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $optionId: String!) {
    updateProjectV2ItemFieldValue(input: {
      projectId: $projectId
      itemId: $itemId
      fieldId: $fieldId
      value: { singleSelectOptionId: $optionId }
    }) {
      projectV2Item { id }
    }
  }
' -F projectId="$PROJECT_ID" \
  -F itemId="$ITEM_ID" \
  -F fieldId="$STATUS_FIELD_ID" \
  -F optionId="$STATUS_OPTION_ID"
```

Repeat for Priority, Size, and Category fields.

---

## Step 6 — Output a summary

Print a confirmation table:

```
✅  Ticket created

  Title     : {title}
  Repo      : {repo}
  Issue     : {issue_url}
  Status    : {status}
  Priority  : {priority}
  Size      : {size}
  Type      : {type}

  Board     : https://github.com/orgs/trustdesign-io/projects/3
```

---

## Notes

- If any `gh` command fails with "field not found", the Mission Control project
  may not have been configured yet. Run:
  ```bash
  bash scripts/setup-mission-control.sh
  ```
  from the `starter-web` repo root, then retry.

- This command works from **any** repo in the trustdesign-io org. When run
  outside a git repo, it prompts for the target repo.

- To create multiple tickets rapidly, pass each title as `$ARGUMENTS` — Claude
  will batch them and confirm the full list before creating.
