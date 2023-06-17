import React from 'react'
import './Footer.css'

class Footer extends React.Component {
    render() {
        const FooterImage = "https://kforcewebeast.azureedge.net/media/400248/logo-white-2x.png"
        return (
            <div className="footer">
                <div className="top_footer">
                    <div className="footerlogo">
                        <a href="/"><img className="footer_logo" src={FooterImage} /></a>
                    </div>
                    <div className="footer_text">
                        <p>Kforce is a professional solutions firm specializing in building and managing elite teams within Technology and Finance & Accounting with top employers nationwide. Merging your vision and our expertise, we help you achieve powerful results.</p>
                    </div>
                </div>
                <div className = "line"></div>
                <div className="bottom_footer">
                    <div className="footer_1">
                        <div className="footer_nav_1">
                            <h1>Find Work</h1>
                            <a href="/"><h4>Search Jobs</h4></a>
                            <a href="/"><h4>KFORCEconnect</h4></a>
                            <a href="/"><h4>Careers at Kforce</h4></a>
                            <a href="/"><h4>Submit Your Resume</h4></a>
                            <a href="/"><h4>Internship Opportunities</h4></a>
                            <a href="/"><h4>Entry-Level Opportunities</h4></a>
                        </div>
                    </div>
                    <div className="footer_2">
                        <div className="footer_nav_2">
                            <h1>Find Talent</h1>
                            <a href="/"><h4>Staffing Services</h4></a>
                            <a href="/"><h4>Advanced Services</h4></a>
                            <a href="/"><h4>Industry Specialties</h4></a>
                            <a href="/"><h4>International Talent Solutions</h4></a>
                        </div>
                    </div>
                    <div className="footer_3">
                        <div className="footer_nav_3">
                            <h1>About</h1>
                            <a href="/"><h4>Executive Team and Board of Directors</h4></a>
                            <a href="/"><h4>Careers at Kforce</h4></a>
                            <a href="/"><h4>Corporate Social Responsibility</h4></a>
                            <a href="/"><h4>Serving Our Community</h4></a>
                            <a href="/"><h4>Newsroom</h4></a>
                        </div>
                    </div>
                    <div className="footer_4">
                        <div className="footer_nav_4">
                            <a href="#"><i class="fa fa-map-marker"></i>Find An Office</a><br></br>
                            <a href="#">Knowledge Center</a><br></br>
                            <a href="#">Investor Relations</a><br></br>
                            <a href="#">Site Map</a><br></br>
                            <a href="#">Contact Us</a><br></br>
                            <a href="#">Accessibility Center</a><br></br>
                            <a href="#">COVID-19</a><br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer