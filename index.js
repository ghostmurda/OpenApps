import { registerRootComponent } from 'expo';
import App from './src/App';
import {Provider} from "react-redux";
import store from "./src/store/store";
import React from 'react';

const Application = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

registerRootComponent(Application);
