function getValues(){
    //1. get value to test Fizz
    //DO:
    //Use "let" to declare a variable "fizzValue".  
    //Assign it the value that you find in the the Html element
    //with the id "fizzValue".  HINT: Use document.getElementById
    let fizzValue = document.getElementById("fizzValue").value;
    
    
    //2. get value to test Buzz
    //DO:
    //Use "let" to declare a variable "buzzValue".  
    //Assign it the value that you find in the the Html element
    //with the id "buzzValue".  HINT: Use document.getElementById
    let buzzValue = document.getElementById("buzzValue").value;

    //3. check for numbers
    //DO:
    //Convert "fizzValue" to an integer using parseInt()
    fizzValue = parseInt(fizzValue);
    
    //4. check for numbers
    //DO:
    //Convert "buzzValue" to an integer using parseInt()
    buzzValue = parseInt(buzzValue);

    //5. validate that "fizzValue" and "buzzValue" are actually Numbers.
    //DO:
    //Use an "if-else-statement" to test the logical conjunction (AND &&) 
    //of the Number.isInteger() of "fizzValue" and "buzzValue"
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue))    {
        //6. we call generateNumbers
        //DO:
        //Use "let" to declare a variable "fbData".
        //Set it equal to the result of FizzBuzz(fizzValue, buzzValue)
        let fbData = fizzBuzz(fizzValue, buzzValue);
        
        //7. we call displayNumbers
        //DO:
        //Call custom function "displayData()" with "fbData" as the parameter
        //displayData(fbData);
        displayData(fbData);

    } else {
        //DO:
        //Else if "fizzValue" and "buzzValue" are not Numbers
        //send an alert to the user with the message "You must enter integers"
        alert("You must enter integers");

    }
}

//Traditional Solve Fizz Buzz with a for loop
function FizzBuzz(value1, value2) {
    //DO:
    //Use "let" to declare an array variable "returnArray"
    //Set it equal to []
    let returnArray = [];

    //DO:
    //Use "for-loop" to count form 1 to 100 using
    //"i" as the loop control variable
    for(let index = 1; index <= 100; index++){
        //DO:
        //Use an "if-else-statement" to evaluate the parameters
        //DO:
        //Use an "if-else-statement" to test each number against the zero modulus(%)
        //of the parameters "value1" (fizz) and "value2" (buzz) . (ie. i % value1 == 0)
        //First test whether the case is true for both "value1" AND (&&) "value2"
        if(index % value1 == 0 && index % value2 == 0){
            //DO:
            //If the AND case is true then "push" the value 'FizzBuzz'
            //onto the "returnArray"
            returnArray.push("FizzBuzz");
            
        } 
        //DO:
        //Else test if only the zero modulus(%)
        //of the "value1" is true
        else if(index % value1 == 0){
            //DO:
            //If true then "push" the value 'Fizz' onto the "returnArray"
            returnArray.push("Fizz");
            
        } 
        //DO:
        //Else test if only the zero modulus(%)
        //of the "value2" is true
        else if(index % value2 == 0){
            //DO:
            //If true then "push" the value 'Buzz' onto the "returnArray"
            returnArray.push("Buzz");
        } 
        else
        {
            //DO:
            //Else just push the number "i" onto the "returnArray"
            returnArray.push(index);
        } 
    }
    
    //DO:
    //Finally return the variable "returnArray"
    return returnArray;
    
}

//Option 2 for handling the Fizz Buzz logic using a switch statement
function FizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch (true) {
            case Fizz && Buzz: {
                returnArray.push("FizzBuzz");
                break;
            }
            case Fizz: {
                returnArray.push("Fizz");
                break;
            }
            case Buzz: {
                returnArray.push("Buzz");
                break;
            }
            default: {
                returnArray.push(i);
            }
        }
    }
    return returnArray;
}

//Option 3 for handling the Fizz Buzz logic using Conditional (ternary) operator
function fizzBuzzC(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i);
        returnArray.push(value);
    }
    return returnArray;
}

//custom display function
function displayData(fbData) {

    // let templateRows = "";

    // for (let i = 0; i < fbData.length; i++){
    //     let number = fbData[i];
    //     templateRows += `<tr><td>${number}</td></tr>`;
    // }

    // document.getElementById("results").innerHTML = templateRows;

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
       
        rowCols[1].classList.add(fbData[i+ 1]);
        rowCols[1].textContent = fbData[i + 1];
       
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i + 2];
       
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i + 3];
       
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }
}