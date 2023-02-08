const textArea = document.querySelector(".box1");
const mensagem = document.querySelector(".box2");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "ele"] , ["i" , "ir"], ["a" ,"aiii"] , ["o" , "ob"], ["u" , "ufa"], ["j" , "uj"],["b" , "ub"],["g" , "ig"],["p" , "poha"],["m" , "aim"],["n" , "laele"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "ele"] , ["i" , "ir"], ["a" ,"aiii"] , ["o" , "ob"], ["u" , "ufa"], ["j" , "uj"],["b" , "ub"],["g" , "ig"],["p" , "poha"],["m" , "aim"],["n" , "laele"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}