# Swapi Wrapper

it's Swapi wrapper library([https://swapi.dev]).

## Features

- get all people list
- get people details model by url coming from people model
- get Planets list
...

## Installation
```bash
yarn add @vitaliim89/swapiwrapper 
```

## Usage

```python
  import { Swapi } from '@vitaliim89/swapiwrapper';
  import { People } from '@vitaliim89/swapiwrapper/dist/typescript/models/People';

  const swapi = new Swapi();
  let result = await swapi.getAllPeople();
  setPeople(result.data?.results || []);
```

## Models
Will add more further.
### People
```base
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: string,
  edited: string,
  url: string,
```
## How to test

- Open example folder
- run `yarn install`
- run `yarn run ios` or `yarn run android`

## License

[MIT](https://choosealicense.com/licenses/mit/)