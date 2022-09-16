import { useEffect, useState } from 'react';
import axios from 'axios';
import Arrows from './components/Arrows';
import Modal from './components/Modal';
import TextBox from './components/TextBox';
import Button from './components/Button';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [languages, setLanguages] = useState(null);
  const [inputLanguage, setInputLanguage] = useState('');
  const [outPutLanguage, setOutputLanguage] = useState('');
  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  console.log('languages', languages);

  const getLanguages = () => {
    const options = {
      method: 'GET',
      url: 'https://translef-translator.p.rapidapi.com/language/list',
      headers: {
        'X-RapidAPI-Key': '0330575239msh8b8d89162167bd1p1baa75jsnb07d45ec1e27',
        'X-RapidAPI-Host': 'translef-translator.p.rapidapi.com'
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      const arrOfData = (response.data).map((el) => el.name);
      setLanguages(arrOfData);
    }).catch((error) => {
      console.error(error);
    });
  };

  // console.log('languages', languages);
  console.log({ text: textToTranslate, source: inputLanguage, target: outPutLanguage });
  const translate = () => {
    const options = {
      method: 'POST',
      url: 'https://google-translate78.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '0330575239msh8b8d89162167bd1p1baa75jsnb07d45ec1e27',
        'X-RapidAPI-Host': 'google-translate78.p.rapidapi.com'
      },
      // data: '{"text":"hello, how are you?","source":"en","target":"fr"}'
      data: JSON.stringify({ text: textToTranslate, source: inputLanguage, target: outPutLanguage })
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      setTranslatedText(response.data);
    }).catch((error) => {
      console.error(error);
    });
  };

  console.log('trans', translatedText);

  useEffect(() => {
    getLanguages();
  }, []);

  const handleClick = () => {
    setInputLanguage(outPutLanguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            style="input"
            setShowModal={setShowModal}
            textToTranslate={textToTranslate}
            setTextToTranslate={setTextToTranslate}
            setTranslatedText={setTranslatedText}

          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>

          <TextBox
            selectedLanguage={outPutLanguage}
            style="output"
            setShowModal={setShowModal}
            translatedText={translatedText}

          />
          <div className="button-container" onClick={translate}>
            <Button />
          </div>
        </>
      )}

      {showModal
      && (
        <Modal
          setShowModal={setShowModal}
          languages={languages}
          chosenLanguage={showModal === 'input' ? inputLanguage : outPutLanguage}
          setChosenLanguage={showModal === 'input' ? setInputLanguage : setOutputLanguage}
        />
      )}

    </div>
  );
};

export default App;
