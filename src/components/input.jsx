import { useState } from "react";
const InputFields = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  return (
    <div>
      <label>
        Vorname
        <input type="text" value={inputValue1} onChange={handleInputChange1} />
      </label>
      <label>
        Nachname
        <input type="text" value={inputValue2} onChange={handleInputChange2} />
      </label>

      <p>
        Gesamtname {inputValue1} <span> </span>
        {inputValue2}
      </p>
    </div>
  );
};

export default InputFields;
