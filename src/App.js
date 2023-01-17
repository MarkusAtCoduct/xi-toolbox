import * as React from "react"

import { useEffect, useState } from "react"
import "./App.css"
import MainNav from "./components/MainNav"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"

import { Routes, Route, Navigate } from "react-router-dom"

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
import { userAtom } from "./atoms/userAtom"
import { arrayMove } from "@dnd-kit/sortable"
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core"

import Home from "./pages/Home"
import { phaseAccordionAtom } from "./atoms/phaseAccordionAtom"
import { dragDisableAtom } from "./atoms/dragDisableAtom"
import MethodCreator from "./pages/MethodCreator"
import EditProfile from "./pages/EditProfile"
import UserProfile from "./pages/UserProfile"
import { isLoggedIn, refreshToken } from "../src/services/authApi"

import uuid from "react-uuid"
import { GetUserDetails } from "./services/Api"
import ResetPassword from "./pages/ResetPassword"
import HowItWorks from "./pages/HowItWorks"
import About from "./pages/About"
import { queryAtom } from "./atoms/queryAtom"
import { GetContent } from "./services/Api"

const theme = createTheme({
	typography: {
		fontFamily: ["Roboto", "sans-serif"].join(","),
	},
	palette: {
		primary: {
			main: "#00afc8",
			//main: "#00afc8",
			contrastText: "#fff",
		},
		secondary: {
			main: "#c8d213",
			contrastText: "#fff",
		},
		neutral: {
			main: "#fff",
			contrastText: "#00afc8",
		},
		black: {
			main: "#000",
			contrastText: "#00afc8",
		},
	},
})


function App() {
	const [methods] = useAtom(methodAtom)
	const [recommendedMethods, setRecommendedMethods] = useAtom(recommendedMethodAtom)
	const [phaseItems, setPhaseItems] = useAtom(phaseAtom)
	const [activeId, setActiveId] = useAtom(activeAtom)
	const [expanded] = useAtom(phaseAccordionAtom)
	const [user, setUser] = useAtom(userAtom)
	const [loading, setLoading] = useState(false)
	const [query, setQuery] = useAtom(queryAtom)
	const [dragDisable, setDragDisable] = useAtom(dragDisableAtom)

	useEffect(() => {
		if (isLoggedIn()) {
			setLoading(true)
			refreshToken()
				.then(() => {
					return GetUserDetails()
				})
				.then((res) => {
					setDragDisable(false)
					setUser(res)})
				.catch((err) => {
					setDragDisable(true)
					console.log("refresh token out of date")})
				.then(() => setLoading(false))
		}
	}, [])

	const handleDragEnd = (data) => {
		const { over, active } = data
		console.log(active)
		console.log(over)
		if (!over || over.id === "AllMethodsContainer") {
			return
		}
		const Index = methods.findIndex(({ id }) => id === active.id)
		const test = phaseItems.findIndex(({ id }) => id === active.id)
		const newIndex = phaseItems.findIndex(({ id }) => id === over.id)

		const tmp = { ...methods[Index] }
		const tmpItems = [...phaseItems]

		if (active.data.current?.sortable) {
			//what happens when you reorder the phase items
			setPhaseItems(arrayMove(phaseItems, test, newIndex))
		} else if (methods[Index]?.container != over?.id || recommendedMethods[Index]?.container != over?.id) {
			//what happens when you drag a method from the method list to the phase list
			if (tmp.isMethodSet) {
				//if the method is a method set, we need to create a new id for each method in the set
				tmp.simpleUsedMethods.forEach((element) => {
					element.prevId = element.id
					element.id = uuid()
					element.container = expanded
				})
				//we then push the method set and all of its methods into the phase list
				tmpItems.push(...tmp.simpleUsedMethods)
				setPhaseItems(tmpItems)
			} else {
				//if the method is not a method set, we just need to create a new id for the method
				tmp.prevId = tmp.id
				tmp.id = uuid()
				tmp.container = expanded
				tmpItems.push(tmp)
				if(tmp.output[0]){
				console.table(tmp.output[0])
				handleGetRecommendedMethods(tmp.output[0])
				}
				setPhaseItems(tmpItems)
			}
		}
		setActiveId(null)
	}


	const handleGetRecommendedMethods = (output) => {

		var outputString = output.toString()
		outputString = outputString.replace(/,/g, " ")
		

		console.log(outputString)

		GetContent(
			`/api/method/search?label=${outputString}&pageIndex=0&pageSize=500&sortBy=${query.sortBy}&sortDirection=${
				query.sortDirection
			}&includeMethods=${query.includeMethods}&includeMethodSets=${query.includeMethodSets}`,
		).then((response) => {
			console.log(response.data)
			console.log(output)


			var temp = response.data.filter((method) => method.input[0] === output)
		

			temp.forEach((element) => {
				element.container = "recommendedMethodContainer"
				element.type = "method"
			})
			setRecommendedMethods(temp)
			console.log(temp)
			setLoading(false)
		})
	}

	const handleDragStart = (event) => {
		const { active } = event
		setActiveId(active.id)
	}

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 4,
			},
		}),
	)

	return (
		<ThemeProvider theme={theme}>
			<DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
				<StyledEngineProvider injectFirst>
					<div className='App'>
						<MainNav />
						<Routes>
							<Route path='/' element={<Navigate to='/home' />} />
							<Route path='/home' element={<Home />} />
							<Route path='/createMethod' element={<MethodCreator />} />
							<Route path='/createSet' element={<MethodSetCreator />} />
							<Route path='/myProfile' element={<MyProfile />} />
							<Route path='/Profile/:userId' element={<UserProfile />} />

							<Route path='/createMethodSet' element={<MethodSetCreate />} />
							<Route path='/Register' element={<Register />} />
							<Route path='/editProfile' element={<EditProfile />} />
							<Route path='/reset-password/:token' element={<ResetPassword />} />
							<Route path='/HowItWorks' element={<HowItWorks />} />
							<Route path='/Imprint' element={<About />} />
						</Routes>
					</div>
				</StyledEngineProvider>
			</DndContext>
		</ThemeProvider>
	)
}

export default App
