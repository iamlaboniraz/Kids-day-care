
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
// import './Booking.css'


const Booking = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext);
    let _id = useParams();
    const [Book, setBook] = useState([]);
    const [bookingData, setBookingData] = useState(null)

    useEffect(() => {
        const url = `http://localhost:5055/services/` + _id.id;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [_id])

    const { name, price, day, imageURL } = Book;
    console.log(Book)
    console.log("name ", name)


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
        const url = `http://localhost:5055/booking`;

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
                                        {/* <input name="email" defaultValue={loggedInUser.email} ref={register} className="form-control" /> */}
                                        <input className="form-control"
                                            id="name"
                                            defaultValue={loggedInUser.name}
                                            aria-invalid={errors.name ? "true" : "false"}
                                            {...register('name', { required: true })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-primary"><strong>Email Address</strong></label>
                                        {/* <input name="email" defaultValue={loggedInUser.email} ref={register} className="form-control" /> */}
                                        <input className="form-control"
                                            id="email"
                                            defaultValue={loggedInUser.email}
                                            aria-invalid={errors.email ? "true" : "false"}
                                            {...register('email', { required: true })}
                                        />
                                    </div>
                                    <div className="form-group">
                                    <label className="text-primary"><strong>Service Name</strong> </label>
                                        {/* <label>Service Name</label> */}
                                        {/* <input name="phoneNumber" ref={register} className="form-control" placeholder="Enter Phone number" /> */}
                                        <input className="form-control"
                                            id="serviceName"
                                            defaultValue={name}
                                            aria-invalid={errors.serviceName ? "true" : "false"}
                                            {...register('serviceName', { required: true })}
                                        />
                                    </div>

                                    <div className="form-group">
                                    <label className="text-primary"><strong>Your Phone Number</strong> </label>
                                        {/* <label>Your Phone Number</label> */}
                                        {/* <input name="phoneNumber" ref={register} className="form-control" placeholder="Enter Phone number" /> */}
                                        <input className="form-control"
                                            id="phoneNumber"
                                            aria-invalid={errors.phoneNumber ? "true" : "false"}
                                            {...register('phoneNumber', { required: true })}
                                        />
                                    </div>

                                    <div className="form-group">
                                    <label className="text-primary"><strong>When service need?</strong> </label>
                                        {/* <label>When service need?</label> */}
                                        {/* <input name="phoneNumber" ref={register} className="form-control" placeholder="Enter Phone number" /> */}
                                        <input className="form-control"
                                            id="date"
                                            type="Date"
                                            aria-invalid={errors.date ? "true" : "false"}
                                            {...register('date', { required: true })}
                                        />
                                    </div>

                                    <div className="form-group">
                                    <div className="form-group row">
                        {/* <div className="col-4">

                            <select className="form-control" name="status"
                                id="status"
                                aria-invalid={errors.status ? "true" : "false"}
                                {...register('status', { required: true })}
                            >
                                <option disabled={true} value="pending">pending</option>
                                <option value="pending">pending</option>
                                <option value="onGoing">on going</option>
                                <option value="done">done</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div> */}



                        
                        </div>
                                    </div>
                                   


                                    <input type="submit" value="Book" className="btn btn-block btn-lg btn-danger" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book Detail */}
                <div className="col-75 mt-5">
                <div style={{display: bookingData ? 'block': 'none'}} className="container">
                    <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}></ProcessPayment>
                    {/* <h4>Book Detail <span className="price" style={{ color: "black" }}><i className="fa fa-shopping-cart"></i></span></h4><hr />
                    <p><a href="#">product Picture</a><img style={{ height: "100px", width: "150px" }} src={imageURL}
                        className="img-fluid img-thumbnail" alt="Sheep" /></p>
                    <p><a href="#">Product Name</a> <span className="price">{name}</span></p>
                    <p><a href="#">Wight</a> <span className="price">{day}</span></p>
                    <p><a href="#">Price</a> <span className="price">${price}</span></p>

                    <hr></hr>
                    <p>Total Price <span className="price" style={{ color: "black" }}><b>${price}</b></span></p> */}
                </div>
            </div>
            </div>
        
        </div>
    );
};

export default Booking;