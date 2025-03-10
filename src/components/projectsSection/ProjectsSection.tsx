import './project-section-styes.css'
import { ProjectCard } from './ProjectCard'
import rmProject from '../../assets/r&m-project.png'
import eCommerce from '../../assets/generic-ecomerce.png'

export const ProjectsSection = () => {
  return (
    <div>
        <h2 id='projects-title'>Projects</h2>
        <section id='projects-section'>
            <ProjectCard 
              imgSrc={rmProject}  // Use the imported image
              projectTitle='Rick and Morty Wiki'
              projectDescription='A simple wiki page for the Rick and Morty show. It uses the Rick and Morty API to fetch the data, and allow user to search for characters, locations and episodes.'
              codeLink='https://github.com/Cairon29/Rick-and-Morty-Wiki'
              isDeployed={true}
              projectLink='https://rick-and-morty-wiki-orcin.vercel.app'
            />
            <ProjectCard 
              imgSrc={eCommerce}  // Use the imported image
              projectTitle='Generic E-commerce'
              projectDescription='Local e-commerce website that allows users to log-in and out, browse products, filter, add them to the cart, and simulate a checkout process by sending a confirmation email to the user with the order details.' 
              codeLink='https://github.com/Cairon29/Generic-ecommerce'
              isDeployed={false}
            />
        </section>
    </div>
  ) 
}
