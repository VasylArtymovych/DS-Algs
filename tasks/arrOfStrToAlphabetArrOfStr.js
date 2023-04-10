var number=function(array){
  if(array.length === 0) return [];
  const alfabet = "abcdefghijklmnopqrstuvwxyz";
  const map = new Map();
  
  alfabet.split('').forEach((ch, i)=>{
    map.set((ch), i+1)
  })
  
  return array.map(el => {
    return ` ${map.get(el)}: ${el}`
  })
}

console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"]