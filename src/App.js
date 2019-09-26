import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import io from 'socket.io-client';
import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

// // Listen for messages
const socket = io('http://localhost:3333');

// socket.on('connect', data => {
//     console.tron.log(data);
// });

// socket.emit('sendMessage', 'mensagem de teste');

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                    <GlobalStyle />
                    <ToastContainer autoClose={3000} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
