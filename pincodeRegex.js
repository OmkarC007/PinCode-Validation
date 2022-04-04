

// ***************uc1************************

var pincodeRegex =  new RegExp("^[0-9]{6,6}$");
var pincode =  400088;

if (pincodeRegex.test(pincode)){
    console.log("entey matched please go ahead");
}else{
    console.log("please enter proper pincode")
}

// ***************uc2 ************************


var pincodeRegex =  new RegExp("^[0-9]{6,6}$");
var pincode = "A400088";

if (pincodeRegex.test(pincode)){
    console.log("entey matched please go ahead");
}else{
    console.log("please enter proper pincode")
}

// ***************uc3 ************************

var pincodeRegex =  new RegExp("^[0-9]{6,6}[A-Z]{1}$");
var pincode =  "4000088B";

if (pincodeRegex.test(pincode)){
    console.log("entey matched please go ahead");
}else{
    console.log("please enter proper pincode")
}

// ***************uc4 ************************

var pincodeRegex =  new RegExp("^[0-9\\s]{6,7}$");
var pincode =  "400088";

if (pincodeRegex.test(pincode)){
    console.log("entey matched please go ahead");
}else{
    console.log("please enter proper pincode")
}
