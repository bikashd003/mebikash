import React from 'react'
import aboutImg from "../assets/img/about-img.jpg";
import Resume from '../assets/Resume/Resume.pdf'
import about_png from '../assets/img/color-sharp.png'


const old = new Date(2000, 10, 1);
const now = new Date();
const yearold = now.getFullYear() - old.getFullYear();



function About() {
    return (
        <section id="about">
            <div className="about">
                <div className="a-left">
                    <div className="a-img">
                        <img src={aboutImg} alt="profile" />
                    </div>
                </div>
                <div className="a-right">
                    <h4>About me</h4>
                    <h6>Hello, I'm {yearold}-year programmer/developer,Problem solver. <br /> <br /> I am motivated to upgrade and expand my skill set through
                        mentorship and challenging projects. <br />  <br />I enjoy working collaboratively but can also run with
                        projects independently.</h6>
                    <a href={Resume} download>
                        <button>Resume</button>
                    </a>
                </div>
            </div>
            <img src={about_png} className='a-png' alt='about-img' />
        </section>
    )
}

export default About