import * as React from 'react';
import {Link} from "react-router-dom";
import {Header} from "../components/Header";

export const Home = () => {
    return(
        <div>

            <div>Home</div>
            <Link to="/login">
            <button>go to login</button>
            </Link>
        </div>

    );
};
