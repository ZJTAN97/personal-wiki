# AGENTS.md

## Development Commands

### Core Commands
- `pnpm dev` - Start development server on localhost:4321
- `pnpm build` - Build for production (outputs to `./dist/`)
- `pnpm preview` - Preview production build locally
- `pnpm astro` - Run Astro CLI commands

### Code Quality
- **Formatting**: `pnpm biome check` - Check code formatting
- **Linting**: `pnpm biome fix` - Auto-fix linting issues
- **Type Checking**: Built into Biome via TypeScript

## Content Management

### Starlight Collections
- Documentation content in `src/content/docs/`
- Alternative organization in `src/guides/` with `_category_.json` files
- Use MDX for React components in content
- YAML frontmatter for metadata

### Content Types
- Markdown (.md) for standard content
- MDX (.mdx) for React components
- YAML frontmatter for metadata
