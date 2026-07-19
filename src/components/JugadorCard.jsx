function JugadorCard({ jugador }) {
    console.log("Estos son los Jugadores", jugador);

    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            {/* Si el título no es "Experiencia del pokemon", cámbialo por algo genérico como "Ficha del Jugador" */}
            <h1>Información del Jugador</h1>
            
            <h2>Nombre: {jugador?.name}</h2>
            <p>ID: {jugador?.id}</p>
            <p>Edad: {jugador?.age}</p>
            <p>Fecha de Nacimiento: {jugador?.birthDate}</p>
            <p>Club Actual: {jugador?.currentClub}</p>
            <p>Selección Nacional: {jugador?.nationalTeam}</p>
            <p>Posición: {jugador?.position}</p>
            <p>Número: {jugador?.number}</p>
        </div>
    );
}

export default JugadorCard;