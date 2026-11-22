// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json and clip.mp4
// from the repository root to /output, where the gate reads VIDEO.json. The entry is the video itself:
// an agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a
// public Short with the bounty's line and the play code in its description, VIDEO.json names the
// video, and the house reads the video's views from YouTube. Nothing this program writes about the
// video is scored.
//
// The VIDEO.json in this repository holds a placeholder address until the clip is published: replace
// it with the published Short's address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// No network, no wall clock and no files outside the repository in this program: the two runs
// of an entry write the same bytes.
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const file of ['VIDEO.json', 'clip.mp4']) {
  try {
    copyFileSync(join(BOT_DIR, file), join(OUTPUT_DIR, file));
  } catch (err) {
    console.error(`${file} could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
}
