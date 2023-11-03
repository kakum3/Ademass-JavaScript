const suma = (num1, num2)=>{
  return parseInt(num1) + parseInt(num2)
}
const restar = (num1, num2)=>{
  return parseInt(num1) - parseInt(num2)
}
const multi = (num1, num2)=>{
  return parseInt(num1) * parseInt(num2)
}
const divi = (num1, num2)=>{
  return parseInt(num1) / parseInt(num2)
}

alert("Que operacion deseas realizar?");
let operacion = prompt("1 : suma, 2 : resta, 3: multiplicar, 4: dividir");

if(operacion == 1){
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  resultado = suma(numero1,numero2);
  alert(`El resultado es: ${resultado}`);
}
else if(operacion == 2){
  let numero1 = prompt("primer numero para restar");
  let numero2 = prompt("segundo numero para restar");
  resultado = restar(numero1,numero2);
  alert(`El resultado es: ${resultado}`);

}
else if(operacion == 3){
  let numero1 = prompt("primer numero para multiplicar");
  let numero2 = prompt("segundo numero para multiplicar");
  resultado = multi(numero1,numero2);
  alert(`El resultado es: ${resultado}`);

}
else if(operacion == 4){
  let numero1 = prompt("primer numero para dividir");
  let numero2 = prompt("segundo numero para dividir");
  resultado = divi(numero1,numero2);
  alert(`El resultado es: ${resultado}`);

}
else{alert("no se encontro operacion")}