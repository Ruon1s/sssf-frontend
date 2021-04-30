import * as React from 'react';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import {Nav,} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
/*
export const Header = (props) => {
    return(
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
*/

export const Header = (props) => {
    return(
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Nav className="mr-auto">

                    <>
                        <LinkContainer to="/Home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/Add">
                            <Nav.Link>Add new diary entry</Nav.Link>
                        </LinkContainer>
                    </>

                    <>
                        <LinkContainer to="/">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/Register">
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                    </>


            </Nav>
        </Navbar>
    );
};
