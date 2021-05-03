import * as React from 'react';
import {SINGLE_ENTRY} from '../GraphQL/Queries'
import {useMutation, useQuery} from "@apollo/client";
import {makeStyles} from "@material-ui/core/styles";
import {DELETE_ENTRY} from "../GraphQL/Mutations";
import {useHistory} from "react-router";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

const useStyles = makeStyles({

    img: {
        height: 400,
    }
});


export const SingleEntry = ({match}) => {
    const history = useHistory();
    const classes = useStyles();
    console.log(match.params.id);


    const {loading, error, data} = useQuery(SINGLE_ENTRY, {
        variables: {
            id: match.params.id
        }
    });

    const [delEntry] = useMutation(DELETE_ENTRY, {
        variables: {
            id: match.params.id
        },
        onCompleted:({delEntry})=> {
            console.log('hello');
            history.push('/Home');
            window.location.reload();
        },
        onError(error){
            console.log(error);
        }
    });



    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;


    return (
         <div>
             <h1>{data.singleEntry.Entryname}</h1>
             <img src={data.singleEntry.File} className={classes.img}/>
             <h2>Ingredients:</h2>
             <h3>{data.singleEntry.Ingredients}</h3>
             <h2>Steps:</h2>
             <h3>{data.singleEntry.Steps}</h3>
             <h2>Rating:</h2>
             <h3>{data.singleEntry.Rating.toString()}</h3>
             <Link to={`/Modify/${match.params.id}`}>
             <Button variant='contained' size="small" color="primary" className={classes.btn}>
                 Edit
             </Button>
             </Link>
             <Button variant='contained' size="small" color="secondary" onClick={delEntry}>
                 Delete
             </Button>
         </div>

    );
};
