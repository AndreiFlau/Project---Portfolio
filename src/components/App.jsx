import "../styles/App.css";

import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import MyStack from "./MyStack";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import { LanguageProvider } from "../hooks/LanguageProvider";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <AboutMe />
        <MyStack />
        <Projects />
        <ContactMe />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
