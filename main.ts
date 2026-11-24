import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "We rent out fake paparazzi to trail aspiring influencers through cafes flashing cameras, because nothing sells fame faster than a crowd pretending you already have it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
