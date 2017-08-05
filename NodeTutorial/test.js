function placeOrder(orderNumber){

    console.log("Customer order:", orderNumber);

    cookAndDeliverFood(function (){
        console.log("Delivered food order:", orderNumber);
    })
}

//simulate 5 second operation
function cookAndDeliverFood(callback){
    setTimeout(callback, 5000);
}

// simulation users web request
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);

