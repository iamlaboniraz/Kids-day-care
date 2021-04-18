import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Edit } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';



// function loadProduct(id) {
//     fetch(`/booking/${id}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log("data = ", data)
//             const update = document.getElementById('update');
//             update.innerHTML = `
//             <h3>Update : ${data._id}</h3>
//             price: <input type="text" value="${data.phoneNumber}" id="price"></input>
//             <br>
//             Quantity: <input type="text" value="${data.status}" id="quantity"></input>
//             <br>
//             <button onClick="updateProduct('${data._id}')">Submit</button>
        
//         `;
//         })

// }

// function updateProduct(id) {
//     // console.log("updating");
//     const price = document.getElementById('price').value;
//     const quantity = document.getElementById('quantity').value;
//     const product = { id, price, quantity };
//     fetch(`/update/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(product)
//     })
//         .then(res => res.json())
//         .then(result => {
//             if (result) {
//                 // loadAllProducts();
//                 document.getElementById('update').innerHTML = '';
//         }
//     })
// }



const BookingInfoDetail = (Booking) => {
    // console.log(Booking)
    const {name, price, day } = Booking.Booking.Book;
    const {_id,date, orderTime,status, phoneNumber, user, paymentID } = Booking.Booking;
    // console.log(_id)
    const history = useHistory();
    const statusOnGoing = (_id) =>{
        console.log(_id);
        history.push(`/ongoing/${_id}`)
        
    }

    const statusDone = (_id) =>{
        console.log(_id);
        history.push(`/done/${_id}`)
        
    }
    

    // const handleClick = (_id) => {
    //     history.push(`/service/${_id}`)
    // }

    return (

        <tr>
            <td>{user}</td>
            <td>{name}</td>
            <td>{day}</td>
            <td>{price}</td>
            <td>{ new Date(orderTime).toDateString('dd/MM/YYYY')}</td>
            {/* <td>{ new Date(date).toDateString('dd/MM/YYYY')}</td> */}
            <td className="text-info">{status}</td>
             {/* <td><button className="btn btn-danger" onClick={() => deleteProduct(product,_id)}><DeleteIcon></DeleteIcon></button></td> */}
            <td>
                <button className="btn btn-danger mr-2" onClick={() => statusOnGoing(_id)}>on going</button>
                <button className="btn btn-success" onClick={() => statusDone(_id)}>Done</button>
            </td>
            {/* <td><button className="btn btn-danger" onClick={() => loadProduct(_id)}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button></td> */}
        </tr>
    );
};

export default BookingInfoDetail;