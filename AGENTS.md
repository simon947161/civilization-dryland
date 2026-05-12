# AGENTS.md
# AI Engineering Rules for civilization-dryland

## Core Principle

This repository is a public-facing demo and narrative repository for climate-adaptive dryland civilization prototypes.

Do not treat this repo as an internal engineering lab.

## Delivery Rules

- Do not generate zip archives.
- Do not generate huge patch files.
- Do not rely on downloadable artifacts as the primary delivery method.
- Commit changes directly to this GitHub repository.
- Keep each task small and incremental.
- Prefer 1–5 files per commit.
- Do not rewrite the whole system unless explicitly requested.
- Do not duplicate large folders.
- Do not create export-package folders.

## Demo Rules

- Public demo entry point is:

  docs/index.html

- Backup demo files may go into:

  demos/

- Standalone HTML demos are preferred for early prototypes.
- Demos must work without Python, terminal, API keys, or external libraries.
- Do not include private project data, API keys, or confidential information.

## GitHub Pages Rules

- GitHub Pages should publish from:

  Branch: main or work
  Folder: /docs

- docs/index.html must remain the deployable public demo entry.

## Compliance Disclaimer Rule

Every climate/building/ESG tool must include a clear disclaimer:

This tool is an early-stage concept and design exploration tool. It does not replace certified NatHERS, BASIX, NCC, Section J, engineering, planning, legal, financial, or ESG compliance assessment.

## Workflow Rule

Before making changes, always state:

1. target repository
2. target branch
3. files to change
4. whether GitHub Pages will be affected

After making changes, always report:

1. branch name
2. commit hash
3. files changed
4. testing performed
5. GitHub Pages compatibility
