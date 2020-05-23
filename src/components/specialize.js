import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'

const specializeArr = [
    {
        icon: ['fab', 'twitter'],
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt, eveniet autem sint repellat aperiam dolore beatae magni adipisci. Facilis dicta, nobis reprehenderit odio tempora labore tenetur quos non nisi?'
    },
    {
        icon: ['fab', 'twitter'],
        title: 'App Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt, eveniet autem sint repellat aperiam dolore beatae magni adipisci. Facilis dicta, nobis reprehenderit odio tempora labore tenetur quos non nisi?'
    },
    {
        icon: ['fab', 'twitter'],
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt, eveniet autem sint repellat aperiam dolore beatae magni adipisci. Facilis dicta, nobis reprehenderit odio tempora labore tenetur quos non nisi?'
    },
    {
        icon: ['fab', 'twitter'],
        title: 'App Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt, eveniet autem sint repellat aperiam dolore beatae magni adipisci. Facilis dicta, nobis reprehenderit odio tempora labore tenetur quos non nisi?'
    }
];

const Specialize = props => {
    return (
        <section className="specialize">
            <h4>Specialize In</h4>
            <div className="list">
                <ul>
                    {
                        specializeArr.map((spec, index) => (
                            <li key={index}>
                                <div className="icon">
                                    <span><FontAwesomeIcon icon={spec.icon}/></span>
                                </div>
                                <div className="content">
                                    <div className="title">{spec.title}</div>
                                    <div className="description">{spec.description}</div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Specialize