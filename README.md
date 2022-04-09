# FusePong Table 📊

1. [Info General](#información-general )
2. [Tecnologías](#tecnologías)
3. [Instalación](#instalación)
4. [Usuario](#usuario-prueba)
5. [Pre-requisitos](#pre-requisitos)
6. [Despliegue](#despliegue)
7. [Librerías Usadas](#librerías-usadas)
8. [Expresiones de Gratitud](#expresiones-de-gratitud)

***

## Información General 💻

##### En este proyecto se desea crear una aplicación web donde se pueda llevar el control del avance de diferentes proyectos de desarrollo, este proyecto esta dividido en historias de usuario las cuales hacen referencia a las funcionalidades globales de cada proyecto, y a su vez en cada historia de usuario se podrá levantar un ticket de desarrollo el cual hace referencia a una tarea específica de la historia de usuario a la que corresponde. El objetivo principal es poder levantar tickets o solicitudes de desarrollo para cada proyecto y poder verificar el estado del mismo.

###### El usuario podrá desde una página web hacer lo siguiente:

- Crear una cuenta, y asociarse a una compañía previamente creada (se deben crear varias compañías y estar disponibles a modo listado) 

- Loguearse en la plataforma

- Crear una historia de usuario con su primer ticket (cada historia de usuario debe tener al menos un ticket)

- Levantar un ticket o solicitud de desarrollo completamente nuevo (debe estar relacionado a una historia de usuario)

- Editar un ticket o solicitud de desarrollo que esté vinculado a una historia de usuario

- Poder ver un historial de tickets y su estado

- Cancelar un ticket activo

##### El ticket debe estar asociado a una historia de usuario, debe tener un campo de comentarios y un estado (Activo: está creado por el usuario; En Proceso: que está en proceso de desarrollo; Finalizado: que ya salio del proceso de desarrollo)

- En cada proyecto debe haber al menos 2 tickets en estado de desarrollo y 2 tickets en estado Finalizado, esto con el fin de poder verlos y diferenciarlos en el historial.

- Las compañías o empresas podrán tener varios proyectos relacionados (crear al menos 3 compañías con nombre, nit, teléfono, dirección y correo electrónico; de estas 3, una debe tener 1 proyecto y otra debe tener 2 proyectos). Esta información debe estar previamente creada y disponible en la página web.

- Los proyectos pueden tener varias historias de usuario ( cada proyecto debe tener al menos 3 historias de usuario). Esta información debe estar previamente creada y disponible en la página web

>Toda la información debe estar alojada en una Base de datos creada exclusivamente para la prueba 

#### Ejemplos de Peticiones en La Api

* Logear un usuario `Post`

```http POST
https://fusepong-api.herokuapp.com/api/login 
```
| Body                      | Type     | raw            | headers                            |
| :--------                 | :------- | :------------- | :--------------------------------- |
|"email" : "correo"         | **JSON** | **Required**.  |'Content-Type': 'application/json', |
| "password" : "contraseña" |          |                |
 

* Registrarse 

```http POST
https://fusepong-api.herokuapp.com/api/register 
```
| Body                                      | Type     | raw            | headers                            |
| :--------                                 | :------- | :------------- | :--------------------------------- |
|"email" : "correo"                         | **JSON** | **Required**.  |'Content-Type': 'application/json', |
|"password" : "contraseña"                  |          |                |
|"name" : "nombre completo"                 |          |                |
|"phoneNumber" : "telefono"                 |          |                |
|"id_company" : "compañía a que pertenece"  |          |                |


## Tecnologías 🔬
* [React.JS](https://es.reactjs.org/): Version 17.0.2 
* [Tailwind CSS](https://tailwindui.com/): Version 3.0.23
* [Axios](https://sass-lang.com/): Version 0.26.1

***

## Instalación 📝

**Clonar repositorio**
```bash
git clone https://github.com/davidB2ya/FusePongTable.git
```
**Entrar a la direccion del proyecto**
```bash
cd FusePongTable/
```
**Instalar las dependencias del proyecto**
```bash
npm install 
```
**Iniciar el servidor en el entorno de desarrollo**
```bash
npm run start
```
Abre el navegador en el puerto: http://localhost:3001 

***

## Usuario Prueba 😎

- correo :  adminDavid@gmail.com
- contraseña : 123456

>O registrese y entre con su usuario

***
## Pre-requisitos 📋

- Node instalado
- npm instalado version 7.23.0  o superior
- Google Chrome // Mozilla Firefox // otros
***

## Despliegue 🚀

_Aquí debajo dejo el link del proyecto desplegado_
                👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻

* Deploy Frontend Vercel : https://fuse-pong-table.vercel.app/
* Deploy Backend Heroku : https://fusepong-api.herokuapp.com/
***

## Librerías Usadas 🏛

* **axios** : **_La utilizo para consultas a la api_**
* **react** : **_La uso renderizar componentes de React.js_**
* **react-dom** : **_La uso para manipolar el DOM con elementos de React.js_**
* **react-icons** : **_La uso para renderizar iconos_**
* **react-router-dom** : **_La uso para realizar las rutas de la app_**

***

## Expresiones de Gratitud 🎁

* Comenta a otros sobre mi proyecto 📢
* Invitame a una cerveza 🍺 o un café ☕️  
* Da las gracias públicamente 🤓
* etc.

---
⌨️ con ❤️ por [davidB2ya](https://david-bedoya.vercel.app) 😊👍🏻

![Image text](https://i.ibb.co/2M675j0/Logo-David-04.png)
