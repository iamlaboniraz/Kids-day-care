import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const ManageServiceDetail = (service) => {
    const { _id, name, price, day } = service.service;
    const deleteService = (event, id) => {
        const url = `https://young-sea-12892.herokuapp.com/manageService/${id}`;
        if (window.confirm('Are you sure?')) {
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
            <td>{name}</td>
            <td>{day}</td>
            <td>{price}</td>
            <td><button className="btn btn-danger" onClick={() => deleteService(service, _id)}>
                    <DeleteIcon></DeleteIcon>
                </button>
            </td>
        </tr>
    );
};

export default ManageServiceDetail;