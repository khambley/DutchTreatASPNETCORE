console.log("Hello Pluralsight");

var theForm = $("#theForm");
theForm.hide();

var button = $("#buyButton");

button.on("click", function () {
    console.log("Buying Item");
});

var productInfo = $(".product-props li");
// Not a good way to list out items in a collection, better way with jquery.
//var listItems = productInfo.item[0].children;
productInfo.on("click", function () {
    console.log("You clicked on " + $(this).text());
});
