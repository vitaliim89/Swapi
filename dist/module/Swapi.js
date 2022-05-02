import http from './HttpHelper';
import Constants from './Constants';

class Swapi {
  async getAllPeople() {
    let result = await http.get(Constants.people);
    return result;
  }

  async getPeopleByUrl(url) {}

  async getPlanets() {}

  async getPlanetByUrl(url) {}

}

export default Swapi;
//# sourceMappingURL=Swapi.js.map