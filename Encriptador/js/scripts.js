const encriptarTexto = document.querySelector(".inputTexto");
const mensaje = document.querySelector(".mensaje");
function btnEncriptar(){
    const textoEncriptado = encriptar(encriptarTexto.value);
    mensaje.value =textoEncriptado;
    mensaje.style.backgroundImage = "none",
    inputTexto.value = "";

}
function encriptar(stringEncriptar){
    let vectorCodigo = [["e","enter"] , ["i","imes"], ["a","ai"] , 
    ["o","ober"] , ["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();
    for ( let i = 0; i < vectorCodigo.length; i ++){
        if (stringEncriptar.includes(vectorCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(vectorCodigo[i][0],vectorCodigo[i][1])
        }
    }
    return stringEncriptar;
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(encriptarTexto.value);
    mensaje.value =textoEncriptado;
    inputTexto.value = "";

}
function desencriptar(stringDesencriptar){
    
    let vectorCodigo = [["e","enter"] , ["i","imes"], ["a","ai"] , 
    ["o","ober"] , ["u","ufat"]];
   
    
    stringDesencriptar= stringDesencriptar.toLowerCase();
    for ( let i = 0; i < vectorCodigo.length; i ++){
        if (stringDesencriptar.includes(vectorCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(vectorCodigo[i][1],vectorCodigo[i][0])
        }
    }
    return stringDesencriptar;
}
function copiar (){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value=""
    alert ("texto copiado")

}