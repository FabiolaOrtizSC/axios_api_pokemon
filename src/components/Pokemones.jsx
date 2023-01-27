import { useState } from 'react';
import axios from 'axios';

const Pokemones = () => {
    const [listaPokemones, setListaPokemones] = useState([]);

    const pokemonNames = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then((resultado) => {
            setListaPokemones(resultado.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    };

    return (
        <div className='contenedor'>
            <button onClick={pokemonNames} className="btn-pokemon">Fetch Pokemon</button>
            <ul>
                {listaPokemones.map((pokemon, index) => {
                    return(
                        <li key={index} className="nombre">{pokemon.name}</li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Pokemones;