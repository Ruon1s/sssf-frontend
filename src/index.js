import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './app/store';
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {gql} from '@apollo/client';
import {ApolloProvider} from "@apollo/client/react";
//uri: 'https://localhost:8000',
const client = new ApolloClient({
    uri: 'https://localhost:8000',
    cache: new InMemoryCache()
});

ReactDOM.render(

  <React.StrictMode>
      <ApolloProvider client={client}>
      <Provider store={store}>
    <App />
      </Provider>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
