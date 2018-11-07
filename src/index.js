import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import {BrowserRouter, Route} from 'react-router-dom';
import App from 'Views/App/App.js';
import ServiceChecker from 'Views/ServiceChecker/ServiceChecker.jsx';

import Login from './components/Login/Login.js';
import registerServiceWorker from './registerServiceWorker';
import { Security, ImplicitCallback } from '@okta/okta-react';
import config from './.samples.config';
// const config = {
//   issuer: 'https://dev-575609.oktapreview.com/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '0oagvenik1CmjZzhZ0h7'
// }
const inStyles =  {
	root: {
		height: '100%',
		width:'100%'
	}
}
ReactDOM.render(
	<Root  style={inStyles.root}>
		<BrowserRouter>
		<Security issuer={config.oidc.issuer}
                  client_id={config.oidc.clientId}
                  redirect_uri={config.oidc.redirectUri}>
			<Route path={`${process.env.PUBLIC_URL}/`} exact={true} component={App} /> {/* Service Checker */}
			<Route path="*" exact={true} component={App} />
			<Route path={`${process.env.PUBLIC_URL}` + "/implicit/callback/"} component={ImplicitCallback} />
			{/* <Route path="/login" component={Login} /> */}
			{/* <Route path="/app" component={App} /> */}
			</Security> 	
		</BrowserRouter>
	</Root>
, document.querySelector('#root'));
registerServiceWorker();
