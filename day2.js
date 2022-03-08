let i;
for(i=0;i<10;i++)
    {
console.log(i);
    }

    for(let j=1; j<10;j++)
    {
       
        console.log("19*" + j +"="+ 19*j);
    }
    
    let k=0
for( ; k<10; k++)
{
    console.log("hello");
}
let j=0;
for( ; j<10; )
{
    console.log ("bye");
    j++;
}

let r=0;
while (i<10)
{
console.log("value of r is " ,r);
r++;
}
console.log("outside loop");
let d= 0;
do {
   console.log("value of d is", d);
    d++;
 }
while (d < 10);

 for(let d=1;d<5;d++){
  for( let j=0;j<2;j++){
    console.log("the value of i is "+ d +" and value of j is "+ j);
  }
 }
 
 
 
 
 
 
 
 
 
 
 
 let a=3;
 let b=4;
 function add(){
  console.log(a+b);
}

 function sub(a,b){
   console.log(a-b);
 }

function mul(a,b){
   return a*b;
}

 const div = (a,b) => {
  return a/b;
 }


add();
sub(8,5);
console.log(mul(4,8));
 console.log(div(9,3));
