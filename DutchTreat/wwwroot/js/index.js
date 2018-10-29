console.log("Hello Pluralsight");

var theForm = document.getElementById("theForm");
theForm.hidden = true;

var button = document.getElementById("buyButton");

button.addEventListener("click", function () {
    console.log("Buying Item");
});

var productInfo = document.getElementsByClassName("product-props");
// Not a good way to list out items in a collection, better way with jquery.
//var listItems = productInfo.item[0].children;
