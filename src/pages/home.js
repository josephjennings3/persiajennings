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
                            <img src={modelpersia} alt="Persia Smiling up" />
                        </div>
                        <div>
                            <img src={greendress} alt="Persia in a Green dress" />
                        </div>
                        <div>
                            <img src={leaning} alt="Persia leaning against wall" />
                        </div>
                        <div>
                            <img src={overalls} alt="Persia posing in overalls" />
                        </div>
                        <div>
                            <img src={look} alt="Persia making concerned face while wearing a flower headband" />
                        </div>
                        <div>
                            <img src={flowerdress} alt="Persia dancing in dress with flower headband" />
                        </div>
                        <div>
                            <img src={flowergirl} alt="Persia smiling with flower headband" />
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
                            <img src={supergirl} alt="Powerup Icon"/>
                            Radiating Positivity
                        </div>
                        <div className="icon_box">
                            <img src={love} alt="Hands holding heart icon" />
                            Always loving
                        </div>
                        <div className="icon_box">
                            <img src={smart} alt="Brain Icon" />
                            Very Smart
                        </div>
                    </div>
                    <div className="home_header">
                        <h1>Persia Sings "Let it Go"</h1>
                    </div>
                    <div className="youtube_container">
                        <iframe title="Let it Go, Youtube" width="560" height="315" src="https://www.youtube.com/embed/L-JaXelDBPU?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;