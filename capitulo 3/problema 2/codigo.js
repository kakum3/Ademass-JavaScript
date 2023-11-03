class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  instalar() {
    if (this.instalada == false) {
      this.instalada = true;
      alert("app instalada")
    }
  }
  desinstalar() {
    if (this.instalada == true) {
      this.instalada = false;
      alert("app desinstalada")
    }
  }
  abrir() {
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("app iniciada");
    }
  }
  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      this.iniciada = false;
      alert("app cerrada");
    }
  }
  appInfo(){
    return `
      Descargas: <b>${this.descargas}</b><br>
      Puntuacion: <b>${this.puntuacion}</b><br>
      Peso: <b>${this.peso}</b><br>
    
    `
  }
};
ap1 = new App("16.000", "5 estrellas", "900mb");
ap2 = new App("14.000", "4 estrellas", "800mb");
ap3 = new App("17.000", "5 estrellas", "700mb");
ap4 = new App("18.000", "3 estrellas", "600mb");
ap5 = new App("11.000", "2 estrellas", "900mb");
ap6 = new App("19.000", "4 estrellas", "800mb");
ap7 = new App("12.000", "3 estrellas", "700mb");

document.write(`
${ap1.appInfo()}<br>
${ap2.appInfo()}<br>
${ap3.appInfo()}<br>
${ap4.appInfo()}<br>
${ap5.appInfo()}<br>
${ap6.appInfo()}<br>
${ap7.appInfo()}<br>
`)