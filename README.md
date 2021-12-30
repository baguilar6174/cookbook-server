# Server with Typescript & Sequelize & Node

Esta aplicación contiene un ejemplo de un servidor creado en Node con Express y Typescript. Se ha hecho uso del ORM [Sequelize](https://sequelize.org/) para la conexión y operaciones con la base de datos.

La aplicación consiste de una pequeña Base de Datos de Ingredientes, Recetas, Etiquetas y Reseñas de las recetas. El modelo entidad relación de esta base de datos se muestra a continuación.

![Diagrana ER](https://github.com/bryanAguilar001/cookbook-server/blob/main/media/er.png?raw=true)

> Diagrana ER

# Autor

Este proyecto ha sido basado en el [repositorio](https://github.com/ibywaks/cookbook) de [@ibywaks](https://github.com/ibywaks).

# Estructura de la aplicación

```
├── dist/
├── media/
├── src/
    ├── api/
    │   ├── controllers/
    │   ├── dto/
    │   ├── errors/
    │   ├── interfaces/
    │   ├── middlewares/
    │   ├── routes/
    ├── db/
    │   ├── dal/
    │   ├── models/
    │   ├── services/
    │   ├── config.ts
    │   ├── init.ts
    └── app.ts
└── .env
```

1. El directorio `dist/` contiene todo el código de la aplicación compilado en lenguaje JS.
2. El directorio `media/` contiene los recursos utilizados en el README.
3. El directorio `src/` contiene toda la funcionalidad de la aplicación.
    3.1 En el directorio `api/`:
        3.1.1 El directorio `controllers/` contiene la relación entre las rutas y llaman a los métodos de los servicios.
        3.1.2 El directorio `dto/` contiene.
        3.1.3 El directorio `errors/` contiene la definición de errores comunes en la creación de una API.
        3.1.4 El directorio `interfaces/` contiene la definición de los modelos de datos que provienen de la BD.
        3.1.5 El directorio `middlewares/` contiene definiciones de funciones que se realizan con cada petición.
        3.1.5 El directorio `routes/` contiene las rutas o endpoints disponibles para el usuario.
    3.2 En el directorio `db/`:
        3.2.1 El directorio `dal/` contiene la Capa de Acceso a Datos y es donde se implementan las consultas SQL.
        3.2.2 El directorio `models/` contiene el registro de todos los modelos necesarios para la BD.
        3.2.3 El directorio `services/` contiene los artefactos que funcionan como intermediarios entre en controlador de la API y la Capa de acceso a datos DAL.
        3.2.4 El fichero `config.ts` contiene la conexión del ORM con la base de datos (Postgres).
        3.2.5 El fichero `init.ts` contiene la inicialización de los modelos (creación de tablas en la BD).
    3.3 El fichero `app.ts` contiene la inicialización del servidor (módulo principal de la aplicación).
4. El fichero `.env` contiene las variables globales de la aplicación (por lo general se agrega en el `.gitignore`). Su estructura es la siguiente:

```
DB_USER=
DB_NAME=db_cookbook
DB_PASS=
DB_HOST=localhost
DB_DRIVER=postgres
DB_PORT=
API_PREFIX=/api/v1
```

# Como usar

Esta aplicación ha sido creada con Node en su versión `14.17.6` y Express en su versión `^4.17.2`,

Paso 1:

Descargar o clonar este repositorio con el siguiente comando

```
git clone https://github.com/bryanAguilar001/cookbook-server.git
```

Paso 2

En la raíz del proyecto ejecute el siguiente comando en la consola para obtener las dependencias necesarias:

```
npm i
```

Paso 3

Para ejecutar la aplicación es necesario ejecutar el siguiente comando:

```
npm run dev
```

Para generar los archivos compilados en JS es necesario el siguiente comando:

```
npm run build
```

# Características

- EStructura de directorios bien definida de acuerdo a las acciones tanto de la api como de la base de datos
- Conexión con una BD de Postgress
- Uso del ORM Sequelize para la generación de tablas a partir de modelos de Typescript
- Uso de Typescript


# Librerías & Paquetes usados

- `cors: ^2.8.5`: Es un paquete que proporciona un middleware que se puede usar para habilitar CORS (El intercambio de recursos de origen cruzado) este mecanismo permite solicitar recursos restringidos en una página web desde un dominio diferente del dominio que sirvió el primer recurso.
- `dotenv: ^10.0.0`: Módulo de dependencia que carga variables de entorno desde un archivo .env a process.env.
- `express: ^4.17.2`: Framework de aplicación web de back-end para Node.js
- `express-async-errors: ^3.1.1`: Soporte para async / await de ES6
- `express-validator: ^6.14.0`: Conjunto de middlewares de express.js que envuelve a funciones de validación de validator.js.
- `lodash: ^4.17.21`: Librería de utilidades de JavaScript moderna que ofrece modularidad, rendimiento y extras.
- `pg: ^8.7.1`: Conector de Sequelize para bases de datos PostgreSQL
- `pg-hstore: ^2.3.4`: Complemento a `pg`
- `sequelize: ^6.12.1`: ORM de Node.js basado en promesas para Postgres, MySQL, MariaDB, SQLite y Microsoft SQL Server.

## Dependencias de desarrollo

- `@types/cors: ^2.8.12`
- `@types/express: ^4.17.13`
- `@types/lodash: ^4.14.178`
- `@types/morgan: ^1.9.3`
- `@types/node: ^17.0.2`
- `eslint: ^8.5.0`: Herramienta de análisis de código estático para identificar patrones problemáticos encontrados en el código JavaScript.
- `morgan: ^1.10.0`: Es un middleware del registrador de solicitudes HTTP para node.js
- `ts-node-dev: ^1.1.8`: Reinicia el proceso de node cuando cualquiera de los archivos requeridos cambia (como estándar node-dev) pero comparte el proceso de compilación de TypeScript entre reinicios.
- `typescript: ^4.5.4`: Superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.