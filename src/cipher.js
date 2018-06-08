function cifrado (mensaje, n){
  let mensaje=document.getElementById("mensaje").value;
  let n=document.getElementById("n").value;
  let resultado = ""; //code;
  let code = resultado;
  for (let i=0; i<mensaje.length;i++){
    if (mensaje.charCodeAt(i)>=65 && mensaje.charCodeAt(i)<=90){
      code = (((mensaje.charCodeAt(i)-65)+n)%26)+65;
    }
    else if (mensaje.charCodeAt(i)>=97 && mensaje.charCodeAt(i)<=122){
      code = (((mensaje.charCodeAt(i)-97)+n)%26)+97;
    }
    else if (mensaje.charCodeAt(i)===32){
      code = 32;
    }
    resultado+=String.fromCharCode(code);
  }
  return resultado;
}
   const imprimir=resul()
 function resul(){
 var imprime = document.getElementById("cifrar").value;
 document.getElementById("mensaje").innerHTML=(cifrado(imprime),n);
}
