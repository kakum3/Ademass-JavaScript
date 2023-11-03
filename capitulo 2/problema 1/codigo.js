let edad = prompt('Que edad Tienes?:');
let tiketGratis = false;

const validar = (time)=>{
  if(edad > 18){
    if(time>= 2 && time < 7 && tiketGratis == false){
      alert(`Son las ${time} puedes pasar gratis por ser el primero despues de las 2am`);
      tiketGratis = true ;
    }else{alert(` Son las ${time} hrs .Puedes pasar pero tienes que pagar la entrada`)}

  }else{alert('Lo siento no tienes edad para pasar')}
}

validar(23);
validar(24);
validar(0.2);
validar(0.6);
validar(1);
validar(1.3);
validar(2);
validar(3);