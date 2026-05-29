# Log

Chronological record of operations on this wiki. Append-only.

Each entry starts with `## [YYYY-MM-DD] action | title` so the log is greppable:

```bash
grep "^## \[" wiki/log.md | tail -20
```

Maintained by `scripts/append_log.py`.

---

## [2026-05-28] bootstrap | Wiki initialized
Topic: AI-managed wiki for the Dungeon Crawler Carl novel series by Matt Dinniman — characters, factions, dungeon floors, game mechanics, lore, and plot tracking across all 8 books

## [2026-05-28] bootstrap | Wiki rebuilt from scratch
Cleared previous 2-book partial ingest. New taxonomy: characters/ factions/ mechanics/ floors/ lore/ sources/. 8 books pending ingest in order.

## [2026-05-28] ingest | Book 1: Dungeon Crawler Carl
Created: sources/book-1-dungeon-crawler-carl.md, 10 character pages (carl, princess-donut, mordecai, mongo, odette, brandon-an, imani-c, mrs-mcgibbons, agatha, frank-q), 2 faction pages (borant-corporation, syndicate), 1 mechanics page (game-systems). Covers Floors 1-2, Level 13 end state, full cosmology established.

## [2026-05-28] ingest | Book 2: Carl's Doomsday Scenario
Created: sources/book-2-carls-doomsday-scenario.md, 3 new character pages (katia-grim, hekla, lucia-mar). Updated: carl.md, princess-donut.md. Floor 3 covered. Key events: race/class selection, Grimaldi quest, Doomsday Scenario explosive, Skull Empire assassination attempt. End state: Carl #6 Level 27, Donut #7 Level 26, 100K bounties each. Mrs. McGibbons is #10 on leaderboard (!)

## [2026-05-28] ingest | Book 3: The Dungeon Anarchists Cookbook
Created: sources/book-3-dungeon-anarchists-cookbook.md. Updated: katia-grim.md. Floor 4 (Iron Tangle) covered. Key events: Dungeon Anarchist's Cookbook item, Mordecai 7-day timeout/Chaco connection, Hekla betrayal and death, Katia kills Hekla accidentally (L24→41), Carl's Doomsday Scenario used on Mimic Rex L90, Prince Maestro revealed alive, Floor 5 (Air Quadrant/Dirigible Gnomes) preview. End state: Carl #3 L35+, Donut #4 L33, Katia #8 L41.

## [2026-05-28] ingest | Book 4: The Gate of the Feral Gods
Created: sources/book-4-gate-of-the-feral-gods.md. Floor 5 (Bubbles) covered. Key events: Maggie My occupied Chris's body (Infiltrator race), gnome fortress Wasteland taken, Gate of Feral Gods mechanic, Carl floods faction market, OIPAN pacifist group revealed as Carl's mysterious patron, Beatrice alive on Earth with Ferdinand/Gravy Boat. End state: Carl #1 Level 47, Donut #4 Level 39, Katia Level 44, entering Floor 6 (Hunting Grounds).

## [2026-05-28] ingest | Book 5: The Butcher's Masquerade
Created: sources/book-5-butchers-masquerade.md. Floor 6 (Hunting Grounds/Selva) covered. Key events: Vrah killed (Mongo/Kiwi), Imogen/Ifechi killed (country boss), Circe/Diwata stripped by Laundry Day L15, Eva killed (puts Crown on Katia as she dies), Princess Posse faction formed, Popov twins ESCAPED, Prepotente broke Floor 7 before anyone ran it. End: Donut #1 L55, Carl #3 L63, Katia L60 with Crown, entering Floor 8.

## [2026-05-28] ingest | Book 6: The Eye of the Bedlam Bride
Created wiki/sources/book-6-eye-of-the-bedlam-bride.md; updated carl.md (Books 3-6, Level 73, Eye of the Bedlam Bride tattoo); updated princess-donut.md (Level 63, Master Telephone Psychic, new items, hover skill, Lazarus-A-Bang-Bang deck); updated katia-grim.md (Level 60, Crown on Katia, Bolt of Ophiotaurus, drug issue, Ysalte kill); created sister-ines.md; created rosetta.md. Floor 8 complete. 33,804 crawlers survived to Floor 9.

