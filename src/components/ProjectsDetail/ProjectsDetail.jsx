export default function ProjectsDetail({ project }) {
  const tech = project.tech.join(" | ");

  return (
    <div class="col s12 m6 l3">
      <div className="projects-detail">
        <h3>{project.name}</h3>
        <p>{project.details}</p>
        <p>Technology used:</p>
        <p> {tech}</p>
        <a className="projects-link" href={project.link}>github repo</a>
      </div>
      <br />
    </div>
  );
}
