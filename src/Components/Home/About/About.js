import React, { useState } from 'react';
import bg1 from "../../../images/bg1.jfif";
// import { useSpring, animated as a } from 'react-spring'
// import { render } from 'react-dom';
import "./About.css";
const About = () => {
//     const [flipped, set] = useState(false)
//   const { transform, opacity } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 }
//   })
    
    return (

     
        <section>
               {/* <div onClick={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div> */}

        <div
            className="p-5 mt-5 text-center bg-image"
            style={{
                backgroundImage: `url(${bg1})`,
                height: "400px",
                backgroundSize: "cover"
            }}
        >
            <div className="mask" >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-black">
                        <h1 className="mb-3 textStyle">ABOUT US</h1>
                        <p style={{color:'blue'}} className="textStyle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio 
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