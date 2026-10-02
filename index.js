function titleChange(){
    document.title = document.querySelector("input").value;
}
function loading(){
let ls = localStorage.getItem("counter");
let ss = sessionStorage.getItem("counter");
if (ls){
    document.getElementById("counter").innerHTML = ls;
}
if(ss){
    document.getElementById("counter").innerHTML = ss;
}
}
function fortnite(){
let football = JSON.parse(fortnite);

}
