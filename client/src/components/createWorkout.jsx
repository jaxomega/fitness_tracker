function newWorkout() {
  ("#productTable tbody").append("<tr>" + 
      "<td></td>" +
      "<td></td>" +
      "<td></td>" +
      "</tr>");
}
const createWorkout = ({ newWorkout, handleInputChange, createWorkout }) => {
      return (
      <div className="form-container">
        <h2>Workout</h2>
        <form onSubmit={createWorkout}>
          <div className="form-field">
            <label><b>Workout</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Workout..." value={newWorkout.text} required />
          </div>
          <div className="form-field">
            <label><b>Duration</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Duration..." value={newWorkout.text} required />
          </div>
          <div className="form-field">
            <label><b>Description</b>:</label>
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
