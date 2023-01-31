import * as React from "react";
import "../../styles/Appbar.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Button,
  Slide,
  Typography,
} from "@mui/material";
import {
  Menu,
  Home,
  Dining,
  ShoppingCart,
  LocalMall,
  ContactPage,
  Diversity1,
} from "@mui/icons-material";

const drawerWidth = "70%";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      backgroundColor: "transparent !important",
      padding: "3vh 0 !important",
    },
    appbarLinks: {
      fontSize: "15px !important",
      fontFamily: "Marcellus !important",
      color: "white !important",
      letterSpacing: "2px !important",
      lineHeight: "23px !important",
      fontWeight: 400,
      textDecoration: "none !important",
      transition: "all 0.3s !important",
      position: "relative !important",
      padding: "10px 0 !important",
      minWidth: "auto !important",
    },
    appbarToggle: {
      position: "fixed !important",
      top: "1% !important",
      right: "-2% !important",
      backgroundColor: "rgba(0, 0, 0, 0.8) !important",
      borderRadius: "4px !important",
      padding: "10px !important",
      zIndex: 100,
    },
    logo: {
      maxWidth: 100,
      marginRight: "10px",
    },
    drawerLogo: {
      width: "100% !important",
      padding: "50px !important",
    },
    drawerListItem: {
      padding: "0 !important",
    },
    drawerIcons: {
      color: "#1e1e1e !important",
      minWidth: "0 !important",
    },
    drawerText: {
      fontSize: "18px !important",
      fontFamily: "Marcellus !important",
    },
    divider: {
      border: "1px solid #656565 !important",
      width: "90%",
      margin: "10px auto !important",
    },
  })
);

//Hide drawer toggle icon on scroll
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function DrawerAppBar(props: Props) {
  // Custom CSS
  const classes = useStyles();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Handle Toggle Button
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem className={classes.drawerListItem}>
          <NavLink to="/" className="drawer-logo-link ">
            <img
              src="/images/logo-dark.png"
              className={classes.drawerLogo}
              alt="drawer-logo"
            />
          </NavLink>
        </ListItem>

        <Divider className={classes.divider} />

        <ListItem className={classes.drawerListItem}>
          <NavLink to="/" className="drawer-link">
            <ListItemIcon className={classes.drawerIcons}>
              <Home />
            </ListItemIcon>
            <ListItemButton sx={{ textAlign: "left" }} className="appbar-links">
              <ListItemText
                primary="Home"
                classes={{ primary: classes.drawerText }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem className={classes.drawerListItem}>
          <NavLink to="/about" className="drawer-link">
            <ListItemIcon className={classes.drawerIcons}>
              <Diversity1 />
            </ListItemIcon>
            <ListItemButton sx={{ textAlign: "left" }} className="appbar-links">
              <ListItemText
                primary="About Us"
                classes={{ primary: classes.drawerText }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem className={classes.drawerListItem}>
          <NavLink to="/menu" className="drawer-link">
            <ListItemIcon className={classes.drawerIcons}>
              <Dining />
            </ListItemIcon>
            <ListItemButton sx={{ textAlign: "left" }} className="appbar-links">
              <ListItemText
                primary="Menu"
                classes={{ primary: classes.drawerText }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem className={classes.drawerListItem}>
          <NavLink to="/contact" className="drawer-link">
            <ListItemIcon className={classes.drawerIcons}>
              <ContactPage />
            </ListItemIcon>
            <ListItemButton sx={{ textAlign: "left" }} className="appbar-links">
              <ListItemText
                primary="Contact"
                classes={{ primary: classes.drawerText }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem className={classes.drawerListItem}>
          <NavLink to="/shop" className="drawer-link">
            <ListItemIcon className={classes.drawerIcons}>
              <LocalMall />
            </ListItemIcon>
            <ListItemButton>
              <ListItemText
                primary="Shop"
                classes={{ primary: classes.drawerText }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>

      <Divider className={classes.divider} />

      <ListItem className={classes.drawerListItem}>
        <NavLink to="/cart" className="drawer-link">
          <ListItemIcon className={classes.drawerIcons}>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemButton>
            <ListItemText
              primary="Cart"
              classes={{ primary: classes.drawerText }}
            />
          </ListItemButton>
        </NavLink>
      </ListItem>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="appbar">
      <Box sx={{ display: "flex" }}>
        <AppBar position="static" component="nav" className={classes.appbar}>
          <Toolbar>
            <HideOnScroll {...props}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { xs: "block", sm: "block", md: "none" },
                }}
                className={classes.appbarToggle}
              >
                <Menu />
              </IconButton>
            </HideOnScroll>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
            >
              <img
                src="/images/brand-logo.png"
                alt=""
                className={classes.logo}
              />
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <NavLink to="/" className="appbar-link">
                <Button sx={{ color: "#fff" }} className={classes.appbarLinks}>
                  HOME
                </Button>
              </NavLink>

              <NavLink to="/about" className="appbar-link">
                <Button sx={{ color: "#fff" }} className={classes.appbarLinks}>
                  ABOUT US
                </Button>
              </NavLink>

              <NavLink to="/menu" className="appbar-link">
                <Button sx={{ color: "#fff" }} className={classes.appbarLinks}>
                  MENU
                </Button>
              </NavLink>

              <NavLink to="/contact" className="appbar-link">
                <Button sx={{ color: "#fff" }} className={classes.appbarLinks}>
                  CONTACT
                </Button>
              </NavLink>

              <NavLink to="/shop" className="appbar-link">
                <Button sx={{ color: "#fff" }} className={classes.appbarLinks}>
                  SHOP
                </Button>
              </NavLink>

              <NavLink to="/cart" className="appbar-cart-link">
                <Button sx={{ color: "#fff" }} className={classes.appbarLinks}>
                  <ShoppingCart />
                </Button>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundImage: `url('/images/bg-images/canvas-bg.jpeg')`,
                backgroundPosition: "right",
                backgroundSize: "cover",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}
