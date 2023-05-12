function calcular(a,b,operation) {
  let valor;

  if (operation === "+") {
      return valor = a + b; 
  }
  if (operation === "-") {
     return valor = a - b; 
 }
 if (operation === "/") {
     return valor = a / b; 
 }
 if (operation === "x") {
    return valor = a * b; 
 }

 return valor;  
}

console.log(calcular(1,3,"+"));

module.exports = { calcular }