import useLangText from "../hooks/useLangText";

function Footer() {
  const text = useLangText();
  return (
    <div id="footer" className="flex mt-10 mr-10 ml-10 p-10">
      <p className="mr-auto mt-auto">{text.footer}</p>
      <div className="mt-auto flex gap-10">
        <a href="https://github.com/AndreiFlau">
          <i className="devicon-github-original colored"></i>
        </a>
        <a href="https://www.linkedin.com/in/andrei-flausino-67399b294/">
          <i className="devicon-linkedin-plain"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
