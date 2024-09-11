import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { languages } from "./LanguageContent";

export const LanguageContext = React.createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [countryIconSrc, setCountryIconSrc] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");

    if (savedLang && languages[savedLang]) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      setLanguage(languages[browserLang] ? browserLang : "en");
    }

    if (language === "en") {
      setCountryIconSrc("/imgs/flag_usa.svg");
    } else if (language === "pt") {
      setCountryIconSrc("/imgs/flag_brazil.svg");
    }
  }, [language, setCountryIconSrc]);

  function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  }

  function changeCountryIconSrc(country) {
    setCountryIconSrc(country);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, countryIconSrc, changeCountryIconSrc }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node,
};
