import React from "react";
import { LanguageContext } from "./LanguageProvider";

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  return context;
}
