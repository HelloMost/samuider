import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HomeSlider.css'


function MySliderComponent() {
    
    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src='../src/assets/picture/fishing.png' />
                </div>
                <div>
                    <img src='../src/assets/picture/carRental.jpg' />          
                </div>
                <div>
                    <img src='../src/assets/picture/carService.png' />
                </div>
                <div>
                    <img src='../src/assets/picture/islandTour.png' />
                </div>
                <div>
                    <img src='../src/assets/picture/relaxDelivery.png' />
                </div>
                <div>
                    <img src='../src/assets/picture/diving.png' />
                </div>
            </Slider>
        </div>
    )
}

export default MySliderComponent;
