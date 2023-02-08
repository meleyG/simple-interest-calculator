//update rate to get the value of the rate slider
function updateRate(){
    //get the value from the slider
    var rateval = document.getElementById("rate").value
    //get the current value of the <span> with id = rate_val, and set that value to = the value gotten from the slider to
    //so whatever value was there before in the <span> tag in html , will now have the new value you selected on the slider
     document.getElementById("rate_val").innerText = rateval

}

function compute()
{
//p initialized/equal to the value of the input element with the id of principal, parsed as an int. This is needed to calculate the final amount, as well as the interest amount
    var p = document.getElementById("principal").value
    
//r initialized/equal to the value of the input element with an id of rate, parsed as a float. This is needed to calculate the interest amount
    var r = document.getElementById("rate").value

//y initialized/equal to the value of the input element with an id of years, parsed as an int. This is needed to calculate the interest amount    
    var y = document.getElementById("years").value
    //to get the no of years, add the current year + the number of years you want to calculate the interest of..eg currnt year = 2023, no of years = 10, so current year + no of years = year 2033
    //This will ensure that the input taken as “No. of Years” is converted into an actual year format of 4 digits (e.g. 2033)
    var s = new Date().getFullYear() + parseInt(y)
    //or you can use var d = new date(); var s = d.getFullYear() + parseInt(y) ..same result

 //inte =  with the value principal * num_years * rate / 100. This is needed to calculate the total amount    
    var inte = p * y * r / 100

//amount which is the sum of the integer value of p and the float value of inte..as mentioned above in p and inte comments, p is parsed as int and inte as a float because p is a number always and inte is a float or number since its the range on the slider in the html   
    var amount = parseInt(p) + parseFloat(inte)

//result initialized to the input element with an id of result.   
    var result = document.getElementById("result")


    //validation
    //if p which is principal under input id tag for amount = 0 or any number less than 0 or negative , send the alert message , then after licking okay on the alert box, the mouse should navigate to the amount textfield
    if(p <= 0) {
        alert("Enter positive number")
        p.focus()
    }
    else{
        //if you input a positive number more than 0 , the the html format below should show
       result.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" +
                           ",\<br\> at an interest rate of " + "<mark>" + r + "%" + "</mark>" +
                           ".\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" +
                           ",\<br\> in the year " + "<mark>" + s + "</mark>" + 
                           "\<br\>"
        
       
    }
    

    
}


    

        