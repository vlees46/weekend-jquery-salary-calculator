$(document).ready(onReady);

// Global variable that'll hold the "state" of our app.
// To be specific, it's an array that will contain our
// hobby item objects.
let SalaryArr = [];

// This is our "main" function. Everything we need to
// run after jQuery knows that the DOM is assembled goes
// inside here.
function onReady() {
  // Immediately runs these two functions:
  renderSalaryArr(SalaryArr);
  renderTotalPrice(SalaryArr);
  // Create one event listener that will fire off our
  // handleAddItemClick each time a user clicks '#add-item-button':
  $('#submit').on('click', handleAddItemClick);
  
}


// Renders our SalaryArr array on the DOM:
function renderSalaryArr(itemsToRender) {
  // Remove all <tr> elements (and their children) from
  // the <tbody> element:
  $('#employee-table-body').empty();
  
  // Loop through SalaryArr array, each iteration
  // adds a "hobbyItem" to our table as a <tr> element:
  for (let empSalary of itemsToRender) {
    // Using a multiline string template to construct the
    // string we want to append to the DOM as HTML:
    let newTableRow = `
      <tr>
        <td>${empSalary.namefirst}</td>
        <td>${empSalary.nameLast}</td>
        <td>${empSalary.nameid}</td>
        <td>${empSalary.nametitle}</td>
        <td>${empSalary.salary}</td>
        <td><button class="btnDelete">Delete</button></td>
      </tr>
    `;

    $('#employee-table-body').append(newTableRow);
    
  }
}

// Uses calculateTotalPrice and renders its output as text
// in our '#total-price' <h5> element:
function renderTotalPrice(itemsToSum) {
 // Get the current total price, using this handy function we made:
 let totalPrice = calculateTotalPrice(itemsToSum);
  // Update our '#total-price' <h5> with the current totalPrice value:
$('#total-monthly').text(totalPrice);
$('#employee-table-body').on('click', '.btnDelete', function () {
  $(this).closest('tr').remove();

});

}

// Takes in our SalaryArr array and returns
// the total price. 
function calculateTotalPrice(itemsToSum) {
  let sum = 0;
  let totalSum = 0;

  for (let hobbyItem of itemsToSum) {
    sum += hobbyItem.salary;
    totalSum = sum / 12;
  }
   if ( totalSum > 20000 ) {
      console.log( 'Total Monthly Cost exceeds $20,000', totalSum);
      $("h5").css("background-color","red");
   }

   return totalSum;
}


function handleAddItemClick() {
  // grab the values user has entered in inputs
  let firstName = $('#firstNameIn').val();
  let lastName = $('#lastNamelIn').val();
  let Id = $('#idIn').val();
  let title = $('#titleIn').val();
  let annualSalary = $('#annualSalaryIn').val();

  
  let newItem = {
    namefirst: firstName,
    nameLast: lastName,
    nameid: Id,
    nametitle: title,
    salary: Number(annualSalary),
  };

  
  SalaryArr.push(newItem);


  $('#firstNameIn').val();
  $('#lastNamelIn').val();
  $('#idIn').val();
  $('#titleIn').val();
  $('#annualSalaryIn').val();

  
  renderSalaryArr(SalaryArr);
  renderTotalPrice(SalaryArr);
  
  
}
  
     

