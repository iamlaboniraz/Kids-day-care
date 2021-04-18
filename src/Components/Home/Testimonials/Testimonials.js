import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import img from "../../../images/man2.jfif";
import img2 from "../../../images/man1.jfif";
import "./testimonials.css";
// const TestimonialData = [
//     {
//        name: "Laboni",
//        companyName : "CND GROUP",
//        img : "",
//        description: "fdfsdfdf",
//     },
//     {
//         title: "Tahiya",
//         companyName : "CND GROUP",
//         img: "",
//         description: "fdfsdfdf",
//     },
//     {
//         name: "Shuvo",
//         companyName : "CND GROUP",
//         img:"",
//         description: "fdfsdfdf",
//     },
//     {
//         name: "Tuba",
//         companyName : "CND GROUP",
//         img : "",
//         description: "fdfsdfdf",
//     }
// ]

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/testimonials')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data)
            })

    }, [])
    return (
        // <section className="container mt-5 container-style">
        //     <div className="row">
        //         <div className="col-md-12">
        //             <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        //                 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        //                     <ol class="carousel-indicators">
        //                         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        //                         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //                         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //                     </ol>
        //                     <div class="carousel-inner">
        //                         <div class="carousel-item active">
        //                             <div className="row">
        //                                 <div className="col-md-4">
        //                                     <div className="single-box">
        //                                         <div className="img-area">
        //                                             <img src={img} alt=""/>
        //                                             <div className="img-text">
        //                                                 <h1>Person one</h1>
        //                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                      Dolorem asperiores nostrum mollitia fugit unde quisquam, 
        //                                                      sunt cumque saepe 
        //                                                     modi delectus nulla rerum quam ipsa et illum veritatis provident 
        //                                                     voluptatum nam!</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 <div className="col-md-4">
        //                                     <div className="single-box">
        //                                         <div className="img-area">
        //                                             <img src={img} alt=""/>
        //                                             <div className="img-text">
        //                                                 <h1>Person one</h1>
        //                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                      Dolorem asperiores nostrum mollitia fugit unde quisquam, 
        //                                                      sunt cumque saepe 
        //                                                     modi delectus nulla rerum quam ipsa et illum veritatis provident 
        //                                                     voluptatum nam!</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 <div className="col-md-4">
        //                                     <div className="single-box">
        //                                         <div className="img-area">
        //                                             <img src={img} alt=""/>
        //                                             <div className="img-text">
        //                                                 <h1>Person one</h1>
        //                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                      Dolorem asperiores nostrum mollitia fugit unde quisquam, 
        //                                                      sunt cumque saepe 
        //                                                     modi delectus nulla rerum quam ipsa et illum veritatis provident 
        //                                                     voluptatum nam!</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 <div className="col-md-4">
        //                                     <div className="single-box">
        //                                         <div className="img-area">
        //                                             <img src={img} alt=""/>
        //                                             <div className="img-text">
        //                                                 <h1>Person one</h1>
        //                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                      Dolorem asperiores nostrum mollitia fugit unde quisquam, 
        //                                                      sunt cumque saepe 
        //                                                     modi delectus nulla rerum quam ipsa et illum veritatis provident 
        //                                                     voluptatum nam!</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 <div className="col-md-4">
        //                                     <div className="single-box">
        //                                         <div className="img-area">
        //                                             <img src={img} alt=""/>
        //                                             <div className="img-text">
        //                                                 <h1>Person one</h1>
        //                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                      Dolorem asperiores nostrum mollitia fugit unde quisquam, 
        //                                                      sunt cumque saepe 
        //                                                     modi delectus nulla rerum quam ipsa et illum veritatis provident 
        //                                                     voluptatum nam!</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 <div className="col-md-4">
        //                                     <div className="single-box">
        //                                         <div className="img-area">
        //                                             <img src={img} alt=""/>
        //                                             <div className="img-text">
        //                                                 <h1>Person one</h1>
        //                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                      Dolorem asperiores nostrum mollitia fugit unde quisquam, 
        //                                                      sunt cumque saepe 
        //                                                     modi delectus nulla rerum quam ipsa et illum veritatis provident 
        //                                                     voluptatum nam!</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                             </div>
        //                         </div>
        //                     </div>
        //                     </div>
        //                     </div>
        //                 </div>
        //             </div>
        // </section>





        // <section className="slider-area">
        //     <div className="container">
        //         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        //             <ol class="carousel-indicators">
        //                 <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        //                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //             </ol>
        //             <div class="carousel-inner">
        //                 <div class="carousel-item active">
        //                     <img src={img} alt="" />
        //                     <div class="carousel-caption ml-5">
        //                         <h5>Full Stack Engineer</h5>
        //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur earum 
        //                             dolorem voluptate pariatur suscipit repellat laborum. Consequatur ratione repellat in
        //                              harum eius nulla assumenda quod, nisi provident, cumque maiores?</p>
        //                     </div>
        //                 </div>
        //                 <div class="carousel-item">
        //                     <img src={img2} alt="Second slide" />         
        //                     <div class="carousel-caption ml-5">
        //                         <h5>Web Developer</h5>
        //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur earum 
        //                             dolorem voluptate pariatur suscipit repellat laborum. Consequatur ratione repellat in
        //                              harum eius nulla assumenda quod, nisi provident, cumque maiores?</p>
        //                     </div>
        //                 </div>
        //                 <div class="carousel-item">
        //                     <div className="img-area mb-100">
        //                          <img src={img} alt="Third slide" />
        //                     </div>
                            
        //                     <div class="carousel-caption ml-5">
        //                         <h5 >Softwere engineer</h5>
        //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur earum 
        //                             dolorem voluptate pariatur suscipit repellat laborum. Consequatur ratione repellat in
        //                              harum eius nulla assumenda quod, nisi provident, cumque maiores?</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //                 <span class="sr-only">Previous</span>
        //             </a>
        //             <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //                 <span class="sr-only">Next</span>
        //             </a>
        //         </div>
        //     </div>
        // </section>


            <section className="services-container mt-5">
                            <div className="text-center textStyle">
                                <h5  style={{marginTop:"200px", color: '#1CC7C1' }}>Testimonials</h5>
                <h2>Client Opinion about our Services</h2>
            </div>
            <div className="justify-content-center">
                                <div className="row">
                                        
                {
                    testimonials.map(Testimonial => <TestimonialDetail Testimonial={Testimonial}></TestimonialDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Testimonials;