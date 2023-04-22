import { useState } from "react";
import NavigationBar from "./components/navigation/NavigationBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./materialUiTheme/theme";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Imprint from "./pages/Imprint";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavigationBar />
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Imprint" element={<Imprint />} />
            <Route path='/Register' element={<Register />} />
            {/* <Route path='/createMethod' element={<MethodCreator />} />
							<Route path='/createSet' element={<MethodSetCreator />} />
							<Route path='/myProfile' element={<MyProfile />} />
							<Route path='/Profile/:userId' element={<UserProfile />} />
							<Route path='/createMethodSet' element={<MethodSetCreate />} />
							<Route path='/EditMethod/:methodId' element={<MethodEdit />} />
							<Route path='/MethodDetails/:methodId' element={<MethodDetails />} />
							<Route path='/editProfile' element={<EditProfile />} />
							<Route path='/reset-password/:token' element={<ResetPassword />} />
							<Route path='/HowItWorks' element={<HowItWorks />} /> */}
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
