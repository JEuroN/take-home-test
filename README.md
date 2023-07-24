# take-home-test

Test for fulltimeforce

Requisitos para poder ejecutar el proyecto

Node version >= 18

Esta se puede descargar en https://nodejs.org/en

### Instalacion del proyecto

Para descargar el proyecto se debe descargar desde el repositorio de github, esto puede lograrse de diferentes formar,
descargando un zip con el archivo y descomprimiendolo o clonandolo con la consola de comandos o gui de preferencia

Se requieren dos instancias de la consola de comandos para poder ejecutar ambos el frontend y el backend

## Backend

Para poder ejecutar el backend se necesita ir a la carpeta /backend, desde el root de la carptea utilizando el comando 
`cd backend` 

y luego ejecutar el comando

`npm i`

o

`yarn`

o

`pnpm i`

para poder instalar todas las dependencias del proyecto, seguido de esto ejecutar el comando

`npm start`

para iniciar un servidor de pruebas, por defecto el servidor inicia en el puerto 3001, pero esto puede ser cambiado agregando un archivo .env en el root del backend, un ejemplo de esto se puede ver en el archivo .env.example

Tambien se puede ingresar con una cuenta de github si se desea agregando en las variables de entorno un personal access token de github, sin embargo ninguna de estas variables es necesaria para el funcionamiento de la app

NOTA: Si no se tiene node en una version >= 18 el proyecto no funcionara debido a la falta de una version nativa de fetch

## Frontend

Para poder ejecutar el frontend es necesario ir hacia la carpeta /frontend desde el root, se utiliza el comando 
`cd frontend` 

y luego ejecutar el comando

`npm i`

o

`yarn`

o

`pnpm i`

para poder instalar todas las dependencias del proyecto, seguido de esto ejecutar el comando

`npm run dev`

para iniciar un servidor de prueba, por defecto es en el puerto 3000.

Si se cambio el puerto por defecto del backend hace falta agregar un archivo .env con la direccion del puerto al que fue cambiado
