import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import './index.css';
import GoRestService from "./service/goRestService";
import GoRestServiceContext from "./components/goRest-service-context/goRest-service-context";
import { Provider } from "react-redux";
import store from "./store/store";


const goRestService = new GoRestService();

const app = (
    <Provider store={store}>
        <GoRestServiceContext.Provider value={goRestService}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GoRestServiceContext.Provider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

