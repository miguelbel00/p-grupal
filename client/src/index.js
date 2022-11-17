import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import {Auth0Provider} from "@auth0/auth0-react"
require("dotenv").config()

const REACT_APP_AUTH0_DOMAIN = "dev-7cs7a3uxkk6z0j3w.us.auth0.com"
const REACT_APP_AUTH0_CLIENT_ID = "k15QWR6U4DgPGbZxhVzbu76H2U81LdpH"

const Auth0 = { domain:REACT_APP_AUTH0_DOMAIN, clientId:REACT_APP_AUTH0_CLIENT_ID} 





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

