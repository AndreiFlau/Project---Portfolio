import useLangText from "../hooks/useLangText";
import TrustedHtml from "./TrustedHtml";

function AboutMe() {
  const text = useLangText();

  return (
    <>
      <h1 className="bg-pink-50 text-purple-600">About Me!</h1>
      <TrustedHtml html={text.aboutPara} />
    </>
  );
}

export default AboutMe;
