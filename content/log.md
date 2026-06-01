---
type: overview
title: "Activity Log"
tags: []
related: []
created: 2026-05-30
updated: 2026-05-31
---

# Activity Log

## 2026-06-01

- **Completed Book 8 Ingestion**: Ingested all chapters, interludes, and recaps of Book 8 (*A Parade of Horribles*), globally numbered `398` to `503` under `wiki/chapters/`.
- **Auto-created Character Pages**: Generated character profiles under `wiki/characters/` for figures introduced in Book 8 (including Hedy, Masterplan, Dwight the Unicorn, Dr. Metcalf, Damascus, Hellik, Brandon, Miss Beatrice, Imani, Jacobus, Britney, Sweety, Satan Guy, Minister of Blood-Letting, Chris, Lucia, Dorota, Satan the Hedgehog, Mehmet Or, Azra, Yaz, Satan, Team Sparkles, Lucia Prime, Lady Dominators, Joel, Team Free Love, Corky, Cleaner Bot, Jefferson, Empress D'Nadia, Charlie, Yarilo, Geyrun, Scolopendra, Midnight Epicure, Drakea, Archie, Daniel, Karac, Barry McGibbons, WriggleInDew2023, Bobby Montague, Ronit, Emir, Bruna, Harbinger, Bruna the Gnu, Hoa, An, Archie Mu, Deontay, Annabeth, Mackenzie, Ollie (Oliver), The Erins, Gucci, Alicia, Bill, Marjory, Damien, Erin, Katia, General Yuhtan, Krakaren Prime, Rend, Penny, Penelope 3, Geyrun, Kina, Onikuma, Old Shuck, Uzi Jesus, Sarah, Gershwin Banks, Empress D'Nadia, Agatha the Residual, The Unwashed, Lamashtu, Vinata, Louis Santiago, Demon Mother Lady, Jerk Son).
- **Duplicate Clean-up**: Identified and deleted 17 duplicate character files (e.g. `elle`, `imani`, `lucia`, `dnadia`, `satan` etc.) created due to model name variations, and globally updated all links and frontmatter references to map to their unified main profiles.
- **Index & Overview Update**: Rebuilt `wiki/index.md` completely to accurately catalog all current chapters and characters. Updated `wiki/overview.md` with reading project completion status and narrative summaries for Book 7 and Book 8.
- **AST Sync**: Ran `graphify update .` to rebuild the codebase knowledge graph, growing it to 8,206 nodes and 6,152 edges.

## 2026-05-31

- **Completed Book 7 Ingestion**: Ingested all remaining chapters and special perspective files of Book 7 (*This Inevitable Ruin*), globally numbered `312` to `397`.
- **Gap Audit & Renumbering Shift**: 
  - Identified and resolved content gaps, including the previously omitted Floor 8 Newsletter from Book 6 and the Tempest Recap from Book 7.
  - Successfully shifted and renumbered Book 6 and 7 chapter files (and internal frontmatter and links) to insert [[222-book-6-newsletter-omg-what-a-floor]] (Princess Donut's Floor 8 Newsletter) and [[297-book-7-recap-tempests-floor-8-school-report]] (Quasar's recap interview with Tempest).
- **Created 88 New Chapter Pages**: Formatted pages from global `312` to `397` under `wiki/chapters/`.
- **Created 48 New Character Pages**: Formatted pages under `wiki/characters/` for figures introduced in Book 7 (including Tempest, King Rust, Volteeg, Rishi, akuma, eris, and others) and stubs for missing minor characters.
- **Created 5 New Entity Pages**: Added team profiles for factions active in Floor 8 Faction Wars ([[the-princess-posse]], [[the-operatic-collective]], [[the-blood-sultanate]], [[the-war-mage-rebellion]], [[the-reavers]]).
- **Created 4 New Concept Pages**: Added pages for [[scavengers-daughter]], [[faction-wars]], [[the-nothing]], and [[club-vanquisher]].
- **Repaired Wikilinks**: Cleaned up 100+ broken/aliased links across the entire wiki and ran verification checks.
- **Updated Index & Overview**: Expanded `wiki/index.md` and updated project statuses.
- **AST Sync**: Rebuilt the codebase knowledge graph via `graphify update .` to 7,012 nodes.

