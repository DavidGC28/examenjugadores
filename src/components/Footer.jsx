import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h3 className="footer-title">Este es el FOOTER</h3>
                <p className="footer-text">
                    Plataforma de catálogo deportivo profesional. Consulta fichas técnicas de jugadores en tiempo real.
                </p>
                <div className="footer-divider"></div>
                <div className="footer-credits">
                    <span>© {new Date().getFullYear()} Catálogo de Jugadores. Todos los derechos reservados.</span>
                    <span className="footer-tech">Desarrollado en React</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;