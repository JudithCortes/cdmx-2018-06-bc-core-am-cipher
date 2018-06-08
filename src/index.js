let mensaje=document.getElementById("mensaje").value;
let posiciones=document.getElementById("posiciones").value;
const cifrar=(posiciones,mensaje) =>{

let resultado = "";
let cifrado = resultado;

  for (let i=0; i<mensaje.length;i++){

                    if (mensaje.charCodeAt(i)>=65 && mensaje.charCodeAt(i)<=90){
                      cifrad=(((mensaje.charCodeAt(i)-65)+posiciones)%26)+65;  }


                    else if (mensaje.charCodeAt(i)>=97 && mensaje.charCodeAt(i)<=122){
                      cifrado = (((mensaje.charCodeAt(i)-97)+posiciones)%26)+97;}

                    else if (mensaje.charCodeAt(i)>=32 && mensaje.charCodeAt(i)<=64){
                      cifrado = (((mensaje.charCodeAt(i)-32)+posiciones)%26)+32;}

  resultado+=String.fromCharCode(cifrado);

                                      }
                                      return resultado;
                                      }
console.log(cifrar(posiciones,mensaje));
