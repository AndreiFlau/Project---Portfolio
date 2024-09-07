import useLangText from "../hooks/useLangText";
import { useLanguage } from "../hooks/useLanguage";

function Header() {
  const { language, changeLanguage } = useLanguage();
  const text = useLangText();

  function changeLanguageFunc() {
    if (language === "en") {
      changeLanguage("pt");
    } else if (language === "pt") {
      changeLanguage("en");
    }
  }

  return (
    <div>
      <h1>Andrei Flausino</h1>
      <a href="#aboutme">{text.about}</a>
      <a href="#tech">Tech</a>
      <a href="#projects">{text.projects}</a>
      <a href="#contact-me">{text.contact}</a>
      <button onClick={changeLanguageFunc}>Country Flag</button>
    </div>
  );
}

export default Header;
