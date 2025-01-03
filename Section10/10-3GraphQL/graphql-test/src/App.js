import React from 'react';
import { useQuery, gql } from '@apollo/client';

const ALL_STARSHIPS = gql`{
  allStarships {
    id
    name
  }
}`;

function App() {
  const { loading, error, data } = useQuery(ALL_STARSHIPS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Whoops.. Something went wrong!</p>

  return (
    <>
      console.log(data, 'data');
      <h2>Star Wars Spaceships <span role='img' aria-label='spaceship'>&#x1F680;</span></h2>
      {data.allStarships.map((starship, id) =>
        <p key={id}>{starship.name}</p>
      )}
    </>
  );
}

export default App;
