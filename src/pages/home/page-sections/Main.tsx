import { ContactMeSection } from "../../../components/contactMeSection/ContactMeSection"
import { EducationSecition } from "../../../components/educationSecition/EducationSecition"
import { ExperienceSection } from "../../../components/experienceSection/ExperienceSection"
import { ProjectsSection } from "../../../components/projectsSection/ProjectsSection"
import { SkillsSection } from "../../../components/skillsSection/SkillsSection"

export const Main = () => {
    return (
        <main id="main-home">
            <ExperienceSection/>
            <ProjectsSection/>
            <EducationSecition/>
            <SkillsSection/>
            <ContactMeSection/>
        </main>
    )
}
