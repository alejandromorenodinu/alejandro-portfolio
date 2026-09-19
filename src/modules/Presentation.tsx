import '../index.css';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import pfp from '../assets/alejandro.png';
import brooks_img from '../assets/brooks.png';
import motherload_img from '../assets/motherload.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

function Presentation() {
    return (
        <>
            <main>
                <div className="hero-image">
                    <div className="hero-h1 hero-text">
                        <TypeAnimation sequence={[
                            'Me llamo Alejandro Moreno', 2000, 
                            'I am Alejandro Moreno', 2000, 
                            'Em dic Alejandro Moreno', 2000,
                            'Me llamo Alejandro Moreno', 2000]} wrapper="h1" className='hero-h1'></TypeAnimation>
                        <p className="hero-p">Full-stack Developer</p>
                        <MotionLink 
                            to="/about"
                            whileHover={{scale: 1.1}} 
                            transition={{duration: 0.3}} 
                            className='hero-button'>Conoceme</MotionLink> 
                    </div>
                </div>
                <div>
                    <div className='main-body'>
                        <h1>¿Quién soy?</h1>
                        <div className='main-container'>
                            <div className='main-flex'>
                                <div className='main-flex'>
                                    Mi nombre es Alejandro Moreno, soy desarrollador de software recién graduado en 
                                    Desarrollo de Aplicaciones Multiplataforma con especialización en Videojuegos (DAMvi). 
                                    Cuento con experiencia en desarrollo fullstack — en el backend cuento con formacion en 
                                    tecnologías como Django, Laravel, PHP puro y Hibernate, y en el frontend cuento con la formacion en
                                    React + TypeScript lo que me permite adaptarme a distintos entornos y necesidades.
                                </div>
                                <div className='main-flex'>
                                    Además, mi formación en el ámbito del ocio digital me ha dado una base sólida 
                                    en herramientas de desarrollo de videojuegos y contenido 3D, como Unity, Blender 
                                    y Maya. Aunque el mercado de los videojuegos atraviesa un momento complicado, 
                                    esa experiencia refuerza mi capacidad para trabajar en proyectos técnicamente 
                                    exigentes y creativos en cualquier sector.                                
                                </div>
                            </div>
                            <div className='main-flex'>
                                <img src={pfp} className='pfp-picture'></img>
                            </div>
                        </div>
                        <p>

                        </p>
                        <br></br>
                        <p>

                        </p>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <h1>Projectos</h1>
                        <div className='project-container'>
                            <div className='project-card'>
                                <div className='project-card-title-brook'>
                                    <h3>Brooks Seals</h3>
                                </div>
                                <p>Pagina web de E-Commerce</p>
                                <img src={brooks_img} className='project-picture'></img>
                            </div>
                            <div className='project-card'>
                                <div className='project-card-title-motherload'>
                                    <h3>Motherload</h3>
                                </div>
                                <p>Videojuego hecho en Unity</p>
                                <img src={motherload_img} className='project-picture'></img>
                            </div>
                        </div>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <h1>Skills</h1>
                        <div className='skill-container'>
                            <div className='skill-card'>
                                <h3>Frontend</h3>
                                <p>React · TypeScript · CSS · Bootstrap</p>
                            </div>
                            <div className='skill-card'>
                                <h3>Backend</h3>
                                <p>Hibernate · Django · Laravel · PHP</p>
                            </div>
                            <div className='skill-card'>
                                <h3>Game / 3D</h3>
                                <p>Unity · Blender · Maya · Asesprite</p>
                            </div>
                        </div>                        
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <h1>Contacto</h1>
                        <div>
                            <h3>Correo</h3>
                            <p>alejandromorenodinu@gmail.com</p>
                            <h3>GitHub</h3>
                            <a href='https://github.com/alejandromorenodinu'>
                                <img src={github} className='icon'></img>
                            </a>
                            <h3>LinkedIn</h3>
                            <a href='https://www.linkedin.com/in/alejandro-moreno-dinu-7378a3277/'>
                                <img src={linkedin} className='icon'></img>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Presentation;