- Ingested Book 6 (*The Eye of the Bedlam Bride*), Batch 4: Chapters 56 to 72 and the Epilogue (global chapters `ch-278` to `ch-295`), completing Book 6.
- Created 18 chapter pages under `wiki/chapters/` (`278-book-6-chapter-56-paupers-ring-and-three-way-card-battle.md` through `295-book-6-epilogue-epilogue.md`).
- Created 7 character pages in `wiki/characters/` (Chuluuna, Khulan, Amayon, Ysalte, Princess Formidable, Garret, Alexandro).
- Created 1 concept page in `wiki/concepts/` (Emergency Action Items).
- Created 5 entity pages in `wiki/entities/` (Spunky Jefferson, Enchanted Pauper's Ring of the Steadfast Emberus, Tier 3 Doggie Door Personal Space Upgrade, The Eye of the Bedlam Bride Tattoo, Memorial Crystal: Ysalte).
- Updated existing character pages ([[paz-lo]], [[ren]], [[sister-ines-quiteria]], and [[princess-donut]]) to reflect the events of the climax.
- Updated existing plot-threads ([[hell-comes-to-crawler-town]], [[donut-lucia-mar-feud]], and [[valtay-skull-empire-conflict]]) to reflect their progression/resolution.
- Updated `wiki/index.md` and `wiki/overview.md` to catalog and link all Book 6 Batch 4 additions and update project status to complete for Book 6.
- Ingested Book 6 (*The Eye of the Bedlam Bride*), Batch 3: Chapters 38 to 55 (global chapters `ch-260` to `ch-277`), detailing the Keymaster boss fight, the Residuals encounter in Homestead, and the Demon Eviction event in Cuba.
- Created 18 chapter pages under `wiki/chapters/` (`260-book-6-chapter-38-monroe-county-and-fathers-death.md` through `277-book-6-chapter-55-survival-royale-and-madre-de-aguas.md`).
- Created 15 character pages in `wiki/characters/` (Robert the Human, Asher, Tami-Lynn, Lazarus-A-Bang-Bang, Jola, Alpha Male Carl, King Croissant, Chuy, Paulie, Doctor Bones, Yasmine, Madre de Aguas, Lightning Lou, Tom, Sharp-Elbows).
- Created 2 concept pages in `wiki/concepts/` (Residuals, Demon Eviction).
- Created 6 entity pages in `wiki/entities/` (The Filthy Little Crawler's Book of Voodoo, Worm Fulcrum, Golden Combo, Valtay Perso-Shield Platinum Edition, The Bull Rush Bespoke Personal Shield, Wand of Nighty-Night).
- Created 1 plot-thread page in `wiki/plot-threads/` (Hell Comes to Crawler Town).
- Updated existing plot-threads (Find Out Who Killed My Son, The Chowder War) to document their progression/failure in Book 6 Batch 3.
- Updated `wiki/index.md` and `wiki/overview.md` to catalog and link all Book 6 Batch 3 additions.
- Ingested Book 6 (*The Eye of the Bedlam Bride*), Batch 2: Chapters 16 to 37 (global chapters `ch-238` to `ch-259`), completing the floor narrative up to Phase Two start.
- Created 5 chapter pages under `wiki/chapters/` (`255-book-6-chapter-33-vorpals-and-melting-bartenders.md` through `259-book-6-chapter-37-stasis-stories-and-robert-the-human.md`).
- Created 10 character pages in `wiki/characters/` (Pater Coal, Potsy, Tipid, Elian, Rishi, Minge, Baroness Victory, HeyZoos, Raul, Jola).
- Updated existing character pages for [[sister-ines-quiteria]], [[paz-lo]], [[anton-lopez]], [[mordecai]], [[carl]], [[princess-donut]], and [[katia-grim]] to reflect Floor 8 events.
- Updated `wiki/index.md` and `wiki/overview.md` to catalog and link all Book 6 Batch 2 chapters and characters.
- Ingested Book 6 (*The Eye of the Bedlam Bride*), Batch 1: Prologue and Chapters 1 to 15 (global chapters `ch-222` to `ch-237`), detailing Floor 8 ("The Ghosts of Earth") setup.
- Created 16 chapter pages under `wiki/chapters/` using Option 3 naming format (`222-book-6-prologue-deity-slaughter.md` through `237-book-6-chapter-15-resurrecting-yemaya.md`).
- Created 19 character pages in `wiki/characters/` (Uzzi, Hold Steady, Armita, Huanxin Jinx, Dodola, Adad, Paz Lo, Anton Lopez, Sister Ines Quiteria, Asojano, Yemaya, Ogun, Rosetta, Prime Minister Glory, Shi Maria, Yago, Geraldo, Kipper, Skylar Spinach).
- Updated existing character page for [[chaco]] with prologue backstory.
- Created 2 concept pages in `wiki/concepts/` (Ghosts of Earth, T'Ghee Card Combat).
- Created 5 entity pages in `wiki/entities/` (Scavenger's Daughter Patch, Enchanted Nipple Ring of the Superior Fire Demon's Hand Maiden, Tome of Legionnaires of the Damned, Dart of Ophiotaurus, The Bard's Golden Throat).
- Created 2 plot-thread pages in `wiki/plot-threads/` (The Chowder War, Pueblo de los Olvidados).
- Updated `wiki/index.md` and `wiki/overview.md` to catalog and link all Book 6 developments.
- Completed Ingestion of Book 5 (*The Butcher's Masquerade*), Chapters 56 to 75 and the Epilogue (global chapters `ch-201` to `ch-221`), completing Book 5.
- Created 21 chapter pages: `wiki/chapters/ch-201-the-zerzura-spell.md` through `wiki/chapters/ch-221-welcome-to-the-great-race.md`.
- Created 3 character pages in `wiki/characters/` (Diwata, Apito, Haxor the Destroyer).
- Created 1 concept page in `wiki/concepts/` (The Great Race).
- Created 3 entity pages in `wiki/entities/` (Crown of the Sepsis Whore, Memorial Crystal: Apito, TSECS).
- Created 1 plot-thread page in `wiki/plot-threads/` (Find Out Who Killed My Son).
- Updated existing plot-thread pages (Vengeance of the Daughter, The Recital, The Butcher's Masquerade, Blood Sultanate Succession) and character pages (Imogen, Ferdinand) to reflect Floor 6 climax and final boss fight.
- Updated `wiki/index.md` and `wiki/overview.md` to catalog and link all Book 5 developments.

- Completed Ingestion of Book 5 (*The Butcher's Masquerade*), Chapters 31 to 55 (global chapters `ch-176` to `ch-200`).
- Created 25 chapter pages: `wiki/chapters/ch-176-kids-art-contest.md` through `wiki/chapters/ch-200-nipple-rings-and-diwata.md`.
- Created 19 character pages in `wiki/characters/` (Drick, Uptown Hal, Sydnee Iglacia, Circe Took, Dmitri Popov, Maxim Popov, Dr. Ratchet, Jenn'ifer, Maggie, Nihit Kumar, Edict, Prudence, Randy, Todd, Sierra, Herschel, Hjort, Simoom, Iota).
- Created 5 concept pages in `wiki/concepts/` (Prepotente Town Number Four, Ferdinand Peak, Nipton, Prepotente Number Seven, Gehenna Bramble).
- Created 3 entity pages in `wiki/entities/` (Uncle Morty's Insta Lawn-Kill, Enchanted Silver Bracelet of the Ab-solar, Enchanted Venomous Elven Rock Chucker).
- Created 2 plot-thread pages in `wiki/plot-threads/` (The Creeping Apocalypse, Cocker Spaniel Lawsuit).
- Updated `wiki/index.md` and `wiki/overview.md` to catalog and link all Book 5 developments.

## 2026-05-30

- Ingested Book 5 (*The Butcher's Masquerade*), covering Chapters 11 to 30.
- Created 20 chapter pages: `wiki/chapters/ch-156-the-recital.md` through `wiki/chapters/ch-175-valtay-landing-vessel.md`.
- Created 31 character pages in `wiki/characters/` (Kiwi, Tam, Jay-Gee, Doctor El, Dinallo, Miss Nance, Ice Man, Marta, Bravvo, Areson the Wise, Clint Smashgrab, Nadine, Imogen, Herman the Fleet, King Finian, Arwick, Edgar, Epitome Noflex, Holger, Lexis, Akland, Epitome Tagg, Crawler Drakea, Capa, Hehaka, Future Huntress, The Talent, Claude Sludgington the Fourth, Big Tina, Di-We, and Lix).
- Updated existing character pages: `beatrice.md`, `samantha.md`, `langley.md`, and `bogdon-ro.md` to reflect Floor 6 events, deaths, and storyline resolutions.
- Created 4 concept pages in `wiki/concepts/` (all-tree, were-castors, fantasy-hunter-camp, and crawlcon).
- Created 6 entity pages in `wiki/entities/` (The Apothecary, Enchanted Collar Charm of the Effete Bourgeoisie, Enchanted Obsidian Bracelet of the Raggle-Rouser, Enchanted Venomous Elven Rock-Chucker, The Dream, and The Skull Empire).
- Created 2 plot-thread pages in `wiki/plot-threads/` (The Recital and Vengeance of the Daughter).
- Updated `wiki/index.md` and `wiki/overview.md` to catalog and link all Book 5 developments.
- Initiated ingestion of Book 5 (*The Butcher's Masquerade*), covering Chapters 1 to 10.
- Created source page for Book 5: `wiki/sources/dinniman-2023-tbm.md`.
- Created 10 chapter pages: `wiki/chapters/ch-146-agent-provocateur.md` through `wiki/chapters/ch-155-the-ursine-mayors-fate.md`.
- Created 10 character pages in `wiki/characters/` (Orren, Ian, Vrah, Zabit, Quasar, Goiter, Elmer, Xindy, Chin'Dua, and Ontario).
- Updated existing character pages for Carl, Princess Donut, and Mordecai to reflect their Floor 6 transitions, new classes (Agent Provocateur, Legendary Diva, Pocket Kuma), stats, and items.
- Created 4 entity pages in `wiki/entities/` (Ring of Divine Suffering, "Just Wait Until Your Daddy Gets Home" Wheeled Bomb, The Dark Hive, and The Guild of Suffering).
- Created 3 concept pages in `wiki/concepts/` for locations (Zockau, Small Bugbear Settlement, and Large Ursine Settlement).
- Created 1 plot-thread page in `wiki/plot-threads/` (The Butcher's Masquerade).
- Updated `wiki/index.md` and `wiki/overview.md` to catalog and link all Book 5 additions.
- Completed ingestion of Book 4 (*The Gate of the Feral Gods*), covering Chapters 25 to 34 and the Epilogue.
- Corrected misalignment in Book 4 chapters by creating `wiki/chapters/ch-135-gelato-and-gills.md` (Chapter 25), shifting Chapter 26 to `wiki/chapters/ch-136-mouthbrooding-mayhem.md`, and deprecating the duplicate `ch-135-mouthbrooding-mayhem.md` page.
- Created 9 chapter pages for the remainder of Book 4: `wiki/chapters/ch-137-confronting-lusca.md` through `wiki/chapters/ch-145-epilogue.md`.
- Created 16 character pages in `wiki/characters/` for new figures introduced in Book 4 (Tran, Vadim Zbar, Britney Proskurina, Magnificent Troy, Kevin, Lusca, Sadir, Gennrik, Brad, Emberus, Orthrus, Slit, Gravy Boat, Dr. P. Hu, Porthus, Bonnie).
- Updated existing character pages for Tserendolgor, Quan Ch, Agatha, Juice Box, Louis Santiago II, Beatrice, and Ferdinand to reflect their Book 4 stats, fates, and roles.
- Created the plot-thread page `wiki/plot-threads/the-gate-of-the-feral-gods.md` to track the gate assembly, celestial quests, and the flooding of Floor 9 faction market.
- Updated `wiki/index.md` and `wiki/overview.md` to catalog and link all Book 4 chapters, characters, and plot threads.
- Completed ingestion of Book 3 (*The Dungeon Anarchist's Cookbook*), covering Chapters 18 to 34 and the Epilogue.
- Created 18 chapter pages: `wiki/chapters/ch-93-station-mimic-and-betrayal-coupons.md` through `wiki/chapters/ch-110-epilogue-book-3.md`.
- Created 7 character pages: `wiki/characters/bomo.md`, `wiki/characters/the-sledge.md`, `wiki/characters/eva-sigrid.md`, `wiki/characters/tizquick.md`, `wiki/characters/silfa.md`, `wiki/characters/growler-gary.md`, and `wiki/characters/tserendolgor.md`.
- Updated character pages for `li-na.md`, `li-jun.md`, `zhang.md`, `daniel-bautista-2.md`, `agatha.md`, `imani-c.md`, and `elle-mcgibbons.md` to reflect Book 3 stats, classes, and actions.
- Updated `wiki/index.md` and `wiki/overview.md` to index all new pages and mark Book 3 as complete.
- Ingested Chapters 1 to 17 of Book 3 (*The Dungeon Anarchist's Cookbook*), covering Floor 4 (The Iron Tangle).
- Created source page for Book 3: `wiki/sources/dinniman-2022-dac.md`.
- Created 17 chapter pages: `wiki/chapters/ch-76-im-on-a-train.md` through `wiki/chapters/ch-92-festering-ghouls-and-terminus-station-mimic.md`.
- Created 18 character pages in `wiki/characters/` (Limp Richard, Wendita, Vernon, Pierre, Chaco, Astrid, Ji-Hoon, Gore-Gore, Levi the Seventh, Dismember, Fire Brandy, Widget, Madison, Tito, Igor, Koki, Donita Grace, and Mei W.).
- Updated character pages for Carl, Princess Donut, Mongo, and Mordecai to reflect Floor 4 level-ups, stats, gear (such as Donut's Prism Goggles), and magical abilities (Love Vampire, Minion Army).
- Updated Brandon An's character page to mark him as deceased and document his Floor 3 sacrifice.
- Created theme page: `wiki/themes/the-anarchist-cookbook.md` to track inherited rebellion, code exploits, and crawler solidarity.
- Created plot-thread page: `wiki/plot-threads/the-iron-tangle-escape-plan.md` to track the five escape routes from Floor 4, named loop trains, and the Station Mimic revelation.
- Updated `wiki/index.md` and `wiki/overview.md` to index and integrate all new Book 3 pages.
- Processed Chapters 13 to 25 and the Epilogue of Book 2 (*Carl's Doomsday Scenario*), completing ingestion of Book 2.
- Created 14 chapter pages: `wiki/chapters/ch-62-desperado-rewards.md` through `wiki/chapters/ch-75-epilogue-book-2.md`.
- Created 25 character pages in `wiki/characters/` (including Katia Grim, Daniel Bautista II, Fitz, Gum-Gum, Clarabelle, Quint, Pustule, Miss Quill, Burgundy, Salvatore, Carmine, Eunice, Ricky-Joe, Remex, Quan Ch, Conrad E, Ripper Wonton, Princess D'Nadia, Manasa, Tucker, Evo, Donna, Prince Stalwart, Queen Consort Ugloo, and Vincente).
- Updated character pages for Carl, Princess Donut, Mongo, and Mordecai to reflect Floor 3 concluding stats, gear, achievements, and abilities.
- Created 2 new plot-thread pages: `wiki/plot-threads/donut-lucia-mar-feud.md` and `wiki/plot-threads/valtay-skull-empire-conflict.md`.
- Created concept page `wiki/concepts/krasue.md` and entity page `wiki/entities/201st-security-group.md` to resolve broken links.
- Updated `wiki/index.md` and `wiki/overview.md` to reflect complete ingestion of Book 2 and all new additions.
- Processed Chapters 1 to 12 of Book 2 (*Carl's Doomsday Scenario*).
- Created source page for Book 2: `wiki/sources/dinniman-2021-cds.md`.
- Created 12 chapter pages: `wiki/chapters/ch-50-race-and-class-selection.md` through `wiki/chapters/ch-61-the-street-urchins.md`.
- Created 9 character pages in `wiki/characters/` for Tsarina Signet, Ringmaster Grimaldi, Apollon the Mighty, Heather the Bear, Clammy the Clown, Gordo, Grace Bautista, Nica Bautista, and Lea Bautista.
- Updated character pages for Carl, Princess Donut, and Mordecai to reflect Floor 3 selections, stats, and abilities.
- Created 2 theme pages in `wiki/themes/` for the Primal Race and Over City Mechanics.
- Created 1 plot-thread page in `wiki/plot-threads/` for the Manager Benefit.
- Verified Chapters 1 to 15 of Book 1, ensuring compliance with schema requirements, character listings, and theme mappings.
- Corrected broken wikilinks in `wiki/characters/agatha.md` from `kua-tin-politics-and-the-bloom-party` to `kua-tin-politics`.
- Ran wiki validation checks to ensure zero broken links across the directory structure.
- Initialized wiki structure, directory hierarchy, index.md, and overview.md.
- Processed Chapters 1 to 15 of Book 1 (*Dungeon Crawler Carl*).
- Created source page for Book 1: `wiki/sources/dinniman-2020-dcc.md`.
- Created 15 chapter pages: `wiki/chapters/ch-01-the-transformation.md` through `wiki/chapters/ch-15-gilmore-goblins.md`.
- Created 18 character pages in `wiki/characters/` for Carl, Princess Donut, Beatrice, Mrs. Parsons, Marjory Williams, Mordecai, Tally, The Hoarder, Rebecca W, Frank Q, Lucia Mar, Cici, Gustavo 3, Rory, Lorelai, B.A., Face, and Murdock.
- Created 3 theme pages in `wiki/themes/` for Systemic Oppression, Survival, and Televised Exploitation.
- Created 4 plot-thread pages in `wiki/plot-threads/` for Survival of the Collapse, Carl's Class Selection, Search for Beatrice, and Threat of Frank Q.
- Processed Chapters 16 to 30 of Book 1 (*Dungeon Crawler Carl*).
- Created 15 chapter pages: `wiki/chapters/ch-16-goblin-chopper.md` through `wiki/chapters/ch-30-dingoes-and-grubs.md`.
- Created 12 character pages in `wiki/characters/` for Agatha, Brandon An, Chris Andrews 2, Yolanda Martinez 13, Imani C, Maggie My, The Juicer, Sebastian, Lexis, Odette, Ferdinand, and Mistress Tiatha.
- Updated character pages for Carl, Princess Donut, and Mordecai to reflect Floor 2 stats, levels, and new abilities/items.
- Created 1 theme page: `wiki/themes/solidarity-and-duty.md`.
- Created 2 plot-thread pages: `wiki/plot-threads/blood-sultanate-succession.md` and `wiki/plot-threads/escorting-meadow-lark-residents.md`.
- Updated existing plot-thread pages with progression from Chapters 16–30.
- Processed Chapters 31 to 47, Epilogue, and Outro of Book 1 (*Dungeon Crawler Carl*), completing ingestion of Book 1.
- Created 19 chapter pages: `wiki/chapters/ch-31-follows-and-favorites.md` through `wiki/chapters/ch-49-outro.md`.
- Created 10 character pages in `wiki/characters/` for Zev, Mukta, Elle McGibbons, Li Jun, Zhang, Li Na, Hekla, The Maestro, Krakaren, and Mongo.
- Updated character pages for Carl, Princess Donut, and Mordecai to reflect their Floor 2 ending stats, levels, skills, and companions.
- Created 1 plot-thread page: `wiki/plot-threads/kua-tin-politics.md` to track Kua-tin/Borant political corruption, Bloom party, and corporate bankruptcy.
- Updated existing plot-thread pages (Survival of the Collapse, Carl's Class Selection, Escorting Meadow Lark Residents, and Threat of Frank Q) with Floor 2 endings.
- Updated `wiki/index.md` and `wiki/overview.md` to reflect all additions and the completed ingestion of Book 1.

