import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function Navbar() {
  const useStyles = makeStyles({
    nav: {
      backgroundColor: "red"
    },
    link: {
      color: "white",
      textDecoration: "none"
    }
  });

  const classes = useStyles();

  return (
    <AppBar className={classes.nav} position='fixed'>
      <Toolbar>
        <Typography>Fitness Tracker</Typography>
        <Tabs>
          <Link className={classes.link} to='/'>
            <Tab label="Workouts" />
          </Link>
          <Link className={classes.link} to='/create'>
            <Tab label="Add Workout" />
          </Link>
          <Link className={classes.link} to='/user'>
            <Tab label="Create User" />
          </Link>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
