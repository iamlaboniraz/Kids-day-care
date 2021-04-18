import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar';
import BookingDetail from './BookingDetail';

const BookingList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [Bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://young-sea-12892.herokuapp.com/bookingList?email=' + loggedInUser.email, {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`

            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [loggedInUser.email])
    return (
        <>
            <ProfileNavbar></ProfileNavbar>
            <div style={{ marginTop: "50px", textAlign: "center" }} className="container">
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">All Booking List</h5>
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Payment ID</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Service Name</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Order Time</th>
                                        <th scope="col">Status</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        Bookings.map(Booking => <BookingDetail key={Booking._id} Booking={Booking}></BookingDetail>)
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

export default BookingList;