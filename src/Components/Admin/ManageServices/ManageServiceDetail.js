import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Edit } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const ManageServiceDetail = (service) => {
    console.log(service)
    const {_id,name, price, day,description,imageURL } = service.service;
    // const {_id,date, orderTime,status, PhoneNumber, user, paymentID } = Booking.Booking;
    const loadBooking = (_id) =>{
        console.log(_id)
        
    }

    const deleteService = (event,id) => {
        const url = `http://localhost:5055/manageService/${id}`;
        if (window.confirm('Are you sure?')) 
        {
            fetch(url, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        alert("Your Service successfully Deleted")
                        
                    }
                })
        }
    }
    return (
             <tr>
            {/* <td>{imageURL}</td> */}
            <td>{name}</td>
            <td>{day}</td>
            <td>{price}</td>
            {/* <td>{ status}</td> */}
             <td><button className="btn btn-danger" onClick={() => deleteService(service,_id)}><DeleteIcon></DeleteIcon></button></td>
            {/* <td><button className="btn btn-danger" onClick={() => loadBooking(_id)}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button></td> */}
        </tr>
    );
};

export default ManageServiceDetail;