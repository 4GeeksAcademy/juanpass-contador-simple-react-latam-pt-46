import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';

const SecondsCounter = ({ seconds }) => {
    const formattedSeconds = String(seconds).padStart(6, '0').split('');

    return (
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#000', padding: '10px' }}>
            <FontAwesomeIcon icon={faClock} style={{ color: '#fff', marginRight: '10px' }} />
            {formattedSeconds.map((digit, index) => (
                <div key={index} style={{ backgroundColor: '#333', color: '#fff', padding: '5px', margin: '0 5px', borderRadius: '5px' }}>
                    {digit}
                </div>
            ))}
        </div>
    );
};

// Renderizar el componente en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

let currentSeconds = 0;

const updateCounter = () => {
    currentSeconds++;
    root.render(<SecondsCounter seconds={currentSeconds} />

    );
};

// Iniciar el contador cuando el sitio web termina de cargar
window.onload = () => {
    setInterval(updateCounter, 1000
    );

};

export default Home;