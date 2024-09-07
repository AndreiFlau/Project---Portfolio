import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { languages } from "./LanguageContent";

export const LanguageContext = React.createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");

    if (savedLang && languages[savedLang]) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      setLanguage(languages[browserLang] ? browserLang : "en");
    }
  }, []);

  function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  }

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
}

LanguageProvider.propTypes = {
  children: PropTypes.node,
};
