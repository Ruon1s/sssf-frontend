import * as React from 'react';
import {useHistory} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import {Button, makeStyles} from '@material-ui/core';
import {LinkContainer} from 'react-router-bootstrap'

export const Header = (props) => {
    const history = useHistory();
    const useStyles = makeStyles(() => ({
        buton: {
            position: "absolute; right:0"
        },
    }));
    const classes = useStyles();

    return (
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Nav className="mr-auto">
                {props.user ?
                    <>
                        <LinkContainer to="/Home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/Add">
                            <Nav.Link>Add new diary entry</Nav.Link>
                        </LinkContainer>
                        <Button color="secondary" className={classes.buton} onClick={(e) => {
                            localStorage.clear();
                            history.push('/');
                            window.location.reload();
                        }}>Log Out</Button>
                    </>
                    :
                    <>
                        <LinkContainer to="/">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/Register">
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                    </>
                }
            </Nav>
        </Navbar>
    );
};

