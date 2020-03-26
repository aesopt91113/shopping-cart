$(document).ready(function () {
  totalCost();

  // remove item
  $('#cart').on('click', '.remove', function (event) {
    $(this).closest('tr').remove();
  });

  //  updateItemList
  $('#addItem').on('submit', function (event) {
    event.preventDefault ();

    var itemName = $(this).children('[name=itemName]').val();
    var price = $(this).children('[name=Price]').val();
    var quantity = $(this).children('[name=Quantity]').val();

    $('tbody').append('<tr>' +
    '<td class="itemName">' + itemName + '</td>' +
    '<td class="price">' + price + '</td>' +
    '<td class="quantity">' + quantity + '</td>' +
    '<td class="totalPrice"></td>' +
    '<td><button class="btn btn-sm remove">remove</button></td>' +
    '</tr>'
    );

    totalCost();
    $(this).children('[name=name]').val('');
    $(this).children('[name=price]').val('');
    $(this).children('[name=quantity]').val('');
  });
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
