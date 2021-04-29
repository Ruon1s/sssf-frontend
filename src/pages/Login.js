import * as React from 'react';
import {useDispatch} from "react-redux";

export const Login = () => {


    const dispatch = useDispatch();
    const login = async () => {
        const mygqldata = await //get stuff from gql
        dispatch(login(mygqldata))
    }


    return(
        <div>Login</div>
    );
};
