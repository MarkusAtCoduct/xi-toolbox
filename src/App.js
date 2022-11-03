import * as React from "react"

import "./App.css"
import MainNav from "./components/MainNav"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"

import { Routes, Route } from "react-router-dom"

import Layout from "./pages/Layout"
import Methods from "./pages/Methods"
import MethodSetCreator from "./pages/methodSetCreator"
import MyProfile from "./pages/MyProfile"
import Register from "./pages/Register"
import { StyledEngineProvider } from "@mui/material/styles"

import { DndContext } from "@dnd-kit/core"

import { useAtom } from "jotai"

import { methodAtom } from "./atoms/methodAtom"
import { phaseAtom } from "./atoms/phaseAtom"
import { activeAtom } from "./atoms/activeAtom"
import { arrayMove} from "@dnd-kit/sortable"
import { 
	PointerSensor,
	useSensor,
	useSensors} from '@dnd-kit/core';

import Footer from "./components/Footer"
import Home from "./pages/Home"
import { phaseAccordionAtom } from "./atoms/phaseAccordionAtom"


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
	const [methods, setMethods] = useAtom(methodAtom)
	const [phaseItems, setPhaseItems] = useAtom(phaseAtom)
	const [activeId, setActiveId] = useAtom(activeAtom)
	const [expanded] = useAtom(phaseAccordionAtom);




	
	const handleDragEnd = (data) => {
		const { over, active } = data

		if(!over){
			return
		}
		const Index = methods.findIndex(({id}) => id === active.id);
		const test = phaseItems.findIndex(({id}) => id === active.id);
		const newIndex = phaseItems.findIndex(({id}) => id === over.id);

		 if(active.data.current?.sortable){
			setPhaseItems(arrayMove(phaseItems, test, newIndex))
		 }
		else if(methods[Index].container != over?.id){
			var tmp = {...methods[Index]}
			const tmpItems = [...phaseItems]

			if(tmp.type === "methodset"){
				tmp.methods.forEach(element => {
					element.id = String(Math.random())
					element.container = expanded
				});
				tmpItems.push(...tmp.methods) 
				setPhaseItems(tmpItems)
				

			}else{
				tmp.id = String(Math.random())
				tmp.container = expanded
				tmpItems.push(tmp) 
		
				setPhaseItems(tmpItems)
			}
			console.log("Items: ",phaseItems)
			
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
        distance: 8,
      }
    }),
  );

	return (
		<ThemeProvider theme={theme}>
			<DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
				<StyledEngineProvider injectFirst>
					<div className='App'>
						<MainNav />

						<Routes>
							<Route path='/' element={<Layout />}>
								<Route path='/home' element={<Home />}/>
								<Route path='/methods' element={<Methods />} />
								<Route path='/createSet' element={<MethodSetCreator />} />
								<Route path='/myProfile' element={<MyProfile />} />
								<Route path='/Register' element={<Register />} />
								{/*

						 <Route path="contact" element={<Contact />} />
          				<Route path="*" element={<NoPage />} />
  						*/}
							</Route>
						</Routes>
						<Footer/>
					</div>
				</StyledEngineProvider>
			</DndContext>
		</ThemeProvider>
	)
}

export default App
