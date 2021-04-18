import React from 'react';
import { Carousel } from 'react-bootstrap';
import fun from "../../../images/fun.jpg";
import fun2 from "../../../images/fun2.jpg";
import fun3 from "../../../images/fun3.jpg";
import image4 from "../../../images/image4.jfif";
import study4 from "../../../images/study4.jpg";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "500px", backgroundSize: "cover"
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







    // <div class="container">
    // <div id="myslideshow" class="carousel slide" data-ride="carousel">
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img class="d-block w-100" src="https://scx2.b-cdn.net/gfx/news/2020/1-children.jpg" class="d-block w-100" />
    //       <div class="carousel-caption">
    //         <h3>WELCOME TO THE KIDS DAYS CARE</h3>
    //         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis porro laudantium placeat totam distinctio impedit fugiat blanditiis quia ratione, delectus 
    //           nostrum architecto natus error esse, aliquid at maxime accusantium beatae!</p>
    //       </div>
    //     </div>
    //     <div class="carousel-item active">
    //       <img style={{height: "400px",
    //             backgroundSize: "cover"}} class="d-block w-100" src={fun} class="d-block w-100" />
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src={fun2} class="d-block w-100" />
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src="https://scx2.b-cdn.net/gfx/news/2020/1-children.jpg" class="d-block w-100" />
    //     </div>
    //   </div>
    // </div>
    // </div>


    //   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    //   <ol class="carousel-indicators">
    //     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //   </ol>
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img style={{height: "400px",
    //               backgroundSize: "cover"}} class="d-block w-100" src="https://4rfnv3jdfte8qj2229aqgj4h-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/12205709_web1_171212-CMA-M-daycare-1050x700.jpg" alt="First slide"/>
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src="https://img.freepik.com/free-vector/happy-children-jumping-summer-meadow_74855-5852.jpg?size=626&ext=jpg" alt="Second slide"/>
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src="https://scx2.b-cdn.net/gfx/news/2020/1-children.jpg" alt="Third slide"/>
    //     </div>
    //   </div>
    //   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Previous</span>
    //   </a>
    //   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Next</span>
    //   </a>
    // </div>




    // <section>

    //     <div
    //         className="p-5 text-center bg-image"
    //         style={{
    //             backgroundImage: "url('https://4rfnv3jdfte8qj2229aqgj4h-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/12205709_web1_171212-CMA-M-daycare-1050x700.jpg')",
    //             height: "400px",
    //             backgroundSize: "cover"
    //         }}
    //     >
    //         <div className="mask" >
    //             <div className="d-flex justify-content-center align-items-center h-100">
    //                 <div className="text-white">
    //                     <h1 className="mb-3">WELCOME TO THE KIDS WORLD</h1>
    //                     {/* <h3 className="mb-3">Subheading</h3>
    //   <Button>Call us</Button> */}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // </section>
  );
};

export default HeaderMain;