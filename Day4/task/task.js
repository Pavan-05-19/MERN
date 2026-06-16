function sanctionLoan() {

    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let amount = document.getElementById("amount").value;

    if(name == "" || amount == ""){
        document.getElementById("result").innerHTML = "Enter all details";
    }
    else{
        document.getElementById("result").innerHTML =
        "Loan Sanctioned for " + name +
        " (" + type + ") Amount: ₹" + amount;
    }
}