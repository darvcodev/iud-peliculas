# IUD PELICULAS - Aplicación Web de Películas

## Descripción

La aplicación web "IUD PELICULAS" es una plataforma de gestión de películas que permite a los administradores agregar y administrar información sobre películas, géneros, productoras, directores, tipos y más. La plataforma se crea con el propósito de ofrecer entretenimiento a docentes, estudiantes, colaboradores y público en general, donde pueden ver películas en línea de forma gratuita (sin acceso o registro requerido por ahora).

La aplicación se ha desarrollado utilizando una arquitectura monolítica, donde el frontend y el backend están separados en módulos independientes para una gestión eficiente.

## Funcionalidades

La aplicación consta de los siguientes módulos:

1. **Género:** Permite registrar y editar géneros de películas con información detallada, como nombre, estado, fecha de creación y descripción.

2. **Productora:** Permite registrar y editar productoras principales de películas, incluyendo nombre, estado, fecha de creación, fecha de actualización, slogan y descripción.

3. **Director:** Permite registrar y editar directores principales de producciones con nombres, estado, fecha de creación y fecha de actualización.

4. **Tipo:** Permite registrar tipos de multimedia, como serie y película, con nombre, fecha de creación, fecha de actualización y descripción.

5. **Media (Películas y Series):** Gestiona películas y series, incluyendo información como título, sinopsis, URL de la película, imagen de portada, año de estreno, género principal, director principal, productora y tipo. También incluye fecha de creación y fecha de actualización.

## Configuración

- Backend: Node.js con Express y MongoDB.
- Frontend: React con Vite.

## Uso

1. Clona el repositorio.
2. Configura y ejecuta el servidor backend.
3. Configura y ejecuta la aplicación de frontend.
4. Conéctate a la aplicación y comienza a agregar contenido.

## Instalación

Siga estos pasos para configurar y ejecutar la aplicación:

### Configuración del Backend

1. Navega al directorio del backend: `cd backend`.

2. Instala las dependencias del backend: `yarn install`.

3. Configura la base de datos MongoDB y ajusta las variables de entorno según sea necesario.

4. Inicia el servidor backend: `yarn start`.

5. El servidor backend se ejecutará en `http://localhost:5000`.

### Configuración del Frontend

1. Navega al directorio del frontend: `cd frontend`.

2. Instala las dependencias del frontend: `yarn install`.

3. Configura las solicitudes HTTP para conectar con el backend en el archivo `api.js`.

4. Inicia la aplicación de frontend: `yarn dev`.

5. La aplicación de frontend se ejecutará en `http://localhost:5173`.

Creado por [DARVCODE] - Fecha de Creación: Septiembre de 2023
