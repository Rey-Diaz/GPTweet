// Import React and axios for making HTTP requests
import { useState } from 'react';
import axios from 'axios';
// Import the CSS file for Tailwind and custom styles
import '../App.css';

function RunButton() {
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle the button click for util.py
    const handleButtonClickUtil = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/run-util');
            console.log(response.data.result);
        } catch (error) {
            console.error("Error running util.py code:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Function to handle the button click for main.py
    const handleButtonClickMain = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/run-main');
            console.log(response.data.result);
        } catch (error) {
            console.error("Error running main.py code:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // JSX for the component with Tailwind CSS classes for styling
    return (
        <div className="flex flex-col items-center space-y-4 mt-5">
            <button 
                onClick={handleButtonClickUtil}
                className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-brand-primary-light transition duration-150 ease-in-out"
                style={{ backgroundColor: 'var(--brand-primary)' }} // Using CSS variable for background color
                disabled={isLoading}
            >
                {isLoading ? 'Running...' : 'Run util.py Code'}
            </button>
            <button 
                onClick={handleButtonClickMain}
                className="bg-brand-secondary hover:bg-brand-secondary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-brand-secondary-light transition duration-150 ease-in-out"
                style={{ backgroundColor: 'var(--brand-secondary)' }} // Using CSS variable for background color
                disabled={isLoading}
            >
                {isLoading ? 'Running...' : 'Run main.py Code'}
            </button>
        </div>
    );
}

// Export the component
export default RunButton;
