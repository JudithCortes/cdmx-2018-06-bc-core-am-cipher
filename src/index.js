//almacenamos en una variable el mensaje ingresado por el usuario
let message=document.getElementById("message");
//creamos una variable para llamar el string ingresado para descifrar
let newMessage=document.getElementById("newMessage");
let boton=document.getElementById("buttoncipher");
let print=document.getElementById("encrypt");
let boton2=document.getElementById("buttondescipher");
let print2=document.getElementById("decrypt");
//declaramos una funcion para imprimir resultado de cipher
function encriptar(){
  let mensaje=message.value;
  print.innerHTML=window.cipher.cipher(mensaje);
}
//declaramos una funcion para imprimir resultado de descipher
function descifrar(){
  let nuevoMensaje=newMessage.value;
  let imprime1=window.cipher.descipher(newMessage);
  document.getElementById('encrypt').innerHTML=imprime1;
}
//declaramos una variable para almacenar el string retornado al encriptar y otra para poder trabajarlo como number
boton.addEventListener("click",encriptar);
//creamos una variable para llamar al boton2 descifrar
boton2.addEventListener("click",descifrar);
