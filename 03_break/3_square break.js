// square numbers
for(let i = 1; i <= 100; i++){
  if(Math.sqrt(i) % 1 === 0){
    console.log(i);
  }
}

// using break

for(let n = 1; n <= 100; n++){
  if(Math.sqrt(n) % 1 === 0){
    console.log(n);
    break;
  }
  console.log(n);
}