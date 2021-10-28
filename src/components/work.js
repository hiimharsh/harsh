import React from 'react'
import '../assets/css/work.scss'
import Projects from '../constants/projects'
import ProjectCard from './projectcard'

export default function Work() {
    return (
        <section className="work" id="projects">
            <div className="work-headline">
                <h3>
                    {/* In the past years I’ve worked with some incredible projects to help bring their visions to life */}
                    Projects
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
