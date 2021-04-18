import axios from 'axios';
import React from 'react';
// import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Navbar/Navbar';
// import { UserContext } from '../../../App';
// import Sidebar from '../../Home/Sidebar/Sidebar';

const Admin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [loggedInUser] = useContext(UserContext);
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        // const user = { ...loggedInUser }
        const ServiceData = {
            // user: user.email,
            name: data.ServiceName,
            price: data.price,
            day: data.day,
            description: data.description,
            imageURL: imageURL
        };
        const url = `http://localhost:5055/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(ServiceData)


        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result) {
                    console.log(ServiceData)
                    alert("Service add successfully")
                }
            })

    }

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '45e47385d44c6af4de0f73e4d5b3e06a');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log("response data = ",response)
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <Navbar></Navbar>


            <div className="container">
                <div className="jumbotron">
                    <div style={{ margin: "10px" }} className="card">
                        <div className="card-body">
                            <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Add Service</h2>
                            <form className="product-form" onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <label>Service Name</label>
                                    {/* <input name="name" ref={register}  className="form-control" placeholder="Enter Service Name" /> */}
                                    <input className="form-control"
                                        id="ServiceName"
                                        aria-invalid={errors.ServiceName ? "true" : "false"}
                                        {...register('ServiceName', { required: true })}
                                    />
                                    {errors.ServiceName && (
                                        <span role="alert">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Add Price</label>
                                    {/* <input name="price"  ref={register} className="form-control" placeholder="Enter Price" /> */}
                                    <input className="form-control"
                                        id="price"
                                        aria-invalid={errors.price ? "true" : "false"}
                                        {...register('price', { required: true })}
                                    />
                                    {errors.price && (
                                        <span role="alert">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>How Many Days</label>
                                    {/* <input name="day" ref={register}  className="form-control" placeholder="Enter total day" /> */}
                                    <input className="form-control"
                                        id="day"
                                        aria-invalid={errors.day ? "true" : "false"}
                                        {...register('day', { required: true })}
                                    />
                                    {errors.day && (
                                        <span role="alert">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    {/* <input name="description" ref={register}  className="form-control" placeholder="Enter Description" /> */}
                                    <textarea className="form-control"
                                        id="description"
                                        aria-invalid={errors.description ? "true" : "false"}
                                        {...register('description', { required: true })}
                                    />
                                    {errors.description && (
                                        <span role="alert">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                               
                                <div className="form-group">
                                    <label>Add Service Picture</label>
                                    <br />
                                    <input className="form-control" name="image"  type="file" onChange={handleImageUpload} />
                                    {/* <input
                                        id="image"
                                        type="file"
                                        onChange={handleImageUpload}
                                        aria-invalid={errors.image ? "true" : "false"}
                                        {...register('name', { required: true })}
                                    />
                                    {errors.image && (
                                        <span role="alert">
                                            This field is required
                                        </span>
                                    )} */}
                                </div>
                                <input type="submit" className="btn btn-block btn-lg btn-danger" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Admin;