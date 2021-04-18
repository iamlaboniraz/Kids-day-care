import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import BookingInfoDetail from './BookingInfoDetail';

const BookingInfo = () => {
    const [Bookings, setBooking] = useState([])

    useEffect(() => {
        fetch('https://young-sea-12892.herokuapp.com/booksInfo')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <>
            <Navbar></Navbar>
            <div style={{ marginTop: "50px", textAlign: "center" }} className="container">
                <div className="jumbotron">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">All Booking Information</h5>
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Booking Name</th>
                                        <th scope="col">Day</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Order Time</th>
                                        <th scope="col">Current Status</th>
                                        <th scope="col">Update Status</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        Bookings.map(Booking =>
                                            <BookingInfoDetail Booking={Booking}></BookingInfoDetail>
                                        )
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingInfo;