import Header from "./Components/Header";
import HomePage from "./Components/Home/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
