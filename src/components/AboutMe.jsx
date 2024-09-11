import useLangText from "../hooks/useLangText";
import TrustedHtml from "./TrustedHtml";

function AboutMe() {
  const text = useLangText();

  return (
    <div id="aboutme" className="flex flex-col mt-10 mr-10 ml-10 p-10">
      <h1 className="self-center text-xl font-semibold mb-10">{text.about}!</h1>
      <TrustedHtml html={text.aboutPara} />
    </div>
  );
}

export default AboutMe;
