class Celular {
  constructor(color, peso, rdp, rdc, ram){
    this.color  = color   ;
    this.peso = peso  ;
    this.rdp =  rdp ;
    this.rdc =  rdc ;
    this.ram =  ram ;
    this.encendido = false;
  }
  botonEncendido(){
    if(this.encendido == false){
      alert("mobil encendido");
      this.encendido = true;
    }else{
      alert("mobil apagado")
      this.encendido=false;
      
        }
  }

  reiniciar(){
    if(this.encendido == true){
      alert("Reiniciando mobil")
    }else{alert("el mobil esta apagado")}
  }

  tomaFoto(){
    alert(`Foto tomada con una resolucion de ${this.rdc}`)
  }

  grabarVideo(){
    alert(`video grabado con un resolucion de ${this.rdp}`)
  }

  mobileInfo(){
    return `
    Color : <b>${this.color}</b><br>
    Peso  : <b>${this.peso}</b><br>
    
    Resolucion de camara : <b>${this.rdc}</b><br>
    Resolucion de pantalla : <b>${this.rdp}</b><br>
    Memoria Ram : <b>${this.ram}</b><br>
    `
  }
}

class MobilAltaGama extends Celular{
  constructor(color, peso, rdp, rdc, ram, rdce){
    super(color, peso, rdp, rdc, ram);
    this.resolucionDeCamara = rdce;
  }
  grabarVideoLento (){
    alert("Estas grabando a camara lenta")
  }
  reconocimientoFacial(){
    alert("Iniciando reconocimiento facial")
  }
  infoAltaGama(){
    return this.mobileInfo() + `Resolucion de camara trasera: <b>${this.resolucionDeCamara}</b><br>`
  }
}

let mobil1 = new Celular('rojo','100grm', '5 pulgadas','full hd','2Gb');
let mobil2 = new Celular('negro','150grm', '5.5 pulgadas','full hd','1Gb');
let mobil3 = new Celular('azul','200grm', '5 pulgadas','full hd','2Gb');

let mobilAg1 = new MobilAltaGama('rojo','100g', '6pd', 'hdmi', '4Gb',' hd');
let mobilAg2 = new MobilAltaGama('negro','100g', '5.8pd', '4k', '4Gb',' hd');

// mobil1.botonEncendido();
// mobil1.tomaFoto();
// mobil1.grabarVideo();
// mobil1.reiniciar();
// mobil1.botonEncendido();
// document.write(`${mobil1.mobileInfo()} <br>
// ${mobil2.mobileInfo()}
// <br>
// ${mobil3.mobileInfo()}
// `)

document.write(`${mobilAg1.infoAltaGama()}
<br> ${mobilAg2.infoAltaGama()}`)

