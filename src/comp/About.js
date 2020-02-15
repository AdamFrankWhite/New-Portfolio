import React from 'react'
import {Power1, TimelineLite} from 'gsap/TweenMax'
class About extends React.Component {
    constructor() {
        super()
        //reference to DOM node
        this.myElements = [null, null]
        // reference to the animation
        this.myTween = new TimelineLite();
    }

    componentDidMount() {
        // this.myTween.from(this.myElement,0.5,{ x:-100 , opacity:0 , ease: Power1.easeIn } ,'+=0.5')
        // this.myTween.to(this.myElements, {duration: 1, x:-100 , opacity:0, ease: Power1.easeIn})
        // this.myTween.to(this.myElements[1], {duration: 1, y: -200, ease: Power1.easeIn})

        // .from(element, speed, {effects}, delay)
        this.myTween.from(this.myElements[0], 0.75, {x:400 , opacity: 0, ease: Power1.easeIn }, 0);
        this.myTween.from(this.myElements[1], 0.75, {y:300 , opacity: 0, ease: Power1.easeIn }, 0);

    }

    render() {
        return (
            <div className="about-text">
                <h2 className="front" ref={h2 => this.myElements[0] = h2}>About Me</h2>
                <div ref={div => this.myElements[1] = div}>
                    <p className="text-body front">Self-taught, I have learned the fundamentals of web development from online videos and training sites, and through building projects. I have specialised in development using React, which I find versatile and a joy to use. The modular approach to building UI componenets is very satisfying and simple approach to development. My preferred code editor is Visual Studio Code.
                    </p>
                   
                    <p className="text-body front">
                        
                    </p>
                </div>
                
            </div>
        )
    }
    
}

export default About