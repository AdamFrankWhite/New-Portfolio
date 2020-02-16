import React from 'react'
import ContactForm from './ContactForm'
import { TimelineLite } from 'gsap/TweenMax'

class Contact extends React.Component {
    constructor() {
        super()
        this.element = null
        this.myTween = new TimelineLite()
    }

    componentDidMount() {
        this.myTween.from(this.element, 0.75, {x:-200})
    }    

    render() {
        return (
            <div className="container contact">
                <hr className="line"></hr>
                <h1 ref={ h2 => this.element = h2 }>Contact</h1>
                <h4 className="sub-heading">Want to get in touch? You can reach me at <a href="mailto:adam.white06@gmail.com">adam.white06@gmail.com</a> - alternatively, send a message using the form below</h4>
                <ContactForm />
            </div>
            
        )
    }
   
}

export default Contact