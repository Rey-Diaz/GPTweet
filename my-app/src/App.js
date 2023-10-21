// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
    const [persona, setPersona] = useState('Default Persona');
    const [context, setContext] = useState('Default Context');
    const [prompt, setPrompt] = useState('');
    const [output, setOutput] = useState('');

    const handleGenerateOutput = () => {
        // You can process and generate the output here using the inputs.
        const generatedOutput = `Persona: ${persona}\nContext: ${context}\nPrompt: ${prompt}`;
        setOutput(generatedOutput);
    };

    return (
        <div className="App">
            <h1>Chat App</h1>
            <div className="input-container">
                <div className="side-by-side">
                    <div className="input-box">
                        <label htmlFor="persona">Persona:</label>
                        <textarea
                            id="persona"
                            value={persona}
                            onChange={(e) => setPersona(e.target.value)}
                            rows={4} // Adjust the number of rows as needed
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="context">Context:</label>
                        <textarea
                            id="context"
                            value={context}
                            onChange={(e) => setContext(e.target.value)}
                            rows={4} // Adjust the number of rows as needed
                        />
                    </div>
                </div>
                <div className="input-box centered">
                    <label htmlFor="prompt">Prompt:</label>
                    <textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={2} // Adjust the number of rows as needed
                    />
                </div>
                <button onClick={handleGenerateOutput}>Generate Output</button>
            </div>
            {output && (
                <div className="output-container">
                    <p>{output}</p>
                </div>
            )}
        </div>
    );
}

export default App;
