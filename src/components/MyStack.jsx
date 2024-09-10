import useLangText from "../hooks/useLangText";

function MyStack() {
  const text = useLangText();

  return (
    <>
      <div>
        <h1>{text.myStack}</h1>
        <div>
          <h2>Front-End</h2>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-tailwindcss-plain-wordmark colored"></i>
        </div>
        <div>
          <h2>Back-End</h2>
          <i className="devicon-nodejs-plain-wordmark colored"></i>
          <i className="devicon-express-original colored"></i>
          <i className="devicon-postgresql-plain colored"></i>
          <i className="devicon-prisma-original-wordmark colored"></i>
        </div>
        <div>
          <h2>Dev Tools</h2>
          <i className="devicon-vscode-plain colored"></i>
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-github-original colored"></i>
          <i className="devicon-postman-plain colored"></i>
          <i className="devicon-npm-original-wordmark colored"></i>
          <i className="devicon-powershell-plain colored"></i>
        </div>
      </div>
    </>
  );
}
//npm, postman, git, github, jest
export default MyStack;
