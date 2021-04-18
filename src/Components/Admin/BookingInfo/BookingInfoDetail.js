import React from 'react';

import { useHistory } from 'react-router';


const BookingInfoDetail = (Booking) => {
    const { name, price, day } = Booking.Booking.Book;
    const { _id, orderTime, status, user, paymentID } = Booking.Booking;
    const history = useHistory();

    const statusOnGoing = (_id) => {
        history.push(`/ongoing/${_id}`)

    }

    const statusDone = (_id) => {
        history.push(`/done/${_id}`)

    }

    return (

        <tr>
            <td>{user}</td>
            <td>{name}</td>
            <td>{day}</td>
            <td>{price}</td>
            <td>{new Date(orderTime).toDateString('dd/MM/YYYY')}</td>
            <td className="text-info">{status}</td>
            <td>
                <button className="btn btn-danger mr-2" onClick={() => statusOnGoing(_id)}>on going</button>
                <button className="btn btn-success" onClick={() => statusDone(_id)}>Done</button>
            </td>
        </tr>
    );
};

export default BookingInfoDetail;