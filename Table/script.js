
function searchByName() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const table = document.getElementById("peopleTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const nameCell = rows[i].getElementsByTagName("td")[2];
    if (nameCell) {
      const nameText = nameCell.textContent || nameCell.innerText;
      rows[i].style.display = nameText.toLowerCase().includes(input) ? "" : "none";
    }
  }
}

let sortAsc = true;
function sortTable(colIndex) {
  const table = document.getElementById("peopleTable");
  const rows = Array.from(table.rows).slice(1);
  const sorted = rows.sort((a, b) => {
    const cellA = a.cells[colIndex].innerText.toLowerCase();
    const cellB = b.cells[colIndex].innerText.toLowerCase();

    if (!isNaN(cellA) && !isNaN(cellB)) {
      return sortAsc ? cellA - cellB : cellB - cellA;
    }
    return sortAsc ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
  });

  sortAsc = !sortAsc;

  for (let row of sorted) {
    table.tBodies[0].appendChild(row);
  }
}
