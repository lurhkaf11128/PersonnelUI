const API_URL = "https://localhost:5001/api/personnel"; // change based on your .NET API port

function loadPersonnel() {
  $.get(API_URL, function (data) {
    let rows = "";
    data.forEach((person) => {
      rows += `
        <tr>
          <td>${person.name}</td>
          <td>${person.age}</td>
          <td>${person.phone}</td>
          <td>
            <button class="btn btn-sm btn-warning">Edit</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      `;
    });
    $("#personnelTableBody").html(rows);
  });
}

$(document).ready(function () {
  loadPersonnel();
});
