//window.cipher = {
let mensaje=document.getElementById("mensaje").value;
let posiciones=document.getElementById("posiciones").value;

   function encode(posiciones,mensaje){
    let resultado = ""; //code;
    let codigo = resultado;
  for (let i=0; i<mensaje.length;i++){
    if (mensaje.charCodeAt(i)>=65 && mensaje.charCodeAt(i)<=90){
      codigo = (((mensaje.charCodeAt(i)-65)+posiciones)%26)+65;
    }
    else if (mensaje.charCodeAt(i)>=97 && mensaje.charCodeAt(i)<=122){
      codigo = (((mensaje.charCodeAt(i)-97)+posiciones)%26)+97;
    }
    else if (mensaje.charCodeAt(i)>=32 && mensaje.charCodeAt(i)<=64){
      codigo = (((mensaje.charCodeAt(i)-32)+posiciones)%26)+32;
    }
    resultado=resultado+String.fromCharCode(codigo);
  }
  return resultado;

}
function imprimirCodigo(){document.getElementById("boton2").innerHTML=" Còdigo: " encode;}
//};
