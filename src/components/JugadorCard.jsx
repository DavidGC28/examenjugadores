function PokemonCard({pokemon}){        {/* Esto tambien cambia a lo que se solicita*/}
    console.log ( "Estos son los pokemones", pokemon);
 
    return (<div>
        <h1>Experiencia del pokemon</h1>
        <h2>{pokemon.base_experience}</h2>  {/* Esto se cambia a la informacion solicitada en el Examen*/}
        <h2>{pokemon.id}</h2>                   
        <h2>{pokemon.height}</h2>
        <h2>{pokemon.name}</h2>
        <h2>{pokemon.order}</h2>                       {/* Hasta Aqui*/}
    </div>)
}

export default PokemonCard