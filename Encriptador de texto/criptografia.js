function encriptar() {
    const texto_sin_cifrar = document.getElementById("texto_sin_cifrar").value;
    let texto_cifrado = "";
    
        for (let i = 0; i < texto_sin_cifrar.length; i++) {
        let letra = texto_sin_cifrar[i];
    
        // Solo se cifran las letras, el resto de caracteres se mantienen igual
        if (letra.match(/[a-z]/i)) {
            const codigo_ascii = letra.charCodeAt(0);
            const codigo_ascii_cifrado = codigo_ascii + 1; // Desplazamiento de una posición hacia la derecha
            letra = String.fromCharCode(codigo_ascii_cifrado);
        }
    
        texto_cifrado += letra;
        }
    
        document.getElementById("texto_cifrado").value = texto_cifrado;
    }
    
    function descifrar() {
        const texto_cifrado = document.getElementById("texto_cifrado").value;
        let texto_descifrado = "";
        
            for (let i = 0; i < texto_cifrado.length; i++) {
            let letra = texto_cifrado[i];
        
            // Solo se descifran las letras, el resto de caracteres se mantienen igual
            if (letra.match(/[a-z]/i)) {
                const codigo_ascii = letra.charCodeAt(0);
                const codigo_ascii_descifrado = codigo_ascii - 1; // Desplazamiento de una posición hacia la izquierda
                letra = String.fromCharCode(codigo_ascii_descifrado);
            }
        
            texto_descifrado += letra;
            }
        
            document.getElementById("texto_sin_cifrar").value = texto_descifrado;
            document.getElementById("texto_descifrado").value = texto_descifrado;
    }
    