import * as React from "react"

import { useEffect, useState } from "react"
import "./App.css"
import MainNav from "./components/MainNav"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"

import { Routes, Route, Navigate} from "react-router-dom"

import MethodSetCreator from "./pages/methodSetCreator"
import MethodSetCreate from "./pages/MethodSetCreate"
import MyProfile from "./pages/MyProfile"
import Register from "./pages/Register"
import { StyledEngineProvider } from "@mui/material/styles"

import { DndContext } from "@dnd-kit/core"

import { useAtom } from "jotai"

import { methodAtom } from "./atoms/methodAtom"
import { recommendedMethodAtom } from "./atoms/recommendedMethodAtom"
import { phaseAtom } from "./atoms/phaseAtom"
import { activeAtom } from "./atoms/activeAtom"
import {userAtom} from "./atoms/userAtom"
import { arrayMove} from "@dnd-kit/sortable"
import { 
	PointerSensor,
	useSensor,
	useSensors} from '@dnd-kit/core';

import Footer from "./components/Footer"
import Home from "./pages/Home"
import { phaseAccordionAtom } from "./atoms/phaseAccordionAtom"
import MethodCreator from "./pages/MethodCreator"
import EditProfile from "./pages/EditProfile"
import { isLoggedIn, refreshToken } from "../src/services/authApi"

import uuid from 'react-uuid';
import { GetUserDetails } from "./services/Api";
import { CircularProgress } from "@mui/material"


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
})




function App() {
	const [methods] = useAtom(methodAtom)
	const [recommendedMethods] = useAtom(recommendedMethodAtom)
	const [phaseItems, setPhaseItems] = useAtom(phaseAtom)
	const [activeId, setActiveId] = useAtom(activeAtom)
	const [expanded] = useAtom(phaseAccordionAtom);
	const [user, setUser] = useAtom(userAtom);
	const [loading, setLoading] = useState(false);


	useEffect(() => {	
		if (isLoggedIn()) {
			setLoading(true)
			refreshToken().then(() => {return GetUserDetails()})
			.then((res)=> setUser(res))
			.catch((err) => console.log("refresh token out of date"))
			.then(() => setLoading(false))
		}
	}, [])




	
	const handleDragEnd = (data) => {
		const { over, active } = data
		console.log(active)
		console.log(over)
		if(!over || over.id === "allMethodsContainer"){
			return
		}
		const Index = methods.findIndex(({id}) => id === active.id);
		const test = phaseItems.findIndex(({id}) => id === active.id);
		const newIndex = phaseItems.findIndex(({id}) => id === over.id);


		const tmp = {...methods[Index]}
		const tmpItems = [...phaseItems]
		
		 if(active.data.current?.sortable){
			setPhaseItems(arrayMove(phaseItems, test, newIndex))
		 }
		else if(methods[Index]?.container != over?.id || recommendedMethods[Index]?.container != over?.id){
			if(tmp.isMethodSet){
					tmp.simpleUsedMethods.forEach(element => {

					element.prevId = element.id

					element.id = uuid()
					element.container = expanded
				});
				tmpItems.push(...tmp.simpleUsedMethods) 
				setPhaseItems(tmpItems)
			}else{
				tmp.prevId = tmp.id
				tmp.id = uuid()
				tmp.container = expanded
				tmpItems.push(tmp) 
				setPhaseItems(tmpItems)
			}
		}
		setActiveId(null)
	}

	const handleDragStart = (event) => {
		const { active } = event
		setActiveId(active.id)
	}



const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 4,
      }
    }),
  );

	return (
		
		
		<ThemeProvider theme={theme}>
			<DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
				<StyledEngineProvider injectFirst>
					<div className='App'>
						<MainNav />

		{loading ? <div> <CircularProgress></CircularProgress></div> :
						<Routes>
								<Route path='/' element={<Navigate to="/home" />}/>
								<Route path='/home' element={<Home/>}/>
								<Route path='/createMethod' element={<MethodCreator />} />
								<Route path='/createSet' element={<MethodSetCreator />} />
								<Route path='/myProfile' element={<MyProfile />} />
								<Route path='/createMethodSet' element={<MethodSetCreate />} />
								<Route path='/Register' element={<Register />} />
								<Route path='/editProfile' element={<EditProfile />} />
								{/*

						 <Route path="contact" element={<Contact />} />
          				<Route path="*" element={<NoPage />} />
  						*/}
							
						</Routes>
}
						<Footer/>
					</div>
				</StyledEngineProvider>
			</DndContext>
		</ThemeProvider>
	)
}

export default App
