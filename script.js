function changeText() {
    document.getElementById("title").innerHTML = "DOM changing";
}
function showName() {
    let name=document.getElementById("nameInput").value;
    document.getElementById("output").innerHTML =name;
}