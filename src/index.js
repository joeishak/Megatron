import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import {BrowserRouter, Route} from 'react-router-dom';
import App from 'Views/App/App.js';

import Login from './components/Login/Login.js';
import registerServiceWorker from './registerServiceWorker';
import { Security, ImplicitCallback } from '@okta/okta-react';
import config from './.samples.config';

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
			<Route path="/apps/adobepoc" exact={true} component={App} /> {/* Service Checker */}
			<Route path="" exact={true} component={App} /> {/* Service Checker */}

			<Route path={`${process.env.PUBLIC_URL}` + "/implicit/callback/"} component={ImplicitCallback} />

			</Security>
		</BrowserRouter>
	</Root>
, document.querySelector('#root'));
registerServiceWorker();
