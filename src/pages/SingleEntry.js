import * as React from 'react';
import {SINGLE_ENTRY} from '../GraphQL/Queries'
import {useQuery} from "@apollo/client";
import {useState} from "react";
import {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({

    img: {
        height: 400,
    }
});


export const SingleEntry = ({match}) => {
    const classes = useStyles();
    console.log(match.params.id);


    const {loading, error, data} = useQuery(SINGLE_ENTRY, {
        variables: {
            id: match.params.id
        }
    });


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


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
         </div>

    );
};
