import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./features/user/userSice";
import LiveMatch from "./LiveMatch";

export default function Appbar() {
  const userToken = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  function logout() {
    dispatch(
      login({
        email: "",
        password: "",
      })
    );
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="body2" component="div" sx={{ marginRight:5, marginLeft:50 }}>
              Live Scores
            </Typography>
            <Typography variant="body2" component="div" sx={{marginRight:5}}>
              Schedule
            </Typography>
            <Typography variant="body2" component="div" sx={{ marginRight:5 }}>
              Series
            </Typography>
            <Typography variant="body2" component="div" sx={{ marginRight:5 }}>
           Teams
            </Typography>
            <Typography variant="body2" component="div" sx={{ marginRight:5 }}>
              Ranking
            </Typography>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            {!userToken ? (
              <>
                <Button color="inherit">Login</Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={logout}>
                  Logout
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <LiveMatch />
    </>
  );
}
