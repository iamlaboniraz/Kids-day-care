import React from 'react';
import { Button } from 'react-bootstrap';

const BookingDetail = (Booking) => {
    console.log("Booking",Booking)
    const { name, price, day,description } = Booking.Booking.Book;
    const {orderTime,date,paymentID,phoneNumber,user,status } = Booking.Booking;
    // const { imageURL,name,price,wight } = order.order.checkout;
    return (

        <tr>
            {/* <th scope="row"><img style={{ height: "100px", width: "150px" }} src={}
                className="img-fluid img-thumbnail" alt="Sheep" /></th> */}
            <td>{user}</td>
            <td>{name}</td>
            <td>{day}</td>
            <td>{price}</td>
            {/* <td>{description}</td> */}
            {/* <td>{paymentID}</td> */}
            <td>{phoneNumber}</td>
            
            {/* <td>{ new Date(orderTime).toDateString('dd/MM/YYYY')}</td> */}
            <td>{ new Date(date).toDateString('dd/MM/YYYY')}</td>
            <td><Button className="btn-warning">{status}</Button></td>
        </tr>
    );
};

export default BookingDetail;