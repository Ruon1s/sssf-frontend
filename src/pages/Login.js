import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useQuery, gql} from '@apollo/client';
// import {LOGIN_USER} from '../GraphQL/Queries';


export const Login = () => {
  //  const {error, loading, data} = useQuery(LOGIN_USER);
/*
    const dispatch = useDispatch();
    const login = async () => {
        const mygqldata = await //get stuff from gql
        dispatch(login(mygqldata))
    };
*/

    return(
        <div>Login</div>
    );
};
