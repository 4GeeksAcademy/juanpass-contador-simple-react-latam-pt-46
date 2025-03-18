import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/contador';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;

setInterval(() => {
    counter++; // Incrementa el contador en cada iteración
    root.render(
        <Counter number={counter} /> // Renderiza el componente Counter
    );
}, 1000); // Intervalo de 1 segundo