var f = false; //bat hoac tat
var v = 0;
var a =0;

function quaycanhquat(){
    if (f == true){
    var canhquat = document.getElementById("canhquat");
    canhquat.style.transform = "rotate("+v+"deg)";
    v+=a;
    // lan  1 v=0 , a=5 => v=5
    // lan  1 v=5 , a=5 => v=10
    }

}
setInterval(quaycanhquat,10);

function Off(){
    f=false;
    v=0;
    a=0;
}
function f1(){
    //check neu f la false nghia tat thi se set lai bang true => bat
    if(f==false){
        f=true;
    }
    v=0;
    a = 5;
}

function f2(){
    if (f==false){
        f=true;
v=0;
a=20;
    }
}
function f3(){
    if (f==false){
        f=true;
    }
    v=0;
    a=30;
}