var obj = {
    name: 'Trần Minh Hiếu',
    age:18,
    mark:6,
    girlFriend:['Ngọc Trinh','Thúy Kiều','Thúy Vân'],
    eat:function (){
        console.log(this.name+" đang ăn ..");
    }
};
console.log(obj.name);
obj.name='Top1 China';
console.log(obj.name);
for(var i=0;i<obj.girlFriend.length;i++){
console.log(obj.girlFriend[i]);
}
obj.eat();
var f=0;
function demo() {
    var x = document.getElementById("abc");
//x.innerText="Xin chào T2207A";
//x.innerHTML+='<i>Hello world!</i>';
//x.style.color="red";
//x.style.fontSize=f+'px';
    x.style.transform = 'rotate(' + f + 'deg)';
    f += 10;
}
function quayTron() {
    setInterval(demo, 1);
}

var m=9,s=59;
function timer(){
    var min =document.getElementById("min");
    var sec=document.getElementById("sec");
    min.innerText=m;
    sec.innerText=s;
    s--;
    if(s<0){
        s=59;
        m--;
    }
    if(m<0){
        clearInterval(si);
    }
}
var si;
function startTimer(){
    if(m>0){
   si= setInterval(timer,1000);
    }
}