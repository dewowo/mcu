Create a complete, responsive client-side React SPA using React Router (v6/v7) and pnpm called "The Multiverse Chronicles" — a curated cinematic blog & narrative archive that recounts the Marvel Cinematic Universe (MCU) chronologically from the very beginning up to "Avengers: Doomsday".

---
### 1. DESIGN SPECIFICATION & TASTESKILL RULES (tasteskill.dev)
Apply the TasteSkill design philosophy to avoid generic AI-generated templates:
- **Aesthetic Direction:** Cinematic Editorial Archive. Feels like an interactive, high-end film chronicler journal rather than a generic SaaS dashboard.
- **Color Palette (Intentional & Distinctive):**
  - Background: Deep Void Slate (`#0B0E14`) & Editorial Off-Dark (`#121820`).
  - Text: Parchment/Ivory (`#ECE7DE`) for primary headings, Warm Ash (`#A8B2C1`) for prose.
  - Accent Colors: Celestial Crimson (`#E23636` for action/danger), Vibranium Cyan (`#00F0FF` for cosmic/tech), and Asgardian Amber (`#E5A93C` for milestones/dates).
  - Avoid generic tailwind purple/indigo gradients and rounded-3xl pastel cards.
- **Typography:**
  - Headings: Elegant Serif or Display Font (e.g., Playfair Display or Cinzel via Google Fonts).
  - Body: Readable Sans-Serif with optimal reading line-height (1.75) and line length (max-w-prose).
  - Badges/Metadata: JetBrains Mono / Space Mono uppercase for dates and Phase markers.
- **Micro-interactions:** Subtle page transitions, readable progress bar on scroll, smooth hover states on navigational anchors.

---
### 2. ARCHITECTURE & ROUTING (100% Client-Side)
Configure `react-router-dom` with the following routes:
1. `/` (Home / Prologue):
   - Hero section with cinematic typography introducing the archive's purpose.
   - An overview explanation of how the chronology works (In-Universe Timeline vs Multiverse Threads).
   - Prominent Call to Action button: "Begin the Journey" (links directly to the first chronological story).
   - A timeline table of contents / quick jump drawer for quick browsing.
2. `/chronicle/:slug` (Individual Film Story View):
   - Full blog-style narrative article for each film entry.
   - Top metadata bar: Film Title, In-Universe Year/Date, Main Characters (Spider-Man, Iron Man, Thor, etc.), Phase Tag, and Estimated Read Time.
   - Body: Narrative synopsis written like a serialized novella / short story recap rather than just dry bullet points.
   - Bottom Navigation: Two explicit cards for "← Previous Chapter" and "Next Chapter →" displaying the film title and poster/character teaser. (Disable/hide appropriately on the first and last entries).
3. `*` (404 Fallback): Minimalist "Lost in the Multiverse" page returning to `/`.

---
### 3. MCU TIMELINE & CONTENT SPECIFICATION
Include rich mock data (stored in a separate `data/chronology.js` file) ordered chronologically from the start to **Avengers: Doomsday**:
- **Chronological Sequence:**
  1. *Captain America: The First Avenger* (1942–1945) - Main: Steve Rogers
  2. *Captain Marvel* (1995) - Main: Carol Danvers, Nick Fury
  3. *Iron Man* (2008) - Main: Tony Stark
  4. *Iron Man 2* (2010)
  5. *Thor* (2011)
  6. *The Avengers* (2012)
  7. *Captain America: The Winter Soldier*
  8. *Guardians of the Galaxy Vol. 1*
  9. *Avengers: Age of Ultron*
  10. *Captain America: Civil War* (featuring Spider-Man's debut)
  11. *Avengers: Infinity War*
  12. *Avengers: Endgame*
  13. *Loki (Season 1 & 2)* (Multiversal nexus transition)
  14. *Spider-Man: No Way Home*
  15. *Doctor Strange in the Multiverse of Madness*
  16. *Deadpool & Wolverine*
  17. *The Fantastic Four: First Steps* (Prelude entry)
  18. *Avengers: Doomsday* (Grand Multiverse collision narrative climax)
  *(Ensure all items are fully navigable and have written narrative summaries).*

---
### 4. COMPONENT REQUIREMENTS
- `Header.jsx`: Minimalist sticky navigation with project title, Phase filter, and a "Jump to Latest" shortcut.
- `StoryArticle.jsx`: Beautiful typography layout with drop-cap initial letters, character pill badges, and pull quotes.
- `PaginationBar.jsx`: Located at the bottom of each story page with preview cards for Previous & Next stories.
- `TimelineDrawer.jsx`: Collapsible side-drawer to quickly switch to any movie on the timeline without returning to home.

Ensure no external backend or API is required. Build strictly with modern React hooks, Lucide-React icons, and Tailwind CSS.