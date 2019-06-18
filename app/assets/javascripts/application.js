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


function add_new_product_to_list()
{
    let div = $(this).parent(true);
    $('.form-inputs').after(div.clone(true));
}

$(document).ready(function() {
    $('.form-inputs').on('click', '.add-new-product', add_new_product_to_list);
});


function add_new_product_to_list_test()
{

    var rowCount = $("#sampleTable > tbody").children().length;
    var product_id = $('.select.optional option:selected').val();
    var product_name = $('.select.optional option:selected').text();
    var quantity = $('.numeric').val();

    var position = rowCount
    --position

    var nameQuantity = "list[items_attributes]["+ position +"][quantity]"

    var nameProductId = "list[items_attributes]["+ position +"][product_id]"

    var innerProductId = "<input type=\"text\"   name=\"" +  nameProductId + "\" " +
        "id=\"" + "product_"+ product_id + "\" value=\"" + product_id  + "\">"

    var quantityInput = "<input type=\"text\" name=\"" +  nameQuantity + "\" " +
        "id=\"" + "quantity_"+ product_id + "\" value=\"" + quantity  + "\">"

    var x=document.getElementById('sampleTable').insertRow(rowCount);
    var productId = x.insertCell(0);
    var productCell = x.insertCell(1);
    var quantity = x.insertCell(2);
    var quantityCell = x.insertCell(3);
    var totalValueCell = x.insertCell(4);

    productId.innerHTML=innerProductId;
    productCell.innerHTML=product_name;
    quantity.innerHTML= quantityInput ;
    quantityCell.innerHTML= innerProductId ;
    totalValueCell.innerHTML= quantityInput ;

    $(".numeric").val("0");
}

$(document).ready(function() {
    $('.form-inputs').on('click', '.add-new-product-test', add_new_product_to_list_test);
});
