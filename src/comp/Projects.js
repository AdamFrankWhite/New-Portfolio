import React from 'react'
import ProjectCard from './ProjectCard'
import {TweenMax, TweenLite, Power1, Elastic, TimelineLite} from 'gsap/TweenMax'
import EnlargedCard from './EnlargedCard'

class Projects extends React.Component {

    constructor() {
        super()
        //reference to DOM node
        this.cardCont = null;
        // reference to the animation
        this.myTween = new TimelineLite();
        this.state = {
            enlargedCardProps: null
            // styleControl: [
            //     {id: 0, enlarged: false},
            //     {id: 1, enlarged: false},
            //     {id: 2, enlarged: false},
            //     {id: 3, enlarged: false}
            // ]
        }
        this.clickProject = this.clickProject.bind(this)
    }

    clickProject(props) {
        // console.log(id + " clicked!")
        
        // const updatedStyles = []
        // this.state.styleControl.map( card => {
        //     if (card.id == id) {
        //         card.enlarged = true
        //     } else {
        //         card.enlarged = false
        //     }
        //     updatedStyles.push(card)
        // })
        //     this.setState({styleControl: updatedStyles})
        //     console.log(this.state.styleControl)

        this.setState({enlargedCardProps: props})
        
        // this.setState({styleControl: [`card${id}`]: true})
        // this.myTween.from(this.myElement,0.5,{ transform: "scale(5)", opacity:0 , ease: Power1.easeIn })
	}
    componentDidMount() {
        this.myTween.from(this.cardCont,0.5,{ x:-100 , opacity:0 , ease: Power1.easeIn } ,'+=0.5')
    }

    render() {
        let enlargedCardProps = this.state.enlargedCardProps
        return (
            <div ref={div => this.cardCont = div}>
                <h1>My Projects</h1>
                <div className="card-container">
                    <ProjectCard 
                        projectName="Kakuro" 
                        id="0" 
                        clickProject={this.clickProject}
                        styleControl={this.state.styleControl}
                    />
                    <ProjectCard 
                        projectName="NASA Image Search App" 
                        id="1" 
                        clickProject={this.clickProject} 
                        styleControl={this.state.styleControl}
                    />
                    <ProjectCard 
                        projectName="Favourite Beer App" 
                        id="2" 
                        clickProject={this.clickProject}
                        styleControl={this.state.styleControl}
                    />
                    <ProjectCard 
                        projectName="Ebook Landing Page" 
                        id="3" 
                        clickProject={this.clickProject}
                        styleControl={this.state.styleControl}
                    />

                    {this.state.enlargedCardProps && 
                        <EnlargedCard 
                            projectName={enlargedCardProps.projectName} 
                            id={enlargedCardProps.id} 
                            clickProject={this.state.clickProject}
                            styleControl={this.state.styleControl} 
                        />}
                </div>
                
            </div>
        )
    }
}

export default Projects