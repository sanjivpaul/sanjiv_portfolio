import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ProjectPage() {
  let [projectList, setProjectList] = useState([]);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  let getProjectList = async () => {
    try {
      let { data } = await axios.get("http://localhost:5007/api/projects");
      // console.log(data.result);
      if (data.status === true) {
        setProjectList([...data.result]);
      } else {
        setProjectList([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjectList();
  }, []);
  return (
    <>
      <div>
        {/* <!-- projects-area --> */}
        <p className="projects-area-heading">Projects</p>
        <div className="projects-page-container">
          {projectList.map((project, index) => {
            return (
              <div className="projects" key={index}>
                <picture className="project-img-area">
                  <img
                    className="img"
                    src={"./images/" + project.image}
                    alt=""
                  />
                </picture>
                <div className="project-textarea">
                  <p className="project-title">{project.title}</p>
                  <p className="project-desc">{project.desc}</p>
                  <div className="tags-section">
                    {project.tags.map((tag, index) => {
                      return (
                        <div className="tags-container" key={index}>
                          <span className="tags">{tag}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="buttons">
                    <button
                      className="button-1"
                      onClick={() => openInNewTab(project.openproject)}
                    >
                      Open Project
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                    <button className="button-2"
                    onClick={() => openInNewTab(project.opensource)}>
                      View Source
                      <i class="fa-brands fa-github"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
