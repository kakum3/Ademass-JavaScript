class Calculadora{
  constructor(){


  }
   suma  (num1, num2){
    return parseInt(num1) + parseInt(num2)
  }
   restar (num1, num2){
    return parseInt(num1) - parseInt(num2)
  }
   multiplicar  (num1, num2){
    return parseInt(num1) * parseInt(num2)
  }
  dividir  (num1, num2){
    return parseInt(num1) / parseInt(num2)
  }
  exponente(num1,exp){
    return num1 ** exp
  }
  raizCuadrada(num){
  return  Math.sqrt(num)
  }
  raizCubica(num){
  return  Math.cbrt(num);
  }
}

const calculadora = new Calculadora();

alert("Que operacion deseas realizar?");
let operacion = prompt("1 : suma, 2 : resta, 3: multiplicar, 4: dividir , 5:exponente, 6:raizCuadrada, 7:raizCubica");

if(operacion == 1){
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  let resultado =calculadora.suma(numero1,numero2);
  alert(`El resultado es: ${resultado}`);
}
else if(operacion == 2){
  let numero1 = prompt("primer numero para restar");
  let numero2 = prompt("segundo numero para restar");
   resultado = calculadora.restar(numero1,numero2);
  alert(`El resultado es: ${resultado}`);

}
else if(operacion == 3){
  let numero1 = prompt("primer numero para multiplicar");
  let numero2 = prompt("segundo numero para multiplicar");
  resultado = calculadora.multi(numero1,numero2);
  alert(`El resultado es: ${resultado}`);

}
else if(operacion == 4){
  let numero1 = prompt("primer numero para dividir");
  let numero2 = prompt("segundo numero para dividir");
  resultado = calculadora.divi(numero1,numero2);
  alert(`El resultado es: ${resultado}`);

}
else if(operacion == 5){
  let numero1 = prompt("primer numero para exponente");
  let exp = prompt("segundo numero para expo");
  resultado = calculadora.exponente(numero1,exp);
  alert(`El resultado es: ${resultado}`);

}
else if(operacion == 6){
  let num = prompt(" numero para raiz cuadrada");

  resultado = calculadora.raizCuadrada(num);
  alert(`El resultado es: ${resultado}`);

}
else if(operacion == 7){
  let num = prompt(" numero para raiz cubica");

  resultado = calculadora.raizCubica(num);
  alert(`El resultado es: ${resultado}`);

}
else{alert("no se encontro operacion")}