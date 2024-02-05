// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//Requisitos:
// Deve funcionar apenas com letras minúsculas ok
// Não devem ser utilizados letras com acentos nem caracteres especiais ok
// Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original. ok

// "pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"
// "parabens por encarar esse desafio e ter finalizado ele com sucesso!"

const map = new Map([
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
])

let campo = document.getElementById("campo");

function codificar(){
    let campo = document.getElementById("campo");
    let campoErro = document.getElementById("error__message");
    let campoOutput = document.getElementById("output");

    let texto = campo.value.trim();
    campo.value = texto;

    //text is blank
    if(texto == ""){
        let message = "Você deve digitar algo para criptografar!";
        campoErro.innerHTML = message;
        campoErro.style.display = "block";
        campoOutput.style.display = "none";
    }
    //text is not only lowercase
    else if(!isStringValid(texto)){
        let message = "Verifique se o texto é somente minúsculo";
        campoErro.innerHTML = message;
        campoErro.style.display = "block";
        campoOutput.style.display = "none";
    }
    else{
        campoErro.style.display = "none";
        campoOutput.style.display = "block";

        const keys = map.keys();
        const values = map.values();

        for (let i = 0; i < map.size; i++) {
            let key = keys.next().value;
            let value = values.next().value;

            texto = texto.replaceAll(key, value);
        }

        campoOutput.innerHTML = texto;
    }
    
}

function decodificar(){
    let campo = document.getElementById("campo");
    let campoErro = document.getElementById("error__message");
    let campoOutput = document.getElementById("output");

    
    let texto = campo.value.trim();
    campo.value = texto;

    //text is blank
    if(texto == ""){
        let message = "Você deve digitar algo para descriptografar!";
        campoErro.innerHTML = message;
        campoErro.style.display = "block";
        campoOutput.style.display = "none";
    }
    else if(!isStringValid(texto)){
        let message = "Verifique se o texto é somente minúsculo";
        campoErro.innerHTML = message;
        campoErro.style.display = "block";
        campoOutput.style.display = "none";
    }

    else{
        campoErro.style.display = "none";
        campoOutput.style.display = "block";

        const keys = map.keys();
        const values = map.values();

        for(let i = 0; i < map.size; i++){

            let key = keys.next().value;
            let value = values.next().value;

            texto = texto.replaceAll(value, key);

        }
        campoOutput.innerHTML = texto;
        console.log(campo.value)
    }
    
}

function isStringValid(string){
    const regex1 = /^[a-z ]+$/; 

    return regex1.test(string);
}
