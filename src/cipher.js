//se declara un offset fijo
let offset=33;
let  position=offset+26;

//debugger;
//se crea objeto contenedor de dos elementos funcion
window.cipher = {
  //declaramos la primera funcion para encriptar con un parametro "string"
  cipher: (str) => {

    //se declara una variable donde se guardarà el resultado de la operacion
    let result="";
    let code=result;
      //utilizamos un loop para validar que letra ingreso como mensaje y encripta segun codigo ASCII
      for (let i=0; i<str.length; i++) {

          let num=str.charCodeAt(i);
          let a=num-65;
          let b=num-97;
          let c=num-33;

            //se genera un for para el caso en que las letras son mayusculas
            if (num>=65 && num<=90){
              code = ((a+position)%26)+65;
              console.log(code);
             }

             //se genera un for para el caso en que las letras son minusculas
             else if (num>=97 && num<=122){
               code = ((b+position)%26)+97;
               console.log(code);
             }
             //se genera un for para el caso en que hay un espacio
             else if (num===32){
               code = 32;
             console.log(code);}
             //se genera un for para el caso en que hay caracteres especiales
             else if (num>=33 && num<=64){
               code = ((c+position) % 26) + 33;
               console.log(code);
            }

             result+=String.fromCharCode(code);
           }
            //result
     return result;

   },
    //declaramos la segunda funciòn para descifrar
descipher:(str2) =>{
  //se declara una variable donde se guardarà el resultado de la operacion
  let result2="";
  let code2=result2;
    //utilizamos un loop para validar que letra ingreso como mensaje y encripta segun codigo ASCII
    for (let i=0; i<str2.length; i++) {

        let num=str2.charCodeAt(i);
        let a=num+65;
        let b=num+97;
        let c=num+33;

          //se genera un for para el caso en que las letras son mayusculas
          if (num>=65 && num<=90){
            code2 = ((a-position)%26)+65;
            console.log(code2);
           }

           //se genera un for para el caso en que las letras son minusculas
           else if (num>=97 && num<=122){
             code2 = ((b+position)%26)+97;
             console.log(code2);
           }
           //se genera un for para el caso en que hay un espacio
           else if (num===32){
             code2 = 32;
           console.log(code2);}
           //se genera un for para el caso en que hay caracteres especiales
           else if (num>=33 && num<=64){
          //code2 = ((c-position) % 26) + 33;
          code2 = ((c+position) % 26) + 33;
             console.log(code2);
          }

           result2+=String.fromCharCode(code2);
         }
          //result
   return result2;
}
}
