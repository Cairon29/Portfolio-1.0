import './project-section-styes.css'
import { ProjectCard } from './ProjectCard'
import rmProject from '../../assets/r&m-project.png'

export const ProjectsSection = () => {
  return (
    <>
        <h2 id='projects-title'>Projects</h2>
        <section id='projects-section'>
            <ProjectCard 
              imgSrc={rmProject}  // Use the imported image
              projectTitle='Rick and Morty Wiki'
              projectDescription='A simple wiki page for the Rick and Morty show. It uses the Rick and Morty API to fetch the data, and allow user to search for characters, locations and episodes.'
            />
            <ProjectCard 
              imgSrc={rmProject}  // Use the imported image
              projectTitle='Rick and Morty Wiki'
              projectDescription='A simple wiki page for the Rick and Morty show. It uses the Rick and Morty API to fetch the data, and allow user to search for characters, locations and episodes.'
            />
        </section>
    </>
  ) 
}
