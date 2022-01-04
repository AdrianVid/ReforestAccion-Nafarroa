# ReforestAccion-Nafarroa

ReforestAccion Nafarroa es una asociación Navarra sin ánimo de lucro. Su proposito es muy claro, plantar la mayor cantidad de arboles posibles en espacios publicos o privados cedidos para tal proposito. Todo esto se lleva a cabo a través de sus socios y voluntarios.
<br>
Con este sitio web quieren tener un mayor impacto en la sociedad, ser mas visibles y poder llegar a mas gente que crea en sus valores, los comparta y quiera formar parte de esta organización. Hacer públicas todas sus plantaciones e informar de futuros eventos y noticias.<br>
## Instalacion

1. Instalar NodeJs y en la terminal de tu proyecto hacer un npm init.
2. Instalamos express y mongoose. Necesitaremos tambien bcrypt y jsonwebtoken para gestionar las contraseñas y el dotev. <br> 
En nuestra terminal escribimos: npm i bcrypt dotenv express jsonwebtoken mongoose<br>
3. Instalar nodemon en nuestro PC de manera global: npm i -g nodemon<br>
4. Tenemos que crear un archivo .env en el que guardaremos los datos: PORT: Número del puerto al que nos conectaremos para trabajar, URI: Ruta de MongoDB, y JWT_SECRET: Clave para el token.<br>


## Descripción funcional

En ReforestAcción Nafarroa lo importante son los árboles y en su página web no iba a ser diferente.<br>
Como visitante de nuestra página podrás tener acceso a información acerca de nosotros. Verás todas las plantaciones que hemos realizado y las clases de árboles plantados.
<br>
Cualquier persona interesada tiene acceso a un formulario de inscripción para poder participar en los proyectos como voluntario.<br>
Como VOLUNTARIO y una vez iniciada sesión, podrás ver las plantaciones, inscribirse para participar y tambien tendrá la posibilidad de apadrinar árboles que van a ser plantados en cada proyecto.<br>
Contarás tambien con tu apartado de MI USUARIO. En él, podras modificar tus datos y ver en todo momento tanto las plantaciones en las que estás inscrito como usuario, como los arboles que has ido apadrinando.<br>
Podemos iniciar sesión tambien como ADMINISTRADOR. Esta función está reservado para la persona/personas que vayan a dirigir la página.<br>
Como ADMINISTRADOR podremos gestionar todos los datos de los usuarios, plantaciones y árboles. También tendrá la posibilidad de ir creando nuevas plantaciones en las que Reforestacción Nafarroa vaya a actuar.<br>
A través de este sitio web gestionamos todos los datos relacionados con nuestros voluntarios, los ayuntamientos colaboradores y personas o empresas que forman parte de alguna manera de ReforestAcción Nafarroa.<br>

## Casos de uso
![Casos-de-uso](https://github.com/AdrianVid/ReforestAccion-Nafarroa/blob/main/Casos%20de%20uso.png)<br>

## TO DO
Implementar el rol de Administrador y poder darle mas funciones.<br>
Desarrollar la información de las plantaciones y subir mas imagenes de proyectos usando cloudinary <br>
Colocar un mapa dentro de cada plantación para poder ver y situar el proyecto en todo momento <br>
