import React from 'react'
import {Carousel} from 'react-bootstrap' 

export default function CarouselSlide(props) {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://pixelz.cc/wp-content/uploads/2018/12/robin-hood-movie-uhd-4k-wallpaper.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Robin Hood</h3>
                    <p>Integer condimentum lorem in mattis feugiat. Integer nibh risus, lacinia a porta sed, sagittis a ante. Morbi sed vulputate urna. Morbi efficitur urna ut justo efficitur, non mollis ligula fermentum. Aenean vel velit a nibh imperdiet gravida non non augue. </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/37945.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>The Justice</h3>
                    <p>Integer condimentum lorem in mattis feugiat. Integer nibh risus, lacinia a porta sed, sagittis a ante. Morbi sed vulputate urna. Morbi efficitur urna ut justo efficitur, non mollis ligula fermentum. Aenean vel velit a nibh imperdiet gravida non non augue. </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://imgpile.com/images/2b2edec91686f0087ab8be2542ea2da9.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>The Mask</h3>
                    <p>Integer condimentum lorem in mattis feugiat. Integer nibh risus, lacinia a porta sed, sagittis a ante. Morbi sed vulputate urna. Morbi efficitur urna ut justo efficitur, non mollis ligula fermentum. Aenean vel velit a nibh imperdiet gravida non non augue. </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
