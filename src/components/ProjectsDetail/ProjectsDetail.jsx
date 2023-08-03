import TechItem from "../TechItem/TechItem"
export default function ProjectsDetail({ project }) {
  const Tech = project.tech.map((t, idx)=> (
    <TechItem techItem = {t} key = {idx} />
  ))

  return (
    <div class="col s12 m6 l3">
      <div className="projects-detail">
        <h3>{project.name}</h3>
        <a className="projects-link" href={project.link}>github repo</a>
        <p>{project.details}</p>
        <div className="row">
        <h5> {Tech}</h5>
        </div>
      </div>
      <br />
    </div>
  );
}
