import React from "react";
import { useTranslation } from "react-i18next";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();

  const actualLanguage = i18n.language;

  const handleClick=(e)=>{
    i18n.changeLanguage(e.target.value);
  }

  return (
      <div class="btn-group" role="group">
      <button type="button" className="btn btn-dark" value="hu" onClick={handleClick}>🇭🇺</button>
      <button type="button" className="btn btn-dark" value="en" onClick={handleClick}>🇬🇧</button>
    </div>
  );
};

export default SwitchLanguage;