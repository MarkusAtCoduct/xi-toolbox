import * as React from "react"

import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material/styles"
import { useEffect, useState } from "react"
import "./App.css"
import MainNav from "./components/NavComponents/MainNav"

import { Navigate, Route, Routes } from "react-router-dom"

import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { StyledEngineProvider } from "@mui/material/styles"
import { useAtom } from "jotai"
import uuid from "react-uuid"

import { activeAtom } from "./atoms/activeAtom"
import { dragDisableAtom } from "./atoms/dragDisableAtom"
import { methodAtom } from "./atoms/methodAtom"
import { phaseAccordionAtom } from "./atoms/phaseAccordionAtom"
import { phaseAtom } from "./atoms/phaseAtom"
import { recommendedMethodAtom } from "./atoms/recommendedMethodAtom"
import { userAtom } from "./atoms/userAtom"

import { isLoggedIn, refreshToken } from "../src/services/authApi"
import { outputAtom } from "./atoms/outputAtom"
import { queryAtom } from "./atoms/queryAtom"
import About from "./pages/About"
import EditProfile from "./pages/EditProfile"
import Home from "./pages/Home"
import HowItWorks from "./pages/HowItWorks"
import MethodCreator from "./pages/MethodCreator"
import MethodDetails from "./pages/MethodDetails"
import MethodEdit from "./pages/MethodEdit"
import MethodSetCreate from "./pages/MethodSetCreate"
import MethodSetCreator from "./pages/methodSetCreator"
import MyProfile from "./pages/MyProfile"
import Register from "./pages/Register"
import ResetPassword from "./pages/ResetPassword"
import UserProfile from "./pages/UserProfile"
import { GetContent, GetUserDetails } from "./services/Api"

const theme = createTheme({
	typography: {
		fontFamily: ["Roboto", "sans-serif"].join(","),
	},
	palette: {
		primary: {
			main: "#00afc8",
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
	const [currentOutput, setCurrentOutput] = useAtom(outputAtom)

	useEffect(() => {
		if (isLoggedIn()) {
			setLoading(true)
			refreshToken()
				.then(() => {
					return GetUserDetails()
				})
				.then((res) => {
					setDragDisable(false)
					setUser(res)
				})
				.catch((err) => {
					setDragDisable(true)
					console.log("refresh token out of date")
				})
				.then(() => setLoading(false))
		} else {
			setLoading(false)
		}
	}, [])

	const handleDragEnd = (data) => {
		const { over, active } = data

		var Index = methods.findIndex(({ id }) => id === active.id)
		var test = phaseItems.findIndex(({ id }) => id === active.id)
		var newIndex = phaseItems.findIndex(({ id }) => id === over.id)

		var tmpItems = [...phaseItems]

		if (String(active.id).includes("recommendedMethodContainer")) {
			const IndexRec = recommendedMethods.data.findIndex(({ id }) => id == active.id.split("-")[0])
			var tmp = { ...recommendedMethods.data[IndexRec] }
		} else {
			var tmp = { ...methods[Index] }
		}
		if (active.data.current?.sortable) {
			setPhaseItems(arrayMove(phaseItems, test, newIndex))
			handleGetRecommendedMethods(arrayMove(phaseItems, test, newIndex)[arrayMove(phaseItems, test, newIndex).length - 1].output[0])
		} else if (String(over.id).includes("phasedrop")) {
			//what happens when you drag a method from the method list to the phase list
			if (tmp.isMethodSet) {
				//if the method is a method set, we need to create a new id for each method in the set
				tmp.simpleUsedMethods.forEach((element) => {
					 GetContent(`/api/method/${element.id}`).then((res) => {
						element.output = []
						element.output.push(res.data.output[0])
						element.input = []
						element.input.push(res.data.input[0])
						element.prevId = element.id
						element.id = uuid()
						element.container = expanded
					})
				})

				console.table(tmp.simpleUsedMethods)
				//add the method set to the phase list
				tmp.simpleUsedMethods.forEach((element) => {
					tmpItems.push(element)
					setPhaseItems(tmpItems)
				})
				//tmpItems.push(tmp.simpleUsedMethods)
				//set the phase items to the temp items



				//set temp items to the phase items

				//console.table(tmpItems)
				//setPhaseItems(tmpItems)
				//we then push the method set and all of its methods into the phase list
			/* 	tmpItems.push(...tmp.simpleUsedMethods)
				setPhaseItems(tmpItems) */
			} else {
				//if the method is not a method set, we just need to create a new id for the method
				tmp.prevId = tmp.id
				tmp.id = uuid()
				tmp.container = expanded
				tmpItems.push(tmp)
				console.table(tmp)
				if (tmp.output[0]) {
					console.table("OUTPUT: ", tmp.output[0])
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

		console.log("String :", outputString)
		setCurrentOutput(outputString)

/* 		GetContent(
			`/api/method/search?label=${outputString}&pageIndex=0&pageSize=500&sortBy=${query.sortBy}&sortDirection=${query.sortDirection}&includeMethods=${query.includeMethods}&includeMethodSets=false`,
		).then((response) => {
			var temp = response.data.filter((method) => method.input[0] === output)
			temp.forEach((element) => {
				console.log(element)
				element.container = "recommendedMethodContainer"
				element.type = "method"
			})
			setRecommendedMethods(temp)
			setLoading(false)
		}) */
	}

	const handleDragStart = (event) => {
		const { active } = event

		if (String(active.id).includes("recommendedMethodContainer")) {
			active.id = Number(active.id.split("-")[0])
		}

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
							<Route path='/EditMethod/:methodId' element={<MethodEdit />} />
							<Route path='/MethodDetails/:methodId' element={<MethodDetails />} />
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
