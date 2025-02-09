let num = 1;
let sum = 0;
while(num <= 200){
  console.log(num);
  sum = sum + num;
  if(sum >=100){
    break;
  }
  num++;
}
console.log('total numbers:', sum);