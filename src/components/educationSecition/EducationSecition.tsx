import { EducationCard } from './EducationCard'
import './education-section-styles.css'
export const EducationSecition = () => {
  return (
    <div>
        <h2>Education history</h2>
        <section id="education-section">
            <EducationCard 
                title='SENA Analysis and software development technical degree'
                school='SENA'
                description='Technical degree focused on: data base management, web developement, algorithm fundamentals, agile methodologies, among others.'
            />
            <EducationCard
                title='Modern Web Application Development with JavaScript'
                school='Full stack open'
                description='Full stack open course from the University of Helsinki. The course covers topics from React, Node, Express, MongoDB and GraphQL to TypeScript and testing'
            />
            <EducationCard
                title='Full Stack Developer Bootcamp'
                school='Kambcode'
                description='Full stack developer bootcamp with a focus on the MERN stack, building web apps from scratch and deploying them'
            />
            <EducationCard 
                title='Microsoft Learn TypeScript' 
                school='Microsoft'
                description='Typescript course which shows how to use this javascript superset in your projects'
            />
            <EducationCard
                title='Gentleman Programming React + TypeScript'
                school='Gentleman Programming'
                description='React and Typescript course with a focus on building web apps with a clean and scalable code. The course covers topics from hooks to routing and state management'
            />
            <EducationCard 
                title='CSS Midudev Course'
                school='Midudev'
                description='Complete CSS course from scratch to advanced topics such as grid layout, animation and transitions, media queries and scroll animations'
            />
        </section>
    </div>
  )
}
