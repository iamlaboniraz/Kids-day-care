import React from 'react';
import newBaby from '../../../images/new-born.jpeg';
import Children from '../../../images/children.jfif';
import ServiceDetail from "../ServiceDetail/ServiceDetail"
import { useState } from 'react';
import { useEffect } from 'react';
import "./Service.css";
import Slider from "react-slick";
import { Button, Card, Carousel } from 'react-bootstrap';
import Modal from 'react-modal';

// const serviceData = [
//     {
//         title: "New Born",
//         img : newBaby,
//         totalPrice : 850,
//         time :"7:00am - 6:00pm",
//         day : "1",
//         description: "fdfsdfdf",
//     },
//     {
//         title: "New Born",
//         img : newBaby,
//         totalPrice : 9000,
//         time :"7:00am - 6:00pm",
//         day : "15",
//         description: "fdfsdfdf",
//     },
//     {
//         title: "Children",
//         img : Children,
//         totalPrice : 650,
//         time :"7:00am - 6:00pm",
//         day : "1",
//         description: "fdfsdfdf",
//     }
// ]

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })

    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // cseEase: "linear"
    };

    return (
      


        // <Slider {...settings}>
        //   <div className="card-wrapper">
        //       <div className="card">
        //           <div className="card-image">
        //               <img src={newBaby} alt=""/>
        //           </div>
        //       </div>
        //   </div>
        // </Slider>

            <section className="services-container mt-5 services">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <hr/>
                <h2 style={{color:"rgb(201, 131, 1)"}}>CHOOSE SERVICES FOR YOUR KIDS</h2>
            </div>

            {/* <div className="d-flex justify-content-center">
            <div className="row"> */}
            <div className="justify-content-center">
            <div className="row">
                {
                    services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;