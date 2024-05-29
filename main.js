import JatekTer from "./JatekTer.js";


class Allapot{
    #lista = [false,false,true,true,false,false,true,false,true]
    constructor(){
        const jatek = new JatekTer(this.#lista);
        $(window).on("kapcsolas", event => {
            let id = event.detail; 
            /*Itt valtoztatjuk meg a program állapotát!*/
            this.#lista[id]=!this.#lista[id];
            /*Újra példányosítás*/
            this.#szomszedokValtoztatsa(id);
            new JatekTer(this.#lista);
        });

    }
    #szomszedokValtoztatsa(id){
        this.#lista[id] = !this.#lista[id+1];
        if(id%3!==0){
            this.#lista[id-1] = !this.#lista[id-1]
        }
        if(id%3!==2){
            this.#lista[id+1] = !this.#lista[id+1]
        }
        if(id>2){
            this.#lista[id-3] = !this.#lista[id-3]
        }
        if(id<6){
            this.#lista[id+3] = !this.#lista[id+3]
        }
    }
}
 

new Allapot();
