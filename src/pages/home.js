import * as React from 'react';
import {Link} from "react-router-dom";
import {Header} from "../components/Header";
import {useQuery} from "@apollo/client";
import {GET_ENTRIES} from "../GraphQL/Queries";
import {AUTH_USERID} from "../constants";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        padding: '10px',
        width: '10%',
    },
    media: {
        height: 140,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
    },
    divi: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    btn: {

    },
    btnContainer: {
        display: 'flex',
        flexWrap: 'wrap',
       justifyContent: 'space-between',


    }
});



export const Home = () => {
    const classes = useStyles();

    const userID = localStorage.getItem(AUTH_USERID);
    console.log('userid', userID);
    const  {loading, error, data} = useQuery(GET_ENTRIES, {
        variables: {
            id: userID
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const bringCards = () => {
        return data.entriesByUser.map(({id, Entryname, File, Ingredients, Steps, Rating}) => (
                <Card className={classes.root}>
                    <Link to={`/Single/${id}`}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={File}
                            title="Entry image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {Entryname}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Rating: {Rating.toString()}/5
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Link>
                    <CardActions className={classes.btnContainer}>
                        <Button variant='contained' size="small" color="primary" className={classes.btn}>
                            Edit
                        </Button>
                        <Button variant='contained' size="small" color="secondary">
                            Delete
                        </Button>

                    </CardActions>
                </Card>
        ))
    };

return(
    <div className={classes.divi}>
    <h1>Your entries</h1>
    <div className={classes.wrapper}>

        {bringCards()}

    </div>
    </div>


    );
};
