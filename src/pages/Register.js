
import React, {useState} from 'react';
import {TextField, makeStyles, Button} from "@material-ui/core";
import { gql, useMutation } from '@apollo/client';

export const Register = () => {

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

    const gqlRegister = () => {
      let input;
      const [gqlRegister, {data}] = useMutation()
    };


    const register = async (e) => {
        e.preventDefault();
        const username = userName;
        const pw= password;
        console.log('hello register here');
    };

    const classes = useStyles();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");



    return(
        <div className={classes.container}>
        <div className={classes.content}>
        <form className={classes.form} autoComplete="off">
        <TextField className={classes.inputField} id="outlined-basic" label="Username" variant="outlined" value={userName} onChange={(e) => {
            setUserName(e.target.value);
        } }/>
        <TextField className={classes.inputField} id="outlined-basic" label="Password" variant="outlined" value={password} type='password' onChange={(e) => {
            setPassword(e.target.value);
        }}/>
            <Button variant='contained' className={classes.button} onClick={(e) => {
                register(e);}}
            >Submit</Button>
        </form>
        </div>
        </div>
    );
};



