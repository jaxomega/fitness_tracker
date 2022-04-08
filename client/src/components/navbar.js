import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar className={classes.nav} position='fixed'>
      <Toolbar>
        <Typography>Fitness Tracker</Typography>
        <Tabs>
          <Link className={classes.link} to='/'>
            <Tab label="Workouts" />
          </Link>
          <Link className={classes.link} to=''>
            <Tab label="Add Workout" />
          </Link>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
