import useLangText from "../hooks/useLangText";
import TrustedHtml from "./TrustedHtml";

function Projects() {
  const text = useLangText();
  return (
    <div className="flex flex-col mt-10 mr-10 ml-10 p-10" id="projects">
      <h1 className="self-center text-xl font-semibold">{text.myProjects}</h1>
      <div className="grid grid-cols-1 gap-16 self-center mt-10 md:grid-cols-2">
        <div className="border-2 border-blue-600 border-solid overflow-hidden">
          <img
            src="/imgs/projects/petsgotrade.png"
            alt="Pets Go Trade website"
            className="transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
          />
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto font-semibold">{text.project10Title}</h3>
              <a href="https://petsgotrade.com/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project10Description} />
          </div>
        </div>

        <div className="border-2 border-blue-600 border-solid overflow-hidden">
          <img
            src="/imgs/projects/dronestore.png"
            alt="Drone Store"
            className="transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
          />
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto font-semibold">{text.project12Title}</h3>
              <a href="https://czech-test.netlify.app/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project12Description} />
          </div>
        </div>

        <div className="border-2 border-blue-600 border-solid overflow-hidden">
          <img
            src="/imgs/projects/rafael.png"
            alt="Rafael's Portfolio"
            className="transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
          />
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto font-semibold">{text.project11Title}</h3>
              <a href="https://rafaelgoto.vercel.app/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project11Description} />
          </div>
        </div>

        <div className="border-2 border-blue-600 border-solid overflow-hidden">
          <img
            src="/imgs/projects/dashboard.png"
            alt="Picture of the dashboard"
            className="transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
          />
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto font-semibold">{text.project9Title}</h3>
              <a href="https://github.com/AndreiFlau/Waffles-NewsCase-Frontend">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://waffles-news-case-frontend.vercel.app/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project9Description} />
          </div>
        </div>

        <div className="border-2 border-blue-600 border-solid overflow-hidden">
          <img
            src="/imgs/projects/christmasstore.png"
            alt="Christmas store"
            className="transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
          />
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto font-semibold">{text.project7Title}</h3>
              <a href="https://github.com/AndreiFlau/Responsive-Christmas-Website">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://hohohomerrychristmas.vercel.app/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project7Description} />
          </div>
        </div>

        <div className="border-2 border-blue-600 border-solid overflow-hidden">
          <img
            src="/imgs/projects/highlanding.webp"
            alt="landing page"
            className="transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
          />
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto font-semibold">{text.project8Title}</h3>
              <a href="https://github.com/AndreiFlau/High-Landing">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://andreiflau.github.io/High-Landing/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project8Description} />
          </div>
        </div>
      </div>
      <h1 className="ml-auto mr-auto mt-10 font-semibold flex gap-4">
        <p className="self-center">{text.otherProjs}</p>
        <a href="https://github.com/AndreiFlau">
          <i className="devicon-github-original colored text-2xl"></i>
        </a>
      </h1>
    </div>
  );
}

export default Projects;
