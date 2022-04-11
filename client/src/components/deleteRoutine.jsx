import Table from './table'
import { useNavigate, useParams } from 'react-router-dom';
import Routine from '../models/routine';
import RoutineDetails from './routineDetails';
import RoutineList from './routineList';
import React, { Component, useEffect } from 'react';
import axios from 'axios';

function resetForm() {
    document.getElementById("workout").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("description").value = "";
    selectedRow = null;
}
function deleteRoutine(tr) {
    if (confirm('Are you sure to delete this routine?')) {
        row = tr.parentElement.parentElement;
        document.getElementById("routineList").deleteRow(row.rowIndex);
        resetForm();
    }
}

export default deleteRoutine