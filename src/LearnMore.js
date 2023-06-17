import React from 'react'
import './LearnMore.css'
class Learnmore extends React.Component {
    render() {
        const ImageSource = "https://kforcewebeast.azureedge.net/media/404315/kforceonlinequote_homepagegraphic1_1200x300.png"
        return (
            <div className="learn">
                <h2 className = "mb-20">Great Results Through Strategic <br></br>Partnership And Knowledge Sharing®.</h2>
                <p className = "learn_body">Our vision is To Have A Meaningful Impact On All The Lives We Serve<strong>®</strong>. As a 2020 Best of Staffing<br></br>
                Award winner, our great people take pride in delivering remarkable quality and service through<br></br>
                progressive recruiting strategies and cutting-edge technologies.</p>
                <p className = "learn_more"><a className = "more" href = "#">Learn More</a></p>
                <a href = "#"><img className = "img_more" src = {ImageSource} /></a>
            </div>
        )
    }
}
export default Learnmore