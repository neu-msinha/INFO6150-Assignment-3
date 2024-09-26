window.onload = () => {
  displayStudentDetails();
  initializeControls();
  handleCheckboxFunctionality();
};

let studentCounter = 3;

const displayStudentDetails = () => {
  const headerElement = document.createElement('h1');
  headerElement.textContent = "Mayukh Sinha | NUID: 002316499";
  headerElement.style.textAlign = 'center';
  headerElement.style.margin = '20px 0';

  document.body.prepend(headerElement);
}

const initializeControls = () => {
  const submitBtn = document.getElementById("button");
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "gray";

  const dropdownSections = document.querySelectorAll(".dropDownTextArea");
  dropdownSections.forEach(section => {
      section.style.display = "none";
  });

  const addEntryBtn = document.getElementById("add");
  addEntryBtn.onclick = addNewRow;

  const checkboxElements = document.querySelectorAll("#myTable input[type='checkbox']");
  checkboxElements.forEach((checkbox) => {
      checkbox.addEventListener("change", handleCheckboxChange);
      checkbox.addEventListener("change", handleCheckboxFunctionality);
  });

  const imageElements = document.querySelectorAll("#myTable img");
  imageElements.forEach((image) => {
      image.addEventListener("click", toggleDropdownRow);
  });
}

function addNewRow() {
  studentCounter++;
  const tableElement = document.getElementById("myTable");

  const newTableRow = tableElement.insertRow(tableElement.rows.length);

  let checkboxCell = newTableRow.insertCell(0);
  checkboxCell.innerHTML = `<input type="checkbox" /><br /><br /><img src="down.png" width="25px" />`;

  let studentCell = newTableRow.insertCell(1);
  studentCell.textContent = `Student ${studentCounter}`;
  let advisorCell = newTableRow.insertCell(2);
  advisorCell.textContent = `Teacher ${studentCounter}`;
  let statusCell = newTableRow.insertCell(3);
  statusCell.textContent = "Approved";
  let semesterCell = newTableRow.insertCell(4);
  semesterCell.textContent = "Fall";
  let roleCell = newTableRow.insertCell(5);
  roleCell.textContent = "TA";
  let budgetCell = newTableRow.insertCell(6);
  budgetCell.textContent = `${Math.floor(10000 + Math.random() * 90000)}`;
  let percentageCell = newTableRow.insertCell(7);
  percentageCell.textContent = "100%";
  let deleteActionCell = newTableRow.insertCell(8);
  deleteActionCell.innerHTML = "";
  deleteActionCell.className = "deleteRow";
  deleteActionCell.style.display = "none";
  let editActionCell = newTableRow.insertCell(9);
  editActionCell.innerHTML = "";
  editActionCell.className = "editRow";
  editActionCell.style.display = "none";

  const rowsArray = tableElement.getElementsByTagName('tr');
  let hasCheckedItem = false;
  for (let j = 1; j < rowsArray.length; j++) {
      const currentRow = rowsArray[j];
      const checkbox = currentRow.querySelector("td input[type='checkbox']");
      if (checkbox && checkbox.checked) {
          hasCheckedItem = true;
      }
  }

  if (hasCheckedItem) {
      deleteActionCell.style.display = "";
      editActionCell.style.display = "";
  }

  const dropdownRow = tableElement.insertRow(tableElement.rows.length);
  dropdownRow.className = "dropDownTextArea";
  let dropdownCell = dropdownRow.insertCell(0);
  dropdownCell.colSpan = "8";
  dropdownCell.innerHTML = `
    Advisor:<br /><br />
    Award Details<br />
    Summer 1-2014(TA)<br />
    Budget Number: <br />
    Tuition Number: <br />
    Comments:<br /><br /><br />
    Award Status:<br /><br /><br />
`;
  dropdownRow.style.display = "none";

  const newCheckbox = checkboxCell.querySelector("input[type='checkbox']");
  const newImage = checkboxCell.querySelector("img");
  newCheckbox.addEventListener("change", handleCheckboxChange);
  newCheckbox.addEventListener("change", handleCheckboxFunctionality);
  newImage.addEventListener("click", toggleDropdownRow);

  alert(`Student ${studentCounter} Record added successfully`);
}

