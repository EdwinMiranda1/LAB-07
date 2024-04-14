import React, { useState } from "react";

export const Button = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        alert(`Valor aleatorio: ${randomNumber}`);
    };

    return (
        <button onClick={handleClick}>
            Generar número aleatorio
        </button>
    );
};
