// sum of odd numbers
let sum = 0;
for(let n = 91; n <= 129; n++) {
  if(n % 2 === 1){
    console.log(n);
  }
  sum = sum + n;
}
console.log('sum of all the odd numbers:', sum)


// sum of even numbers
let sum2 = 0;
for(let n2 = 51; n2 <= 85; n2++){
  if(n2 % 2 === 0){
    console.log(n2);
    sum2 = sum2 + n2;
  }
}
console.log('sum of all the even numbers:', sum2)


// sum of odd numbers 
let sum3 = 0;
for(let n3 = 91; n3 <= 129; n3+=2) {
  console.log(n3);
  sum3 = sum3 + n3;
}
console.log('sum of all the even numbers:', sum3);

// sum of even numbers

let sum4 = 0;
for(let n4 = 52; n4 <= 84; n4 += 2){
  console.log(n4);
    sum4 = sum4 + n4;
}
console.log('sum of all the even numbers:', sum4)