function handleCheckboxFunctionality() {
  const tableElement = document.getElementById('myTable');
  const rowsArray = tableElement.getElementsByTagName('tr');

  for (let i = 0; i < rowsArray.length; i++) {
      if (i == 0) {
          let hasCheckedItem = false;
          for (let j = 1; j < rowsArray.length; j++) {
              const currentRow = rowsArray[j];
              const checkbox = currentRow.querySelector("td input[type='checkbox']");
              if (checkbox && checkbox.checked) {
                  hasCheckedItem = true;
              }
          }

          const deleteHeader = document.getElementById('deleteColumn');
          const editHeader = document.getElementById('editColumn');

          const deleteCells = document.getElementsByClassName('deleteRow');
          const editCells = document.getElementsByClassName('editRow');

          if (hasCheckedItem) {
              deleteHeader.style.display = '';
              editHeader.style.display = '';

              for (let i = 0; i < deleteCells.length; i++) {
                  deleteCells[i].style.display = "";
              }

              for (let i = 0; i < editCells.length; i++) {
                  editCells[i].style.display = "";
              }
          } else {
              deleteHeader.style.display = 'none';
              editHeader.style.display = 'none';

              for (let i = 0; i < deleteCells.length; i++) {
                  deleteCells[i].style.display = "none";
              }

              for (let i = 0; i < editCells.length; i++) {
                  editCells[i].style.display = "none";
              }
          }
      }

      const currentRow = rowsArray[i];
      const checkbox = currentRow.querySelector("input[type='checkbox']");

      currentRow.cells[currentRow.cells.length].style.display = 'none';
      currentRow.cells[currentRow.cells.length - 1].style.display = 'none';
  }
}

function handleCheckboxChange() {
  const submitBtn = document.getElementById("button");
  const row = this.closest("tr");

  if (this.checked) {
      row.style.backgroundColor = "yellow";
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = "orange";

      const deleteActionCell = row.cells[8];
      deleteActionCell.innerHTML = `<button class='delete'>Delete</button>`;
      deleteActionCell.querySelector(".delete").addEventListener("click", deleteRow);

      let editActionCell = row.cells[9];
      if (!editActionCell) {
          editActionCell = row.insertCell(9);
      }
      editActionCell.innerHTML = `<button class="edit">Edit</button>`;
      editActionCell.querySelector(".edit").addEventListener("click", () => openEditPopup(row));
  } 
  else {
      row.style.backgroundColor = "white";
      const checkedBoxes = document.querySelectorAll("#myTable input[type='checkbox']:checked");
      if (checkedBoxes.length === 0) {
          submitBtn.disabled = true;
          submitBtn.style.backgroundColor = "gray";
      }

      row.cells[8].innerHTML = "";
      row.cells[9].innerHTML = "";
  }
}

const openEditPopup = (row) => {
  const studentName = row.cells[1].textContent;
  const advisorName = row.cells[2].textContent;
  const awardStatus = row.cells[3].textContent;
  const semester = row.cells[4].textContent;
  const type = row.cells[5].textContent;
  const budgetNumber = row.cells[6].textContent;
  const percentage = row.cells[7].textContent;

  const popupContent = `
    <div id="editPopup" class="popup">
        <h2>Edit details of ${studentName}</h2>
        <p><strong>Advisor:</strong> ${advisorName}</p>
        <p><strong>Award Status:</strong> ${awardStatus}</p>
        <p><strong>Semester:</strong> ${semester}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Budget Number:</strong> ${budgetNumber}</p>
        <p><strong>Percentage:</strong> ${percentage}</p>
        <button id="updateButton">Update</button>
        <button id="cancelButton">Cancel</button>
    </div>
`;

  document.body.insertAdjacentHTML('beforeend', popupContent);

  document.getElementById('updateButton').addEventListener('click', () => {
      alert(`${studentName} data updated successfully`);
      closePopup();
  });

  document.getElementById('cancelButton').addEventListener('click', closePopup);
};

const closePopup = () => {
  const popup = document.getElementById('editPopup');
  if (popup) {
      popup.remove();
  }
}

function deleteRow() {
  const row = this.closest("tr");
  const studentName = row.cells[1].textContent;

  const dropdownRow = row.nextElementSibling;
  if (dropdownRow && dropdownRow.classList.contains("dropDownTextArea")) {
      dropdownRow.remove();
  }

  row.remove();
  alert(`Record for ${studentName} deleted successfully`);

  const submitBtn = document.getElementById("button");
  const checkedBoxes = document.querySelectorAll("#myTable input[type='checkbox']:checked");
  if (checkedBoxes.length === 0) {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "gray";
  }
}

function toggleDropdownRow() {
  const row = this.closest("tr");
  const dropdownRow = row.nextElementSibling;

  if (dropdownRow && dropdownRow.classList.contains("dropDownTextArea")) {
      dropdownRow.style.display = dropdownRow.style.display === "none" ? "" : "none";
  }
}
