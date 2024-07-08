import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/Title';
import InputBox from './components/InputBox';
import CheckButton from './components/CheckButton';


function App() {
  const [text, setText] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://backend-spam-sms-classifier-2.onrender.com/predict/', { text });
            setResult(response.data.prediction);
        } catch (error) {
            console.error("There was an error!", error);
        }
    };
  return (
    <div className="App">
      {/* <div className="AppGlass"></div> */}
      <Title title={"Spam Message Detector"}/>
      <InputBox value={text} onChange={(e) => setText(e.target.value)}/>
      <CheckButton onClick={handleSubmit}/>
      {result && <p>{result}</p>}

    </div>
  );
}

export default App;
