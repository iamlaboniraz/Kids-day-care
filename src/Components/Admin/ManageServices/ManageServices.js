import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ManageServiceDetail from './ManageServiceDetail';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://young-sea-12892.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <Navbar></Navbar>
            <div style={{ marginTop: "50px", textAlign: "center" }} className="container">
                <div className="jumbotron">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">All Service Information</h5>
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Service Name</th>
                                        <th scope="col">Day</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        services.map(service =>
                                            <ManageServiceDetail service={service}></ManageServiceDetail>
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

export default ManageServices;