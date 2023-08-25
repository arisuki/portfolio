import TechItem from "../TechItem/TechItem"

export default function ProjectsDetail({ project }) {
  const Tech = project.tech.map((t, idx)=> (
    <TechItem techItem = {t} key = {idx} />
  ))

  return (
    <div class="container">
    <div class="col s12 m12">
      <div className="projects-detail">
        <h3>{project.name}</h3>
        <br />
        <a className="projects-link" href={project.link} target="_blank">github repo</a>
        <a className="projects-link" href={project.deployed}
        target="_blank"
        >visit site</a>
        <br />  <br />
        <img className="project-image" src={project.image} alt={project.name} />    
     

        <p>{project.details}</p>
        <div className="row">


        <h5> {Tech}</h5>
        </div>
      </div>
      <br />
    </div>
    </div>
  );
}
