import React from 'react'
import '../assets/css/home/projectcard.css'

const ProjectCard = props =>  {
    return (
        <div className="project-card">
            <h4>
                <a href={props.project.url}>
                    {props.project.name}
                </a>
            </h4>
            <p>{props.project.duration}</p>
            <div className="project-language-cards">
                {
                    props.project.language.split(' + ').map((lang, index) => (
                        <div key={index} className="project-language">
                            {lang}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectCard