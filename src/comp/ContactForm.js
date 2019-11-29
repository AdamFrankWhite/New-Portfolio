import React from 'react'
import { TimelineLite } from 'gsap/TweenMax'

class ContactForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email:"",
            subject: "",
            message: "",
            sent: false
        }
        
        this.myTween = new TimelineLite()
        this.nameInput = null
        this.emailInput = null
        this.subjectInput = null
        this.message = null
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.myTween.from(this.nameInput, 0.75, {y:-300}, 0)
        this.myTween.from(this.emailInput, 0.75, {x:-300}, 0)
        this.myTween.from(this.subjectInput, 0.75, {x:300}, 0)
        this.myTween.from(this.message, 0.75, {y:300}, 0)
    }   

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        this.setState({sent: true})
    }
    render() {
        return (
            <div className="contact-form">
                <label htmlFor="name" className="row" ref={row => this.nameInput = row}>
                    <span className="label">*Name: </span> 
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        required
                    />
                </label>
                <label htmlFor="email" className="row"  ref={row => this.emailInput = row}>
                    <span className="label">*Email: </span> 
                    <input 
                        type="email"
                        id="email" 
                        name="email"
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required    
                    />
                </label>
                <label htmlFor="subject" className="row"  ref={row => this.subjectInput = row}>
                    <span className="label">Subject: </span> 
                    <input 
                        type="text"
                        id="subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="message" className="row" ref={row => this.message = row}>
                    <span className="label">*Message: </span> 
                    <textarea 
                        id="message"
                        value={this.state.message}
                        name="message"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                {this.state.sent && <p>Thank you for your message</p>}
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                
            </div>

        )
        
    }
}

export default ContactForm