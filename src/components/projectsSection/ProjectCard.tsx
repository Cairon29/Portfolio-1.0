import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectCardContent {
  imgSrc: string,
  projectTitle: string,
  projectDescription: string;
  isDeployed: boolean;
  projectLink?: string;
  codeLink: string;
}

export const ProjectCard = ({ imgSrc, projectTitle, projectDescription, codeLink, isDeployed, projectLink }: ProjectCardContent) => {
  return (
    <article className="project-card-article">
      <picture className="project-img-container" style={{backgroundImage: `url(${imgSrc})`}}></picture>
      <div className="project-card-info">
        <a href={isDeployed ? projectLink : codeLink} target="__blank" className="project-title-section">
          <div className="project-title-div">
            <h3>{projectTitle}</h3> 
            <HiOutlineExternalLink />
          </div>
          <hr />
        </a>
        <p>{projectDescription}</p>

        <div className="project-card-buttons">
          <a className="project-card-button" href={codeLink} target="_blank">View code</a>
          { isDeployed && <a className="project-card-button" href={projectLink}>Web site</a>}
        </div>
      </div>
    </article>
  )
}
