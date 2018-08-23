import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import {BrowserRouter,Route} from 'react-router-dom';
import App from 'Views/App.js';
import registerServiceWorker from './registerServiceWorker';
const inStyles={
	root: {
		height: '100%'
	}
}
ReactDOM.render(
	<Root  style={inStyles.root}>
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Root>
, document.querySelector('#root'));
registerServiceWorker();
