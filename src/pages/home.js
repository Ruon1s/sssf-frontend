import * as React from 'react';
import {Link} from "react-router-dom";
import {Header} from "../components/Header";
import {useQuery} from "@apollo/client";
import {GET_ENTRIES} from "../GraphQL/Queries";
import {AUTH_USERID} from "../constants";

export const Home = () => {
    const userID = localStorage.getItem(AUTH_USERID);

    const [getEntries, {loading, error, data}] = useQuery(GET_ENTRIES, {
        variables: {
            id: userID,
        }
    });



    return(
        <div>

            <div>Home</div>
            <Link to="/login">
            <button>go to login</button>
            </Link>
        </div>

    );
};
