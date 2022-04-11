import Table from './table'
import { useNavigate, useParams } from 'react-router-dom';
import RoutineDetails from './routineDetails';
import RoutineList from './routineList';
import React, { Component, useEffect } from 'react';
import axios from 'axios';

function resetForm() {
    document.getElementById("workout").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("description").value = "";
    RoutineDetails.id = null;
}
var deleteRoutine = document.querySelectorAll('.delete');

for (var i = 0; i < deleteRoutine.length; i++) {
  deleteRoutine[i].addEventListener('click', function(event) {
      event.preventDefault();

      var choice = delete(this.getAttribute('confirm'));

      if (choice) {
        window.location.delete = this.getAttribute('/delete');
      }
  });
  if (delete('Are you sure to delete this routine?')) {
    RoutineList = RoutineDetails.parentElement.parentElement;
    document.getElementById("routineList").deleteRow(RoutineList.id);
    resetForm();
}
}

export default deleteRoutine