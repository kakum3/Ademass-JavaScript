 
const  materias = {
    fisica: ["Perez","Pedro","Pepito","Cofla","Maria"],
    programacion: ["Dalto","Pedro","Juan","Pepito"],
    logica:[ "Hernandez","Pedro","Juan","Cofla","Pepito","Maria"],
    quimica:["Rodriguez","Pedro","Juan","Cofla","Pepito"," Maria"],
  }
  const obtenerInformacion= (materia)=>{
  if (materias[materia] !== undefined){
    return [materias[materia],materia,materias];
  }else{
    return materias;
  }
}

const mostrarInformacion = (materia)=>{
let informacion = obtenerInformacion(materia);
if(informacion !==false){
  let profesor =informacion[0][0];
   alumnos =informacion[0];
  alumnos.shift();
  document.write(`El profesor de ${informacion[1]} es <b> ${profesor}</b> y los alumnos presentes en <b> ${informacion[1]}</b>: <b style="color:red">${alumnos}</b><br><br>`)
}
}
const cantidadDeClases = (alumno) =>{
  let informacion = obtenerInformacion();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for (info in informacion){
    
    if(informacion[info].includes(alumno)){
      cantidadTotal ++;
      clasesPresentes.push(" "+ info);
    }
  }
  return `<b style='color:blue'>${alumno}</b> está en <b>${cantidadTotal}</b> clases: <b style='color:green'>${clasesPresentes}</b><br><br>`;
}
mostrarInformacion("fisica");
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")
document.write(cantidadDeClases("Cofla"))