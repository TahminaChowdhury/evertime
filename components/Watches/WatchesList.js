import React from 'react';
import classes from './WatchesList.module.css'
import AllWatches from './AllWatches';
import Slider from 'react-slick';

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

const WatchesList = (props) => {
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
    <div style={{ margin: '100px 30px' }}>
      <h1 className={classes.watchesHeading}>Our BestSellers</h1>
      <Slider {...settings}>
        {props.watches.map((watch) => (
          <AllWatches key={watch.id} watch={watch} />
        ))}
      </Slider>
    </div>
  );
};

export default WatchesList;
