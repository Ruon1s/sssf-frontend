import React, {useEffect, useState} from 'react';
import {useQuery, gql, useMutation, useLazyQuery} from '@apollo/client';
import {Button, makeStyles, TextField} from "@material-ui/core";
import {REGISTER_USER} from "../GraphQL/Mutations";
import {LOGIN_USER} from "../GraphQL/Queries";
import {useHistory} from "react-router";
import {AUTH_TOKEN, AUTH_USERID} from "../constants";


export const Login = () => {
    const history = useHistory();

    const useStyles = makeStyles(() => ({
        container: {
            flex: 1,
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: "center",
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            padding: 30,
            alignItems: 'center'
        },

        form: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: 10
        },
        inputField: {
            width: '10%',
            flexDirection: 'column',
            display: 'flex',
            flexGrow: 1,
            padding: '6px',
        }
    }));

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


        const [login, {loading, error, data}] = useLazyQuery(LOGIN_USER, {
            variables: {
                username: userName,
                password: password
            },
            onCompleted:({login})=> {
                console.log(login);
                localStorage.setItem(AUTH_TOKEN, login.token);
                localStorage.setItem(AUTH_USERID, login.id);
                console.log('hello');
                history.push('/Home');
                window.location.reload();
            },
            onError(error){
                console.log(error);
        },

        });


    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                Login
                <form className={classes.form} autoComplete="off">
                    <TextField className={classes.inputField} id="outlined-basic" label="Username" variant="outlined" value={userName} onChange={(e) => {
                        setUserName(e.target.value);
                    } }/>
                    <TextField className={classes.inputField} id="outlined-basic" label="Password" variant="outlined" value={password} type='password' onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                    <Button variant='contained' className={classes.button} onClick={(e) => {
                        login() ;}}
                    >Submit</Button>
                </form>
            </div>
        </div>
    );
};
