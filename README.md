Cifrado César
Preámbulo
Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo (como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides crear una aplicación que te permita enviar mensajes cifrados y que las demás personas (partícipes de la fiesta) puedan tener una interfaz para descifrarlo. Así que ahora te toca aplicar tus superpoderes sunglasses

Introducción
El cifrado César es uno de los primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

caeser-cipher

El emperador Julio César lo usaba para enviar órdenes a sus generales en los campos de batalla, es una de las técnicas más simples y más usadas para cifrar un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
Actualmente todos los cifrados de sustitución alfabética simple, se descifran con facilidad y en la práctica no ofrece mucha seguridad en la comunicación, pero el cifrado César muchas veces puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

Objetivos
El objetivo principal de aprendizaje de este proyecto es tener tu primera experiencia construyendo una aplicación web usando tus conocimientos de User Experience Designer y de JavaScript developer. Esto incluye diseñar un producto pensando en los usuarios, construir una interfaz, escuchar eventos básicos del DOM, escribir lógica para llevar a cabo el cifado/descifrado, tests unitarios básicos para comprobar (y documentar) dicha lógica, y finalmente manipulación del DOM para mostrar (escribir) los resultados.

Para completar el proyecto tendrás que familiarizarte con conceptos como valores, tipos, variables, control de flujo y tests unitarios.

Esperamos que en este proyecto puedas pensar en el usuario, entendiendo quién y cuál(es) es su nececidad. La creación de este producto va a resolver esa(s) necesidad(es) y qué mejor que hacerlo de la mejor forma. Que sea totalmente lo que nuestro usuario necesita.

También es importante que puedas organizarte teniendo en cuenta el tiempo y los recursos disponibles. Es la primera vez que evaluaremos tus habilidades blandas, pero debes considerar que son habilidades que probablemente ya has utilizado en distintas experiencias de tu vida. Lo importante es que realices el proyecto de manera integral.

Consideraciones generales
La lógica del proyecto debe estar implementada completamente en JavaScript (ES6). En este proyecto NO está permitido usar librerías o frameworks, sólo vanilla JavaScript.

No se debe utilizar la pseudo-variable this.

Los tests unitarios deben cubrir un mínimo del 70% de statements, functions y lines, y un mínimo del 50% de branches. El boilerplate ya contiene el setup y configuración necesaria para ejecutar los tests (pruebas) así como code coverage para ver el nivel de cobertura de los tests usando el comando npm test.

El boilerplate incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio que contiene el boilerplate.

El boilerplate contiene una estructura de archivos como punto de partida así como toda la configuración de dependencias y tests de ejemplo:

./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
El boilerplate incluye tareas que ejecutan eslint y htmlhint para verificar el HTML y JavaScript con respecto a una guías de estilos. Ambas tareas se ejecutan automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando npm run test. En el caso de JavaScript estamos usando un archivo de configuración de eslint que se llama .eslintrc que contiene un mínimo de información sobre el parser que usar (qué version de JavaScript/ECMAScript), el entorno (browser en este caso) y las reglas recomendadas ("eslint:recommended"). En cuanto a reglas/guías de estilo en sí, usaremos las recomendaciones por defecto de tanto eslint como htmlhint.

Parte obligatoria
Definición del producto:

Para este producto pense en la necesidad que tienen los amigos del festejado para comunicarse sobre la organizacion de la fiesta sorpresa sin arriesgarse
a ser descubiertos. Por lo que en la aplicacion se proporcionan dos cuadros de dialogo para intercambiar los mensajes y una tercera ventana que ayudarà a decodificar
los mensajes y asì hacer enfectiva la comunicaciòn.

Los principales usuarios son dos amigas encargadas de planearlo todo.
Los objetivos que tienen estos usuarios es comunicarse efectivamente sin arriesgarse a ser descubiertos por medio de los mensajes que recibe la pareja del festejado.
Esta aplicacion resuelve el problema de ser descubiertas mostrando solo mensaje cifrado en el cuadro de dialogo de la chica que es pareja del festejado, la otra amiga
verà los mensajes sin cifrar.

Para hacer uso de esta aplicaciòn es necesario ingresar a la siguiente liga: https://judithcortes.github.io/cdmx-2018-06-bc-core-am-cipher/src/index.html

La interfaz debe permitir al usuario:

Se escogio el offset fijo de 33 posiciones.
en el primer cuadro de dialogo se inserta el mensaje que deseamos hacer llegar a la pareja del festejado.
Presionamos el botòn de "enviar mensaje" para hacerlo llegar cifrado.
La pareja del festejado verà el mensaje cifrado y utilizarà la tercer ventana para pegar este texto y descubrir el mensaje.
Presiona el botòn "descifrar" para descubrir el mensaje recibido.
Se utiliza la misma ventana para escribir la respuesta y cifrarlo para pegarlo en la ventana de dialogo y enviarlo. Con esto seguir con el patron
de mantener la ventana de dialogo de la pareja del festejado solo con  mensajes cifrados.
Se presiona el botòn "enviar mensaje" para descifrar el mensaje y hacerlo llegar a los demas amigos.

Scripts / Archivos
README.md: debe explicar cómo descargar, instalar y ejecutar la aplicación así como una introducción a la aplicación, su funcionalidad y decisiones de diseño que tomaron.
src/index.html: este es el punto de entrada a tu aplicación. Este archivo debe contener to markup (HTML) e incluir el CSS y JavaScript necesario.
src/cipher.js: acá debes implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos:
cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos decifrar.
src/index.js: acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.
test/cipher.spec.js: este archivo contiene algunos tests de ejemplo y acá tendrás que implementar los tests para cipher.encode() y cipher.decode().
Hacker edition
No estás limitada a implementar solo la parte obligatoria. Te sugerimos crear también una función cipher.createCipherWithOffset() que reciba un offset y devuelva un nuevo objeto con dos métodos (encode y decode) que solo reciban el string y usen el offset que se pasó a createCipherWithOffset a la hora de crear el objeto.

Lo anterior, nos ayuda a observar tu capacidad de autoaprendizaje, pudiendo agregar a tu trabajo un elemento que lo lleva al siguiente nivel.

Soft Skills
Puedes realizar una planificación experta teniendo en consideración la utilización de herramientas de planificación, como un calendario, trello, papelógrafo u otras, creando un plan paso a paso de cómo quiere abarcar el reto o problema. Realizando una estimación realista del tiempo.

Entrega
El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub pages.

Evaluación
Te aconsejamos revisar la rúbrica para ver la descripción detallada de cada habilidad y cada nivel.

General
Característica/Habilidad	Nivel esperado
Completitud	3
Investigación	3
Documentación	2
Tech
Habilidad	Nivel esperado
JavaScript
Estilo	2
Nomenclatura/semántica	2
Funciones/modularidad	1
Estructuras de datos	0
Tests	2
HTML
Validación	2
Estilo	3
Semántica	2
SEO	0
CSS
DRY	2
Responsive	2
SCM
Git	1
GitHub	2
CS
Lógica	1
Arquitectura	1
Patrones/paradigmas	0
UX
Habilidad	Nivel esperado
User Centricity	2
Habilidades Blandas
Para este reto queremos que intentes llegar al nivel 2 por lo menos en 5 de tus habilidades blandas y que tengas el nivel 1 en sólo 3 habilidades.

Habilidad	Nivel esperado
Planificación y organización	2
Autoaprendizaje	2
Solución de problemas	2
Dar y recibir feedback	2
Adaptabilidad	2
Trabajo en equipo	1
Comunicación eficaz	1
Presentaciones	1
Primeros pasos
Antes que nada, asegúrate de tener un memo editor de texto en condiciones, algo como Atom o Code.
Para ejecutar los comandos a continuación necesitarás una shell UNIX Shell, que es un programita que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar Git bash, aunque recomendaría que consideres probar penguin GNU/Linux.
Haz tu propio fork_and_knife fork del repo de tu cohort, tus coaches te compartirán un link a un repo privado y te darán acceso de lectura en ese repo.
arrow_down Clona tu fork a tu computadora (copia local).
package Instala las dependencias del proyecto con el comando npm install. Esto asume que has instalado Node.js (que incluye npm).
Si todo ha ido bien, deberías poder ejecutar las traffic_light pruebas unitarias (unit tests) con el comando npm test.
A codear se ha dicho! rocket
Tips / Pistas
A continuación un video de Michelle que te lleva a través de la fórmula matemática del Cifrado César y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

tips caesar cipher

También te compartimos más información de lo que Michelle te ha explicado en el video anterior:

Aprende más sobre charCodeAt()
Aprende más sobre String.fromCharCode()
Aprende más sobre ASCII
Documentación de NPM
Estos son algunos tips que te pueden ayudar en la organización y realización de tu proyecto, teniendo en cuenta el desarrollo de tus habilidades blandas:

Para comenzar realiza una organización de tu proyecto, ve con qué recursos cuentas y el tiempo que tienes para completarlo.
Si hay algo que no sepas pregunta e intenta resolverlo; puedes comenzar con una búsqueda en google, luego consultando a tu squad y por último a tus coaches. Si hay algo que yo no sé, otro me puede ayudar. El aprendizaje es un proceso colaborativo.
Una vez que empieces a avanzar pide feedback, tus compañeras pueden tener excelentes ideas o formas de resolver el proyecto que te pueden ayudar.
Cuando te topes con un problema, busca alternativas, y para eso consulta diferentes fuentes.
Si ya te ves invirtiendo mucho tiempo en detalles debes saber priorizar y seguir con lo más importante, los proyectos tienen tiempo limitado y debes saber administrarlo.
Trabaja en equipo, pregunta e intenta completar el proyecto sin rendirte.
Prepara tu presentación, si no logro comunicar mis ideas a los demás no se podrá apreciar todo el esfuerzo y trabajo que invertiste.



COMENTARIOS PROPIOS
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
