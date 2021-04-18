import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const ServiceData = {
            name: data.ServiceName,
            price: data.price,
            day: data.day,
            description: data.description,
            imageURL: imageURL
        };
        const url = `https://young-sea-12892.herokuapp.com/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ServiceData, email: loggedInUser.email })


        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Product add successfully")
                }
            })

    }

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '45e47385d44c6af4de0f73e4d5b3e06a');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
            });

    }
    return (
        <div>
            <div className="container">
                <div className="jumbotron">
                    <div style={{ margin: "10px" }} className="card">
                        <div className="card-body">
                            <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Add Service</h2>
                            <form className="product-form" onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <label>Service Name</label>

                                    <input
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

                                    <input
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

                                    <input
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
                                    <input
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
                                    <input name="image" type="file" onChange={handleImageUpload} />
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

export default AddService;