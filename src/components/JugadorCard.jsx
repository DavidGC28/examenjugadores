import "./JugadorCard.css";

function JugadorCard({ jugador }) {
    console.log("Estos son los Jugadores", jugador);

    return (
        <div className="jugador-card">
            <div className="card-badge-glow"></div>
            
            {/* Header de la tarjeta */}
            <div className="card-top-info">
                <span className="player-number">#{jugador?.number || '00'}</span>
                <span className="player-position-tag">{jugador?.position || 'N/A'}</span>
            </div>

            {/* Foto de perfil del jugador */}
            <div className="player-photo-wrapper">
                <div className="player-photo-glow"></div>
                <img 
                    src={jugador?.photoUrl || "https://jugadores.up.railway.app/images/generic.svg"} 
                    alt={jugador?.name} 
                    className="player-photo"
                />
            </div>

            {/* Título de la tarjeta corregido para jerarquía semántica */}
            <div className="card-title-section">
                <span className="card-badge">Ficha del Jugador</span>
                <h3 className="player-name">{jugador?.name}</h3>
            </div>

            {/* Grid de atributos */}
            <div className="player-specs">
                <div className="spec-item">
                    <span className="spec-label">ID</span>
                    <span className="spec-value">{jugador?.id}</span>
                </div>
                <div className="spec-item">
                    <span className="spec-label">Edad</span>
                    <span className="spec-value">{jugador?.age} años</span>
                </div>
                <div className="spec-item-full">
                    <span className="spec-label">Nacimiento</span>
                    <span className="spec-value">{jugador?.birthDate}</span>
                </div>
            </div>

            {/* Clubes y selección */}
            <div className="player-team-info">
                <div className="team-item">
                    <span className="team-icon">🏢</span>
                    <div className="team-details">
                        <span className="team-label">Club Actual</span>
                        <span className="team-name">{jugador?.currentClub}</span>
                    </div>
                </div>
                <div className="team-item">
                    <span className="team-icon">🌍</span>
                    <div className="team-details">
                        <span className="team-label">Selección Nacional</span>
                        <span className="team-name">{jugador?.nationalTeam}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JugadorCard;