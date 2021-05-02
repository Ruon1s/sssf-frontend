import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
    query login($username: String! $password: String!) {
        login(username: $username, password: $password) {
        username
        id
        token
        }
        }
    `;

export const GET_ENTRIES = gql`
    query entriesByUser($id: String!) {
    entriesByUser(id: $id) {
    id
    Entryname
    File
    Ingredients
    Steps
    Rating
    }
    }
`;

export const SINGLE_ENTRY = gql`
    query singleEntry($id: String){
    singleEntry(id: $id) {
    Entryname
    File
    Ingredients
    Steps
    Rating
    }
    }

`;

