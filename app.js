let onOff = document.getElementById("on-off");
let screenInput = document.getElementById("screen-input");
let currentStatus = "off";
let otherStatus = "on"


function swap(){
    let temp;
    temp = currentStatus;
    currentStatus = otherStatus;
    otherStatus = temp;
}

onOff.addEventListener("click", ()=>{
    if(currentStatus == "on"){
        screenInput.style.display = "none";
        swap();
        reset();
    }
    else{
        screenInput.style.display = "block";
        swap();
    }
})

let arr = [];
function clicked(digit) {
    if(currentStatus == "on"){
        arr.push(digit);
        updateScreen();
    }
}

function updateScreen() {
    screenInput.value = arr.join('');
}

 //Delete Key
function del(){
    arr.pop();
}

document.getElementById("delete").addEventListener( "click", ()=>{
    del();
    updateScreen();
})

// Clear Screen key

function reset(){
    arr = [];
    updateScreen();
}

document.getElementById("clear-screen").addEventListener("click",()=>{
    reset();
})

//Logic script
let num = [];

function operate(operator) {
    if (currentStatus == "on") {
        num.push(screenInput.value);
        num.push(operator);
        updateScreen();
    }
}
let add = document.getElementById("+");
let sub = document.getElementById("-");
let mul = document.getElementById("*");
let div = document.getElementById("/");

add.addEventListener("click",()=>{
    num.push(screenInput.value);
    num.push("+");
    console.log(num);
    reset();
})
sub.addEventListener("click",()=>{
    num.push(screenInput.value);
    num.push("-");
    console.log(num);
    reset();
})
mul.addEventListener("click",()=>{
    num.push(screenInput.value);
    num.push("*");
    console.log(num);
    reset();
})
div.addEventListener("click",()=>{
    num.push(screenInput.value);
    num.push("/");
    console.log(num);
    reset();
})

let equalTo = document.getElementById("equal");
let res = 0;
function result(){
    let expression = ' ';
    for( let i = 0; i< num.length; i++){
        if ( !isNaN(num[i])){
            expression += num[i];
        }
        else{
            expression = expression + ' ' + num[i] + ' ';
        }
    }
    console.log(expression);
    num = [];
    res = 0;
    res = eval(expression);
    screenInput.value = res;
}

equalTo.addEventListener("click", ()=>{
    num.push(screenInput.value);
    result();
    document.getElementById("clear-screen").addEventListener("click",()=>{
        reset();
    })
    })