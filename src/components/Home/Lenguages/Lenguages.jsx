import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import LenguagesCard from './LenguagesCard';

const Lenguages = () => {
    const LenguagesData = [
        {
            id: 0,
            img: "/src/assets/images/c.png",
            name: "C#",
            version: "v12.0",
        },
        {
            id: 1,
            img: "/src/assets/images/c1.png",
            name: "C++",
            version: "ISO/IEC 14882:2020",
        },
        {
            id: 2,
            img: "/src/assets/images/java.png",
            name: "Java",
            version: "v18",
        },
        {
            id: 3,
            img: "/src/assets/images/JS.png",
            name: "JavaScript",
            version: "ECMAScript 2021",
        },
        {
            id: 4,
            img: "/src/assets/images/python.png",
            name: "Python",
            version: "v3.12.1",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
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
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div className='container mt-14'>
            <h1 className=" font-bold text-4xl text-center">
                Lenguajes de <span className=" text-primary">Programación</span>
            </h1>
            <p className='text-center'>
            A continuación te invitamos a conocer los lenguajes de programación más usados en la actualidad, los de mayor demanda y los de mayor proyección en el mercado.
            </p>
            <div className='mt-8'>
                <Slider {...settings}>
                    {LenguagesData.map((item) => (
                        <LenguagesCard key={item.id} img={item.img} name={item.name} version={item.version} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Lenguages