// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require popper
//= require bootstrap
//= require turbolinks
//= require_tree .


var price = 0.0

function add_new_product_to_list()
{
    let div = $(this).parent(true);
    $('.form-inputs').after(div.clone(true));
}

$(document).ready(function() {
    $('.form-inputs').on('click', '.add-new-product', add_new_product_to_list);

    $( ".select .optional" ).change(function() {
        searchPrice()
    });

});

function searchPrice(){
    var product_id = $('.select.optional option:selected').val();
    $.get('/products/'+ product_id +'.json', function(data){
        price = data.price
        $('#price').attr('value', price)
    });
}


function add_new_product_to_list_test()
{

    console.log("Preço do produto")
    console.log(price)

    var row_count = $("#sampleTable > tbody").children().length;
    var product_id = $('.select.optional option:selected').val();
    var product_name = $('.select.optional option:selected').text();
    var quantity = $('.numeric').val();

    var position = row_count
    --position

    var name_quantity = "list[items_attributes]["+ position +"][quantity]"
    var name_product_id = "list[items_attributes]["+ position +"][product_id]"
    var name_current_price = "list[items_attributes]["+ price +"][current_price]"

    var inner_product_id = "<input type=\"text\"   name=\"" +  name_product_id + "\" " +
        "id=\"" + "product_"+ product_id + "\" readonly value=\"" + product_id  + "\">"

    var quantity_input = "<input type=\"text\" name=\"" +  name_quantity + "\" " +
        "id=\"" + "quantity_"+ product_id + "\" readonly value=\"" + quantity  + "\">"


    var totalItem = quantity * price

    var listTotal = parseFloat($('#list_total').val())

    listTotal += totalItem

    $('#list_total').attr('value', listTotal)

    var x=document.getElementById('sampleTable').insertRow(row_count);
    var product_id = x.insertCell(0);
    var product_cell = x.insertCell(1);
    var quantity_cell = x.insertCell(2);
    var price_cell = x.insertCell(3);
    var total_value_cell = x.insertCell(4);

    product_id.innerHTML=inner_product_id;
    product_cell.innerHTML=product_name;
    quantity_cell.innerHTML= quantity_input ;
    price_cell.innerHTML= price ;
    total_value_cell.innerHTML = totalItem  ;

    $(".numeric").val("0");
}

$(document).ready(function() {
    $('.form-inputs').on('click', '.add-new-product-test', add_new_product_to_list_test);
});
