import React from 'react';
import { Carousel } from 'react-bootstrap';
import fun from "../../../images/fun.jpg";
import image4 from "../../../images/image4.jfif";
import study4 from "../../../images/study4.jpg";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{
            height: "500px", backgroundSize: "cover"
          }}
          className="d-block w-100 "
          src={image4}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption headerMain">
            <h3 className="title" >WELCOME TO THE KIDS DAYS CARE</h3>
            <p className="description" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis porro laudantium placeat totam distinctio impedit fugiat blanditiis quia ratione, delectus
               nostrum architecto natus error esse, aliquid at maxime accusantium beatae!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "500px", backgroundSize: "cover" }}
          className="d-block w-100"
          src={study4}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="carousel-caption headerMain">
            <h3 className="title" >WELCOME TO THE KIDS DAYS CARE</h3>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis porro laudantium placeat totam distinctio impedit fugiat blanditiis quia ratione, delectus
               nostrum architecto natus error esse, aliquid at maxime accusantium beatae!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "500px", backgroundSize: "cover" }}
          className="d-block w-100"
          src={fun}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="carousel-caption headerMain">
            <h3 className="title" >WELCOME TO THE KIDS DAYS CARE</h3>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis porro laudantium
            placeat totam distinctio impedit fugiat blanditiis quia ratione, delectus
               nostrum architecto natus error esse, aliquid at maxime accusantium beatae!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderMain;