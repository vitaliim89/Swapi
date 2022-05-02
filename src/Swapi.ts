import http from './HttpHelper'
import Constants from './Constants'
import { PeopleRequest } from './models/PeopleRequest'
/**
 * Swapi Rest API Wrapper
 */
class Swapi {
  /**
   * Will get all people list
   * @returns PeopleRequest Model
   */
  async getAllPeople() {
    let result = await http.get<PeopleRequest>(Constants.people);
    return result;
  }

  /**
   * Call if want to use url from People model
   * @returns PeopleRequest Model
   */
  async getPeopleByUrl(url: string) {

  }

  async getPlanets() {

  }

  async getPlanetByUrl(url: string) {

  }
}
export default Swapi;
