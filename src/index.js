import React from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './css/customcss.css'
import { Suspense } from "react"
import AppLoader from './components/AppLoader';

import LinearProgress from '@mui/material/LinearProgress';
import { Box, CircularProgress } from "@mui/material"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={<AppLoader/>}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


