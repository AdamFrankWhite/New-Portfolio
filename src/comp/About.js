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
                <h2 ref={h2 => this.myElements[0] = h2}>About Me</h2>
                <div ref={div => this.myElements[1] = div}>
                    <p className="text-body">
                        Self-taught, I have learned the fundamentals of web development from online videos and training sites, and through building projects. I have specialised in development using React, which I find versatile and a joy to use. The modular approach to building UI componenets is very satisfying and simple approach to development. My preferred code editor is Visual Studio Code.
                    </p>
                   <p className="text-body">
                        The nature of software development – thinking programmatically, solving problems and constructing solutions - is engaging and satisfying and I seek to develop a long-term career in the field.  I would love the opportunity to learn from experienced developers, gain exposure to industry practices and procedures, and to build my skill set. 
                   </p>
                    <p className="text-body">
                        Changing career into software development, I have spent the last 15 months learning to code. Self-taught, I have worked on a variety of personal projects, exploring using different libraries, frameworks and third-party APIs (see my website). Starting on the front end, I learnt HTML and CSS, along with JavaScript as my main programming language, before picking up libraries and frameworks. I have decided to specialise in React, which is a delight to use, flexible and powerful. I am however open to learning any technology, since all are tools to solving problems. Whilst I currently have no commercial experience, I feel I have a solid foundation of understanding and coding, and would be able to contribute significantly to the team at a company that is looking to develop its talent pool.  
                    </p>
                </div>
                
            </div>
        )
    }
    
}

export default About