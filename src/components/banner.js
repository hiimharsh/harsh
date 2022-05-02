import React from 'react'
import '../assets/css/banner.scss'
import signatureImage from '../assets/images/harsh-signature.png'
import whiteSignatureImage from '../assets/images/harsh-signature-white.png'

const Banner = (props) => {
    const { planet } = props;
    return (
        <section className="banner">
            <div className="name">
                <h1>Hey, I'm
                    <div className="signature-image">
                        <img src={planet === 'Sun' ? signatureImage : whiteSignatureImage} alt="Harsh" />
                    </div>
                👋</h1>
                <p>
                    <span>Software Engineer</span> based in Mumbai,
                    creating innovative and powerful applications.
                    I love to build things that help people and make a difference in the world.
                    {/* I am always looking for new challenges and opportunities to learn and grow. */}
                    {/* In my freetime I explore beautiful places, play football and slow my time with beautiful sunsets. */}
                    {/* In my freetime I work on interesting side projects in web and app sphere. */}
                </p>
                {/* <p>Feel free to chat or connect with me.</p> */}
            </div>
            <a href="mailto:harshthakkar46@gmail.com" className="available">
                {/* Available for Discussion */}
                Get In Touch
            </a>
        </section>
    )
}

export default Banner