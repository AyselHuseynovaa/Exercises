let addToDobutton=document.getElementById(addwhattoDo);
let toDocontainer=document.getElementById(toDocontainer);
let inputarea =document.getElementById(inputarea);

 addToDobutton.addEventListener('click', function(){
  var paragraph=document.createElement('p')
    paragraph.innerText=inputarea.value;
    toDocontainer.appendChild(paragraph);
    inputarea.value= "";
})