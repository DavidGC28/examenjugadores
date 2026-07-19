import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="navbar-icon">⚽</span>
                    <span className="navbar-title">Catálogo Pro</span>
                </div>
                <div className="navbar-info">
                    <span className="navbar-info-text">Total de Jugadores</span>
                    <span className="navbar-badge">ONLINE</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;