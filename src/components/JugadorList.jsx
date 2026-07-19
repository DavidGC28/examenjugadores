import { useEffect, useState } from "react";
import JugadorCard from "./JugadorCard";
import "./JugadorList.css";

function JugadorList() {
    const [jugador, setJugador] = useState([]);
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
            
            console.log("Datos recibidos:", data.data);
            
            setJugador(data.data); 
            setCargando(false);
        })
        .catch((errorPeticion) => {
            setError(errorPeticion.message);
            setCargando(false);
        });
}, []);

    if(cargando){
        return (
            <div className="list-loading-container">
                <div className="loading-spinner-wrapper">
                    <div className="spinner-pulse-bg"></div>
                    <div className="loading-spinner"></div>
                </div>
                <h2 className="loading-title">Los jugadores están cargando</h2>
                <p className="loading-subtitle">Sincronizando base de datos deportiva...</p>
            </div>
        );
    }
    if(error){
        return(
            <div className="list-error-container">
                <div className="error-card">
                    <div className="error-icon-wrapper">⚠️</div>
                    <h2 className="error-title">NO SE PUDO CONECTAR A LA API</h2>
                    <p className="error-message">Detalle del error:</p>
                    <code className="error-code-block">{error}</code>
                    <button className="error-btn" onClick={() => window.location.reload()}>
                        Reintentar
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="list-container">
            <div className="list-header">
                <h2 className="list-title">Sección de Jugadores</h2>
                <div className="list-title-underline"></div>
            </div>
            <div className="jugadores-grid">
                {jugador.map((jugador)=> (
                    <JugadorCard key={jugador.id} jugador={jugador}/>  //esto cambia a los datos solicitados
                ))}
            </div>
        </div>
    );
}

export default JugadorList;
