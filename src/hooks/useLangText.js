import { languages } from "./LanguageContent";
import { useLanguage } from "./useLanguage";

export default function useLangText() {
  const { language } = useLanguage();

  const text = languages[language];
  return text;
}
