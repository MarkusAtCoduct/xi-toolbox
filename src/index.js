import React from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

import { Suspense } from "react";
import App from './App';
import AppLoader from './components/misc/AppLoader';
import './css/customcss.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient({
    defaultOptions: {
    },
  })

root.render(
	<QueryClientProvider client={queryClient}>
		<Suspense fallback={<AppLoader />}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
		<ReactQueryDevtools initialIsOpen={true} />
	</QueryClientProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


