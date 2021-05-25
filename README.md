# Buscador de series

Página desarrollada con la finalidad de aplicar los conocimientos y la utilización de diversas herramientas informáticas, adquiridas durante el segundo módulo del curso de programación, dictado por Adalab.

El ejercicio consiste en desarrollar una aplicación web que nos permita buscar series online, partiendo del API abierto de TVMaze para
búsqueda de series, e incluirlas en un listado de series favoritas y guardarlo en el localStorage.

## Interacción con la página

#### Búsqueda

Para iniciar la búsqueda de series tenemos un campo de texto en el cual introducimos el título de la serie que deseamos consultar y pulsamos (Click) el botón 'Buscar'.

#### Resultados

En la sección denominada 'Resultado de Búsueda' se nos mostrarán, tanto el título como una imagen de todas las opciones disponibles para el valor indicado en el campo de texto.

#### Selección

Una vez visualizadas las opciones en la sección 'Resultado de Búsueda', la usuaria puede realizar la selección de su preferencia para añadirlo a la sección denominada 'Mis Series Favoritas'. Para ello, deberá hacer click sobre el elemento.

#### Validar selección

Para asegurarnos de que el elemento seleccionado es el que queremos, se le añadirá un color de fondo y automáticamente se nos mostrará en la sección denominada 'Mis Series Favoritas', ubicada en la parte izquierda de la pantalla.
Este listado se mantendrá guardado aunque se realice una nueva búsqueda o se actualice la página.

#### Eliminar de 'Mis Series Favoritas'

Para eliminar un elemento del listado debe hacer click sobre dicho elemento.
Si desea borrar toda la información almacenada en la sección, debe pulsar el botón 'Vaciar'.

## Herramientas empleadas

- Adalab web starter kit, que es una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas, que nos facilita la automatización de tareas, ya que incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más, que nos ayudan a trabajar más cómodamente, debido a la automatización de tareas.
- Editor de código Visual Studio Code
- Node JS
- Git

  **NOTA:** Estas herramientas son las requeridas para poder utilizar o colaborar en el proyecto.

## Esquema de funcionamiento

![Esquema](https://github.com/Adalab/modulo-2-evaluacion-final-Laura733/blob/master/src/imagen/Esquema.jpg)

## Estructura de las carpetas

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ core
 |  |  ├─ reset
 |  |  └─ variables
 |  └─ layout
 |     ├─ footer
 |     ├─ header
 |     ├─ main
 |     └─ pages
 └─ html
 |  └─ partials
 |     ├─ header
 |     ├─ footer
 |     ├─ link
 |     └─ main
 └─ js
    └─ partials
       ├─ 01_gral
       ├─ 02_fetch
       ├─ 03_paintResult
       ├─ 04_paintFavorites
       ├─ 05_localStorage
       └─ 06_delete
```

**NOTA:** Este proyecto no es responsive
