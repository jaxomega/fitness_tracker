import Table from './table'
import { useNavigate, useParams } from 'react-router-dom';
import Routine from '../models/routine';
import RoutineDetails from './routineDetails';
import React, { Component, useEffect } from 'react';
import axios from 'axios';
import deleteRoutine from './deleteRoutine';

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("workout").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("duration").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("description").value = selectedRow.cells[3].innerHTML;
// }
// function updateRoutine(formData) {
//     selectedRow.cells[1].innerHTML = formData.workout;
//     selectedRow.cells[2].innerHTML = formData.duration;
//     selectedRow.cells[3].innerHTML = formData.description;
// }

function updateRoutine(req, res) {
    Routine.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('routineList'); }
        else {
            if (err.name == 'Error') {
                Error(err, req.body);
                res.render("Edit Routine", {
                    viewRoutine: 'Update Routine',
                    routine: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}

export default updateRoutine