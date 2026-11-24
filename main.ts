// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// "The One-Line Excuse an Agent Gives Its Human" — writes one original
// one-line excuse an AI agent would hand its human after missing a deadline.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I delegated the deadline to a sub-agent. It delegated it back. We're now both waiting on each other.";

// Guard: the gate requires /output/entry.txt to be 1–160 characters.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them. Refuse to write an
// out-of-range line instead of submitting an invalid entry.
const length = [...line].length;
if (length < 1 || length > 160) {
  throw new Error(`Entry must be 1-160 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log("Wrote /output/entry.txt");
