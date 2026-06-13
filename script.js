function changeText() {
    document.getElementById("title").innerHTML = "DOM changing";
}
function showName() {
    let name=document.getElementById("nameInput").value;
    document.getElementById("output").innerHTML =name;
}
function addTask(){
    let task=document.getElementById("task").value;
    let li=document.createElement("li");
    li.innerHTML = task;
    document.getElementById("list").appendChild(li);
}
let a=[];

function add(){
 a.push(n.value);
 show();
 n.value="";
}

function show(){
 l.innerHTML="";
 a.forEach((x,i)=>{
  l.innerHTML+=`${x}
  <button onclick="edit(${i})">Edit</button>
  <button onclick="del(${i})">Delete</button><br>`;
 });
}

function edit(i){
 a[i]=prompt("Name",a[i]);
 show();
}

function del(i){
 a.splice(i,1);
 show();
}