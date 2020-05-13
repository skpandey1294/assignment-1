import React from 'react';

import './navbar.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

import styles from './style.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Button color="inherit">
          <Link to="/users" className="link" style={styles._bgColor}>Users
          </Link>
          </Button>
          
          <Button color="inherit">
          <Link to="/" className="link" style={styles._bgColor}>
          Posts
          </Link>
          </Button>

          <Button color="inherit">
          <Link to="/albums" className="link" style={styles._bgColor}>
          Albums
          </Link>
          </Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default Navbar