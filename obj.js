// Call back function

function sayName(){
    console.log("Al Muksid");
}

function callSay(func){
    func();
}

sayName(callSay)    // CallBack function
