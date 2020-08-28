// From data.js
var UFOtableData = data;

// References
var tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");

  // Looping through each object and append a row and cells for each value in the row
  data.forEach((UFOrecord) => {
      
    // Appending a row to the table body
    var row = tbody.append("tr");

    // Looping and adding each value as a table cell (td)
    Object.values(UFOrecord).forEach((val) => {
       cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Datetime value from the filter
  var date = d3.select("#datetime").property("value");
   filteredData = UFOtableData;

  // Check to see if a date was entered and filter the data using that date.
  if (date) {

    // Applying `filter` to the table data 
    var filteredData = filteredData.filter(row => row.datetime === date);
    console.log(filteredData)
  }

  buildTable(filteredData);
}

// Selecting all the input element and get the raw HTML node.
d3.selectAll("#filter-btn").on("click", handleClick);

// Building a new UFO Table with the filtered subset of UFO Sighting data 
buildTable(UFOtableData);