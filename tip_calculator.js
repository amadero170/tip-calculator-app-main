
const tipPerPerson = document.querySelector(".result_tip")
const totalPerPerson = document.querySelector(".result_total");
const bill = document.getElementById("bill");
const people = document.getElementById("people");
const percButton = document.querySelectorAll(".button")
const reset =document.querySelector(".reset-button")
const custom = document.getElementById("custom")
const error = document.getElementById("error");
let numberPattern = /\d+/g;
let percentage;



function calcular(){
    [...percButton].forEach(elem => { 
       if(parseInt(elem.innerHTML)==percentage) {elem.classList.add('seleccionado')} else {
        elem.classList.remove('seleccionado');
       }
    });
    if(people.value){
    people.classList.remove('error');
    error.classList.add('hide');
    runningtotal = parseInt(bill.value*(1+(percentage/100))*100)/100;
    totalPerPerson.innerHTML=`$ ${parseInt(runningtotal/people.value*100)/100}`;
    tipPerPerson.innerHTML= `$ ${parseInt((bill.value*percentage)/people.value)/100}`;}
    else    { 
    people.classList.add('error');
    error.classList.remove('hide');
    totalPerPerson.innerHTML="$ 0.00";
    tipPerPerson.innerHTML="$ 0.00";
    }    
}

function clearButtons(){
    bill.value=null;
    people.value=null;
    custom.value=null;
    percentage=null;
    
}

[...percButton].forEach(element => { element.addEventListener('click',function(){
    custom.value=null;
    percentage = Number(element.textContent.match(numberPattern));
    calcular();   
})
});

reset.addEventListener('click',function(){
    clearButtons();
    calcular();
})

bill.addEventListener('keyup',()=>{
    if(document.querySelector(".seleccionado")){
        percentage=  Number(document.querySelector(".seleccionado").textContent.match(numberPattern))
    }  
    calcular();
})

people.addEventListener('keyup',()=>{
    if(document.querySelector(".seleccionado")){
        percentage=  Number(document.querySelector(".seleccionado").textContent.match(numberPattern))
    } 
    calcular(); 
})

custom.addEventListener('keyup',()=>{
    percentage= custom.value;
    calcular();
    
})




