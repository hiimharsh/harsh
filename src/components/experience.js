import React from 'react'
import '../assets/css/home/experience.css'

const Experiences = [
    {
        position: 'Senior Full Stack Developer',
        company: 'Whitecrow Research',
        url: 'https://www.whitecrowresearch.com/',
        duration: 'Aug 2019 - Present'
    },
    {
        position: 'Senior Full Stack Developer',
        company: 'Tacto Infomedia',
        url: 'http://www.tacto.in/',
        duration: 'Feb 2017 - Aug 2019'
    },
    {
        position: 'Web Developer',
        company: 'Wohlig Technology',
        url: 'https://www.wohlig.co.in/',
        duration: 'Oct 2015 - Feb 2017'
    }
]

const Experience = props => {
    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <div className="experience-headline">
                    <h3>
                        Experience
                    </h3>
                    <div className="experience-main">
                        {
                            Experiences.map((exp, index) => (
                                <div key={index} className="experience-card">
                                    <h4>
                                        <a href={exp.url}>
                                            {exp.company}
                                        </a>
                                    </h4>
                                    <p>{exp.duration}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;