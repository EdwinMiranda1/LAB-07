import React, { useState } from "react";

const CompWithProps = () => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <p>User:{inputText}</p>
        </div>
    );
};

export default CompWithProps;
