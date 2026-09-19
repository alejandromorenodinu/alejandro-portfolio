import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <TypeAnimation sequence={['Portafolio', 2000]}></TypeAnimation>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/about">Sobre mi</Link>
                <Link to="/contact">Contacto</Link>
            </nav>
        </header>
    );
}

export default Header;