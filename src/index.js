import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Convert To HashRouter for IBApps Deployment
import Summary from 'Views/Summary/Summary.js';
import registerServiceWorker from './registerServiceWorker';
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';
import { config as config } from './environmentParams';
import Login from './auth/Login';

function onAuthRequired({history}) {
	history.push('/login');
}
const inStyles = {
	root: {
		height: '100%',
		width: '100%'
	}
}
ReactDOM.render(

	<Root style={inStyles.root} >
		<Router>
			<Security 
				issuer={config.oidc.issuer}
				client_id={config.oidc.clientId}
				redirect_uri={config.oidc.redirectUri}
				onAuthRequired={onAuthRequired}
				scope={config.oidc.scope}>

				<SecureRoute path="/summary" exact={true} component={Summary} />
				<SecureRoute path="/" exact={true} component={Summary} />
				<Route path="/login" render={() => ( <Login baseUrl="https://dev-575609.oktapreview.com"jish />)}
             	/>
				{/* <Route path="/login" render={() => ( <Login baseUrl="https://adobe.okta.com" />)}
             	/> */}

				{/* <Route path="" exact={true} component={App} /> */}
				{/* IBAPPS*/}
				{/* <Route path={`https://rtb.corp.adobe.com:8551/apps/rtbcallback/index.html`} component={ImplicitCallback} /> */}
				{/*  IIS*/}
				{/* <Route path={`${process.env.PUBLIC_URL}` + '/implicit/callback/'} component={ImplicitCallback} /> */}
				{/* // Localhost */}
				<Route path="/implicit/callback" component={ImplicitCallback} />
			</Security>
		</Router>

	</Root>

	, document.querySelector('#root'));

registerServiceWorker();