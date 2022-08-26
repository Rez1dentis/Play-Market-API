import SelectDropDown from './SelectDropDown';

const TextBox = ({ selectedLanguage, style, setShowModal }) => {
  return (
    <div>
      <SelectDropDown
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={style === 'input' ? 'Введите текст' : 'Перевод'}
        disabled={style === 'output'}
      />
    </div>
  );
};

export default TextBox;
