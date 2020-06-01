import React from 'react'
import {Carousel} from 'react-bootstrap' 

export default function CarouselSlide(props) {
    return (
        <div>
            <Carousel className="carousel-banner">
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://pixelz.cc/wp-content/uploads/2018/12/robin-hood-movie-uhd-4k-wallpaper.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Robin Hood</h3>
                    <p>Robin Hood is a legendary heroic outlaw originally depicted in English folklore and subsequently featured in literature and film. According to legend, he was a highly skilled archer and swordsman. </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/37945.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Justice League</h3>
                    <p>Steppenwolf and his Parademons set out to take over the Earth. However, Batman seeks the help of Wonder Woman to assemble and recruit Flash, Cyborg and Aquaman to thwart the powerful new enemy. </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://imgpile.com/images/2b2edec91686f0087ab8be2542ea2da9.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Halloween</h3>
                    <p>After a narrow escape over four decades ago, Laurie Strode comes face-to-face with Michael Myers after he escapes from captivity. She must confront her worst fears and put an end to his killing spree. </p>                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://images.hdqwalls.com/wallpapers/black-widow-4k-movie-2020-vn.jpg" alt="Fourth slide"/>
                    <Carousel.Caption>
                    <h3>Black Widow</h3>
                    <p>At birth the Black Widow (aka Natasha Romanova) is given to the KGB, which grooms her to become its ultimate operative. When the U.S.S.R. breaks up, the government tries to kill her as the action moves to present-day New York, where she is a freelance operative. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://mocah.org/uploads/posts/500685-avatar.jpg" alt="Fifth slide"/>
                    <Carousel.Caption>
                    <h3>Avatar 2</h3>
                    <p>12 years following the events of the original film, Jake Sully and Neytiri have formed a new family together and the two are attempting to do anything to keep it together. However, they are forced to leave their home and explore the different regions of Pandora when an old threat returns to finish what it started. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://mocah.org/uploads/posts/561843-game-of-thrones.jpg" alt="Sixth slide"/>
                    <Carousel.Caption>
                    <h3>Game of Thrones</h3>
                    <p>A Night's Watch deserter is tracked down; Lord Eddard "Ned" Stark learns that his mentor has died; Viserys Targaryen plots to win back the throne; Robert arrives at Winterfell with his family; Ned prepares to leave for King's Landing. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
