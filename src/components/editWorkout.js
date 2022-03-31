import React, { Component } from 'react';
import {
  Typography,
  TextField,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';
import axios from 'axios';

export default class editWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      workout: " ",
      duration: " ",
      date: " ",
      description: " ",
      delete: [Button],
      users: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/workouts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          username: res.data.username,
          wortkout: res.data.workout,
          duration: res.data.duration,
          date: res.data.date,
          description: res.data.description,
          delete: [Button]
        });
      })
      .catch(err => console.log(`Error: ${err}`));

    axios.get("http://localhost:5000/users").then(res => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map(user => user.username)
        });
      }
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const workout = {
      username: this.state.username,
      workout: this.state.workout,
      duration: this.state.duration,
      date: this.state.date,
      description: this.state.description,
      delete: [Button]
    };

    axios
      .post(
        `http://localhost:5000/workouts/update/${this.props.match.params.id}`,
        workout
      )
      .then(res => console.log(res.data));

    window.location = '/';
  };

  render() {
    return (
      <React.Fragment>
        <Typography>*Edit Activity Details</Typography>
        <Divider style={{ margin: "20px 0px" }} />
        <FormControl>
          <InputLabel>User</InputLabel>
          <Select
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          >
            {this.state.users.map(user => {
              return <MenuItem value={user}>{user}</MenuItem>;
            })}
          </Select>
          <br />
        </FormControl>
        <TextField
          name="workout"
          value={this.state.workout}
          onChange={this.onChange}
          label="Workout"
          margin="normal"
        />
        <br />
        <TextField
          name="duration"
          value={this.state.duration}
          onChange={this.onChange}
          label="Duration"
          margin="normal"
        />
        <br />
        <TextField
          name="date"
          type="datetime-local"
          defaultValue={this.state.date}
          onChange={this.onChange}
          margin="normal"
        />
        <br />
        <TextField
          name="description"
          value={this.state.description}
          onChange={this.onChange}
          label="Description"
          margin="normal"
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: "20px 0px",
            backgroundColor: "#6c7b95",
            color: "white"
          }}
          onClick={this.onSubmit}
        >
          Update
        </Button>
      </React.Fragment>
    );
  }
}
