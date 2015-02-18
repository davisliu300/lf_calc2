var number_array = ['',''];
var number_index = 0;
var operator = '';
var result = null;
var input_box = null;
//var input_box = document.querySelector('#input').value;

function add_number(digit){
	if (result !==null) {
		result = null;
		document.querySelector('#result').value = '';
	} 
	document.querySelector('#input').value += digit;
	number_array[number_index] += digit;
}


function result_cond_check(){
	if(result !== null) {
		number_array[0] = result;
		document.querySelector('#input').value =result;		
	}
}
function add_operator(input_operator){
	result_cond_check();
		document.querySelector('#input').value += input_operator;
		operator = input_operator;
		number_index = 1;
}


function add_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        document.querySelector("#debug_it").value = instructions;
        return false;
    }
    else{
        //alert("The result is " + (num1 + num2));
        return (num1 + num2);
    }
    
}
function subtract_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        document.querySelector("#debug_it").value = instructions;
        return false;
    }
    else{
        //alert("The result is " + (num1 - num2));
        return (num1 - num2);
    }
}
function multiply_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);  
    if(isNaN(num1) || isNaN(num2))
    {
		document.querySelector("#debug_it").value = instructions;
        return false;
    }
    else{
        //alert("The result is " + (num1 * num2));
        return (num1 * num2);
    }
    alert("Something went wrong if you see this");
}
function divide_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);  
    if(isNaN(num1) || isNaN(num2))
    {
        document.querySelector("#debug_it").value = instructions;
        return false;
    }
    else{
        if(num2>0){
//            alert("The result is " + (num1 / num2));
            return (num1 / num2);
        }
        else {
            document.querySelector("#debug_it").value = "you cannot divide by zero!";
            return false;
        }
    }
}

function power_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);  
    if(isNaN(num1) || isNaN(num2))
    {
		document.querySelector("#debug_it").value = instructions;
        return false;
    }
    else{
        //alert("The result is " + (num1 * num2));
        return Math.pow(num1, num2);
    }
    alert("Something went wrong in Pow");
}


function calculate(){

	switch(operator){
		case '+':
			result = add_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
			break;
		case '-':
			result = subtract_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
			break;
		case '*':
			result = multiply_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
			break;
		case '/':
			result = divide_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
			break;
		case '^':
		console.log("power");
			result = power_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));

			break;
		default: 
			alert("something went wrong in switch");
			break;
	}
	document.querySelector("#result").value = result; 
	clear_fields();
}

function clear_fields(){
	document.querySelector("#input").value = '';
	number_array=['',''];
	number_index = 0;
}

function reset_total(){
	clear_fields();
	document.querySelector("#result").value = '';	
}












