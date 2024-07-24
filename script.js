function encriptar() {
    var textoOriginal = document.getElementById("txtInput").value;
    var textoEncriptado = cifrarTexto(textoOriginal, 3); // Ejemplo de cifrado César con desplazamiento 3
    //alert("Texto Encriptado:\n" + textoEncriptado);
    document.getElementById("txtResult").textContent = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById("txtResult").textContent;
    var textoOriginal = cifrarTexto(textoEncriptado, -3); // Deshacer el cifrado César con desplazamiento -3
    //alert("Texto Original:\n" + textoOriginal);
    document.getElementById("txtResult").textContent = textoOriginal;
}

function cifrarTexto(texto, desplazamiento) {
    var textoCifrado = "";
    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];
        if (char.match(/[a-z]/i)) {
            var code = texto.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + desplazamiento) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + desplazamiento) % 26) + 97);
            }
        }
        textoCifrado += char;
    }
    return textoCifrado;
}

