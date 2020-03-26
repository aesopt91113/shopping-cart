$(document).ready(function () {
  totalCost();

  // remove item
  $('.remove').on('click', function (event) {
      $(this).closest('tr').remove();
  })
});

// getting total price for 1 item
var itemTotalPrice = function (ele) {
  var price = parseFloat($(ele).children('.price').first().text());
  var quantity = parseFloat($(ele).children('.quantity').first().text());

  // total price for item
  var itemTotal = price * quantity;
  $(ele).children('.totalPrice').html(itemTotal);

  return itemTotal;
};

// ------------------------------------------------------------------------
// calculating Price
var sum = function (acc, x) { return x + acc; };

var totalCost = function() {
  var totalPrice = [];

  $('tbody tr').each(function (i, ele) {
    totalPrice.push(itemTotalPrice(ele));
  });

  var totalCost = totalPrice.reduce(sum);
  $('#totalCost').html(totalCost);
};


// ---------------------------------------------------------------------
//  updateItemList
// $('#addItem').on('submit', function (event) {
//   event.preventDefault ();
//
//   var itemName = $(this).children('[name = Item name]').val();
//   var shares = $(this).children('[name = Price]').val();
//
// })



// creating new item row, calucating price, deleting an item
