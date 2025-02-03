if('SpeechRecognition' in window || 'webkitSpeechRecognition' in window){
   
    let recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
   let taskInput = document.querySelector('#input-box');

   let tasklist = document.querySelector('#list-container');

   taskInput.addEventListener("focus",()=>{
    recognition.start();
   });



   recognition.onresult = (Event) =>{
    let translate = Event.results[0][0].transcript;
    taskInput.value = translate;
    button1();
   }
  function button1(){
    let taskText = taskInput.value.trim();
  
    
    if (taskText !==""){
        let taskitem = document.createElement("li");
        taskitem.innerHTML = `<span>${taskText}</span><button id="deletebtn" onclick="deleteTask(this)" >Delete</button> `;
        tasklist.appendChild(taskitem);
        taskInput.value = "";
    }

    recognition.onend =() =>{
         recognition.stop();
    }


   }
   function deleteTask(e){
    let liParent = e.parentNode;
    if(window.confirm("Are You Sure?")){
    tasklist.removeChild(liParent);
    }
   }

}
   
else{
    alert("no");
}