# CARTEL CITY 3D — First-Person Browser Game

CARTEL CITY is an original **first-person 3D open-city crime strategy simulator** built with **Three.js, React and Vite**. It uses fictional contraband and in-game currency. The 3D browser edition was created as an accessible prototype with the exploration, contacts, economy and empire systems of the previous top-down version.

## Play online

**https://skibidifusion200810-star.github.io/drug-dealer-sim/**

GitHub Pages serves the production build from the public repository's `main` branch root. The GitHub workflow builds, tests and commits the compiled `index.html`, `assets/`, and `.nojekyll` to the root. If Pages has not been enabled yet, set **Settings → Pages → Deploy from a branch → main → / (root)**.

## First-person controls

| Action | PC | Mobile |
| --- | --- | --- |
| Walk | **W A S D** or arrow keys | Direction pad |
| Look around | **Click inside the 3D world**, then move mouse | Drag on the 3D world |
| Sprint | Hold **Shift** | Sprint control when available |
| Talk to NPC / enter a building | Look toward it while nearby, press **E** | Tap the on-screen **E / Use** button |
| Open navigation | **Tab** or **MENU** | Menu button |
| Open market directly | **I** | Navigation menu |
| Close menu / return to 3D world | **Esc** or panel **X** | Panel **X** |
| Unlock mouse | **Esc** | Not needed |

You can also click an interaction prompt when near a contact or a door.

**Navigation:** NPCs, shop locations, street businesses and other landmarks appear in the full 3D city. Walk up to a glowing entrance, face it and press **E** to enter a **real 3D indoor room**. Move through the room and use the indoor terminal to access the appropriate market, property or mission screen. Look at the exit door and press **E**, or use **EXIT** on the HUD.

### Gameplay systems

- **14 contact NPCs** have personalities, trust, product preferences, negotiation offers, success or failure and cooldowns.
- **Four fictional in-game products** have shifting prices, wholesale purchasing, selling, stock limits and progressive unlocks.
- **Six districts** have different prices, risk levels and territory-control challenges.
- **Police heat** rises with certain activities, causes simulated patrols and can lead to fictional raid penalties.
- **Crew and properties** automate small parts of the in-game economy and expand inventory capacity.
- **Courier missions** take you to physical destinations in the 3D city.
- **Save data persists locally** through your browser's localStorage. Progress from the previous 2D CARTEL CITY version uses the same save format.

**Important:** This is a **stylized, original 3D browser prototype**, not the commercial game Schedule I and not a full modern AAA 3D title. There are no copied Schedule I assets or proprietary code. No real online multiplayer, avatars shared between devices, real-time chat, or cloud account service is implemented. All products and currency are fictional.

## Develop locally

Requires Node.js 20+.

    npm install
    npm run dev

Open http://localhost:5173

    npm test
    npm run build

The source HTML is located at `source/index.html`, deliberately separate from the **compiled** `index.html` in the GitHub Pages branch root. The script `scripts/restore-entry.mjs` runs automatically before `npm run dev` or `npm run build` so rebuilding never tries to import the previous site's hashed assets.

For a local build that uses the GitHub Pages project path:

    VITE_BASE=/drug-dealer-sim/ npm run build
    npm run preview

For PowerShell:

    $env:VITE_BASE='/drug-dealer-sim/'
    npm run build
    npm run preview

## Technology

- `src/city.js` — Three.js first-person WebGL renderer, original procedural buildings and rooms, pedestrian animation, traffic, lighting, 3D NPCs and spatial interaction.
- `src/App.jsx` — React interface and 3D HUD.
- `src/engine.js` — game rules, stock, deals, heat, missions, crew and local saves.
- `src/data.js` — fictional contacts, products, building and neighborhood definitions.
- `src/styles.css` — responsive layout, splash experience, crosshair and mobile controls.
- `tests/engine.test.js` — gameplay simulation tests.
- `source/index.html` — canonical HTML entry for Vite.
- `.github/workflows/pages.yml` — build, automated testing and GitHub Pages deployment.

GitHub Pages is static hosting: **real persistent multiplayer requires an independently hosted backend**, which is not part of this edition.

### Graphics and compatibility

The 3D renderer requires WebGL on a reasonably modern browser with hardware acceleration enabled. Graphics are generated procedurally, so no paid models or external game assets are required. Mobile hardware may run the scene at a lower frame rate than desktop machines.
