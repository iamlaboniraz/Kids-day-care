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
import Slider from "react-slick";
// import { Button, Card, Carousel } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { Button } from 'reactstrap';
import "./ServiceDetail.css";
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 240,
        maxHeight: 400,
        marginTop: "100px",
        marginLeft: "100px",
        boxShadow: "10px 10px 40px rgb(40, 27, 223);",
        "&:hover": {
            color: "white",
            backgroundColor: "rgb(99, 153, 252);",
        }
    },
    // photoDetail: {
    //     position: "absolute;",
    //     display: "none;",
    //     width: "300px;",
    //     height: "200px;",
    //     top: "0;",
    // },
    media: {
        height: "50%",
        paddingTop: '70.25%',
    },

    avatar: {
        backgroundColor: red[500],
    },
    // 'root:hover': {
    //     photoDetail: {
    //         display: " block;",
    //         backgroundColor: "rgb(163, 135, 65,0.4);",
    //         h3: {
    //             color: "white;",
    //             backgroundColor: "teal;",
    //             textAlign: "center;"
    //         }
    //     }
    // }
}));



const ServiceDetail = (service) => {
    console.log(service)
    const { _id, name, imageURL, price, day, description } = service.service
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (_id) => {
        history.push(`/service/${_id}`)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // cseEase: "linear"
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (



        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageURL}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSuccess" component="p">
                        <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon><strong>{price} </strong>for <FontAwesomeIcon icon={faCalendarDay}></FontAwesomeIcon> <strong>{day}</strong> Day
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography> */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                    Details
                </Button> */}
                <Button  className="btn btn-block btn-dark" onClick={() => handleClick(_id)}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> Book Now
        </Button>

                {/* <div className={classes.photoDetail}>
                    <h3>{name}</h3>
                    <p>For {day} Day</p>
                    <IconButton aria-label="add to favorites">
                        <h4 style={{ color: 'white' }}><AttachMoneyIcon /><strong>{price}</strong></h4>
                    </IconButton>
                    <IconButton aria-label="share">

                        <Button style={{ textAlign: "right" }} className="btn btn-danger" onClick={() => handleClick(_id)}><ShoppingCartIcon />Book Now</Button>
                    </IconButton>
                </div> */}
            </CardActions>


            <Button className="btn btn-block btn-info mb-2" variant="outlined" color="primary" onClick={handleClickOpen}>
                Detail Info
           </Button>
            <Dialog
            className="textStyle"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Service Name is <FontAwesomeIcon icon={faServicestack}></FontAwesomeIcon><strong style={{color:"blue"}}>{name}</strong></DialogTitle>
                <DialogContent>
                    <DialogContentText className="textStyle">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogContent >
                    <DialogContentText style={{color:"green"}}>
                        <strong><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>{price} price For <FontAwesomeIcon icon={faCalendarDay}></FontAwesomeIcon> {day} day
                </strong>
                        </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="warning" autoFocus>
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </Card>

        // <Slider {...settings}>
        // <Carousel>
        //     <Carousel.Item>
        //     <Card className={classes.root}>

        //     <CardHeader
        //         title={name}
        //         subheader={day}
        //     />
        //     <CardMedia
        //         className={classes.media}
        //         image={imageURL}
        //     />
        //     <CardContent>
        //     </CardContent>
        //     <CardActions disableSpacing>
        //         <IconButton aria-label="add to favorites">
        //             <h4 style={{ color: 'green' }}><AttachMoneyIcon /><strong>{price}</strong></h4>
        //         </IconButton>
        //         <IconButton aria-label="share">
        //             <Button style={{ textAlign: "right" }} className="btn btn-danger" onClick={() => handleClick(_id)}><ShoppingCartIcon />Buy Now</Button>
        //         </IconButton>
        //     </CardActions>
        // </Card>
        //     </Carousel.Item>
        // </Carousel>
        //  </Slider>
        /* <div class="photo-frame">
                <div class="photo">
                <CardMedia
                        style={{height:"150px",width:"100%"}}
                        // className="img-fluid mb-3"
                        image={imageURL}
                    />
                </div>
                <div class="photo-detail">
                    <h3>{name}</h3>
                    <p>For {day} Day</p>
                    <IconButton aria-label="add to favorites">
                            <h4 style={{ color: 'white' }}><AttachMoneyIcon /><strong>{price}</strong></h4>
                    </IconButton>
                    <IconButton aria-label="share">
                            <Button style={{ textAlign: "right" }} className="btn btn-danger" onClick={() => handleClick(_id)}><ShoppingCartIcon />Book Now</Button>
                    </IconButton>
                </div>
            </div> */

        // <Card className={classes.root}>

        //     <CardHeader
        //         title={name}
        //         subheader={day}
        //     />
        //     <CardMedia
        //         style={{height:"150px"}}
        //         className="img-fluid mb-3"
        //         image={imageURL}
        //     />
        //     <CardContent>
        //     </CardContent>
        //     <CardActions disableSpacing>
        //         <IconButton aria-label="add to favorites">
        //             <h4 style={{ color: 'green' }}><AttachMoneyIcon /><strong>{price}</strong></h4>
        //         </IconButton>
        //         <IconButton aria-label="share">
        //             <Button style={{ textAlign: "right" }} className="btn btn-danger" onClick={() => handleClick(_id)}><ShoppingCartIcon />Buy Now</Button>
        //         </IconButton>
        //     </CardActions>
        // </Card>
    );
};

export default ServiceDetail;