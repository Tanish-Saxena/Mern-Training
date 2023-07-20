// const list = [1, 2, 3, 4, 5];

// const prod = list.reduce((accumulator, currentNumber) => {
//   return accumulator * currentNumber;
// }, 1);

// console.log(prod);



const transacactions= [
  {type:"income",amount:1500},
  {type:"expen",amount:500},
  {type:"income",amount:1600},
  {type:"expen",amount:300},
  {type:"income",amount:1100}
]

const result=transacactions.reduce((acc,transac)=>{
  if(transac.type==="income"){
    acc+=transac.amount;
  }
  else if(transac.type==="expen"){
    acc-=transac.amount;
  }
  return acc;
}, 0);
console.log(result);