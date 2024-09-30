// for, while, do-while

for(let i=0; i<10; i++){
    console.log(i);
    
}

console.log('--------------------------');



let a=10;

while(a<20){
    console.log(a);
    a+=2
    
}
console.log('---------------------------');
 
let b=30;
do{
    console.log(b);
    b+=2;

}while(b<20);

//print all even number from 100 to 200

    
for(let i=100; i<=200;i++){
    if(i%2===0)
    console.log(i);
    
}

//WAP  TO CHECK IF A NUMBER IS PRIME OR NOT



const num = 13;
let prime = true;
    
    for(let i=2; i<num; i++){
        if(num % i === 0){
             console.log( 'not prime');
             prime = false;
             break;
             
        }
    }
  if(prime) console.log('prime')


    //WAP  to reserve a number

    let n1= 826375;
    let reserve = 0;
    while(n1>0){
        console.log(n1, reserve);

        const d = n1%10;
        reserve = reserve*10 + d;
        n1 = parseInt(n1/10);


    

    }
    console.log(n1,reverse);

    