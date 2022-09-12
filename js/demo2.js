var t=100;
var x=1;
function demo(){
    var xyz=document.getElementById("demo2");
    xyz.innerText +=(" " +t -x) ;
    t--;
    x++;
    if(t<=0){
        clearInterval(at);
    }
}
// setTimeout(demo,5000); // callback function
var at = setInterval(demo,1000);

