function titleChange(){
    document.title = document.getElementById("newTitle").value;
}
function loading(){
let ls = localStorage.getItem("counter1");
let ss = sessionStorage.getItem("counter2");
if (ls){
    document.getElementById("counter1").innerHTML = ls;
}
if(ss){
    document.getElementById("counter2").innerHTML = ss;
}
}
function fortnite(){
let counter1 = Number(localStorage.getItem("counter1") || 0);
counter1++;
localStorage.setItem("counter1", ""+counter1);
document.getElementById("counter1").innerHTML = counter1;
}
function csanono(){
    let counter2 = Number (sessionStorage.getItem("counter2") || 0);
    counter2++;
    sessionStorage.setItem("counter2", ""+counter2);
    document.getElementById("counter2").innerHTML = counter2;

}
