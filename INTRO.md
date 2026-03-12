# glossa.md

An Obsidian plugin that turns highlighted text into language learning flashcards using Google Gemini AI — and links everything back into your notes.

---

## The problem

Language learners who use Obsidian for note-taking hit a constant friction point: you encounter a new word mid-reading, and capturing it properly means switching apps, opening a dictionary, manually creating a note, and coming back. Most people just don't bother.

## What glossa.md does

Highlight a word or phrase in any note. Right-click. Done. Gemini generates the dictionary form, word class, translation, and example sentences. A flashcard note is created in your vault, and the original word becomes a backlink to it — so your reading notes stay connected to your vocabulary.

---

## Core features

**One-click flashcard creation**
Select text in any note → right-click → flashcard is generated and linked in place. Works from the command palette too.

**Browser extension**
Select text on any webpage, right-click, and send it straight to your Obsidian vault. No copy-pasting, no context switching.

**Backlinks in your notes**
The highlighted word becomes `[[FlashcardTitle|original text]]` — the text looks the same but now links to the flashcard. Your notes become a web of vocabulary.

**Built-in practice mode**
Flip-card sessions inside Obsidian, keyboard-driven and filterable by word class, topic group, or any property. Right-click any note to instantly drill every word you captured while reading it — no setup needed.

**Fully customizable**
The AI prompt, output fields, note structure, frontmatter properties, and practice card templates are all configurable. Supports any language Gemini knows.

---

## Who it's for

- Language learners who already use Obsidian for reading notes, book highlights, or study notes
- People learning through immersion — reading articles, books, or content in the target language
- Anyone frustrated by the gap between encountering a word and actually retaining it

---

## Technical details

- Requires a free Google Gemini API key (via Google AI Studio)
- Flashcards are plain markdown notes — portable, searchable, and compatible with other Obsidian plugins
- Works with any language Gemini supports
- Browser extension supports Chrome, Brave, and Edge
