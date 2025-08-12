# NX Versioning

## Overview

This guide aims to highlight the key points of NX Versioning.

## Introduction

The core `nx release` command handles versioning, changelogs and releases but its intentionally framework-agnostic. (i.e., can version other applications/packages that are not javascript based).

To work with JavaScript packages, we will need `@nx/js` plugin.

:::info
Extra tip, can run `pnpm nx add <nx related dependenchy>` for automatic handling of updating `nx.json` as well as `package.json`
:::

## Versioning with Conventional Commits in NX

In `nx.json`

```json
 "release": {
    "version": {
      "conventionalCommits": true
    },
  }
```

NX will infer based on the commit message and determine the version bump for us instead of having a CLI prompt.

The following are the mapping

- fix => patch
- feat => minor
- Breaking change => major

## Configure Commit Types for Flexible Versioning

Can also configure commit types for flexible versioning

```json
"conventionalCommits": {
      "types": {
        "docs": {
          "semverBump": "none"
        },
        "style": {
          "semverBump": "patch"
        }
      }
}
```

## Creating Custom Release Scripts with Nx's API

```ts
import { releaseVersion, releaseChangelogs, releasePublish } from "nx/release";

(async () => await releaseVersion({}))();
```

## Commands

```
pnpm nx release --skip-publish --projects=ams-core-web --dry-run
```
