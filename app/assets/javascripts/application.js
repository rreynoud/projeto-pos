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

    var product_id = $('.select.optional option:selected').val();
    var product_name = $('.select.optional option:selected').text();
    var quant = $('.numeric .integer .optional').text();

    console.log(quant)

    var inner = "<input type=\"text\" id=\"" + "product_"+ product_id + "\" value=\"" + product_id  + "\">"
    var quantityInput = "<input type=\"text\" id=\"" + "quantity_"+ product_id + "\" value=\"" + product_id  + "\">"

    var x=document.getElementById('sampleTable').insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    var quantityCell = x.insertCell(2);
    y.innerHTML=product_name;
    z.innerHTML= inner ;
    quantityCell.innerHTML= quantityInput ;
}

$(document).ready(function() {
    $('.form-inputs').on('click', '.add-new-product-test', add_new_product_to_list_test);
});
