import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectCardContent {
  imgSrc: string,
  projectTitle: string,
  projectDescription: string;
}

export const ProjectCard = ({ imgSrc, projectTitle, projectDescription }: ProjectCardContent) => {
  return (
    <article className="project-card-article">
      <picture className="project-img-container" style={{backgroundImage: `url(${imgSrc})`}}></picture>
      <div className="project-card-info">
        <a href="https://rick-and-morty-wiki-orcin.vercel.app" target="__blank" className="project-title-section">
          <div className="project-title-div">
            <h3>{projectTitle}</h3> 
            <HiOutlineExternalLink />
          </div>
          <hr />
        </a>
        <p>{projectDescription}</p>

        <div className="project-card-buttons">
          <button className="project-card-button">View code</button>
          <button className="project-card-button">Web site</button>
        </div>
      </div>
    </article>
  )
}
