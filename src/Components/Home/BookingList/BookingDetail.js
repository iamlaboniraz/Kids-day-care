import React from 'react';
import { Button } from 'react-bootstrap';

const BookingDetail = (Booking) => {
    const { name, price, day } = Booking.Booking.Book;
    const { date, paymentID, phoneNumber, user, status } = Booking.Booking;
    return (

        <tr>
            <th >{paymentID}</th>
            <td>{user}</td>
            <td>{name}</td>
            <td>{day}</td>
            <td>{price}</td>
            <td>{phoneNumber}</td>
            <td>{new Date(date).toDateString('dd/MM/YYYY')}</td>
            <td><Button className="btn-warning">{status}</Button></td>
        </tr>
    );
};

export default BookingDetail;