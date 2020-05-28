import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand navbar-left" href="#">
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
                <div class="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active"><a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a></li>
                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATEGORIES</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Animation</a>
                                <a class="dropdown-item" href="#">Comedy</a>
                                <a class="dropdown-item" href="#">Adventure</a>
                                <a class="dropdown-item" href="#">Crime</a>
                                <a class="dropdown-item" href="#">Fantasy</a>
                            </div>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">TRAILER</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">RELEASE</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">REVIEWS</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">GALERRY</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">BLOG</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
