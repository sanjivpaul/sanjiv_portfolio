import ProjectPage from "../../Pages/ProjectPage";
import HeroTitle from "./HeroTitle";
import HomePageDetails from "./HomePageDetails";
import FooterPage from "../../Pages/FooterPage";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <HeroTitle />
        <div className="objective">
          I am a web developer. Passionate for web development goal is
          to get a good position by doing satisfactory work in IT sector, firmly
          focused to accomplish the task in fast facing environment, and I am
          keen to learn something new daily.
        </div>
        <HomePageDetails />

        <ProjectPage />
        <FooterPage />
      </div>
    </>
  );
}
export default HomePage;
