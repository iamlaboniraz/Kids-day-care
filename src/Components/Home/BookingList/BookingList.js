import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import BookingDetail from './BookingDetail';

const BookingList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [Bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/bookingList?email=' + loggedInUser.email, {
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
        {/* <Sidebar></Sidebar>
        <div class="container-fluid">
        <h1 class="mt-4">Simple Sidebar</h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> 
                ID which will toggle the menu when clicked.</p>
        </div> */}
        <Sidebar></Sidebar>
        
        
        <div style={{ marginTop: "50px", textAlign: "center" }} className="container">
            <div className="jumbotron">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">All Booking List</h5>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Price</th>
                                    {/* <th scope="col">Price</th> */}
                                    <th scope="col">Phone Number</th>
                                    {/* <th scope="col">Address</th> */}
                                    <th scope="col">Order Time</th>
                                    {/* <th scope="col">Checkout Time</th> */}
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