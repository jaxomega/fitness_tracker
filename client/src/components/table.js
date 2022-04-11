import React from 'react'
import { Link } from 'react-router-dom'
import updateRoutine from './updateRoutine'
import axios from 'axios'

const Table = () => {
    return (
        <div>
            <nav className='table'>
            <h4>Routine Table</h4>
            <div>
                <Link to="/"></Link>
                <Link to="update"></Link>
                <Link to ="create"></Link>
                <Link to ="details"></Link>
                <Link to ="list"></Link>
            </div>
            </nav>
            <h2>Routine</h2>
                <table>
                    <thead>
                    <tr>
                    <th>Workout</th>
                    </tr>
                    <tr>
                    <th>Duration</th>
                    </tr>
                    <tr>
                    <th>Description</th>
                    </tr>
                    </thead>
                        <tr id="row">
                          <td><input type="text" id="workout" /></td>
                          <td><input type="text" id="duration" /></td>
                          <td><input type="text" id="description" /></td>
                          <td>
                          <input type="button" id="edit1" value="Edit" className="edit" onClick={updateRoutine('1')} />
                          <input type="button" id="save1" value="Save" className="save" onClick="details('1')" />
                          <input type="button" value="Delete" className="delete" onClick="delete('1')" />
                          </td>
                        </tr>
                        <tr id="row">
                          <td><input type="text" id="workout" /></td>
                          <td><input type="text" id="duration" /></td>
                          <td><input type="text" id="description" /></td>
                          <td>
                          <input type="button" id="edit2" value="Edit" className="edit" onClick="update('2')" />
                          <input type="button" id="save2" value="Save" className="save" onClick="details('2')" />
                          <input type="button" value="Delete" className="delete" onClick="delete('2')" />
                          </td>
                        </tr>
                        <tr id="row">
                          <td><input type="text" id="workout" /></td>
                          <td><input type="text" id="duration" /></td>
                          <td><input type="text" id="description" /></td>
                          <td>
                          <input type="button" id="edit3" value="Edit" className="edit" onClick="update('3')" />
                          <input type="button" id="save3" value="Save" className="save" onClick="details('3')" />
                          <input type="button" value="Delete" className="delete" onClick="delete('3')" />
                          </td>
                          <td>
                          <input type="button" className="add" value="Add Row" onClick="create" />
                          </td>
                        </tr>
                </table>
        </div>
    )
}

export default Table