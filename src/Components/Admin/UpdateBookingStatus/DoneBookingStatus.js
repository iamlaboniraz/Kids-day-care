import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const DaneBookingStatus = (props) => {
    const [BookingList, setBookingList] = useState([])
    const [data, setData] = useState({
        // phoneNumber: "",
        status: "",
    })
    let id = useParams();
    const url = `http://localhost:5055/done/` + id.id;
    console.log(url)
    // const url = `http://localhost:5055/booking/`;
    useEffect(() =>{
        // const id = props.match.params.id;
        console.log("id ==== " ,url)
        Axios.get(url)
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    },[])


    function submit(e) {
        e.preventDefault()
        Axios.post(url,data)
        .then(res =>{
            console.log(res.data)
            const myData = [...BookingList, res.data]
            setBookingList(myData)
        }).catch((err => console.error(err)))
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }


    return (
        <div className="row">
            <div className="col-75">
                <div className="container">
                    <div style={{ margin: "10px" }} className="card">
                        <div className="card-body">
                            <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Booking Form</h2>
                            <hr />
                            <div class="card" style={{width: "18rem;"}}>
                                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                        <div class="card-body">
                                            <h5 class="card-title">Now Booking status is <strong>Done!</strong></h5>
                                            <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                             Tempora, totam eius, tempore aperiam adipisci, quam distinctio dolorem maiores modi 
                                            laborum nisi. Obcaecati dolor eveniet nihil aut perspiciatis in temporibus 
                                            laboriosam.</p>
                                            <Link  className="btn btn-success" to="/bookingInfo"><FontAwesomeIcon icon={faBackward}></FontAwesomeIcon> Back</Link>
                                         
                                        </div>
                                </div>
                            {/* Book form */}
                            {/* <form className="product-form" onSubmit={(e) => submit(e)}>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input onChange={(e) => handle(e)} value={data.phoneNumber} type="text" name="phoneNumber"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="status">Name</label>
                                    <input onChange={(e) => handle(e)} value={data.status} type="text" name="phoneNumber"/>
                                </div>



                                <input type="submit" value="submit" className="btn btn-block btn-lg btn-danger" />
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default DaneBookingStatus;