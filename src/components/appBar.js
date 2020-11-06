import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from '@material-ui/icons/Close';
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authLogoutAction } from "../store/actions/authAction";
import { useHistory } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  menuButton2: { textTransform: "none", height: 30, marginTop: 10 },
  grow: {
    flexGrow: 1,
  },
   root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    top: 0,
    zIndex: 100,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  inputInput: {
    bordercolor: "#000",
    borderWidth: 1,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionMobile2: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  AppBar: {
    zIndex:20000,
  },
}));

function PrimarySearchAppBar({ token, userLogout, drawerOpen,menuItems }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [menuItemsVisible,setMenuItemsVisible]=React.useState(false)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();
  const logout = () => {
    userLogout();
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuItems=()=>{

      setMenuItemsVisible(true)
  }
  const CloseMobileMenuItems=()=>{
      setTimeout(() => {
         setMenuItemsVisible(false)
      }, 1000);
     
  }
  const menuId = "primary-search-account-menu";
  const renderMenus = (
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        elevation={0}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={()=>{}}>Profile</MenuItem>
        <MenuItem onClick={()=>{}}>My account</MenuItem>
        <MenuItem onClick={()=>{}}>Logouts</MenuItem>
      </Menu>
  );
  const RenderMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />

        
  ));

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>botonn</p>
      </MenuItem>
    </Menu>
  );
  
  return (
    <div>
      
     
       
        
        <Toolbar>
         <ClickAwayListener onClickAway={CloseMobileMenuItems}>
        
        <div className={classes.sectionMobile2}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuItems}
              color="inherit"
            >
             
              {!menuItemsVisible?<MenuIcon />:<CloseIcon />}
            </IconButton>
          </div>
          </ClickAwayListener>
          {/**addMenuIcon ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={()=>handleDrawerOpen(!drawerOpen)}
              edge="start"
              className={classNameValueMenu}
            >
              {!drawerOpen?<MenuIcon />:<CloseIcon />}
             
            </IconButton>
          ) : null*/}
          {/*<Typography className={classes.title} variant="h6" noWrap>
            ValeSoft
        </Typography>*/}
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon color="#000" />
            </div>
          </div>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuButton2}
            >
              Categorías
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuButton2}
            >
              Vender
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuButton2}
            >
              <div onClick={() => history.push("/profile/account")}>Tu cuenta</div>
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuButton2}
            >
              Ayuda
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuButton2}
            >
              {!token ? (
                <div onClick={() => history.push("login")}>Login</div>
              ) : (
                <div onClick={() => logout()}>Logout</div>
              )}
            </Button>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
       
          <div className={classes.sectionMobile2}>
              {menuItems&&menuItemsVisible?menuItems:null}
          </div>
       
      {renderMobileMenu}
      <RenderMenu    
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)} 
        onClose={()=> setAnchorEl(null)}
          >

        <MenuItem onClick={()=>{}}>Profile</MenuItem>
        <MenuItem onClick={()=>{}}>My account</MenuItem>
        <MenuItem onClick={()=>{}}>Logouts</MenuItem>
        
      </RenderMenu>
    </div>
  );
}
const mapStateToProps = ({ authStorage }) => {
  return {
    token: authStorage.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: (value) => dispatch(authLogoutAction(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimarySearchAppBar);
