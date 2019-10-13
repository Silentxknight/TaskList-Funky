// js work

const taskList=document.querySelector('.collection');
const addBtn=document.querySelector('#addBtn');
const inputs=document.querySelector('#ins');
const delAll=document.querySelector('#del');

//! ----functions----
 loadAll();
 function loadAll(){
  //add Tasks
  addBtn.addEventListener('click',addTask);
  //del tasks
  delAll.addEventListener('click',delAllTasks);
  //removing tasks
  taskList.addEventListener('click',removeTasks);

 }




//*add new task
function addTask(e){
//creating Element
const li=document.createElement('li');
//adding class name
li.className='collection-items';
//adding to tasklists
li.appendChild(document.createTextNode(inputs.value));
//creating close button
const clso=document.createElement('button');
//adding class to button
clso.className='close'
//adding attributes 
clso.setAttribute('type','button');
clso.setAttribute('aria-label','Close');
// creating span
const spa=document.createElement('span');
//adding attributes
spa.appendChild(document.createTextNode('×'))
spa.setAttribute('aria-hidden','true')
//appenidng span to button
clso.appendChild(spa)
//ading close button to task
li.appendChild(clso);

//appending to Dom
taskList.appendChild(li);
//storing in LocalStorage
storeInLS(inputs.value);
//reset input
inputs.value=' ';
}

//*Storing in LS
function storeInLS(tk){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(tk);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


//*Delete All  Tasks
function delAllTasks(e){
if(confirm('Are You Sure ?')){
while(taskList.firstChild){
taskList.removeChild(taskList.firstChild);
}}
localStorage.clear();
}

//*Removing tasks
function removeTasks(e){

  if(e.target.parentElement.classList.contains('close')){
  //---changing attributes for new style
  e.target.parentElement.parentElement.style.backgroundColor="#d9ded7";
  //method for saving text
  let tex=e.target.parentElement.parentElement.innerHTML;
  //method to change the format
  e.target.parentElement.parentElement.innerHTML=`<del>`+tex+`</del>`;
  //button text change
  let con=document.querySelector(".close");
  con.style.display="none";
   
 
  // e.target.parentElement.parentElement.remove();
  }
  // localStorage.removeItem(e.target.parentElement.parentElement)
}