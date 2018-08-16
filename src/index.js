import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import {BrowserRouter,Route} from 'react-router-dom';
import App from 'Views/App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
	<Root  >
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Root>
, document.querySelector('#root'));
registerServiceWorker();
