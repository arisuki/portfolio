import ProjectsDetail from "../ProjectsDetail/ProjectsDetail";
import { projects } from "./projects.js";

export default function Projects() {
  const ProjectCards = projects.map((p, idx) => (
    <ProjectsDetail project={p} key={idx} />
  ));

  return (
    <div className="projects">
      <h1 className="projects-h1">Projects</h1>
      <p className="projects-text"> You can find some of my favourite curent and former projects here</p>

      <div class="row">

        {ProjectCards}
        </div>
        </div>

  );
}
