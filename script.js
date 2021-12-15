var principal = document.getElementById("principal").value;
alert(principal);
var rate = document.getElementById("rate").value;
var rateout = document.getElementById("rateoutput").value;
var years = document.getElementById("years").value;
var interest = (principal * years * rate) /100;
var actualyear = (new Date().getFullYear()) + years;
var spanresult = document.getElementById("result");
function slider(rateval){
    rate = rateval;
    rateout = rate;
    document.getElementById("rateoutput").innerText = rateout;
    

}
function calculate()
{
    amount = document.getElementById("amount").value;
    if (amount <= 0){
        alert("Enter a positive number!");
        return;
    }
    rate = document.getElementById("rateoutput").innerText;
    years = document.getElementById("years").value;
    interest = (Number(amount) * Number(years) * Number(rate)) /100;
    actualyear = (new Date().getFullYear()) + Number(years);
    spanresult = document.getElementById("result");
    var text = ' <br> If you deposit <mark>'+amount+'</mark>, <br>'+
               'at an interest rate of <mark>'+rate+'%</mark>. <br>'+
               'You will receive an amount of <mark>'+interest+'</mark>, <br>'+
               'in the year <mark>'+actualyear.toString()+'</mark>'
    spanresult.innerHTML = text
    
    
}