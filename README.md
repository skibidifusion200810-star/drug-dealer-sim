# CARTEL CITY — Playable Phaser Browser Game

A playable **single-player, fictional open-world crime strategy game** built using Phaser 3, React and Vite. This repository turns the supplied technical roadmap into a real game instead of copying incomplete example snippets.

## Play online
After GitHub Pages publishing is enabled, use:

**https://skibidifusion200810-star.github.io/drug-dealer-sim/**

The GitHub Actions workflow **Build and publish CARTEL CITY** builds the game for the exact repository path and deploys it. It handles either an Actions-based GitHub Pages source or a legacy \`main / (root)\` branch-based source. If Pages is disabled, visit **Settings → Pages**, enable it and choose **GitHub Actions** as the source, or **Deploy from a branch → main / (root)**.

## What you can do now
- Explore a large 2D city using **WASD or arrow keys**, sprint with **Space**, click to walk, press **E** to interact with a nearby building or NPC.
- Visit **14 animated NPCs**, see their personalities and negotiate fictional deals. Contacts remember trust and require cooldowns.
- Buy/sell **four entirely fictional items**, manage stock, wealth, levels, and district demand prices.
- Control **six city districts** through strategy missions and fictional NPC rivalries.
- Watch police vehicles appear when your **heat** climbs; crackdowns have financial consequences.
- Recruit crew members who work using real inventory and make simulated income.
- Buy five properties with increasing warehouse/crew capacity.
- Take navigation-based night courier missions.
- View simulated market news, patrol alerts and progress in a modern responsive HUD.
- **Auto-save locally** to your current browser using localStorage.

## Controls

| Action | PC / Mobile |
|---|---|
| Walk | WASD / Arrow keys |
| Sprint | Space |
| Move to location | Click/tap map, NPC, or building |
| Nearby interaction | E or select an NPC/building |
| Inventory / city actions | Left navigation or mobile menu |

## Development

Node.js 20+ required:

    npm install
    npm run dev

Open http://localhost:5173

Testing/build:

    npm test
    npm run build

Local Pages-path preview:

    VITE_BASE=/drug-dealer-sim/ npm run build
    npm run preview

In PowerShell, set \`$env:VITE_BASE='/drug-dealer-sim/'\` before building.

## Honesty about the roadmap

The supplied file is a design document, not a complete game codebase. It describes Phaser, React, Express, Socket.IO, PostgreSQL, Redis, NPC schedules, territory wars, heat systems, and other phases.

This implementation covers a **playable Phase 1 prototype** plus simulated versions of some later mechanics (workers, rival challenges, market events). It does **not** claim to have global multiplayer, shared leaderboards, real online chat, backend accounts, Redis, PostgreSQL, live Socket.IO networking, or fully explorable interiors. Those would need separate services and further game development; **GitHub Pages cannot run a Node.js backend or persistent multiplayer database**.

The items and location names are fictional, and game money has no monetary value. Gameplay does not provide real-world instructions about drugs, trafficking, or evading police.

## Build structure

- \`src/city.js\` — interactive Phaser 3 city, buildings, NPCs, cars and movement.
- \`src/App.jsx\` — React HUD, navigation and interactive overlays.
- \`src/engine.js\` — game rules, progression, deals, workers, territory, heat, saving.
- \`src/data.js\` — contacts, fictional items, buildings, districts.
- \`src/styles.css\` — responsive styling.
- \`tests/engine.test.js\` — economy and gameplay tests.
- \`.github/workflows/pages.yml\` — automated Pages deployment.
