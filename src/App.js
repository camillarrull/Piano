import React, { useState } from 'react';
import './App.css';

function App() {

    const [estaSonando, setEstaSonando] = useState("");

    const notas = [
        {
            nombre: "DO",
            link: require("./notes/do.wav"),
            tieneSostenido: true
        },
        {
            nombre: "RE",
            link: require("./notes/re.wav"),
            tieneSostenido: true
        },
        {
            nombre: "MI",
            link: require("./notes/mi.wav")
        },
        {
            nombre: "FA",
            link: require("./notes/fa.wav"),
            tieneSostenido: true
        },
        {
            nombre: "SOL",
            link: require("./notes/sol.wav"),
            tieneSostenido: true
        },
        {
            nombre: "LA",
            link: require("./notes/la.wav"),
            tieneSostenido: true
        },
        {
            nombre: "SI",
            link: require("./notes/si.wav")
        }
    ];

    const handleClick = (nota) => {
        setEstaSonando(nota.nombre);
        const sonido = new Audio(nota.link);
        sonido.play();
        setTimeout(() => {
            setEstaSonando(null);
        }, 150);
    }


    return (
        <div className="App">
            <div className='titulo'>
                <h1>Piano con react</h1>
                <h2>Hecho con amor por Male</h2>
                <h3>Esta sonando {estaSonando}</h3>

            </div>
            <div className='contendor'>
                {
                    notas.map(nota => {
                        return (
                            <div className={`nota ${estaSonando === nota.nombre && `estaSonando`}`}
                                onClick={() => handleClick(nota)}>
                                {nota.tieneSostenido && <div className='negra'></div>}
                                {/* //ES LO MISMO QUE PONER: 
                        // { nota.tieneSostenido ? <div className='negra'></div>} : "" */}

                            </div>


                        )
                    }
                    )
                }

            </div>

        </div>
    );
}

export default App;
