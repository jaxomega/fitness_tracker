const createWorkout = ({ newWorkout, handleInputChange, createWorkout }) => {
    return (
      <div className="form-container">
        <h2>Workout</h2>
        <form onSubmit={createWorkout}>
          <div className="form-field">
            <label><b>User</b>:</label>
            <input name="user" type="text" onChange={handleInputChange} placeholder="Enter user name..." value={newWorkout.user} required />
          </div>
          <div className="form-field">
            <label><b>Workout Description</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Description..." value={newWorkout.text} required />
          </div>
          <div className="button-wrapper">
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
  
  export default createWorkout