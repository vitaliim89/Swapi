import { People } from "./People";
export declare type PeopleRequest = {
    count: number;
    next: string | null;
    previous: string | null;
    results: People[];
};
