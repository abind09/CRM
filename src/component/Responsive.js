import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./features/user/userSice";

function ResponsiveAppBar() {
  const userToken = useSelector((state) => state.user.email);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (userToken) {
      setOpen(false);
    }
  }, [userToken]);

  function logout() {
    dispatch(
      login({
        email: "",
        password: "",
      })
    );
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", color: "white" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to={"/"}>
                    <Button sx={{ color: "black" }}>Live</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/teams">
                    <Button sx={{ color: "black" }}>Teams</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/ranking">
                    <Button sx={{ color: "black" }}>Ranking</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/schedule">
                    <Button sx={{ color: "black" }}>Upcoming</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/blogs">
                    <Button sx={{ color: "black" }}>Blogs</Button>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              <Link to={"/"}>
                <Button sx={{ my: 2, ml: 50, color: "white" }}>Live</Button>
              </Link>

              <Link to="/teams">
                <Button sx={{ my: 2, ml: 2, color: "white" }}>Teams</Button>
              </Link>
              <Link to="/ranking">
                {" "}
                <Button sx={{ my: 2, ml: 2, color: "white" }}>Ranking</Button>
              </Link>
              <Link to="/schedule">
                <Button
                  sx={{
                    my: 2,
                    ml: 2,
                    color: "white",
                  }}
                >
                  Upcoming
                </Button>
              </Link>
              <Link to="/blogs">
                {" "}
                <Button sx={{ my: 2, ml: 2, color: "white" }}>Blogs</Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {!userToken ? (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleClickOpen}>
                        Login
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={logout}>
                        Logout
                      </Typography>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Sign in to your account"}
        </DialogTitle>
        <Signup />
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default ResponsiveAppBar;
