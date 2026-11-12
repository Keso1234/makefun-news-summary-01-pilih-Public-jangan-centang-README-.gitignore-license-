// news-summary-01 entry (Node 22, standard library only): the summary is the
// summary.txt beside this file, and the program copies it byte-for-byte to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt when unset). The copy
// is exact, so the judged text is exactly summary.txt: 1-2000 characters,
// one English summary of world news from Wednesday 11 November 2026, with
// a named outlet for each of its ten stories.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./summary.txt', import.meta.url), join(outputDir, 'entry.txt'));
