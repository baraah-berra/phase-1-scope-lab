
var customerName = 'bob';

function returnCustomerName() {
  return customerName;
}

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// overwrites the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';


function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}
