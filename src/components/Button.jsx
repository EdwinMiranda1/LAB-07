import React, { useState } from "react";

export const Button = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 5);
    };

    return (
        <button onClick={incrementCount}>
            {count}
        </button>
    );
};