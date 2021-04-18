import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../App';
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const user = { ...loggedInUser }
        const ServiceData = {
            user: user.email,
            name: data.yourName,
            companyName: data.yourCompanyName,
            description: data.description,
            imageURL: imageURL
        };
        const url = `https://young-sea-12892.herokuapp.com/addReview`;

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(ServiceData)


        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Your opinion created successfully")
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
                console.log(error);
            });

    }
    return (
        <div>
            <ProfileNavbar></ProfileNavbar>
            <div className="container">
                <div className="jumbotron">
                    <div style={{ margin: "10px" }} className="card">
                        <div className="card-body">
                            <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Share Your Opinion with us!</h2>
                            <hr />
                            <form className="product-form" onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input className="form-control"
                                        id="yourName"
                                        aria-invalid={errors.yourName ? "true" : "false"}
                                        {...register('yourName', { required: true })}
                                    />
                                    {errors.yourName && (
                                        <span role="alert">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Your Company Name</label>
                                    <input class="form-control"
                                        id="yourCompanyName"
                                        aria-invalid={errors.yourCompanyName ? "true" : "false"}
                                        {...register('yourCompanyName', { required: true })}
                                    />
                                    {errors.yourCompanyName && (
                                        <span role="alert">
                                            This field is required
                                        </span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea class="form-control" rows="5"
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

                                    <label>Profile Picture</label>
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

export default Review;