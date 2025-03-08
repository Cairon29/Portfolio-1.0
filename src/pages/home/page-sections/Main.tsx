import { ExperienceSection } from "../../../components/experienceSection/ExperienceSection"
import { ProjectsSection } from "../../../components/projectsSection/ProjectsSection"
import { EducationSecition } from "../../../components/educationSecition/EducationSecition"
import { SkillsSection } from "../../../components/skillsSection/SkillsSection"
import { ContactMeSection } from "../../../components/contactMeSection/ContactMeSection"

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
