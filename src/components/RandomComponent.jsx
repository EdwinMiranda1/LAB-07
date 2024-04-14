import React, { useState } from "react";

const RandomComponent = () => {
    const [count, setCount] = useState(0);

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setCount(randomNumber);
    };

    const resetCount = () => {
        setCount(0);
    };

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <h2>Número Aleatorio: {count}</h2>
            <button onClick={generateRandomNumber}>Generar Nuevo Número</button>
            <button onClick={resetCount}>Reiniciar</button>
            <button onClick={decrementCount}>Decrementar</button>
        </div>
    );
};

export default RandomComponent;
