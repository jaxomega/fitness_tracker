import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Navbar from './components/navbar';
import workoutList from './components/workoutsList';
import editWorkout from './components/editWorkout';
import createWorkout from './components/createWorkout';
import createUser from './components/createUser';

export default function App() {
  const useStyles = makeStyles({
    main: {
      marginTop: "85px",
      padding: "20px",
      height: "60vh"
    }
  });

  const classes = useStyles();

  return (
    <Router>
      <Navbar />
      <Container>
        <Paper className={classes.main} square>
          <Route path='/' exact component={workoutList} />
          <Route path='/edit/:id' component={editWorkout} />
          <Route path='/create' component={createWorkout} />
          <Route path='/user' component={createUser} />
        </Paper>
      </Container>
    </Router>
  );
}
