import useLangText from "../hooks/useLangText";
import { useLanguage } from "../hooks/useLanguage";

function Header() {
  const { language, changeLanguage, countryIconSrc, changeCountryIconSrc } = useLanguage();
  const text = useLangText();

  function changeLanguageFunc() {
    if (language === "en") {
      changeLanguage("pt");
      changeCountryIconSrc("/imgs/flag_brazil.svg");
    } else if (language === "pt") {
      changeLanguage("en");
      changeCountryIconSrc("/imgs/flag_usa.svg");
    }
  }

  return (
    <div className="w-full" id="header">
      <div className="flex gap-3 ml-12 mr-12 items-center font-semibold text-x">
        <h1 className="mr-auto">Andrei Flausino</h1>
        <a href="#aboutme">{text.about}</a>
        <a href="#tech">Tech</a>
        <a href="#projects">{text.projects}</a>
        <a href="#contact-me">{text.contact}</a>
        <button onClick={changeLanguageFunc}>
          <img src={countryIconSrc} alt={language} className="size-16" />
        </button>
      </div>
    </div>
  );
}

export default Header;
