import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand navbar-left" href="#">
                    <span class="logo-text">F</span>
                    <span class="logo-text">R</span>
                    <span class="logo-text">E</span>
                    <span class="logo-text">E</span>
                    <span class="logo-text"></span>
                    <span class="logo-text"></span>
                    <span class="logo-text">F</span>
                    <span class="logo-text">I</span>
                    <span class="logo-text">L</span>
                    <span class="logo-text">M</span>
                    <span class="logo-text">S</span>
                </a>
                <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a></li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATEGORIES</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Animation</a>
                                <a class="dropdown-item" href="#">Comedy</a>
                                <a class="dropdown-item" href="#">Adventure</a>
                                <a class="dropdown-item" href="#">Crime</a>
                                <a class="dropdown-item" href="#">Fantasy</a>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#">TRAILER</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">RELEASE</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">REVIEWS</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">GALERY</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">BLOG</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
