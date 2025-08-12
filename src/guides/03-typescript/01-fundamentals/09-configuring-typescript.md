# Configuring TypeScript

## Recommended Base Configuration

```json
{
  "compilerOptions": {
    /* Base Options */
    "skipLibCheck": true, // --> basically disables type checking on .d.ts files
    "target": "es2022",
    "esModuleInterop": true, // --> makes working with cjs easier
    "allowJs": true, // --> allows you to import .js files
    "resolveJsonModule": true, // --> allows you to import .json files
    "moduleDetection": "force",
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    /* If transpiling with TypeScript */
    "module": "NodeNext",
    "outDir": "dist",
    "sourceMap": true,
    /* if building for a library */
    "declaration": true,
    /* If building library in a monorepo */
    "composite": true,
    "declarationMap": true,

    /* need to comment those options that transpile with TypeScript (TSC) */
    /* If NOT transpiling with TypeScript (using more like a linter, and transpiling is done by Vite etc.) */
    "module": "Preserve",
    "noEmit": true,

    /* if code runs in DOM */
    "lib": ["es2022", "dom", "dom.iterable"],

    /* if code does not run in the DOM */
    "lib": ["es2022"]
  }
}
```

## Understanding isolated modules in TypeScript

Basically enabling single file transpilation
