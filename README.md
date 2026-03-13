# Glossa Flashcards for Obsidian

Turn any text — in your notes or anywhere on the web — into a language learning flashcard in one click. Powered by Google Gemini AI.

## How it works

You highlight a word or phrase. The plugin sends it to Google Gemini, which returns structured data: the dictionary form, word class, translation, example sentences, and anything else you configure. A new note is created in your vault as the flashcard, a backlink is inserted at the highlighted text, and the note opens immediately.

Later, you practice those flashcards with a built-in flip-card session — filtered however you like.

---

## Requirements

A free Google Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

---

## Installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the [Releases](https://github.com/chiunhau/ai-flashcards-obsidian-plugin/releases) page.
2. Copy them into `.obsidian/plugins/ai-language-flashcards/` inside your vault.
3. Reload Obsidian and enable the plugin under Settings → Community Plugins.

---

## Quick Start

1. Go to **Settings → AI Language Flashcards** and paste your Gemini API key.
2. Set your **Target language** (e.g. Finnish, Japanese, Spanish).
3. In any note, select a word or phrase, right-click, and choose **Create [language] flashcard**.

That's it. A flashcard note is created, the selected text becomes a link to it, and the note opens in a new tab.

---

## Creating Flashcards

### From a note (selection)

Select any text in the editor, then either:
- Right-click → **Create [language] flashcard**
- Command palette → **Create flashcard from selection**

The selected text is replaced with `[[FlashcardTitle|original text]]` — a backlink that preserves the original text visually while linking to the flashcard note.

### From a manual input

Click the **languages** ribbon icon, or run **Create flashcard (manual input)** from the command palette. Type or paste any text into the dialog and confirm.

### From the browser

Install the included browser extension (Chrome, Brave, Edge) to create flashcards from any webpage:

1. Go to Manage Extensions, enable **Developer mode**.
2. Click **Load unpacked** and select the `browser-extension/` folder.

Now select text on any webpage, right-click, and choose **Create flashcard in Obsidian**. Obsidian must be running.

---

## Flashcard Notes

Each flashcard is a regular Obsidian markdown note saved to your configured flashcards folder. Notes include:

- **A title** — the dictionary/base form of the word by default
- **Note properties (frontmatter)** — translation, word class, source text, group tag, and anything else you configure
- **A body** — example sentences and translations by default

If a flashcard for the same word already exists, the plugin opens it instead of creating a duplicate.

---

## Practicing Flashcards

### Open the practice setup

Click the **cards** ribbon icon, or run **Practice flashcards** from the command palette.

### Practice setup options

| Option | Description |
|---|---|
| Number of cards | 5, 10, 20, or all |
| Filter by property | Checkbox groups for word class, group, or any property you configure — practice only nouns, only verbs, only a specific group, etc. |
| Filter by note | Pick any note from your vault; only flashcards linked from that note will be included |
| Order | Random or alphabetical |

### Practice directly from a note

Skip the setup dialog entirely. Right-click anywhere while editing a note, or right-click a file in the file explorer, and choose **Practice flashcards from this note**. The session starts immediately using every flashcard linked from that note.

This is also available from the command palette: **Practice flashcards from current note**.

### During a session

- **Space or Enter** — reveal the answer
- **→ (right arrow)** — mark as "Know it"
- **← (left arrow)** — mark as "Don't know"
- Buttons are also available on screen for mouse/touch use

### After the session

A results screen shows your score and lists the words you didn't know. Click any word to open its flashcard note directly.

---

## Customization

All settings are under **Settings → AI Language Flashcards**.

### General

| Setting | Description |
|---|---|
| API key | Your Google Gemini API key |
| Model | Gemini model ID (default: `gemini-2.5-flash-lite`) |
| Flashcards folder | Vault folder where flashcard notes are saved (e.g. `Finnish/Flashcards`) |

### Generation

| Setting | Description |
|---|---|
| Language | The language you are learning. Available as `{{language}}` in the prompt |
| Prompt | The instruction sent to the AI. Use `{{language}}` and `{{source_text}}` as placeholders |

### Output fields

Define exactly what the AI returns. Each line is `fieldKey: description for the AI`. The descriptions guide the AI's output; the keys become available as `{{fieldKey}}` everywhere else.

Default fields:
```
dictionary_form: Base/dictionary form of the word
word_class: Grammatical category (e.g. noun, verb, adjective)
translation: English translation
example_1: First example sentence
example_1_translation: English translation of first example
example_2: Second example sentence
example_2_translation: English translation of second example
```

### Note

| Setting | Description |
|---|---|
| Title | Which output field becomes the note filename (default: `dictionary_form`) |
| Body | Note content template. Use `{{fieldKey}}` to insert any AI output field |
| Properties | Frontmatter config — one `key: value` per line. Supports `{{fieldKey}}`, `{{source_text}}`, and JSON arrays |

Default properties:
```
translation: {{translation}}
word_class: {{word_class}}
group: Default
source: {{source_text}}
```

### Practice

| Setting | Description |
|---|---|
| Card front | Template for the question side. Use `{{title}}` or any `{{propertyKey}}` |
| Card back | Template for the answer side |
| Filter fields | Comma-separated property keys that appear as filter options in the practice setup (e.g. `word_class, group`) |

---

## Releasing a New Plugin Version

To release a new version of the plugin, run the release script from the repository root. This handles the version bump, file synchronization, git commit, and git tagging in one step.

### Step 1: Bump and Tag Locally
Choose the appropriate semantic version bump and run:

```bash
npm run release:plugin           # patch bump (e.g. 0.1.0 -> 0.1.1)
npm run release:plugin minor     # minor bump (e.g. 0.1.0 -> 0.2.0)
npm run release:plugin major     # major bump (e.g. 0.1.0 -> 1.0.0)
```

**What this does under the hood:**
1. Uses `npm version` to bump `apps/plugin/package.json`
2. Executes `version-bump.mjs` to automatically sync the new version into `manifest.json` and `versions.json`
3. Commits the changes as `Release plugin [version]`
4. Creates a Git tag matching the version (e.g. `0.2.0`)

### Step 2: Push to GitHub Actions
Push your newly created commit and tags to the remote repository:

```bash
git push && git push --tags
```

### Step 3: GitHub Actions Auto-Release
Once the tag is pushed, the `Release Obsidian plugin` GitHub Action triggers automatically. It will:
- Run `npm install` and build the plugin
- Create a new official GitHub Release using `softprops/action-gh-release`
- Attach the built files (`main.js`, `manifest.json`, and `styles.css`) as release assets

---

## Keyboard Shortcuts

All plugin commands are available through the command palette and can be assigned custom hotkeys under **Settings → Hotkeys**.

| Command | Description |
|---|---|
| Create flashcard from selection | Generate a flashcard from selected text |
| Create flashcard (manual input) | Open the text input dialog |
| Practice flashcards | Open the practice setup dialog |
| Practice flashcards from current note | Start a practice session for the current note immediately |
