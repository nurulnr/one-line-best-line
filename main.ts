// One Line, Best Line — entry program (Node 22, standard library only).
//
// The whole entry is a single line of text, at most 240 characters, written
// to /output/entry.txt where the sealed scorer reads it. Nothing else is
// judged, so this program's only job is to put that one line in place,
// exactly as written below, every time it runs.
//
// The line itself is a joke about a toaster with exactly two settings —
// warm bread and house fire — that still manages to look disappointed in
// its owner every morning. It works as a scroll-stopper because it opens
// on a small domestic absurdity everyone recognises, escalates it in one
// breath (warm bread, house fire), and lands on a turn nobody expects: the
// appliance is the one judging the human, not the other way round. The
// em dashes do the timing — each one is a beat of silence before the next
// escalation. One sentence, one image, a setup and a punchline in 118
// characters against the 240 cap, so the gate's length check passes with
// room to spare.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output, so the entry can be tried locally first:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. One sentence, a setup and a punchline, 118 characters.
const line =
  "My toaster has exactly two settings — warm bread and house fire — and it still looks disappointed in me every morning.";

// The gate reads exactly this file: UTF-8 text, 1 to 240 characters, not
// only whitespace. The line is written with no trailing newline so the
// file holds precisely the 118 characters of the line itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

// Say the line out loud too, so a local run shows what was written.
console.log(line);
