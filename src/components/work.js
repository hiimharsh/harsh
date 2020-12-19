import React from 'react'
import '../assets/css/home/work.css'
import Projects from '../constants/projects.json'
import ProjectCard from './projectcard'

export default function Work() {
    return (
        <section className="work" id="work">
            <div className="work-headline">
                <h3>
                    In the past years I’ve worked with some incredible projects to help bring their visions to life
                </h3>
                <div className="work-projects">
                    {
                        Projects.map((project, index) => <ProjectCard key={index} project={project} />)
                    }
                </div>
            </div>
        </section>
    )
}
