interface EducationCardProps { 
    title: string,
    school: string,
    description: string;
}

export const EducationCard = ({ title, school, description}: EducationCardProps) => {
    return (
        <article className='education-card fade-in-from-bottom'>
            <div className='education-title-container'>
                <h3>{title}</h3>
            </div>
            <div>
                <h4>School: </h4>
                <span>{school}</span>    
            </div>
            <p>{description}</p>
        </article>
    )
}
