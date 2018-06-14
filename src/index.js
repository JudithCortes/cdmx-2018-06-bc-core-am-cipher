//se crea una variable que llama al boton
let boton=document.getElementById("buttoncipher");
//se crea una variable que llama al boton descifrar
let boton2=document.getElementById("buttondescipher");


//declaramos una funcion para imprimir resultado de cipher
const encryptMessage = () =>{
  //declaramos variable dentro de la funcion para guardar el valor "string" ingresado por el usuario
  let message=document.getElementById("message").value;
  //declaramos una variable para almacenar el resultado retornado del elemento funcion cipher del objeto window.cipher
 let print1=window.cipher.cipher(message);
  //imprimimos en la variable print el resultado de la funcion elemento del objeto window.cipher con parametro mensaje
  document.getElementById("encrypt").innerHTML=print1;
}

//declaramos una funcion para imprimir resultado de descipher
const decryptMessage = () =>{
  //declaramos variable para almacenar el valor "string" ingresado por el usuario
  let newMessage=document.getElementById("newMessage").value;
  //declaramos una variable para almacenar el resultado retornado del elemento funcion descipher del objeto window.cipher
  let print2=window.cipher.descipher(newMessage);
  //se imprime en "encrypt" el valor de la variable imprime1
  document.getElementById("decrypt").innerHTML=print2;
}
boton.addEventListener("click",encryptMessage);
//creamos una variable para llamar al boton2 descifrar
boton2.addEventListener("click",decryptMessage);
