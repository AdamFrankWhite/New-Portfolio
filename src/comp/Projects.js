import React from 'react'
import ProjectCard from './ProjectCard'
import {TweenMax, TweenLite, Power1, Elastic, TimelineLite} from 'gsap/TweenMax'

class Projects extends React.Component {

    constructor() {
        super()
        //reference to DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = new TimelineLite();
        // this.state = {
        //     styleControl: {flexBasis: "23%", height: "300px", order: 1, transition: "flex-basis 0.5s"}
        // }
    }

    componentDidMount() {
        this.myTween.from(this.myElement,0.5,{ x:-100 , opacity:0 , ease: Power1.easeIn } ,'+=0.5')
    }

    render() {
        return (
            <div ref={div => this.myElement = div}>
                <h1>My Projects</h1>
                <div className="card-container">
                    <ProjectCard 
                        projectName="Kakuro" 
                        id="1" 
                    />
                    <ProjectCard 
                        projectName="NASA Image Search App" 
                        id="2" 
                    />
                    <ProjectCard 
                        projectName="Favourite Beer App" 
                        id="3" 
                    />
                    <ProjectCard 
                        projectName="Ebook Landing Page" 
                        id="4" 
                    />
                </div>
                
            </div>
        )
    }
}

export default Projects