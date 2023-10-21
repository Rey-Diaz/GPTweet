// src/components/ContextInput.js
import React from 'react';

function ContextInput({ value, onChange }) {
    return (
        <div className="input-container">
            <label htmlFor="context">Context:</label>
            <input
                type="text"
                id="context"
                value={value} // Context value
                onChange={onChange} // Context onChange handler
            />
        </div>
    );
}

export default ContextInput;
