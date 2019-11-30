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
                    <p className="text-body">Self-taught, I have learned the fundamentals of web development from online videos and training sites, and through building projects. I have specialised in development using React, which I find versatile and a joy to use. The modular approach to building componenets is very satisfying and simple approach to development. My preferred code editor is Visual Studio Code; from there, I used the terminal to run npm commands to create my LDE.
                    </p>
                    <p className="text-body">
                        I 
                    </p>
                    <p className="text-body">
                        Nec feugiat nisl pretium fusce id velit ut tortor. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Sagittis vitae et leo duis ut diam quam. Diam quam nulla porttitor massa. Purus in massa tempor nec. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Maecenas accumsan lacus vel facilisis volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Id aliquet lectus proin nibh. Auctor augue mauris augue neque gravida in fermentum et. Sit amet justo donec enim diam vulputate. Nisl tincidunt eget nullam non nisi est sit amet. Semper risus in hendrerit gravida rutrum quisque. Adipiscing diam donec adipiscing tristique risus nec feugiat. Nibh mauris cursus mattis molestie a iaculis at. Porttitor eget dolor morbi non arcu risus. Orci a scelerisque purus semper eget. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit.
                    </p>
                </div>
                
            </div>
        )
    }
    
}

export default About