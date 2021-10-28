import React from 'react'
import '../assets/css/projectcard.scss'

const ProjectCard = props =>  {
    return (
        <div className="project-card">
            <h4>
                <a href={props.project.url} target="_blank">
                    {props.project.name}
                </a>
            </h4>
            <p className="description">{props.project.description}</p>
            {/* <p className="duration">{props.project.duration}</p> */}
            {/* <div className="project-language-cards">
                {
                    props.project.language.split(' + ').map((lang, index) => (
                        <div key={index} className="project-language">
                            {lang}
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default ProjectCard