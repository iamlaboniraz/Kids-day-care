import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../ProfileNavbar/ProfileNavbar';



const Booking = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext);
    let _id = useParams();
    const [Book, setBook] = useState([]);
    const [bookingData, setBookingData] = useState(null)

    useEffect(() => {
        const url = `https://young-sea-12892.herokuapp.com/services/` + _id.id;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [_id])

    const { name } = Book;


    const onSubmit = data => {
        setBookingData(data);
    }

    const handlePaymentSuccess = paymentID =>{

        const user = { ...loggedInUser }
        const BookDetail = {
            Book: Book,
            user: user.email,
            phoneNumber: bookingData.phoneNumber,
            date: bookingData.date,
            status : "pending",
            paymentID,
            orderTime: new Date()
        };
        const url = `https://young-sea-12892.herokuapp.com/booking`;

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(BookDetail)

        })
            .then(res => res.json())
            .then(data => {
                alert('Your order placed successfully', data)
            })

    }

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="row">
                <div style={{display: bookingData ? 'none': 'block'}} className="col-75">
                    <div className="container">
                        <div style={{ margin: "10px" }} className="card">
                            <div className="card-body">
                                <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Booking Form</h2>
                                <hr/>
                                {/* Book form */}
                                <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label className="text-primary"><strong>Your Name</strong> </label>
                                
                                        <input className="form-control"
                                            id="name"
                                            defaultValue={loggedInUser.name}
                                            aria-invalid={errors.name ? "true" : "false"}
                                            {...register('name', { required: true })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-primary"><strong>Email Address</strong></label>
                                     
                                        <input className="form-control"
                                            id="email"
                                            defaultValue={loggedInUser.email}
                                            aria-invalid={errors.email ? "true" : "false"}
                                            {...register('email', { required: true })}
                                        />
                                    </div>
                                    <div className="form-group">
                                    <label className="text-primary"><strong>Service Name</strong> </label>

                                        <input className="form-control"
                                            id="serviceName"
                                            defaultValue={name}
                                            aria-invalid={errors.serviceName ? "true" : "false"}
                                            {...register('serviceName', { required: true })}
                                        />
                                    </div>

                                    <div className="form-group">
                                    <label className="text-primary"><strong>Your Phone Number</strong> </label>
                                    
                                        <input className="form-control"
                                            id="phoneNumber"
                                            aria-invalid={errors.phoneNumber ? "true" : "false"}
                                            {...register('phoneNumber', { required: true })}
                                        />
                                    </div>

                                    <div className="form-group">
                                    <label className="text-primary"><strong>When service need?</strong> </label>
                                        <input className="form-control"
                                            id="date"
                                            type="Date"
                                            aria-invalid={errors.date ? "true" : "false"}
                                            {...register('date', { required: true })}
                                        />
                                    </div>

                                    <input type="submit" value="Book" className="btn btn-block btn-lg btn-danger" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book Payment */}
                <div className="col-75 mt-5">
                <div style={{display: bookingData ? 'block': 'none'}} className="container">
                    <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}></ProcessPayment>
                   
                </div>
            </div>
            </div>
        
        </div>
    );
};

export default Booking;