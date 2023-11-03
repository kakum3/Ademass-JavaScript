let  materias = {
  fisica: ["Perez","Pedro","Pepito","Cofla","Maria"],
  programacion: ["Dalto","Pedro","Juan","Pepito"],
  logica:[ "Hernandez","Pedro","Juan","Cofla","Pepito","Maria"],
  quimica:["Rodriguez","Pedro","Juan","Cofla","Pepito"," Maria"],
}

const inscribir = (alumno,materia) =>{
  personas = materias[materia];

  

  if (personas.length >= 21) {
    document.write(`Lo siento ${alumno},las clases de ${materia} ya estan llenas. <br><br>`)
    
  }else{
    personas.push(alumno)
    if(materia == "fisica"){
      materias = {
        fisica: personas,
        programacion: materias['programacion'],
        logica: materias['logica'],
        quimica: materias['quimica']
      }
    }
    else if(materia == "progrmacion"){
        materias = {
          fisica: materias['fisica'],
          programacion: personas,
          logica: materias['logica'],
          quimica: materias['quimica'],
      }
    }
    else if(materia == "logica"){
      materias = {
        fisica: materias['fisica'],
        programacion: materias['progrmacion'],
        logica: personas,
        quimica: materias['quimica'],
    }
  }
  else if(materia == "quimica"){
    materias = {
      fisica: materias['fisica'],
      programacion: materias['progrmacion'],
      logica:materias['logica'] ,
      quimica: personas,
  }
}

      
document.write(`Felicidades ${alumno} te inscribiste a la materia de ${materia}, <br><br>`)
    }
  }



inscribir("pedrito","fisica");
inscribir("juan","fisica");
inscribir("ramiro","fisica");
inscribir("luis","fisica");
inscribir("paco","fisica");
inscribir("lucia","fisica");
inscribir("antonio","fisica");
inscribir("kika","fisica");
inscribir("linda","fisica");
inscribir("samu","fisica");
inscribir("isma","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");

