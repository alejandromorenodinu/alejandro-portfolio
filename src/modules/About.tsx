import pfp from '../assets/alejandro.png';

function About() {
    return (
        <main>
            <div className="about-body">
                <div className='about-container'>
                    <div className="about-flex-text">
                        <p>
                            Soy Alejandro Moreno, desarrollador de software recién graduado como Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM), con especialización en Videojuegos (DAMvi). Me muevo con comodidad a lo largo de todo el ciclo de desarrollo full-stack, desde el diseño de la base de datos hasta la interfaz que ve el usuario.
                        </p>
                        <br />
                        <p>
                            En el backend he trabajado con Java y Spring Boot, Hibernate, Laravel, PHP, Django y .NET, con MySQL como base de datos. En el frontend he trabajado con Angular y React con TypeScript. Esta variedad me permite adaptarme al stack de cada proyecto en lugar de depender de una sola herramienta. He desarrollado e implementado soluciones web completas, y me interesa especialmente la arquitectura de microservicios en entornos exigentes, como el sector financiero o la administración electrónica.
                        </p>
                        <br />
                        <p>
                            Mi paso por el ámbito del ocio digital me dio además una base sólida en Unity, Blender y Maya. Aunque el mercado de los videojuegos atraviesa un momento complicado, esa experiencia me enseñó a trabajar en proyectos técnicamente exigentes y creativos, en equipo y con plazos reales, algo que valoro en cualquier sector.
                        </p>
                        <br />
                        <p>
                            Ahora busco incorporarme a un equipo donde seguir creciendo como desarrollador, aportar mi capacidad de aprendizaje y trabajar en proyectos con impacto real.
                        </p>
                    </div>
                    <div className="about-flex-pfp">
                        <img src={pfp}></img>
                    </div>
                </div>
            </div>
        </main>

    );
}
export default About;