## [2026-05-28] update | Character page backfill — Books 1–6
Fixed: agatha (Residual alien reveal), mordecai (Books 3-6, Odette/Uzzi revelation, cyclops form, foster kids), elle/mrs-mcgibbons (Books 3-6, Blizzardmancer, Level 47), imani-c (Books 3-6, Obsidian Butterfly, Floor 8 devastation, 4 PK skulls), mongo (Books 2-6, Level 40, Kiwi, burned wing), lucia-mar (Books 3-6, Florin subplot, status uncertain), odette (Books 2-6, Nekhebit, full Uzzi confession), frank-q (dead, Book 4), hekla (dead, Book 3), brandon-an (dead, Book 3). Created: samantha, prepotente, signet, florin, louis-santiago, juice-box, quasar, zev, chris-andrews-2, bautista, tran, britney, paz-lo.

## [2026-05-28] ingest | Book 7: This Inevitable Ruin
Created wiki/sources/book-7-this-inevitable-ruin.md; created tipid.md, justice-light.md; updated carl.md (Book 7: failsafe disabled, new wife?), princess-donut.md (Book 7: Deathbed Hellcat, CON 193, crown resolved), katia-grim.md (Book 7: ejected, pregnant, on Earth), mordecai.md (Book 7), louis-santiago.md (Book 7: gills, divorced), juice-box.md (Book 7: in the Nothing), samantha.md (Book 7). Floor 9 complete. 20,221 crawlers to Floor 10. Scolopendra awakened.

## [2026-05-28] ingest | Book 8: A Parade of Horribles
Created wiki/sources/book-8-parade-of-horribles.md; updated carl.md (Books 7-8: failsafe disabled, Kyryap, Mark of the Damned), princess-donut.md (Books 7-8: Level 135, divine claws, Gatekeeper spell, wrong biscuit). Floor 10-11 complete. 19 crawlers enter Floor 12. Scolopendra is now a Level 1 party member. Emberus dead. AI declared it will keep growing.

## [2026-05-28] ingest | Built wiki/floors/ (Floors 1-12)
Created all 12 floor pages from the 8 source summaries following the floor schema (Overview, Rules & Mechanics, Mob Roster, Bosses w/ tiers+kill methods, Key Events, Survivors). Floor 7 = destroyed/never-crawled special page; Floor 12 = active frontier. Indexed all 12 under Floors; added reciprocal source<->floor cross-links. Closes the largest gap from the 2026-05-28 wiki audit. No new broken links introduced (lint block/quality counts unchanged from baseline).

## [2026-05-28] ingest | Lore and Factions build-out (9 pages)
Created wiki/lore/ (5 pages: The Transformation, Primal Engine, The Nothing, Syndicate Legal Framework, Sheol) and 4 new faction pages (The Bloom, Valtay, Skull Empire, Desperado Club). The Bloom creation fixes the broken link from book-1 source summary.

## [2026-05-28] ingest | Tier 2 broken-link pages (Beatrice, Yolanda Martinez)
Created characters/beatrice.md and characters/yolanda-martinez.md — the two remaining broken-link stubs. All Tier 2 block bugs now resolved.

## [2026-05-28] ingest | Tier 3: factions + characters (15 pages)
Created 4 faction pages (Princess Posse, OIPAN, Brynhild's Daughters, NPC Home Team), 8 character pages (Scolopendra, Ferdinand, Eris, Taranis, Emberus, Maggie My, Li Na, Chandra), and updated 4 existing pages (Mordecai, Samantha, Louis Santiago, Mongo) with Book 8 events.

## [2026-05-28] ingest | Tier 4: mechanics split + character updates
Created 4 mechanics pages (Faction Wars, T'Ghee Cards, Race & Class, Leaderboard), added Penny stub. Updated 10 character pages to Book 7-8: agatha (War Mage Rebellion), odette (Nekhebit on Floor 12), juice-box (frontmatter fix), chris-andrews-2 (werewolf in Sheol), prepotente (Floor 12), lucia-mar (Chalchiuhtlicue revealed), rosetta (killed King Rust), florin (Floor 12), imani (Betrayal float), bautista (Pineapple Cabaret).

## [2026-05-28] ingest | Final sweep: stubs, updates, lint fix, boss-hierarchy
Created boss-hierarchy.md, harbinger.md, dr-metcalf.md. Updated britney (Sheol), mrs-mcgibbons (Floor 12, Betrayal float), quasar (Taurin assassins/Tempest), tran (Floor 10), tipid (Floor 12, lost legs). Fixed lint_wiki.py to exclude .wolf/ and .claude/ system directories. Lint should now read 0 block / 0 quality.
