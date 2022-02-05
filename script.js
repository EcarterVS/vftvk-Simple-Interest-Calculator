function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years)

    if(principal == ""){
        alert("Please enter positive principal amount");
        return false;
    }

    if(principal < 0){
        alert("Principal amount cannot be negative");
        return false;
    }

    document.getElementById("result").innerHTML= "If you deposit: " +  principal + ",\<br/> at an interest rate of: " +  rate   + "%. \<br/> You will receive an amount of: " + interest + "\<br/>in the year " + year + ".";
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + "%";
}

function keepPositive(){
    var principal = document.getElementById("principal").value;
    if(principal<0){
        document.getElementById("principal").value = 0;
        document.getElementById("principal").focus();
        document.getElementById("keepPositive").innerHTML = "Please enter a positive number";


    }
}
