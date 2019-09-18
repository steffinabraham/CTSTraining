
var i=0;
var count=0;

var func=setInterval(function(){
    count++;
    console.log('HELLO'),1000;
    


if(count=5)
{
    clearInterval(func);
    console.log('DONE');

}
},5000);



