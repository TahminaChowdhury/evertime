import React from 'react';
import { useRouter } from 'next/router';
import classes from './Watches.module.css';
import Slider from 'react-slick';
import { CollectionsOutlined } from '@mui/icons-material';

// next button
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

// previous button
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}


const Watches = (props) => {

  const router = useRouter();


  const showDetailsHandler = () => {
    router.push('/' + props._id);
  };

 
  // slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ margin: '0px 30px' }}>

      <h1 className={classes.productsHeading}>Our BestSellers</h1>

      {/* slider */}
      <Slider {...settings}>
        {props.watches.map((watch, index) => {
          return (
            <div key={index}>
  
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Watches;
