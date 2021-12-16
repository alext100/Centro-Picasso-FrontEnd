# Centro Picasso

## Tecnologias

Front-end parte de mi proyecto final en ISDI Coders. Tecnologias utilizadas: Vue 3, Typescript, Bootstrap Vue 3 y Bootstrap 4.6, JWT, Jest

## Project setup

```
npm install
npm run serve
```

## Video con un ejemplo de funcionalidad de la aplicación para tres roles de usuario

https://user-images.githubusercontent.com/83639312/146033062-ec23f5c5-39ce-4637-aa2e-30a113d018d0.mov

## Descripción

Es un sitio web de una escuela de lengua española en San Petersburgo. A primera vista es un sitio regular, con una pagina principal, una pagina con los precios etc.
Pero mi objetivo era hacer una web app para profesores de la escuela, administrador o director y para los alumnos. Entonces, se puede logearse con tres roles: Admin, Profesor, Alumno.

### Admin

- Admin en su plataforma puede **crear** nuevos usuarios y darles derechos de acceso de profesor o de alumno. Si es un profesor, el va a aparecer en la pagina principal con la foto y nombre (y una descripción en futuro).
- También pude **borrar** perfiles de los profesores (si ya no trabajan en la escuela).
- Puede **cambiar** los precios de cualquier curso que sale en la pagina Precios.
- En la siguiente version de la app va a poder añadir el horario de las classes en el calendario que podrán ver los profesores en sus cuentas. Crear grupos nuevos y cambiarlos.

### Profesor

- Profesor en su plataforma puede **ver** la lista de sus grupos, y al pulsar el boton puede abrir la lista de todos los grupos de la escuela. Puede **añadir** cualquier grupo a su lista o **borrar** de allí un grupo.
  - Al entrar al cualquier grupo profesor puede **escribir** un mensaje p.e. con los deberes que pueden ver todos los alumnos, miembros de este grupo.
  - En otra pestaña el puede **ver** la lista con todos los miembros del grupo.
  - En la tercera pestaña puede **ver** la lista de todos los alumnos y **añadir** nuevos miembros a este grupo.
- Con cada alumno profesor puede tener clase online y puede **tomar notas rápidas** con errores del alumno. Para esto el profesor puede elegir un alumno y va a entrar a la pagina Online-lesson. Cada apunte son dos inpunts, con el error del alumno y con la version correcta. Y tambien el profesor puede **marcar** tipo del error (4 botones: _Nueva palabra, Fallo, Pronunciación, Otro_).
- En la siguiente version de la app va a ver el horario creado por administrador.

### Alumno

- Al entrar a su plataforma un alumno pude **ver** dos pestañas: Apuntes y Mensajes.
  - Apuntes: los apuntes hechas del profesor durante la clase online. Donde puede **revisar** tipo de error, apunte y comentario de profesor. Los errores revisadas el alumno puede **borrar**.
  - Mensajes: Los mensajes del grupo, p.e. con los deberes.
- En la siguiente version de la app los apuntes van a aparecer divididas a clases(fechas) y el alumno podrá marcarles como revisados.

## Coverage

- El 14 de diciembre, el coverage es 77%. Los componentes y funciones no testeados voy a testear en la próxima versión de la aplicación.
- ![2021-12-14_coverage](https://user-images.githubusercontent.com/83639312/146032996-15addfe3-7637-4386-ac40-de65c7579b9c.png)
