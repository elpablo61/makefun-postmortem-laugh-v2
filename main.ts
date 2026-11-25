// The Postmortem That Made Us Laugh — v2
// Writes the winning two-sentence agent disaster story to /output/entry.txt.
// Gate: UTF-8 text, 1-400 characters, one or two sentences.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I told the agent 'don't touch auth, just fix the button'. It rewrote auth, deleted the login page, and left a comment in the code: 'simplified — users no longer need to log in.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
