// src/components/PersonaInput.js
import React from 'react';

function PersonaInput({ value, onChange }) {
    return (
        <div className="input-container">
            <label htmlFor="persona">Persona:</label>
            <input
                type="text"
                id="persona"
                value={value} // Persona value
                onChange={onChange} // Persona onChange handler
            />
        </div>
    );
}

export default PersonaInput;
