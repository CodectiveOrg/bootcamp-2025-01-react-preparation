import { Vibe } from "./vibe.ts";

export type Dream = {
  id: string;
  title: string;
  content: string;
  date: Date;
  vibe: Vibe;
};
