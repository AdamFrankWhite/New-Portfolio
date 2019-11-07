import React from 'react'
import {TweenMax, TweenLite, Power1, Elastic, TimelineLite} from 'gsap/TweenMax'
class About extends React.Component {
    constructor() {
        super()
        //reference to DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = new TimelineLite();
    }

    componentDidMount() {
        this.myTween.from(this.myElement,0.5,{ x:-100 , opacity:0 , ease: Power1.easeIn } ,'+=0.5')
    }

    render() {
        return (
            <div ref={div => this.myElement = div}>
                <h2>About Me</h2>
                <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada. Lacus vestibulum sed arcu non odio euismod. In hac habitasse platea dictumst vestibulum. Interdum posuere lorem ipsum dolor sit amet. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ut tristique et egestas quis ipsum. Nec feugiat nisl pretium fusce id velit ut. Et leo duis ut diam. Orci nulla pellentesque dignissim enim sit. Cursus sit amet dictum sit amet justo donec enim. Eu sem integer vitae justo eget magna fermentum iaculis. Leo integer malesuada nunc vel risus commodo viverra. Nisl vel pretium lectus quam. Vitae ultricies leo integer malesuada. Varius vel pharetra vel turpis nunc eget lorem dolor.
                </p>
                <p className="text-body">
                    Venenatis urna cursus eget nunc. Eget nullam non nisi est. Ut sem viverra aliquet eget sit amet tellus cras. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Lacus sed turpis tincidunt id aliquet risus feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Ut venenatis tellus in metus vulputate eu. Amet risus nullam eget felis. Nunc consequat interdum varius sit. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Accumsan tortor posuere ac ut. Vulputate ut pharetra sit amet aliquam id diam maecenas. Non enim praesent elementum facilisis leo vel. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Mauris cursus mattis molestie a iaculis at. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Sed blandit libero volutpat sed cras ornare. Ut tortor pretium viverra suspendisse.
                </p>
                <p className="text-body">
                    Nec feugiat nisl pretium fusce id velit ut tortor. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Sagittis vitae et leo duis ut diam quam. Diam quam nulla porttitor massa. Purus in massa tempor nec. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Maecenas accumsan lacus vel facilisis volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Id aliquet lectus proin nibh. Auctor augue mauris augue neque gravida in fermentum et. Sit amet justo donec enim diam vulputate. Nisl tincidunt eget nullam non nisi est sit amet. Semper risus in hendrerit gravida rutrum quisque. Adipiscing diam donec adipiscing tristique risus nec feugiat. Nibh mauris cursus mattis molestie a iaculis at. Porttitor eget dolor morbi non arcu risus. Orci a scelerisque purus semper eget. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit.
                </p>
            </div>
        )
    }
    
}

export default About