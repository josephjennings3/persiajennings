import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../css/home.css';
import modelpersia from '../imgs/modelpersia.jpg';
import greendress from '../imgs/greendress.jpg';
import leaning from '../imgs/leaning.jpg';
import overalls from '../imgs/overalls.jpg';
import look from '../imgs/look.jpg';
import flowerdress from '../imgs/flowerdress.jpg';
import flowergirl from '../imgs/flowergirl.jpg';


class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="carousel_container">
                    <Carousel className=".carousel_style">
                        <div>
                            <img src={modelpersia} />
                        </div>
                        <div>
                            <img src={greendress} />
                        </div>
                        <div>
                            <img src={leaning} />
                        </div>
                        <div>
                            <img src={overalls} />
                        </div>
                        <div>
                            <img src={look} />
                        </div>
                        <div>
                            <img src={flowerdress} />
                        </div>
                        <div>
                            <img src={flowergirl} />
                        </div>
                    </Carousel>
                </div>
                <div className="home_text">
                    <h1>Greatest Child Ever Created</h1>
                </div>
            </div>
        )
    }
}

export default Home;