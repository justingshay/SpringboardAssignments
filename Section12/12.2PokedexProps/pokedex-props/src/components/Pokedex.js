import React from 'react';
import './Pokedex.css';
import PokeCard from './PokeCard';

const sprite_img_base = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const pokedexList = [
    {id: 1, name: 'bulbasaur', img: `${sprite_img_base}1.png`, type: 'grass, poison', exp: 64},
    {id: 2, name: 'ivysaur', img: `${sprite_img_base}2.png`, type: 'grass, poison', exp: 142},
    {id: 3, name: 'venusaur', img: `${sprite_img_base}3.png`, type: 'grass, poison', exp: 263},
    {id: 4, name: 'charmander', img: `${sprite_img_base}4.png`, type: 'fire', exp: 62},
    {id: 5, name: 'charmeleon', img: `${sprite_img_base}5.png`, type: 'fire', exp: 142},
    {id: 6, name: 'charizard', img: `${sprite_img_base}6.png`, type: 'fire, flying', exp: 267},
    {id: 7, name: 'squirtle', img: `${sprite_img_base}7.png`, type: 'water', exp: 63},
    {id: 8, name: 'wartortle', img: `${sprite_img_base}8.png`, type: 'water', exp: 142},
    {id: 9, name: 'blastoise', img: `${sprite_img_base}9.png`, type: 'water', exp: 265}
];

const Pokedex = () => {

    return (
        <div className="Pokedex">
            {
                pokedexList.map((pokemon) => (
                    <PokeCard 
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        img={pokemon.img}
                        type={pokemon.type}
                        exp={pokemon.exp}
                    />
                ))
            }
        </div>
    );
}

export default Pokedex;
