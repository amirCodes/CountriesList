import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducer/root.reducer';
import ProductList from './components/ProductList/index';

// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <ProductList />
    </Provider>,
    document.getElementById('root')
);


