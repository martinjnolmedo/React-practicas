import React from "react";

const Botones = () => {

    const botones = ['Aceptar', 'Cancelar', 'Eliminar', 'Buscar'];

    const estilosBoton = {
        padding: '10px 20px',
        margin: '5px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    };

    const coloresBoton = {
        Aceptar: '#4CAF50', // Verde
        Cancelar: '#F44336', // Rojo
        Eliminar: '#FF9800', // Naranja
        Buscar: '#2196F3', // Azul
    };

    return (
        <div>
            {
                botones.map((btn) => (
                    <button key={btn} style={{ ...estilosBoton, backgroundColor: coloresBoton[btn], color: 'white' }} onClick={() => alert(`Presionaste el botón ${btn}!!`)}>
                        {btn}
                    </button>
                ))}
        </div>
    );
};

export default Botones;