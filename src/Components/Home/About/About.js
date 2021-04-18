import React from 'react';
import bg1 from "../../../images/bg1.jfif";
import "./About.css"
const About = () => {
    return (
        <section>
            <div
                className="p-5 mt-5 text-center bg-image imgChange"
                style={{
                    backgroundImage: `url(${bg1})`,
                    height: "400px",
                    backgroundSize: "cover"
                }}
            >
                <div className="mask" >
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-black">
                            <h1 className="mb-3 textStyle aboutTitle">ABOUT US</h1>
                            <p style={{ color: 'blue' }} className="textStyle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio
                            enim assumenda odit itaque, dolorem iste magni mollitia eligendi
                            quibusdam quas iure deserunt nulla architecto fuga minima quis hic a.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui commodi
                            necessitatibus sunt esse repellat, pariatur provident molestiae aperiam nobis quos
                             corrupti vitae minima expedita, sint voluptas natus. Ducimus, itaque.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;