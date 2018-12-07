import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from 'Views/App/App.js';

// import Login from './components/Login/Login.js';
import registerServiceWorker from './registerServiceWorker';
import { Security, ImplicitCallback } from '@okta/okta-react';
import config from './.samples.config';

const inStyles =  {
	root: {
		height: '100%',
		width:'100%'
	}
}
// '${process.env.PUBLIC_URL}';
// http://70.176.243.97:8551/apps/adobecallback/index.html
ReactDOM.render(
	<Root  style={inStyles.root}>
		<Router>
		<Security issuer={config.oidc.issuer}
                  client_id={config.oidc.clientId}
                  redirect_uri={config.oidc.redirectUri}>
			<Route path="/summary" exact={true} component={App} /> {/* Service Checker */}
			<Route path="" exact={true} component={App} /> {/* Service Checker */}

			{/** Uncomment on Adobes site only when they have both apps (RTB / Implicit Callback app)*/ }
			<Route path={`${process.env.PUBLIC_URL}`} component={ImplicitCallback} />
			{/* <Route path={`${process.env.PUBLIC_URL}` + '/implicit/callback/'} component={ImplicitCallback} /> */}


			</Security>
		</Router>
	</Root>
, document.querySelector('#root'));
registerServiceWorker();
