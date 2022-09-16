import SelectDropDown from './SelectDropDown';

const TextBox = ({
  selectedLanguage, style, setShowModal, setTextToTranslate, textToTranslate, translatedText, setTranslatedText
}) => {
  const handleClick = () => {
    setTextToTranslate('');
    setTranslatedText('');
  };

  return (
    <div>
      <SelectDropDown
        style={style}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={style === 'input' ? 'Введите текст' : 'Перевод'}
        disabled={style === 'output'}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style === 'input' ? textToTranslate : translatedText}
      />
      {style === 'input' && (
        <div className="delete" onClick={handleClick}>X</div>
      )}
    </div>
  );
};

export default TextBox;
