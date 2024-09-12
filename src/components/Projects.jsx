import useLangText from "../hooks/useLangText";
import TrustedHtml from "./TrustedHtml";

function Projects() {
  const text = useLangText();
  return (
    <div className="flex flex-col mt-10 mr-10 ml-10 p-10" id="projects">
      <h1 className="self-center text-xl font-semibold">{text.myProjects}</h1>
      <div className="grid grid-cols-1 gap-16 self-center mt-10 md:grid-cols-2">
        <div>
          <img src="/imgs/blogimg.png" alt="Picture of the blog homepage" />
          <div className="p-4">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto  font-semibold">{text.project1Title}</h3>
              <a href="https://github.com/AndreiFlau/Project---Blog-Api-Frontend">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://project-blog-api-frontend.vercel.app/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project1Description} />
          </div>
        </div>
        <div>
          <img src="/imgs/store.png" alt="Picture of the store homepage" />
          <div className="p-4">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto  font-semibold">{text.project2Title}</h3>
              <a href="https://github.com/AndreiFlau/Project---Shopping-Cart">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://project-shopping-cart-lime.vercel.app/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project2Description} />
          </div>
        </div>
        <div>
          <img src="/imgs/pokemon.png" alt="Picture of the pokémon memory game" />
          <div className="p-4">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto  font-semibold">{text.project3Title}</h3>
              <a href="https://github.com/AndreiFlau/PokemonMemoryCard">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://pokemon-memory-card-nu.vercel.app/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project3Description} />
          </div>
        </div>
        <div>
          <img src="/imgs/noodledrive.png" alt="Picture of my google drive clone" />
          <div className="p-4">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto  font-semibold">{text.project4Title}</h3>
              <a href="https://github.com/AndreiFlau/Project---File-Uploader">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://project-file-uploader.onrender.com/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project4Description} />
          </div>
        </div>
        <div>
          <img src="/imgs/homepage.png" alt="Picture of Frodo's homepage" />
          <div className="p-4">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto  font-semibold">{text.project5Title}</h3>
              <a href="https://github.com/AndreiFlau/Project---Homepage">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://andreiflau.github.io/Project---Homepage/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project5Description} />
          </div>
        </div>
        <div>
          <img src="/imgs/battleshipscreenshot.png" alt="Picture of my battleship game" />
          <div className="p-4">
            <div className="flex items-center gap-3">
              <h3 className="mr-auto  font-semibold">{text.project6Title}</h3>
              <a href="https://github.com/AndreiFlau/Project---Battleship">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://andreiflau.github.io/Project---Battleship/">
                <svg className="">
                  <use xlinkHref="#redirect"></use>
                </svg>
              </a>
            </div>
            <TrustedHtml html={text.project6Description} />
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
