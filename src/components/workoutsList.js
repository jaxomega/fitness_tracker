import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import axios from 'axios';
export default class workoutsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: []
    };
    this.deleteWorkouts = this.deleteWorkout.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/workouts")
      .then(res => {
        this.setState({ workouts: res.data });
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  deleteWorkout(id) {
    console.log(id);
    axios
      .delete(`http://localhost:5000/workouts/${id}`)
      .then(res => console.log(res.data));
    this.setState({
      workouts: this.state.workouts.filter(el => el._id !== id)
    });
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Workouts</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.workouts.map(workout => {
            return (
              <TableRow>
                <TableCell>{workout.username}</TableCell>
                <TableCell>[workout.workout]</TableCell>
                <TableCell>{workout.duration}</TableCell>
                <TableCell>{workout.date.substring(0, 10)}</TableCell>
                <TableCell>{workout.description}</TableCell>
                <TableCell>
                  <Link
                    to={"/edit/" + workout._id}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="outlined" style={{ margin: "10px" }}>
                      Edit
                    </Button>
                  </Link>
                  <Button onClick={() => this.deleteWorkout(workout._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}
