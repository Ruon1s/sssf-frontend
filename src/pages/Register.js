import React, {useState} from 'react';
import {useHistory} from 'react-router'
import {TextField, makeStyles, Button} from "@material-ui/core";
import {gql, useMutation} from '@apollo/client';
import {REGISTER_USER} from '../GraphQL/Mutations'

export const Register = () => {
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


    const classes = useStyles();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [register] = useMutation(REGISTER_USER, {
        variables: {
            username: userName,
            password: password
        },
        onCompleted: ({register}) => {
            console.log(register);
            console.log('hello');
            history.push('/')
        }
    });

    const klikkaa = () => {
        console.log('hey u klikked');
        console.log(userName);
        console.log(password);
        register();
    };

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                Register
                <form className={classes.form} autoComplete="off">
                    <TextField className={classes.inputField} id="outlined-basic" label="Username" variant="outlined"
                               value={userName} onChange={(e) => {
                        setUserName(e.target.value);
                    }}/>
                    <TextField className={classes.inputField} id="outlined-basic" label="Password" variant="outlined"
                               value={password} type='password' onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                    <Button variant='contained' className={classes.button} onClick={(e) => {
                        klikkaa();
                    }}
                    >Submit</Button>
                </form>
            </div>
        </div>
    );
};



