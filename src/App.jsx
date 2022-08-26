import { useState } from 'react';
import Arrows from './components/Arrows';
import TextBox from './components/TextBox';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [languages, setLanguages] = useState(null);
  const [inputLanguage, setInputLanguage] = useState('English');
  const [outPutLanguage, setOutputLanguage] = useState('Русский');
  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleClick = () => {
    setInputLanguage(outPutLanguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="app">
      <TextBox
        selectedLanguage={inputLanguage}
        style="input"
        setShowModal={setShowModal}
      />
      <div className="arrow-container" onClick={handleClick}>
        <Arrows />
      </div>

      <TextBox
        selectedLanguage={outPutLanguage}
        style="output"
      />
    </div>
  );
};

export default App;
