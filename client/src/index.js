import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import {Auth0Provider} from "@auth0/auth0-react"
require("dotenv").config()

const Auth0 = { domain:process.env.REACT_APP_AUTH0_DOMAIN, clientId:process.env.REACT_APP_AUTH0_CLIENT_ID} 

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <Auth0Provider domain={Auth0.domain} clientId={Auth0.clientId} redirectUri={window.location.origin}>
      <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

