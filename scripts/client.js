$(document).ready(onReady);

// Global variable that'll hold the "state" of our app.
// To be specific, it's an array that will contain our
// hobby item objects.
let hobbyItems = [];

// This is our "main" function. Everything we need to
// run after jQuery knows that the DOM is assembled goes
// inside here.
function onReady() {
  // Immediately runs these two functions:
  renderHobbyItems(hobbyItems);
  renderTotalPrice(hobbyItems);
  // Create one event listener that will fire off our
  // handleAddItemClick each time a user clicks '#add-item-button':
  $('#submit').on('click', handleAddItemClick);
}


// Renders our hobbyItems array on the DOM:
function renderHobbyItems(itemsToRender) {
  // Remove all <tr> elements (and their children) from
  // the <tbody> element:
  $('#hobby-table-body').empty();
  
  // Loop through hobbyItems array, each iteration
  // adds a "hobbyItem" to our table as a <tr> element:
  for (let hobbyItem of itemsToRender) {
    // Using a multiline string template to construct the
    // string we want to append to the DOM as HTML:
    let newTableRow = `
      <tr>
        <td>${hobbyItem.namefirst}</td>
        <td>${hobbyItem.nameLast}</td>
        <td>${hobbyItem.nameid}</td>
        <td>${hobbyItem.nametitle}</td>
        <td>${hobbyItem.salary}</td>
        <td><button>Delete</button></td>
      </tr>
    `;

    $('#hobby-table-body').append(newTableRow);
  }
}

// Uses calculateTotalPrice and renders its output as text
// in our '#total-price' <h5> element:
function renderTotalPrice(itemsToSum) {
 // Get the current total price, using this handy function we made:
 let totalPrice = calculateTotalPrice(itemsToSum);
  // Update our '#total-price' <h5> with the current totalPrice value:
$('#total-monthly').text(totalPrice);
}

// Takes in our hobbyItems array and returns
// the total price. (Helper function for
// our renderTotalPrice function.)
function calculateTotalPrice(itemsToSum) {
  let sum = 0;
  let totalSum = 0;

  for (let hobbyItem of itemsToSum) {
    sum += hobbyItem.salary;
    totalSum = sum / 12;
  }

   return totalSum;
}

// Handles the things that need to happen when a user
// clicks the '#add-item-button':
function handleAddItemClick() {
  // grab the values user has entered in inputs
  let firstName = $('#firstNameIn').val();
  let lastName = $('#lastNamelIn').val();
  let Id = $('#idIn').val();
  let title = $('#titleIn').val();
  let annualSalary = $('#annualSalaryIn').val();

  // create a new "hobbyItem" object using above values
  let newItem = {
    namefirst: firstName,
    nameLast: lastName,
    nameid: Id,
    nametitle: title,
    salary: Number(annualSalary),
  };

  // push "hobbyItem" object into my hobbyItems array
  hobbyItems.push(newItem);

  // clear the inputs--thanks Kayla :)
  $('#firstNameIn').val();
  $('#lastNamelIn').val();
  $('#idIn').val();
  $('#titleIn').val();
  $('#annualSalaryIn').val();

  // call your renderHobbyItems function, you clever boy
  renderHobbyItems(hobbyItems);
  renderTotalPrice(hobbyItems);
}
