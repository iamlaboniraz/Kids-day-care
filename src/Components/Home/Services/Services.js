import React from 'react';
import newBaby from '../../../images/new-born.jpeg';
import Children from '../../../images/children.jfif';
import ServiceDetail from "../ServiceDetail/ServiceDetail"
import { useState } from 'react';
import { useEffect } from 'react';
import "./Service.css";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://young-sea-12892.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })

    }, [])

    return (

        <section className="services-container mt-5 services">
            <div className="text-center">
                <h5>OUR SERVICES</h5>
                <hr />
                <h2 >CHOOSE SERVICES FOR YOUR KIDS</h2>
            </div>
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