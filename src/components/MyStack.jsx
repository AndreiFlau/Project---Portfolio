import useLangText from "../hooks/useLangText";

function MyStack() {
  const text = useLangText();

  return (
    <div id="tech">
      <div className="flex flex-col mt-10 mr-10 ml-10 p-10">
        <h1 className="self-center text-xl font-semibold">{text.myStack}</h1>
        <div className="flex flex-wrap gap-16 self-center mt-10">
          <div className="flex  flex-col p-6 w-72 border-solid border-2 border-blue-600">
            <h2 className="self-center mb-6">Front-End</h2>
            <div className="flex flex-wrap gap-5 items-center">
              <i className="devicon-react-original colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-tailwindcss-plain-wordmark colored"></i>
            </div>
          </div>
          <div className="flex  flex-col p-6 w-72 border-solid border-2 border-blue-600">
            <h2 className="self-center mb-6">Back-End</h2>
            <div className="flex flex-wrap gap-5 items-center">
              <i className="devicon-nodejs-plain-wordmark colored"></i>
              <i className="devicon-express-original colored"></i>
              <i className="devicon-postgresql-plain colored"></i>
              <i className="devicon-prisma-original-wordmark colored"></i>
            </div>
          </div>
          <div className="flex  flex-col p-6 w-72 border-solid border-2 border-blue-600">
            <h2 className="self-center mb-6">Dev Tools</h2>
            <div className="flex flex-wrap gap-5 items-center">
              <i className="devicon-vscode-plain colored"></i>
              <i className="devicon-git-plain colored"></i>
              <i className="devicon-github-original colored"></i>
              <i className="devicon-postman-plain colored"></i>
              <i className="devicon-npm-original-wordmark colored"></i>
              <i className="devicon-powershell-plain colored"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//npm, postman, git, github, jest
export default MyStack;
