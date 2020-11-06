import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppbarContent from '../../components/appBar'
import Home from './home'
import Datos from './datos'
import Productos from './productos'
import { Scrollbars } from 'react-custom-scrollbars';
import { BrowserRouter as Router, Switch, Route, Link ,useHistory} from "react-router-dom";
import { useLocation } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    //marginLeft: drawerWidth,
    //width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
     display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    
    alignItems: 'center',
    justifyContent: 'flex-end',
   
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  
}));

export default function MiniDrawer() {
  let location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [path, setPath] = React.useState("");
  const history = useHistory();
  const handleDrawerOpenHandler=(value)=>{
    setOpen(value);
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    setPath(location.pathname);
  
  }, [location,setPath]);
  const activetRoute = route => {
    console.log(path.split('/')[2],route)
    
    return path.indexOf(route) > -1 ? true : false;
  }
  const menuItems=[{label:'Home',src:"home"},{label:'Tus datos',src:"account"},
  {label:'Crea un producto',src:"product"}].map((item, index) => (  
    <ListItem 
        button 
        key={index}  
        to={item.src} 
        component={Link} 
        onClick={()=>{setPath(item.src)}}
        selected={activetRoute(item.src)}>
      <ListItemIcon >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      {item.label}
    </ListItem>
  ))
  return (
    <div className={classes.root}>
    <Router basename="/profile">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="default">
        <AppbarContent addMenuIcon={true}
           
            drawerOpen={open}    
           
            menuItems={menuItems}
        />
      </AppBar>
       <Drawer
       // anchor={"right"}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        
      >
          <Scrollbars >
 
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
        <ListItem>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>handleDrawerOpenHandler(!open)}
            edge="start"
            className={clsx(classes.menuButton, {
                //  [classes.hide]: open,
              })}
            >
            {!open?<MenuIcon />:<CloseIcon />}
            
        </IconButton>
        </ListItem>
        <Divider />
        
        
        {menuItems}
        </List>
        <Divider />
        <List>
          
          {/*['All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam','All mail', 'Trash', 'Spam',].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))*/}

        </List>
       
        </Scrollbars>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/account">
                <Datos />
            </Route>
            <Route path="/product">
                <Productos />
            </Route>
          </Switch>
      </main>
      </Router>
    </div>
  );
}
