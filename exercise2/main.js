// variables.leri daxil et
var btn,result, count=0; 
// id'si btn olan elementi sech 
btn=document.querySelector("#btn");
// id'si result olan elementi sech
result=document.querySelector("#result");

// bir element uzerinde birden chox event'i yerine yetir
btn.addEventListener('click', function(){
    
if(count%2===0){
    // true
    result.style.backgroundColor="slateblue";
    btn.style.backgroundColor="slateblue";
}else{
    // false
    result.style.backgroundColor="orange";
    btn.style.backgroundColor="orange";
}
// saygaci bir vahid artir
count++;
    }
);