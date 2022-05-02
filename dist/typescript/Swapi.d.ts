import { PeopleRequest } from './models/PeopleRequest';
declare class Swapi {
    getAllPeople(): Promise<{
        success: boolean;
        data: PeopleRequest;
        err?: undefined;
    } | {
        success: boolean;
        err: string;
        data?: undefined;
    }>;
    getPeopleByUrl(url: string): Promise<void>;
    getPlanets(): Promise<void>;
    getPlanetByUrl(url: string): Promise<void>;
}
export default Swapi;
