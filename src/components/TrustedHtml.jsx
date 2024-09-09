import PropTypes from "prop-types";

function TrustedHtml({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

TrustedHtml.propTypes = {
  html: PropTypes.string,
};

export default TrustedHtml;
