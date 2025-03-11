import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import NavigateBackButton from './components/NavigateBackButton';

import './App.css';

function App() {
  const data = [
    {
      id: 'mercury',
      title: 'Mercury',
      content: 'Mercury is the smallest planet of our solar system and is the closest planet to the Sun. The planet is named after the Roman messenger of the gods.'
    },
    {
      id: 'venus',
      title: 'Venus',
      content: 'Venus is the hottest planet in the solar system. It is very bright and does not have any moons. The planet is named after the Roman goddess of beauty.'
    },
    {
      id: 'mars',
      title: 'Mars',
      content: 'The fourth planet from the Sun, Mars is also called the Red Planet and named after the Roman god of war. Mars has two moons: Phobos and Deimos.'
    },
    {
      id: 'jupiter',
      title: 'Jupiter',
      content: 'The largest planet of the solar system, Jupiter is a gas giant and more than two times bigger than all other planets combined.'
    },
    {
      id: 'saturn',
      title: 'Saturn',
      content: 'Saturn is the second largest planet of our solar system. The huge planet is made of gas and has visible rings. Saturn has only one moon: Titan.'
    },
    {
      id: 'uranus',
      title: 'Uranus',
      content: 'Uranus is the fourth largest planet, an ice giant, and the second further planet from the Sun. The planet orbits on its side and has 27 moons.'
    },
    {
      id: 'neptune',
      title: 'Neptune',
      content: 'The furthest planet from the Sun, Neptune is made of dense gas and is 17 times as massive as the Earth. Neptune is a planet of heavy winds and storms.'
    }
  ]

  return (
    <div className='container'>
      <BrowserRouter>
        <NavBar data={data} />
        <Routes>
          <Route 
            path='/'
            element={<HomePage />}
          />
          {
            data.map(dataElement => (
              <Route 
                key={dataElement.id}
                path={`/content/${dataElement.id}`}
                element={<ContentPage data={dataElement} />}
              />
            ))
          }
        </Routes>

        <NavigateBackButton />

      </BrowserRouter>
    </div>
  );
};

export default App;
