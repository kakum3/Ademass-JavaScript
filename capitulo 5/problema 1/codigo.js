const materias = {
  fisica: [90,6,4,"fisica"],
  matamaticas:[85,8,2,"matematicas"], 
  logica: [90,8,4,"logica"],
  quimica: [96,8,4,"quimica"],
  calculo:[90,6,3,"calculo"], 
  programacion: [75,9,2,"programacion"],
  bbdd:[98,9,1,"bbdd"], 
  algebra:[100,10,4,"algebra"]
}

const aprobo = ()=>{
  for(materia in materias){
    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajo= materias[materia][2];
    console.log(materias[materia][3]);
    if(asistencias >= 90){
      console.log("%c  Aprobado","color:green");
    }else{
      
      console.log("%c  Suspenso","color:red");
    }
    if(promedio >= 7){
      console.log("%c  Aprobado","color:green");
    }else{
      
      console.log("%c  Suspenso","color:red");
    }
    if(trabajo >= 3){
      console.log("%c  Aprobado","color:green");
    }else{
      
      console.log("%c  Suspenso","color:red");
    }
  }
}
aprobo()