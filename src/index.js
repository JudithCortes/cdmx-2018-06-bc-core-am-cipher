//almacenamos en una variable el mensaje ingresado por el usuario
let message=document.getElementById("message");
//creamos una variable para llamar el string ingresado para descifrar
let newMessage=document.getElementById("newMessage");
let boton=document.getElementById("encriptar");
let print=document.getElementById("encrypt");
let boton2=document.getElementById("buttondescipher");

//declaramos una variable para almacenar el string retornado al encriptar y otra para poder trabajarlo como number
//let result= "";
//let code = result;
//let result2= "";
//let code2 = result2;

//declaramos una variable para almacenar el string retornado al encriptar y otra para poder trabajarlo como number
boton.addEventListener("click",encriptar);
//creamos una variable para llamar al boton2 descifrar
boton2.addEventListener("click",printDecryptedText);

function encriptar(){
  encrypt.innerHTML=window.cipher.cipher(resultado);
}

function printDecryptedText(){
  alert("funciona");
}
