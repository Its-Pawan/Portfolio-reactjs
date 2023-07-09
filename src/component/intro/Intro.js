import React from 'react'
import Button1 from '../button/Button1'
import './Intro.scss'
import resume from './resume.pdf'

export default function Intro() {
    return (
        <section className='intro'>
            <div className="container-fluid">
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-lg-5 about-img">
                            <img src="images/about-us.webp" alt="Introduction-image" className='img-fluid' />
                        </div>
                        <div className="offset-lg-1 col-lg-5 intro-right-data">
                            <div className="main-title text-left">
                                <h2>LET’S <br /> Introduce about  <br />myself </h2>
                                <p>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days.</p>
                                <p>Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two.</p>
                                <div className="intro-btn">
                                    <a href={resume} download>
                                        <Button1 btnName="Download CV" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
