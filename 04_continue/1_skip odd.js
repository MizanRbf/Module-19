// Skip the odd numbers
for(let n = 1; n <= 40; n++){
  if(n % 2 !== 0){
    continue;
  }
  console.log(n);
}

// Skip the even numbers

for(let i = 1; i <= 100; i++){
  if(i % 2 === 0){
    continue;
  }
  console.log(i);
}