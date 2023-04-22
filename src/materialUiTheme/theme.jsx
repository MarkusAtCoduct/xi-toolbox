import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
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