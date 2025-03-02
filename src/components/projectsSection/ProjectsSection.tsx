import './project-section-styes.css'
import { ProjectCard } from './ProjectCard'

export const ProjectsSection = () => {
  return (
    <>
        <h2>Projects</h2>
        <section id='projects-section'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>

        </section>
    </>
  ) 
}
