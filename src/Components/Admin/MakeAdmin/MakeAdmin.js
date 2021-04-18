import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Navbar from '../Navbar/Navbar';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const AdminData = {
            // user: user.email,
            UserName: data.UserName,
            email: data.email,
        };
        const url = `http://localhost:5055/addAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(AdminData)


        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result) {
                    console.log(AdminData)
                    alert("Admin add successfully")
                }
            })

    }
    return (
        <>
        <Navbar></Navbar>
        <div>
            <div className="container">
                <div className="jumbotron">
                    <div style={{ margin: "10px" }} className="card">
                        <div className="card-body">
                            <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Add Admin</h2>
                            <form className="product-form" onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <label>UserName</label>
                                    <input className="form-control"
                                        id="UserName"
                                        aria-invalid={errors.UserName ? "true" : "false"}
                                        {...register('UserName', { required: true })}
                                    />
                                    {errors.UserName && (
                                        <span role="alert">
                                            This field is required
                                        </span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>email</label>
                                    <input className="form-control"
                                        id="email"
                                        type="email"
                                        aria-invalid={errors.email ? "true" : "false"}
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && (
                                        <span role="alert">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                
                               
                                
                                
                                <input type="submit" className="btn btn-block btn-lg btn-danger" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};

export default MakeAdmin;