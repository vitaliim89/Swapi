import { People } from "./People";

export type PeopleRequest = {
  count: number,
  next: string | null,
  previous: string | null,
  results: People[],
};