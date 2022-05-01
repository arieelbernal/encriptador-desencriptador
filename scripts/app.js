window.addEventListener("load", function(){
    let input = document.getElementById("entrada");
    let encriptador = document.getElementById("encriptar");
    let desencriptador = document.getElementById("desencriptar");
    let llaves= {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };
    let encriptar = (texto) => {
        texto = texto.toLowerCase();
        let resultado=""
        for(let s of texto){
            switch (s) {
                case "a":
                    resultado += llaves.a; 
                    break;
                case "e":
                    resultado += llaves.e;
                    break;   
                case "i":
                    resultado += llaves.i;
                    break;
                case "o":
                    resultado += llaves.o;
                    break;
                case "u":
                    resultado += llaves.u;
                    break;         
                default:
                    resultado += s;
                    break;
            }
        }
        return resultado;
    };
    let desencriptar = (texto) => {
        for (let i = 0; i < 5; i++) {
            texto = texto.replaceAll(Object.values(llaves)[i],`${Object.keys(llaves)[i]}`);
        }
        return texto;
    };

    encriptador.addEventListener("click", ()=>{
        console.log(encriptar(input.value));
    });

    desencriptador.addEventListener("click", ()=>{
        console.log(desencriptar(input.value));
    });
});
