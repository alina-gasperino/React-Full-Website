import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#"><img className="logo-img" src="https://kforcewebeast.azureedge.net/media/400247/logo-2x.png" /></a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Find Work</a></li>
                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Find Talent</a>
                                <div className="dropdown-content">
                                    <a href="#">Advanced Services</a>
                                    <a href="#">Staffing Services</a>
                                    <a href="#">Industry Specialties</a>
                                    <a href="#">International Talent Silutions</a>
                                    <a href="#">Case Studies</a>
                                </div>
                            </li>
                            <li><a href="#">Knowledge Center</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Find An Ofice</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header