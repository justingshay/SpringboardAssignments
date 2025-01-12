import React from 'react';
import { useQuery, gql } from '@apollo/client';

const ALL_FILMS = gql`{
  allFilms {
    films {
      id
      title
    }
  }
}`;

const PERSON_BY_ID = gql`{
  person(id: "cGVvcGxlOjM=") {
    name
    id
  }
}`;

const PLANETS_FIRST_FIVE = gql`{
  allPlanets(first: 5) {
    planets {
      name
      id
    }
  }
}`;

const STARSHIPS_LAST_THREE = gql`{
  allStarships(last: 3) {
    starships {
      id
      name
      model
    }
  }
}`;

const CHARACTER_AND_STARSHIPS_PILOTED = gql`{
  allPeople(first: 5) {
    people {
      id
      name
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
}`;

const SPECIES_AND_LANGUAGE_FIVE = gql`{
  allSpecies(first: 5) {
    species {
      id
      name
      language
    }
  }
}`;

const CLIMATE_OF_FIVE_PLANETS = gql`{
  allPlanets(last: 5) {
    planets {
      id
      name
      climates
    }
  }
}`;

const VEHICLES_COST_THREE = gql`{
  allVehicles(first: 3) {
    vehicles {
      id
      name
      costInCredits
    }
  }
}`;

const CHARACTERS_OF_SPECIFIC_FILM = gql`{
  film(id: "ZmlsbXM6Mg==") {
    title
    characterConnection {
      characters {
        id
        name
      }
    }
  }
}`;

const MULTIPLE_FILM_CHARACTERS = gql`{
  allPeople {
    people {
      id
      name
      filmConnection {
        totalCount
      }
    }
  }
}`;

const AGGREGATE_NUM_CHARACTERS = gql`{
  allFilms {
    films {
      id
      characterConnection {
        totalCount
      }
    }
  }
}`;

const SPECIFIC_CHARACTER_PROFILE = gql`{
  person(id: "cGVvcGxlOjI1") {
    name
    filmConnection {
      films {
        id
        title
      }
    }
    starshipConnection {
      starships {
        id
        name
      }
    }
    homeworld {
      name
    }
  }
}`;

const CHARACTERS_HOMEWORLD_POP_FIVE = gql`{
  allPeople(first: 5) {
    people {
      id
      name
      homeworld {
        name
        population
      }
    }
  }
}`;

const VEHICLE_PILOTS_SPECIES = gql`{
  allVehicles(last: 3) {
    vehicles {
      id
      name
      pilotConnection {
        pilots {
          id
          name
          species {
            name
          }
        }
      }
    }
  }
}`;

const FILM_CHARS_PLANETS_STARSHIPS = gql`{
  allFilms(first: 3) {
    films {
      id
      title
      characterConnection {
        characters {
          id
          name
        }
      }
      planetConnection {
        planets {
          id
          name
        }
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
    }
  }
}`

function App() {
  const { loading: loadingFilms, error: errorFilms, data: dataFilms } = useQuery(ALL_FILMS);
  const { loading: loadingPersonById, error: errorPersonById, data: dataPersonById } = useQuery(PERSON_BY_ID);
  const { loading: loadingPlanetsFive, error: errorPlanetsFive, data: dataPlanetsFive } = useQuery(PLANETS_FIRST_FIVE);
  const { loading: loadingStarshipsThree, error: errorStarshipsThree, data: dataStarshipsThree } = useQuery(STARSHIPS_LAST_THREE);
  const { loading: loadingCharShipsPiloted, error: errorCharShipsPiloted, data: dataCharShipsPiloted } = useQuery(CHARACTER_AND_STARSHIPS_PILOTED);
  const { loading: loadingSpecLangFive, error: errorSpecLangFive, data: dataSpecLangFive } = useQuery(SPECIES_AND_LANGUAGE_FIVE);
  const { loading: loadingClimates, error: errorClimates, data: dataClimates } = useQuery(CLIMATE_OF_FIVE_PLANETS);
  const { loading: loadingVehicleCost, error: errorVehicleCost, data: datavehicleCost } = useQuery(VEHICLES_COST_THREE);
  const { loading: loadingFilmChars, error: errorFilmChars, data: dataFilmChars } = useQuery(CHARACTERS_OF_SPECIFIC_FILM);
  const { loading: loadingMultFilmChars, error: errorMultFilmChars, data: dataMultFilmChars } = useQuery(MULTIPLE_FILM_CHARACTERS);
  const { loading: loadingAggNumChars, error: errorAggNumChars, data: dataAggNumChars } = useQuery(AGGREGATE_NUM_CHARACTERS);
  let aggNumChars = 0;
  const { loading: loadingCharProfile, error: errorCharProfile, data: dataCharProfile } = useQuery(SPECIFIC_CHARACTER_PROFILE);
  const { loading: loadingCharHomePop, error: errorCharHomePop, data: dataCharHomePop } = useQuery(CHARACTERS_HOMEWORLD_POP_FIVE);
  const { loading: loadingVehiclePilotSpec, error: errorVehiclePilotSpec, data: dataVehiclePilotSpec } = useQuery(VEHICLE_PILOTS_SPECIES);
  const { loading: loadingFilmPlanetsCharsShips, error: errorFilmPlanetsCharsShips, data: dataFilmPlanetsCharsShips } = useQuery(FILM_CHARS_PLANETS_STARSHIPS);

  //ALL_FILMS
  if(loadingFilms) return <p>Loading...</p>
  if(errorFilms) return <p>Whoops.. Something went wrong!</p>
  //PERSON_BY_ID
  if(loadingPersonById) return <p>Loading...</p>
  if(errorPersonById) return <p>Whoops.. Something went wrong!</p>
  //PLANETS_FIRST_FIVE
  if(loadingPlanetsFive) return <p>Loading...</p>
  if(errorPlanetsFive) return <p>Whoops.. Something went wrong!</p>
  //STARSHIPS_LAST_THREE
  if(loadingStarshipsThree) return <p>Loading...</p>
  if(errorStarshipsThree) return <p>Whoops.. Something went wrong!</p>
  //CHARACTER_AND_STARSHIPS_PILOTED
  if(loadingCharShipsPiloted) return <p>Loading...</p>
  if(errorCharShipsPiloted) return <p>Whoops.. Something went wrong!</p>
  //SPECIES_AND_LANGUAGE_FIVE
  if(loadingSpecLangFive) return <p>Loading...</p>
  if(errorSpecLangFive) return <p>Whoops.. Something went wrong!</p>
  //CLIMATE_OF_FIVE_PLANETS
  if(loadingClimates) return <p>Loading...</p>
  if(errorClimates) return <p>Whoops.. Something went wrong!</p>
  //VEHICLES_COST_THREE
  if(loadingVehicleCost) return <p>Loading...</p>
  if(errorVehicleCost) return <p>Whoops.. Something went wrong!</p>
  //CHARACTERS_OF_SPECIFIC_FILM
  if(loadingFilmChars) return <p>Loading...</p>
  if(errorFilmChars) return <p>Whoops.. Something went wrong!</p>
  //MULTIPLE_FILM_CHARACTERS
  if(loadingMultFilmChars) return <p>Loading...</p>
  if(errorMultFilmChars) return <p>Whoops.. Something went wrong!</p>
  //AGGREGATE_NUM_CHARS
  if(loadingAggNumChars) return <p>Loading...</p>
  if(errorAggNumChars) return <p>Whoops.. Something went wrong!</p>
  //SPECIFIC_CHARACTER_PROFILE
  if(loadingCharProfile) return <p>Loading...</p>
  if(errorCharProfile) return <p>Whoops.. Something went wrong!</p>
  //CHARACTERS_HOMEWORLD_POP
  if(loadingCharHomePop) return <p>Loading...</p>
  if(errorCharHomePop) return <p>Whoops.. Something went wrong!</p>
  //VEHICLE_PILOTS_SPECIES
  if(loadingVehiclePilotSpec) return <p>Loading...</p>
  if(errorVehiclePilotSpec) return <p>Whoops.. Something went wrong!</p>
  //FILM_CHARS_PLANETS_STARSHIPS
  if(loadingFilmPlanetsCharsShips) return <p>Loading...</p>
  if(errorFilmPlanetsCharsShips) return <p>Whoops.. Something went wrong!</p>

  return (
    <>
      <h1>Queries from <i>STAR WARS</i> API</h1>
      <h3><i>STAR WARS</i> films</h3>
      {dataFilms.allFilms.films.map((film, id) => 
        <p key={id}>{film.title}</p>
      )}
      <h3><i>STAR WARS</i> character by ID</h3>
      <p>{dataPersonById.person.id} : {dataPersonById.person.name}</p>
      <h3><i>STAR WARS</i> first 5 planets</h3>
      {dataPlanetsFive.allPlanets.planets.map((planet, id) => 
        <p key={id}>{planet.name}</p>
      )}
      <h3><i>STAR WARS</i> Three Spaceships Name and Model <span role='img' aria-label='spaceship'>&#x1F680;</span></h3>
      {dataStarshipsThree.allStarships.starships.map((starship, id) =>
        <p key={id}>Name: {starship.name}; Model: {starship.model}</p>
      )}
      <h3><i>STAR WARS</i> first five characters and ships they've piloted</h3>
      {dataCharShipsPiloted.allPeople.people.map((person, id) => 
        <>
          <p key={id}>{person.name}</p>
          <ul>
            {person.starshipConnection.starships.map((starship, id) => 
              <li key={id}>{starship.name}</li>
            )}
          </ul>  
        </>
      )}
      <h3><i>STAR WARS</i> five species and their language</h3>
      {dataSpecLangFive.allSpecies.species.map((specie, id) => 
        <p key={id}>Species: {specie.name} - Language {specie.language}</p>
      )}
      <h3><i>STAR WARS</i> climate of five planets</h3>
      {dataClimates.allPlanets.planets.map((planet, id) => 
        <p key={id}>Planet: {planet.name} - Climate(s): {planet.climates}</p>
      )}
      <h3><i>STAR WARS</i> cost of three vehicles</h3>
      {datavehicleCost.allVehicles.vehicles.map((vehicle, id) => 
        <p key={id}>{vehicle.name}: Cost: {vehicle.costInCredits}</p>
      )}
      <h3><i>STAR WARS</i> all characters of "The Empire Strikes Back"</h3>
      {dataFilmChars.film.characterConnection.characters.map((character, id) => 
        <li key={id}>{character.name}</li>
      )}
      <h3><i>STAR WARS</i> multi-film characters</h3>
      {dataMultFilmChars.allPeople.people.map((person, id) => 
        <>
          {person.filmConnection.totalCount > 1 &&
            <p key={id}>{person.name}: {person.filmConnection.totalCount} films</p>
          }
        </>
      )}
      <h3><i>STAR WARS</i> aggregate number of characters</h3>
      {dataAggNumChars.allFilms.films.map((film, id) => {
        {aggNumChars += film.characterConnection.totalCount}
      })}
      <p>{aggNumChars}</p>
      <h3><i>STAR WARS</i> specific character profile</h3>
      <p>{dataCharProfile.person.name}</p>
      <ul>
        <li>Films:
          <ol>
            {dataCharProfile.person.filmConnection.films.map((film, id) => 
              <li key={id}>{film.title}</li>
            )}
          </ol>
        </li>
        <li>Starships
          <ol>
            {dataCharProfile.person.starshipConnection.starships.map((starship, id) => 
              <li key={id}>{starship.name}</li>
            )}
          </ol>
        </li>
        <li>Homeworld: {dataCharProfile.person.homeworld.name}</li>
      </ul>
      <h3><i>STAR WARS</i> character homeworld population</h3>
      {dataCharHomePop.allPeople.people.map((person, id) => 
        <p key={id}>{person.name}'s Homeworld: {person.homeworld.name}, population {person.homeworld.population}</p>
      )}
      <h3><i>STAR WARS</i> first 3 vehicles and their pilots' species</h3>
      {dataVehiclePilotSpec.allVehicles.vehicles.map((vehicle, id) => 
        <>
          <p key={id}>{vehicle.name}</p>
          <ul>
            {(() => {
              if(!vehicle.pilotConnection.pilots || vehicle.pilotConnection.pilots === 0 || vehicle.pilotConnection.pilots === null) {
                return (
                  <p>No pilots</p>
                )
              } else {
                return (
                  vehicle.pilotConnection.pilots.map((pilot, id) =>
                    <li key={id}>{pilot.name} ({pilot.species.name})</li>
                  )
                )
              }
            })}
          </ul>
        </>
      )}
      <h3><i>STAR WARS</i> films' related characters, planets, and starships</h3>
      {dataFilmPlanetsCharsShips.allFilms.films.map((film, id) => 
        <>
          <p key={id}>{film.title}</p>
          <ol>
            <li>Related characters
              <ul>
                {film.characterConnection.characters.map((char, id) => 
                  <li key={id}>{char.name}</li>
                )}
              </ul>
            </li>
            <li>Related planets
              <ul>
                {film.planetConnection.planets.map((planet, id) => 
                  <li key={id}>{planet.name}</li>
                )}
              </ul>
            </li>
            <li>Related Starships
              <ul>
                {film.starshipConnection.starships.map((starship, id) => 
                  <li key={id}>{starship.name}</li>
                )}
              </ul>
            </li>
          </ol>
        </>
      )}
    </>
  );
}

export default App;
