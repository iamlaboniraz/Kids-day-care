import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faBackward } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const OnGoingBookingStatus = (props) => {
    const [BookingList, setBookingList] = useState([])
    const [data, setData] = useState({
        status: "",
    })
    let id = useParams();
    const url = `https://young-sea-12892.herokuapp.com/ongoing/` + id.id;
    useEffect(() => {
        Axios.get(url)
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])


    return (
        <>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-75">
                    <div className="container">
                        <div style={{ margin: "10px" }} className="card">
                            <div className="card-body">
                                <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Status Update</h2>
                                <hr />

                                <div class="card" style={{width: "18rem;"}}>
                                        <div class="card-body">
                                            <h5 class="card-title">Now status is <strong>On Going!</strong></h5>
                                            <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                             Tempora, totam eius, tempore aperiam adipisci, quam distinctio dolorem maiores modi 
                                            laborum nisi. Obcaecati dolor eveniet nihil aut perspiciatis in temporibus 
                                            laboriosam.</p>
                                            <Link  className="btn btn-success" to="/bookingInfo"><FontAwesomeIcon icon={faBackward}></FontAwesomeIcon> Back</Link>
                                        </div>
                                </div>
                          
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
        </>


    );
};

export default OnGoingBookingStatus;