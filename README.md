# Backend 

### Borrar la base de datos que creamos
```
npx sequelize db:drop
``` 
### Crear la base de datos
```
npx sequelize db:create
```
### Migrar modelos creados previamente
```
npx sequelize db:migrate
```
### Utilizamos todas las seeds
```
npx sequelize db:seed:all
``` 
### Crear modelos
```
npx sequelize-cli db:model --name ModelName --attributes name:string,age:float
``` 


