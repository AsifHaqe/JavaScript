let count = 0;
document.getElementById("increment").onclick = function(){
    count -= 1;
    document.getElementById("Label-id").innerHTML=count;
}
document.getElementById("reset").onclick = function(){
    count = 0;;
    document.getElementById("Label-id").innerHTML = count
}
document.getElementById("decriment").onclick = function(){
    count += 1;
    document.getElementById("Label-id").innerHTML=count; 
}