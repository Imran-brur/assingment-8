import React from 'react';
import './User.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const User = (props) => {
const classes = useStyles();
const {id, title} = props.user;

    return (
        <div className="classes">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b>Id:</b> {id} <br/>
                            <b>Title:</b> {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="secondary">
                            <Link to={`/details/${id}`} style={{textDecoration: "none",color:"white"}}>
                                SEE MORE
                                </Link>
                         </Button>
                    </CardActions>
            </Card>
        </div>
    );
};

export default User;