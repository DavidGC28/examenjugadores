import { useEffect, useState } from "react";
import PokemonCard from "./JugadorCard";

function PokemonList() {
    const [pokemones, setPokemones] = useState([]); //esto cambia porque aqui van las variables de estado de futbolistas o lo que sea en el examen
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        setCargando(true);

        fetch('https://pokeapi.co/api/v2/pokemon')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                console.log(response)
                return response.json();
            })
            .then((data) => {
                const peticiones = data.results.map((pokemon) => //aqui tambien se ace el map con la variable de estado de futbolista
                    fetch(pokemon.url).then((response) => {  //aqui cambia pokemon por futbolista
                        if (!response.ok) {
                            throw new Error("No se pudo cargar un Pokémon");
                        }
                        console.log("Respuestas de la Api", response);
                        return response.json();

                    })
                );

                return Promise.all(peticiones);
            })
            .then((detalles) => {
                console.log("Detalles de pokemon", detalles);
                setPokemones(detalles); //variable cambia de nombre
              //onCargados(detalles.length);
                setCargando(false);
            })
            .catch((errorPeticion) => {
                setError(errorPeticion.message);
                setCargando(false);
            });
    }, [])
    if(cargando){
        return (<div>
            <h1>Los pokemones estan cargando</h1>
        </div>);
    }
    if(error){
        return(
            <div>
                <h1>NO SE PUDO CONECTAR A LA API :{error}</h1>
            </div>
        );
    }
    return (<div>
        <h1>Seccion de Pokemones</h1>
        <div>
            {pokemones.map((pokemon)=> (
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>  //esto cambia a los datos solicitados
            ))}
        </div>
    </div>);
}

export default PokemonList

