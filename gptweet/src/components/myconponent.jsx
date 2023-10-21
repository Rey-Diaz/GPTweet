import axios from 'axios';

function MyComponent() {
    const handleButtonClick = async () => {
        try {
            const response = await axios.post('http://localhost:5000/run-util');
            console.log(response.data.result);
        } catch (error) {
            console.error("Error running util.py code:", error);
        }
    };

    return (
        <button onClick={handleButtonClick}>Run util.py Code</button>
    );
}

export default MyComponent;
