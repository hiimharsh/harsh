import React from 'react'
import '../assets/css/skills.scss'

const skills = [
    {
        title: 'Technical',
        skill: ["Angular", "React", "Node.js", "Swift", "Three.js"]
    },
    {
        title: 'Cloud',
        skill: ["AWS", "GCP", "Firebase", "Docker", "DevOps"]
    },
    {
        title: 'Databases',
        skill: ["MongoDB", "MySQL", "PostgreSQL", "DynamoDB", "Redis"]
    },
    {
        title: 'Non-Technical',
        skill: ["Agile Implementation", "User Focus", "Digital Perspective", "Business Modeling", "Effective Leadership"]
    }
]

const Skills = props => {
    return (
        <section className="skills" id="skills">
            <div className="skills-headline">
                <h3>
                    Skills
                </h3>
                <div className="skills-main">
                    {
                        skills.map((s, index) => (
                            <div key={index} className="skills-card">
                                <h4>
                                    {s.title}
                                </h4>
                                {
                                    s.skill.map((skill, i) => (
                                        <p key={i}>{skill}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills;