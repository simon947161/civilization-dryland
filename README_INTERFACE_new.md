# Eco Engine Human Interface Console v0.1

The Eco Engine Human Interface Console is a local HTML observation layer for reviewing existing Eco Engine runtime outputs from one human-readable dashboard. It does not redesign runtime calculations, scheduling, formulas, architecture, or frozen runtime state.

## Human-in-the-loop runtime concept

The console exists for human-in-the-loop runtime observation. It gives an operator a visual place to inspect ecological balance movement, spatial drift, alert context, and reports before making written interpretations outside the runtime core.

This is not a control panel. It does not submit commands back into Eco Engine and does not add a server, API, authentication layer, blockchain feature, or machine learning system.

## Current runtime observation workflow

1. Open `open_interface.bat` from the repository root.
2. Review the Runtime Status Header and local runtime awareness timestamps.
3. Inspect Eco Balance, risk, spatial point map, and spatial animation cards.
4. Open report links for detailed runtime evidence.
5. Review the Alert Summary for warning, critical, and stable observation states.
6. Move the Eco Balance threshold slider to understand interpretation bands.
7. Use the Human Observation Notes text area for temporary operator notes.
8. Copy the Runtime Interpretation Prompt when preparing a human ecological interpretation.

## Displayed charts and runtime outputs

The interface displays or links to these local runtime artifacts:

- `../charts/eco_balance_daily.png` — Eco Balance Lifeline.
- `../charts/risk_index_daily.png` — Risk Index Chart.
- `../charts/spatial/eco_balance_site_points_latest.png` — Spatial Ecological Surface with a local NSW/VIC southeast Australia base-map layer.
- `../charts/spatial/eco_balance_spatial_animation_latest.gif` — Spatial Runtime Animation.
- `../reports/daily_runtime_summary_latest.md` — Daily runtime summary.
- `../reports/spatial_drift_summary_latest.md` — Spatial drift summary.
- `../reports/runtime_alerts_latest.md` — Runtime alerts.

## Spatial base-map generation

Run `python operations/spatial_runtime_operations_manager.py` or `run_spatial_operations_manual.bat` from the repository root to refresh the spatial map. The generator uses a local simplified NSW/VIC regional outline with labels for NSW, VIC, Snowy Mountains, Riverina, and Alpine / High Country. It does not use Google Maps, paid services, API keys, or runtime formula changes.

## Static vs dynamic behavior

Static in v0.1:

- Chart and animation file locations.
- Report link names.
- Alert card categories.
- Human notes are temporary and are not saved.

Dynamic in v0.1:

- Current local timestamp and runtime awareness labels update in the browser.
- Eco Balance threshold slider updates the active interpretation band.
- Copy button writes the runtime interpretation prompt to the clipboard when browser permissions allow it.
- Runtime images receive a cache-busting timestamp when the page loads.

## Future Climate Console direction

Future versions can evolve this observation layer into a broader Climate Console by adding richer report discovery, persisted human notes, additional spatial surfaces, comparison views, and deeper operator review workflows while keeping runtime calculations and Eco Balance formulas protected from interface-layer changes.

## Human-in-the-loop philosophy

Eco Engine Human Interface Layer

The purpose of this interface is not full automation.

The purpose is ecological observation, interpretation, and human-runtime interaction.

Human understanding remains part of the runtime process.
