

El objetivo es crear un programa que ayude a transformar los mensajes que se intercambian
los amigos del cumpleañero y asì evitar que se entere de la sopresa que le tienen.

1. solicitar al usuario el mensaje a cifrar por medio de <input>
2. Guardar este "string" en una variable llamada "mensaje"
3. Insertar un offset que permita al usuario seleccionar el nùmero de posiciones que desea recorrer.
3. Insertar un botòn que permita llamar a la funciòn cifrar.
5. Declarar la funciòn cifrar.
	5.1 Funciòn cifrar es un ciclo for que permite recorrer la letra hacia la derecha el nùmero de posiciones dado.
		en funciòn de  `ASCII`, mediante `charCodeAt()`.
	5.1.1 El ciclo for tiene 3 es comparado en tres ocaciones, para el caso en el que la letra es Mayuscula,
		minuscula o caracter especial de acuerdo a `ASCII`.
6. Mostrar al usuario el mensaje cifrado con el mètodo anterior mediante `String.fromCharCode()` .
7. Solicitar al usuario un mensaje a descifrar.
8. Insertar un botòn de nombre "decifrar" que permita llamar a la funcion descifrar y revertir el proceso.
8. Declarar la funcion descifrar.
	8.1 La funcion descifrar es un ciclo for que nos permitira desplazar la letra a la izquierda.
9. Mostrar el mensaje descifrado.
