import axios from 'axios';

function MyComponent() {
    const handleButtonClickUtil = async () => {
        try {
            const response = await axios.post('http://localhost:5000/run-util');
            console.log(response.data.result);
        } catch (error) {
            console.error("Error running util.py code:", error);
        }
    };

    const handleButtonClickMain = async () => {
        try {
            const response = await axios.post('http://localhost:5000/run-main');
            console.log(response.data.result);
        } catch (error) {
            console.error("Error running main.py code:", error);
        }
    };

    return (
        <div>
            <button onClick={handleButtonClickUtil}>Run util.py Code</button>
            <button onClick={handleButtonClickMain}>Run main.py Code</button>
        </div>
    );
}

export default MyComponent;
