import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div class="container-fluid" >
         Cashflow definition 
        </div>
        <div class="container-fluid" >
          
        </div>
        <div class="container-fluid" >
          
        </div>
        <div class="container-fluid" >
          
        </div>
        <div class="container-fluid" >
          
        </div>
        <div class="container-fluid" >
          
        </div>
      </Slider>
    );
  }
}


export default SimpleSlider;
