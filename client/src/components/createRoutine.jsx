function newRoutine() {
  ("#productTable tbody").append("<tr>" + 
      "<td></td>" +
      "<td></td>" +
      "<td></td>" +
      "</tr>");
}
const createRoutine = ({ createRoutine, handleInputChange, newRoutine }) => {
      return (
      <div className="form-container">
        <h2>Routine</h2>
        <form onSubmit={createRoutine}>
          <div className="form-field">
            <label><b>Workout</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Workout..." value={newRoutine.text} required />
          </div>
          <div className="form-field">
            <label><b>Duration</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Duration..." value={newRoutine.text} required />
          </div>
          <div className="form-field">
            <label><b>Description</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Description..." value={newRoutine.text} required />
          </div>
          <div className="button-wrapper">
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
  
  export default createRoutine
