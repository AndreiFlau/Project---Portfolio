import useLangText from "../hooks/useLangText";

function Footer() {
  const text = useLangText();
  return <>{text.footer}.</>;
}

export default Footer;
