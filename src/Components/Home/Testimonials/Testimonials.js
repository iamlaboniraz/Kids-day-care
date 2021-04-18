import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import "./testimonials.css";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://young-sea-12892.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data)
            })

    }, [])
    return (
        <section className="testimonial-container mt-5">
            <div className="text-center textStyle">
                <h5 className="testimonialTitle">Testimonials</h5>
                <h2>Client Opinion about our Services</h2>
            </div>
            <div className="justify-content-center">
                <div className="row">

                    {
                        testimonials.map(Testimonial => <TestimonialDetail Testimonial={Testimonial}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;