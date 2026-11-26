function PerfectNumber(number){
let total =0;
let count=1;
while(count<number){
  if (number%count==0){
      total+=count;     
    }
  count+=1;
}                     
  if (total==number){
    return true;
   }
   else{
   return false;
   }
}
const x = PerfectNumber(28);
console.log(x);
