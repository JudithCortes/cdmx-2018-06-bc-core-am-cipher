debugger;
window.cipher = {
let  posicion=33;
let  str="";
let resultado="";
let code=resultado;
  //declaramos la primera funcion para encriptar
  cipher: (str,posicion) => {
      //utilizamos un loop para validar que letra ingreso como mensaje y encripta segun codigo ASCII
      for (let i=0; i<str.length; i++) {
             //se genera un for para el caso en que las letras son mayusculas
             if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
               code = (((str.charCodeAt(i)-65)+posicion)%26)+65;
             console.log(code); }

             //se genera un for para el caso en que las letras son minusculas
             else if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
               code = (((str.charCodeAt(i)-97)+posicion)%26)+97;
             console.log(code);}
             //se genera un for para el caso en que hay un espacio
             else if (str.charCodeAt(i)===32){
               code = 32;}
             //se genera un for para el caso en que hay caracteres especiales
             else if (str.charCodeAt(i)>=32 && str.charCodeAt(i)<=64){
               code = (((str.charCodeAt(i) - 32)+posicion) % 26) + 32;
             console.log(code);}

             result+=String.fromCharCode(code);
           }
            //result
     return result;

   },
    //declaramos la segunda funciòn para descifrar
descipher:(str,posicion) =>{
    //utilizamos un loop para validar que letra ingreso como mensaje y encripta segun codigo ASCII
    for (let i=0; i<str.length; i++) {
           //se genera un for para el caso en que las letras son mayusculas
           if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
             code = (((str.charCodeAt(i)-65)+posicion)%26)+65;
           console.log(code); }

           //se genera un for para el caso en que las letras son minusculas
           else if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
             code = (((str.charCodeAt(i)-97)+posicion)%26)+97;
           console.log(code);}
           //se genera un for para el caso en que hay un espacio
           else if (str.charCodeAt(i)===32){
             code = 32;}
           //se genera un for para el caso en que hay caracteres especiales
           else if (str.charCodeAt(i)>=32 && str.charCodeAt(i)<=64){
             code = (((str.charCodeAt(i) - 32)+posicion) % 26) + 32;
           console.log(code);}

           result+=String.fromCharCode(code);
         }
          //result
          return result;
 }
}
