import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    {this.props.img.map(elm =>
                        <div className="sliderimg">
                            <img src={elm}></img>
                        </div>
                    )}

                </Slider>
            </div>
        );
    }
}