import { useState } from 'react';
import '../index.css';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import cv from '../assets/Alejandro_Moreno_Dinu_CV.pdf';

const EMAIL = 'alejandromorenodinu@gmail.com';

function Contact() {
    const [copied, setCopied] = useState(false);

    function CopyEmail() {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <main>
            <div className='contact-body'>
                <h1>Contacto</h1>
                <p>Estoy buscando mi primera oportunidad como desarrollador full-stack. Escríbeme y hablamos.</p>

                <div className='contact-grid'>
                    <div className='contact-card'>
                        <h3>Correo</h3>
                        <p>{EMAIL}</p>
                        <button onClick={CopyEmail}>{copied ? 'Copiado' : 'Copiar correo'}</button>
                    </div>
                    <div className='contact-card'>
                        <h3>GitHub</h3>
                        <a href='https://github.com/alejandromorenodinu'>
                            <img src={github} className='icon' alt='GitHub' />
                        </a>
                    </div>
                    <div className='contact-card'>
                        <h3>LinkedIn</h3>
                        <a href='https://www.linkedin.com/in/alejandro-moreno-dinu-7378a3277/'>
                            <img src={linkedin} className='icon' alt='LinkedIn' />
                        </a>
                    </div>
                </div>

                <a href={cv} download className='contact-cv'>Descargar CV</a>
            </div>
        </main>
    );
}

export default Contact;