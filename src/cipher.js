let  posicion=33;

debugger;
window.cipher = {
  //declaramos la primera funcion para encriptar
  cipher: (str) => {
    let result="";
    let code=result;
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
descipher:(str2) =>{
  let result2="";
  let code2=result2;
    //utilizamos un loop para validar que letra ingreso como mensaje y encripta segun codigo ASCII
    for (let i=0; i<str2.length; i++) {
           //se genera un for para el caso en que las letras son mayusculas
           if (str2.charCodeAt(i)>=65 && str2.charCodeAt(i)<=90){
             code2 = (((str2.charCodeAt(i)-65)+posicion)%26)+65;
           console.log(code); }

           //se genera un for para el caso en que las letras son minusculas
           else if (str2.charCodeAt(i)>=97 && str2.charCodeAt(i)<=122){
             code2 = (((str2.charCodeAt(i)-97)+posicion)%26)+97;
           console.log(code);}
           //se genera un for para el caso en que hay un espacio
           else if (str2.charCodeAt(i)===32){
             code2 = 32;}
           //se genera un for para el caso en que hay caracteres especiales
           else if (str2.charCodeAt(i)>=32 && str2.charCodeAt(i)<=64){
             code2 = (((str2.charCodeAt(i) - 32)+posicion) % 26) + 32;
           console.log(code);}

           result2+=String.fromCharCode(code2);
         }
          //result
          return result2;
 }
}
