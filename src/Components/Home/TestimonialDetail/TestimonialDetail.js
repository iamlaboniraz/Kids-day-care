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
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay, faDollarSign, faMailBulk, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 240,
        maxHeight: 400,
        marginTop: "100px",
        marginLeft: "100px",
        // maxWidth: 345,
        // marginTop: "100px",
        // marginLeft: "100px",
        boxShadow: "10px 10px 40px rgb(218, 148, 20);",
        "&:hover": {
            color: "white",
            backgroundColor: "rgb(117, 115, 235);",
            
        }
    },
    media: {
        height: "50%",
        paddingTop: '70.25%',
    },
    

    avatar: {
        backgroundColor: red[500],
    },
}));


const TestimonialDetail = (Testimonial) => {
    const {user,name, companyName,imageURL, description } = Testimonial.Testimonial
    const classes = useStyles();
    const history = useHistory();

    // const handleClick = (_id) => {
    //     history.push(`/products/${_id}`)
    // }

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
                    Company Name is <strong>{companyName}</strong>
                </Typography>

            </CardContent>
        </CardActionArea>
        <CardActions>
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
            <DialogTitle id="alert-dialog-title">Client name is <FontAwesomeIcon icon={faUser}></FontAwesomeIcon><strong style={{color:"blue"}}> ({name})</strong></DialogTitle>
            <DialogContent >
                <DialogContentText style={{color:"gray"}}>
                    <strong><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> {user}</strong>
                    </DialogContentText>
            </DialogContent>
            <DialogContent>
                <DialogContentText className="textStyle">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogContent >
                <DialogContentText style={{color:"green"}}>
                    Work in  <strong>{companyName}</strong>
                    </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="warning" autoFocus>
                    Close
      </Button>
            </DialogActions>
        </Dialog>
    </Card>





 
        
        // <Card className={classes.root}>
            
        //     <CardHeader
        //         title={name}
        //         // subheader={time}
        //     />
        //     <CardMedia
        //         className={classes.media}
        //         image={imageURL}
        //     />
        //     <CardContent>
        //     </CardContent>
        //     <CardActions disableSpacing>
        //         <IconButton aria-label="add to favorites">
        //             <h4 style={{ color: 'green' }}><AttachMoneyIcon /><strong>{description}</strong></h4>
        //         </IconButton>
        //         {/* <IconButton aria-label="share">
        //             <Button style={{ textAlign: "right" }} className="btn btn-danger"><ShoppingCartIcon />Buy Now</Button>
        //         </IconButton> */}
        //     </CardActions>
        // </Card>
    );
};

export default TestimonialDetail;