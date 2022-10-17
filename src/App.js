import * as React from "react";
import { useState, useCallback } from "react";


import "./App.css";
import MainNav from "./components/MainNav";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";


import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Methods from "./pages/Methods"
import MethodSetCreator from "./pages/methodSetCreator";
import MyProfile from "./pages/MyProfile";
import Register from "./pages/Register";
import { StyledEngineProvider } from '@mui/material/styles';


import { DragDropContext } from 'react-beautiful-dnd';


const theme = createTheme({
	typography: {
		fontFamily: ["Roboto", "sans-serif"].join(","),
	},

	palette: {
		primary: {
			main: "#FF5454",
			contrastText: "#fff",
		},
		secondary: {
			main: "#f44336",
			contrastText: "#fff",
		},
		neutral: {
			main: "#fff",
			contrastText: "#FF5454",
		},
		black: {
			main: "#000",
			contrastText: "#FF5454",
		},
	},
});

function App() {

  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);


	return (
		
		<ThemeProvider theme={theme}>
			  <DragDropContext
  onBeforeCapture={onBeforeCapture}
  onBeforeDragStart={onBeforeDragStart}
  onDragStart={onDragStart}
  onDragUpdate={onDragUpdate}
  onDragEnd={onDragEnd}
  >
			<StyledEngineProvider injectFirst>
			<div className="App">
				<MainNav />

				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/methods" element={<Methods />} />
						<Route path="/createSet" element={<MethodSetCreator />} />
						<Route path="/myProfile" element={<MyProfile />} />
						<Route path="/Register" element={<Register />} />
						{/*

						 <Route path="contact" element={<Contact />} />
          				<Route path="*" element={<NoPage />} />
  						*/}
					</Route>
				</Routes>
			</div>
			</StyledEngineProvider>
			</DragDropContext>
		</ThemeProvider>
	);
}

export default App;
