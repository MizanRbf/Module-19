// sum of all the odd numbers

let n = 81;
let sum = 0;
while(n <= 131){
  if(n % 2 === 1){
    console.log(n);
    sum = sum + n
  }
  n++;
}
console.log('sum of all the odd numbers',':', sum )

// sum of all the even numbers

let n2 = 206;
let sum2 = 0;
while(n2 <= 311){
  if(n2 % 2 === 0){
    console.log(n2);
    sum2 = sum2 + n2;
  }
  n2++;
}
console.log('sum of all the even numbers',':', sum2 )