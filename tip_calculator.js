

const tipPerPerson = document.querySelector(".result_tip")
const totalPerPerson = document.querySelector(".result_total");
const bill = document.getElementById("bill");
const people = document.getElementById("people");
const percButton = document.querySelectorAll(".button")
const reset =document.querySelector(".reset-button")
const custom = document.getElementById("custom")
let numberPattern = /\d+/g;
let percentage;
//funcion cambiar de color on click los %, y guardar el valor actualizado en una variable

//tengo variables sin declarar abajo pero funciona igual, por que?


function calcular(){
    [...percButton].forEach(elem => { 
       if(parseInt(elem.innerHTML)==percentage) {elem.classList.add('seleccionado')} else {
        elem.classList.remove('seleccionado');
       }
    });
    runningtotal = parseInt(bill.value*(1+(percentage/100))*100)/100;
    if(people.value===0){
        
    }
    totalPerPerson.innerHTML=`$ ${parseInt(runningtotal/people.value*100)/100}`;
    tipPerPerson.innerHTML= `$ ${parseInt((bill.value*percentage)/people.value)/100}`;    
}



[...percButton].forEach(element => { element.addEventListener('click',function(){

    clearButtons();
    custom.value=null;
    element.classList.add('seleccionado');
    percentage = Number(element.textContent.match(numberPattern));

    calcular();   
})
});
function clearButtons(){
    
}

reset.addEventListener('click',function(){
    clearButtons();
    // totalPerPerson.innerHTML="$ 0.00";
    // tipPerPerson.innerHTML="$ 0.00";
    bill.value=null;
    people.value=null;
    custom.value=null;
    percentage=null;
    calcular();
})

bill.addEventListener('keyup',()=>{
    if(document.querySelector(".seleccionado")){
        percentage=  Number(document.querySelector(".seleccionado").textContent.match(numberPattern))
    } else{ percentage = 0}  
    runningtotal = parseInt(bill.value*(1+(percentage/100))*10)/10;
    people.value ? totalPerPerson.innerHTML=`$ ${parseInt(runningtotal/people.value*10)/10}`: totalPerPerson.innerHTML = "$0.00";
    people.value ? tipPerPerson.innerHTML= `$ ${parseInt((bill.value*percentage)/people.value)/100}`: tipPerPerson.innerHTML = "$0.00";    
})

people.addEventListener('keyup',()=>{
    if(document.querySelector(".seleccionado")){
        percentage=  Number(document.querySelector(".seleccionado").textContent.match(numberPattern))
    } else{ percentage = 0}
    runningtotal = parseInt(bill.value*(1+(percentage/100))*100)/100;
    totalPerPerson.innerHTML=`$ ${parseInt(runningtotal/people.value*100)/100}`;
    tipPerPerson.innerHTML= `$ ${parseInt((bill.value*percentage)/people.value)/100}`;    
})

custom.addEventListener('keyup',()=>{
    percentage= custom.value;
    calcular();
    
})




