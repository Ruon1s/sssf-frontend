import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {ApolloClient, from, InMemoryCache, HttpLink, createHttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {onError} from '@apollo/client/link/error'
import {AUTH_TOKEN} from "./constants";
import {gql} from '@apollo/client';
import {ApolloProvider} from "@apollo/client/react";
import {createUploadLink} from "apollo-upload-client/public/index";

const errorLink = onError(({ graphqlErrors, networkError}) => {
    if(graphqlErrors) {
        graphqlErrors.map(({message, location, path}) => {
            alert(`Graphql error ${message}`);
        })
    }
});

const authLink = setContext((_, { headers }) => {
    let token = localStorage.getItem(AUTH_TOKEN);
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const uploadLink = createUploadLink({
    uri: 'https://charge.jelastic.metropolia.fi/graphql'
})




const client = new ApolloClient({
    uri: 'https://charge.jelastic.metropolia.fi/graphql',
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache()
});


ReactDOM.render(

  <React.StrictMode>
      <ApolloProvider client={client}>
    <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
