import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-glow"></div>
            <div className="header-content">
                <span className="header-badge">DATABASE OFICIAL</span>
                <h1 className="header-title">Bienvenidos al Header</h1>
                <p className="header-description">
                    Explora y analiza las fichas técnicas de los jugadores profesionales. 
                    Consulta estadísticas clave, información sobre sus clubes, selecciones nacionales y posiciones en el campo.
                </p>
                <div className="header-stats-grid">
                    <div className="header-stat-card">
                        <span className="stat-value">API v1.0</span>
                        <span className="stat-label">Conexión Segura</span>
                    </div>
                    <div className="header-stat-card">
                        <span className="stat-value">100%</span>
                        <span className="stat-label">Datos Verificados</span>
                    </div>
                    <div className="header-stat-card">
                        <span className="stat-value">⚡ LIVE</span>
                        <span className="stat-label">Sincronización</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;