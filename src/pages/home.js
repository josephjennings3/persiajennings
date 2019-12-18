import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../css/home.css';
import modelpersia from '../imgs/modelpersia.jpg';
import babypersia from '../imgs/babypersia.jpg';
import babypersia2 from '../imgs/babypersia2.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="carousel_container">
                    <Carousel className=".carousel_style">
                        <div>
                            <img src={modelpersia} />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={babypersia} />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={babypersia2} />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;