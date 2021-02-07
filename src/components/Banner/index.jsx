import React, { Component, useState } from 'react';

import './style.css';
import bannerImg from '../../assets/img/banner.jpg';
import bannerImgMobile from '../../assets/img/banner-mobile.jpg';
import Slider from 'react-slick'


const Banner = () => {

    const [width, setWidth] = useState (window.innerWidth);

    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        className: "banner"
    };

    const photos =[
        {
            name: 'Photos 1',
            url: bannerImg,
            urlMob: bannerImgMobile
        },
        {
            name: 'Photos 2',
            url: bannerImg,
            urlMob: bannerImgMobile
        },
        {
            name: 'Photos 3',
            url: bannerImg,
            urlMob: bannerImgMobile
        },
        {
            name: 'Photos 4',
            url: bannerImg,
            urlMob: bannerImgMobile
        },
    ]

    

    return width < 768 ? 
    <div className="banner">
        <Slider {...settings}>
            {photos.map((photo)  => {
                console.log(photo)
                return (<img src={photo.urlMob}/>)
            })}        
        </Slider>
    </div> : (
        <div className="banner">
            <Slider {...settings}>
                {photos.map((photo)  => {
                    console.log(photo)
                    return (<img src={photo.url}/>)
                })}        
            </Slider>
        </div>
    );
}

export default Banner;
