import React from 'react'
import './Blog.css'
class Blogs extends React.Component {
    render() {
        return (
            <div>
                <div className="blog_body">
                    <div className="blog_1">
                        <h2 className="blog_heading">Solutions</h2>
                        <p className="blog_text_body">Let's reimagine how your business gets done.</p>
                        <div className="a_div"><a className="blog_more" href="#">Learn More</a></div>
                    </div>
                    <div className="blog_2">
                        <h2 className="blog_heading">Staffing Services</h2>
                        <p className="blog_text_body">We connect talented Technology and Finance & Accounting professionals with exceptional companies.</p>
                        <div className="a_div"><a className="blog_more" href="#">Learn More</a></div>
                    </div>
                </div>
                <div className="blog_body_2">
                    <div className="blog_3">
                        <h2 className="blog_heading">Industry Specialties</h2>
                        <p className="blog_text_body">We listen. Our experienced staffing specialists cater to your industry-specific employment challenges.</p>
                        <div className="a_div"><a className="blog_more" href="#">Learn More</a></div>
                    </div>
                    <div className="blog_4">
                        <h2 className="blog_heading">International Talent Solutions</h2>
                        <p className="blog_text_body">Let Kforce navigate your steps in visa sponsorship and securing international talent.</p>
                        <div className="a_div">
                            <a className="blog_more" href="#">Client</a>
                            <a className="blog_more" href="#">Candidate</a>
                            <a className="blog_more" href="#">Vendors</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Blogs