import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import newBaby from '../../../images/new-born.jpeg';
import Children from '../../../images/children.jfif';

import { Button } from 'reactstrap';

import image1 from "../../../images/image1.jfif";
import image2 from "../../../images/image2.jfif";
import image5 from "../../../images/image5.jfif";
import study2 from "../../../images/study2.jfif";
import image3 from "../../../images/image3.jfif";
import fun5 from "../../../images/fun5.jpg";
import fun4 from "../../../images/fun4.jpg";
import fun12 from "../../../images/fun12.jfif";
import study from "../../../images/study.jpg";
import "./Gallery.css";
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import bg1 from "../../../images/fun3.jpg";
import { render } from 'react-dom'

import { useSpring, animated as a } from 'react-spring'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: "30px",
        // marginLeft: "5px",
        marginRight: "10px",
        boxShadow: "10px 10px 40px rgb(32, 20, 3)",
    },
    media: {
        height: "50%",
        paddingTop: '70.25%',
    },

    avatar: {
        backgroundColor: red[500],
    },
}));

const Gallery = () => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    const classNamees = useStyles();
    const [isFlipped, setIsFlipped] = useState(false)

    const handleChange = () => {
        setIsFlipped(!isFlipped);
    }

    return (




        <div
            className="p-5 text-center bg-image"
            style={{
                backgroundImage: `url(${bg1})`,
                height: "400px",
                backgroundSize: "cover"
            }}
        >
            

            
            <div className="mask" >
                <div className="d-flex justify-content-center align-items-center h-100">
                    {/* <div className="text-black"></div> */}
                    <div className="container">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <ul class="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" class="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                            </ul>

                            <div class="carousel-inner">
                                <div className="carousel-inner py-4">
                                    <h1 className="textStyle" style={{ textAlign: "center" }}>Photo Gallery</h1>
                                    <hr />
                                    <div className="carousel-item active">
                                        <div className="container">
                                            <div className="row">

                                                <div className="col-lg-4">
                                                    <div className="card photo-frame">
                                                        <img
                                                            src={image1}
                                                            className="card-img-top photo"
                                                            alt="..."
                                                        />
                                                        {/* <div onClick={() => set(state => !state)}>
                <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
            </div> */}

                                                    </div>


                                                    {/* <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">
                                                        Some quick example text to build on the card title and make up the bulk
                                                        of the card's content.
                                                </p>
                                                    <a href="#!" className="btn btn-primary">Button</a>
                                                                                      

                                            </div> */}
                                                </div>

                                                <div className="col-lg-4 d-none d-lg-block">
                                                    <div className="card photo-frame">
                                                        <img
                                                            src={image2}
                                                            className="card-img-top"
                                                            alt="..."
                                                        />
                                                        {/* <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div> */}
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 d-none d-lg-block">
                                                    <div className="card photo-frame">
                                                        <img
                                                            src={image5}
                                                            className="card-img-top"
                                                            alt="..."
                                                        />
                                                        {/* <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
</p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="carousel-item">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="card photo-frame">
                                                        <img
                                                            src={study2}
                                                            className="card-img-top"
                                                            alt="..."
                                                        />
                                                        {/* <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
</p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div> */}
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 d-none d-lg-block">
                                                    <div className="card photo-frame">
                                                        <img
                                                            src={image3}
                                                            className="card-img-top"
                                                            alt="..."
                                                        />
                                                        {/* <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
</p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div> */}
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 d-none d-lg-block">
                                                    <div className="card photo-frame">
                                                        <img
                                                            src={fun5}
                                                            className="card-img-top"
                                                            alt="..."
                                                        />
                                                        {/* <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
</p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  */}

                                    <div className="carousel-item">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                                    <div className="card photo-frame">
                                                        <img
                                                            src={fun4}
                                                            className="card-img-top"
                                                            alt="..."
                                                        />
                                                        {/* <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
</p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div> */}
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                                    <div className="card photo-frame">
                                                        <img
                                                            src={fun12}
                                                            className="card-img-top"
                                                            alt="..."
                                                        />
                                                        {/* <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
</p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div> */}
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                                    <div className="card photo-frame">
                                                        <img
                                                            src={study}
                                                            className="card-img-top"
                                                            alt="..."
                                                        />
                                                        {/* <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
</p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>







        // <section classNameName="bg-success text-center text-white">

        //     <div classNameName="container p-4">
        //         <div classNameName="mb-4">
        //             <div classNameName="row">
        //             <h1>Photo Gallery</h1>

        //                 <Card classNameName={classNamees.root}>

        //                     <img
        //                         src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.jpg"
        //                         data-mdb-img="https://mdbootstrap.com/img/Photos/Slides/2.jpg"
        //                         alt="Gallery image 2"

        //                     />
        //                 </Card>

        //                 <Card classNameName={classNamees.root}>

        //                     <img
        //                         src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.jpg"
        //                         data-mdb-img="https://mdbootstrap.com/img/Photos/Slides/2.jpg"
        //                         alt="Gallery image 2"

        //                     />
        //                 </Card>

        //                 <Card classNameName={classNamees.root}>

        //                     <img
        //                         src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.jpg"
        //                         data-mdb-img="https://mdbootstrap.com/img/Photos/Slides/2.jpg"
        //                         alt="Gallery image 2"

        //                     />
        //                 </Card>

        //                 <Card classNameName={classNamees.root}>

        //                     <img
        //                         src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.jpg"
        //                         data-mdb-img="https://mdbootstrap.com/img/Photos/Slides/2.jpg"
        //                         alt="Gallery image 2"

        //                     />
        //                 </Card>

        //                 <Card classNameName={classNamees.root}>

        //                     <img
        //                         src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.jpg"
        //                         data-mdb-img="https://mdbootstrap.com/img/Photos/Slides/2.jpg"
        //                         alt="Gallery image 2"

        //                     />
        //                 </Card>



        //             </div>
        //         </div>
        //     </div>

        // </section>


    );
};

export default Gallery;