import {gql} from '@apollo/client';

export const REGISTER_USER = gql`
    mutation register($username: String! $password: String!) {
        register(username: $username, password: $password) {
        username
        }
        }
    `;
