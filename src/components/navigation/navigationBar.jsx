import * as React from "react";
import { Button, AppBar, Stack, Tab, Tabs} from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { tabAtom, userAtom } from "../../atoms/atomDefinitions";
//import Login from "../login";
//import AccountMenu from "../ProfileComponents/AccountMenu";

import logo from "../../assets/logo.png";

function LinkTab(props) {
  return (
    <Tab
      sx={{fontWeight: "bold" }}
      component={Link}
      to={props.path || "/"}
      {...props}
    />
  );
}

export default function NavigationBar(props) {
  const [tab, setTab] = useAtom(tabAtom);
  const [value, setValue] = React.useState(false);
  const [user] = useAtom(userAtom);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <React.Fragment>
      <AppBar position="fixed" color="neutral" elevation={0}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
            pl={4}
            pr={4}
          >
            <img src={logo} alt="logo" style={{ width: "200px" }} />

            <Tabs value={tab} onChange={handleChange}>
              <LinkTab label="Home" path="/home" />
              <LinkTab label="Methods Library" path="/createSet" />
              <LinkTab label="How it works" path="/HowItWorks" />
              <LinkTab label="Imprint" path="/Imprint" />
          {/*     {user ? <LinkTab label="My Profile" path="/myProfile" /> : null} */}
            </Tabs>
            <Stack direction="row" spacing={2} alignItems="center">
              {!user ? (
                <>
                {/*   <Login /> */}
                  <Button
                    variant="contained"
                    href="/register"
                    sx={{ borderRadius: "16px", width: "100%" }}
                    disableElevation
                  >
                    Register
                  </Button>
                </>
              ) : (
                {/* <AccountMenu /> */}
              )}
            </Stack>
          </Stack>
        </Container> 
      </AppBar>
      <Offset style={{ minHeight: "56px" }} />
    </React.Fragment>
  );
}
