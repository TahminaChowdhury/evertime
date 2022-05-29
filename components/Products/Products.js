import { Grid, Typography } from '@mui/material';
import React from 'react';
import classes from './Products.module.css';
import Slider from 'react-slick';
import Link from 'next/link';

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

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'WESTAR ORNATE LADIES CASUAL QUARTZ WATCH - 20274PPN603',
      category: 'female watch',
      img: 'https://i.ibb.co/mGYFBnk/f-1.webp',
      price: 175,
      brand: 'Stainless Steel',
    },
    {
      id: 2,
      name: 'WESTAR ORNATE LADIES CASUAL QUARTZ WATCH - 20274PPN603',
      category: 'female watch',
      img: 'https://i.ibb.co/mGYFBnk/f-1.webp',
      price: 175,
      brand: 'Stainless Steel',
    },
    {
      id: 3,
      name: 'WESTAR ORNATE LADIES CASUAL QUARTZ WATCH - 20274PPN603',
      category: 'female watch',
      img: 'https://i.ibb.co/mGYFBnk/f-1.webp',
      price: 175,
      brand: 'Stainless Steel',
    },
    {
      id: 4,
      name: 'WESTAR ORNATE LADIES CASUAL QUARTZ WATCH - 20274PPN603',
      category: 'female watch',
      img: 'https://i.ibb.co/mGYFBnk/f-1.webp',
      price: 175,
      brand: 'Stainless Steel',
    },
    {
      id: 5,
      name: 'WESTAR ORNATE LADIES CASUAL QUARTZ WATCH - 20274PPN603',
      category: 'female watch',
      img: 'https://i.ibb.co/mGYFBnk/f-1.webp',
      price: 175,
      brand: 'Stainless Steel',
    },
  ];

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
      <Slider {...settings}>
        {products.map((item, index) => {
          return (
            <div key={index}>
              <div className={classes.product}>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div></div>
                <div>
                  <Link href="/">View Product</Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Products;
