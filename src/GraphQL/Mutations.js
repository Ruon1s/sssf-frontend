import {gql} from '@apollo/client';

export const REGISTER_USER = gql`
    mutation register($username: String! $password: String!) {
        register(username: $username, password: $password) {
        username
        }
        }
    `;

export const DELETE_ENTRY = gql`
    mutation deleteEntry($id: String){
    deleteEntry(id: $id){
        Entryname
    }
    }
`;

export const ADD_ENTRY = gql`
   mutation addEntry(
    $Entryname: String 
    $File: Upload 
    $Ingredients: String 
    $Steps: String 
    $Rating: Int 
    $Date: String
    $userID: String) {
        addEntry(
            Entryname: $Entryname
            File: {File: $File} 
            Ingredients: $Ingredients
            Steps: $Steps
            Rating: $Rating
            Date: $Date
            userID: $userID) 
            {
                Entryname
                File
                Ingredients
                Steps
                Rating
                Date
                userID
                }
   }
   `;

export const MODIFY_ENTRY = gql`
    mutation modifyEntry(
    $id: String
    $Entryname: String
    $File: Upload
    $Ingredients: String
    $Steps: String
    $Rating: Int) {
        modifyEntry(
        id: $id
        Entryname: $Entryname
        File: {File: $File}
        Ingredients: $Ingredients
        Steps: $Steps
        Rating: $Rating)
        {
        Entryname
        }
        }
        
       


`;
