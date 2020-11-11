import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './component/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(<Provider store={createStore(reducers, composeEnhancers(applyMiddleware()))}>
                <App/>
                </Provider>,
                document.querySelector("#root"));