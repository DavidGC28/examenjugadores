import { useEffect, useState } from "react";
import JugadorCard from "./JugadorCard";

function JugadorList() {
    const [jugador, setJugador] = useState([]); //esto cambia porque aqui van las variables de estado de futbolistas o lo que sea en el examen
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

 useEffect(() => {
    setCargando(true);

    fetch('https://jugadores.up.railway.app/players')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // Como tu API devuelve { "data": [...] }, accedemos directamente a data.data
            console.log("Datos recibidos:", data.data);
            
            setJugador(data.data); // Guardamos el array de jugadores
            setCargando(false);
        })
        .catch((errorPeticion) => {
            setError(errorPeticion.message);
            setCargando(false);
        });
}, []);
    if(cargando){
        return (<div>
            <h1>Los jugadores estan cargando</h1>
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
        <h1>Seccion de Jugadores</h1>
        <div>
            {jugador.map((jugador)=> (
                <JugadorCard key={jugador.id} jugador={jugador}/>  //esto cambia a los datos solicitados
            ))}
        </div>
    </div>);
}

export default JugadorList

