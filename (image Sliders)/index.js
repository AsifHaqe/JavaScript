var Previous = ["img/img2.jpg","img/img3.jpg","img/img4.jpg"]
var Img = document.querySelector("img")

var count = 0;

function prev(){
    count--
    if(count >= Previous.length - 1){
        count = 0;
        Img.src = Previous[count];
    }
    else{
        Img.src = Previous[count];
    }
}
function next(){
    count++
    if(count >= Previous.length){
        count = 0;
        Img.src = Previous[count];
    }
    else{
        Img.src = Previous[count];
    