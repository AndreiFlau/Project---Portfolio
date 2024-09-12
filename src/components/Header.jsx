import { useState } from "react";
import useLangText from "../hooks/useLangText";
import { useLanguage } from "../hooks/useLanguage";

function Header() {
  const { language, changeLanguage, countryIconSrc, changeCountryIconSrc } = useLanguage();
  const [mobile, setMobile] = useState(false);
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

  function changeMobileFunc() {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      setMobile(!mobile);
    }
  }

  //flex h-screen w-screen items-center justify-center bg-teal-50 p-5
  // fixed right-0 top-12 flex flex-col bg-teal-50 p-5
  //fixed bg-teal-50 p-5 h-full z-10
  // position: absolute;
  // display: flex;
  // height: 100vh;
  // width: 100vw;
  // align-items: center;
  // justify-content: center;
  // gap: 80px;

  return (
    <div className="w-full fixed top-0 p-2 bg-blue-50 md:static md:bg-transparent" id="header">
      <div className="flex gap-3 ml-12 mr-12 items-center font-semibold text-x">
        <h1 className="mr-auto">Andrei Flausino</h1>
        <div
          className={
            mobile
              ? "h-screen w-screen items-center justify-center  gap-20 opacity-95 fixed right-0 top-12 flex flex-col bg-blue-50 p-5"
              : "hidden sm:flex sm:gap-3  sm:items-center"
          }
        >
          <a href="#aboutme" className="sm:block" onClick={changeMobileFunc}>
            {text.about}
          </a>
          <a href="#tech" className="sm:block" onClick={changeMobileFunc}>
            Tech
          </a>
          <a href="#projects" className="sm:block" onClick={changeMobileFunc}>
            {text.projects}
          </a>
          <a href="#contact-me" className="sm:block" onClick={changeMobileFunc}>
            {text.contact}
          </a>
          <button onClick={changeLanguageFunc}>
            <img src={countryIconSrc} alt={language} className="w-full size-10 sm:size-16 sm:block" />
          </button>
        </div>
        <button className="min-h-10 min-w-10 sm:hidden" onClick={changeMobileFunc}>
          <img src="/imgs/menu.svg" alt="menu" />
        </button>
      </div>
    </div>
  );
}

export default Header;
