# Vite Template

- **Language**:    [TypeScript]
- **Formatter**:   [Biome]
- **Linter**:      [Biome]
- **Build tools**: [Vite]
- **Framework**:   -

## First Steps

1. Clone this repository and select branch:
   ```bash
   git switch <master | react | svelte>
   ```
2. Remove `.git` directory and initialize new one:
   ```bash
   rm -rf .git
   git init
   ```
3. Update packages using `--save` option:
   ```bash
   npm update --save
   ```

## Commands

- `build` - Build production files to `dist` directory
- `dev` - Run dev server on http://localhost:3002
- `fix` - Format code, organize imports and apply safe and unsafe fixes
- `preview` - Run server from `dist` directory on http://0.0.0.0:3002

## Aliases

- `@/*` - `./src/*`
- `@public/*` - `./public/*`

<!-- Links -->

[TypeScript]: https://www.typescriptlang.org/
[Biome]: https://biomejs.dev/
[Vite]: https://vite.dev/
