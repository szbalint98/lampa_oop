export default class Lampa{
    #allapot = false;
    #id = 0;
    #szuloELEM;
    #divElem;
    constructor(allapot,id,szuloELEM){
        this.#allapot = allapot;
        this.#id = id;
        this.#szuloELEM = szuloELEM;
        this.#megjelenit();
        this.#divElem=this.#szuloELEM.children("div:last-child");
        this.#szinBeallit();

        this.#divElem.on("click", () => {
           this.#kattintasTrigger("kapcsolas");
           console.log(this.#id);
        })
    
    }

    setAllapot(allapot){
        this.#allapot = allapot
    }

    #megjelenit(){
        let txt = `<div class="lampa">        
                   </div> `
        this.#szuloELEM.append(txt); 
    }
    #szinBeallit(){
        /*A elem állapotától függően hozzáadja a .felkapcs class-t */
        if(this.#allapot){
            this.#divElem.addClass("felkapcs")
        }
    }


    #kattintasTrigger(kapcsolas){
        const e = new CustomEvent(kapcsolas, {detail:this.#id})
        window.dispatchEvent(e);
    }


}