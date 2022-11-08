# Backend 

## ✅ Primero lo primero: instalar las dependencias iniciales del proyecto antes de trabajar:
```
npm install
```

## 💡 El proyecto utliza Sequelize como ORM. Comandos utiles del CLI:

### Como generar un modelo desde cero
```
npx sequelize model:generate --name Ejemplo --attributes ejemplo:string
```
### Crear la base de datos
```
npx sequelize db:create
```
### Migrar modelos creados previamente
```
npx sequelize db:migrate
```
### Crear la migracion
```
npx sequelize migration:generate --name "nombre-migracion"
```
### Borrar la base de datos que creamos
```
npx sequelize db:drop
``` 
### Generar el archivo de la seed role
```
npx sequelize seed:generate --name create-role
``` 
### Utilizamos todas las seeds
```
npx sequelize db:seed:all
``` 
### Borrar la semilla por nombre
```
npx sequelize db:seed:undo --seed nombreDeLaSeed
``` 


## Helpers basicos:

### endpointResponse:
Estructura las respuestas positivas de toda la app. Dentro del archivo helpers/success.js podran ver que parametros le pueden pasar.

### ErrorObject:
Un objecto de error, el cual puede recibir varios atributos (pueden verlo en helpers/error.js)
El mismo es una extensión de el objecto Error nativo de JS. Sirve para devolver errores cuando esten por fuera del controlador, y que los errores sean interceptados por el CATCH que tendran en los controllers. 




