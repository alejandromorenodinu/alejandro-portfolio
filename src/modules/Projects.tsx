import { useState } from 'react';
import '../index.css';
import brooks_img from '../assets/brooksseals_project.png';
import motherload_vid from '../assets/motherload_trailer.mp4';
import motherload_card from '../assets/motherload.png';
import brooks_card from '../assets/brooks.png';

type project = {
    title : string
    desc : string
    pic : string
    mediaFormat : string
}

function Projects() {
    const [selected, setSelected] = useState(0);

    const projects : project[] = [
        {title: 'Brooks', 
            desc: 'Brooks Seals es una pagina web de E-Commerce basada en Wordpress que hice en mi estadia en la empresa Global-Post, como parte de un proyecto para darle una existencia digital a la marca propiedad de Global-Post Security Solutions',
        pic: brooks_img, mediaFormat: 'image'},
        {title: 'Motherload', 
        desc: 'Motherload es un videojuego desarrollado en equipo con mis compañeros de clase como proyecto final de mi formación en DAM con especialización en Videojuegos. Está hecho en Unity con C# y me permitió trabajar en un proyecto completo, desde la idea inicial hasta una versión jugable, colaborando con programadores y artistas.',
        pic: motherload_vid,  mediaFormat: 'video'},
    ];

    function ChooseProject(index: number) {
        return () => setSelected(index);
    }

    return (
        <main>
            <div className='project-title'>
                <h1>Mis proyectos</h1>
                <h3>Lo que he construido hasta ahora</h3>
            </div>

            <div className='main-container'>
                <div className='project-page-container'>
                    <div className='project-page-picture'>
                        {projects[selected].mediaFormat === 'video' ? (
                            <video src={projects[selected].pic} controls />
                        ) : (
                            <img src={projects[selected].pic} alt={projects[selected].title}/>
                        )}
                    </div>
                    <div className='project-info'>
                        <h2>{projects[selected].title}</h2>
                        <hr></hr>
                        <p>{projects[selected].desc}</p>
                    </div>
                </div>
            </div>
                <div className='project-page-grid'>
                    <div className='project-page-card'>
                        <img src={brooks_card}></img>
                        <h3>Brooks Seals</h3>
                        <div className='projecte-page-tag-container'>
                            <span className='project-page-tag' data-tag={'WordPress'}>{'WordPress'}</span>
                            <span className='project-page-tag' data-tag={'PHP'}>{'PHP'}</span>
                            <span className='project-page-tag' data-tag={'JavaScript'}>{'JavaScript'}</span>
                        </div>
                        <p>Mi primer proyecto profesional. Brooks Seals es una pagina basada en Wordpress</p>
                        <button onClick={ChooseProject(0)}>Ver proyecto</button>
                    </div>
                    <div className='project-page-card'>
                        <img src={motherload_card}></img>
                        <h3>Motherload</h3>
                        <div className='projecte-page-tag-container'>
                            <span className='project-page-tag' data-tag={'Unity'}>{'Unity'}</span>
                            <span className='project-page-tag' data-tag={'C#'}>{'C#'}</span>
                            <span className='project-page-tag' data-tag={'Blender'}>{'Blender'}</span>
                            <span className='project-page-tag' data-tag={'Aseprite'}>{'Aseprite'}</span>
                        </div>
                        <p>Videojuego desarrollado por 3 personas para proyecto de final de curso. Hecho en Unity</p>
                        <button onClick={ChooseProject(1)}>Ver proyecto</button>
                    </div>
                </div>
        </main>
    );
}

export default Projects;