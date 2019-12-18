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
import supergirl from '../imgs/super.png';
import love from '../imgs/love.png';
import smart from '../imgs/smart.png';




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
                <div className="home_container">
                    <div className="home_header">
                        <h1>Greatest Child Ever Created</h1>
                    </div>
                    <div className="home_text">
                        <p>  <t/>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales sapien sit amet auctor ultrices. Suspendisse molestie nisi dolor, quis facilisis magna pharetra sit amet. Morbi mattis lacus ac ipsum gravida, nec ultrices neque hendrerit. Pellentesque eget diam eu dui molestie vestibulum. Quisque viverra magna id dolor sagittis hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida gravida dolor eu pulvinar.</p> <br/>
                        <p>Nam condimentum ligula eu urna aliquet, a euismod metus imperdiet. Duis ornare dictum augue vestibulum luctus. Cras faucibus magna nulla, nec cursus lorem consequat eget. Nunc ac posuere quam. Proin et sem a dui scelerisque semper ut eu sem. Quisque lorem felis, pretium ut est congue, egestas mollis augue. Nam dictum magna non elit gravida, aliquam interdum leo ultrices.</p>
                    </div>
                    <div className="banner">
                        <div className="icon_box">
                            <img src={supergirl} />
                            Radiating Positivity
                        </div>
                        <div className="icon_box">
                            <img src={love} />
                            Always loving
                        </div>
                        <div className="icon_box">
                            <img src={smart} />
                            Very Smart
                        </div>
                    </div>
                    <div className="youtube_container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/L-JaXelDBPU?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;