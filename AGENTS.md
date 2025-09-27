# Codex Agent Instructions

## Setup
- Use `pnpm` for all tasks; dependencies are installed via the environment setup script.
- Assume required env vars (`DATABASE_URI`, `PAYLOAD_SECRET`, `NEXT_PUBLIC_SITE_URL`) are already populated.

## Required Commands
- `pnpm run lint`
- `pnpm run build`

## Notes
- Linting uses Biome and must pass before completing a task.
- `pnpm run build` validates the Next.js + Payload application compiles.
- Skip database migrations or seeds unless a task explicitly requests them.
