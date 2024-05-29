import Lampa from "./Lampa.js";

export default class JatekTer {
  #db = 0;
  #lista;
  #meret = 0;
  #lepes = 0;
  constructor(lista) {
    const szuloELEM = $(".jatekter");
    szuloELEM.empty();
    this.#lista = lista;
    this.#lista.forEach((element, index) => {
      new Lampa(element, index, szuloELEM);
    });
  }

  #setLista() {


  }
  #szomszedokKeresese() {


  }

  #init() {


  }

  #ellenorzes() {

  }
}
