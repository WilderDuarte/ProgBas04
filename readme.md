# 🚀 Proyecto Web del Bootcamp de Prog. Básica

Este es un proyecto que utiliza tecnologías como **HTML**, **CSS** y **Javascript** para mostrar como estructurar y crear una aplicación Web con un despliegue usando **GitHub Pages**

## 📁 Estructura del Proyecto

```plaintext
/
├── index.html                # Página principal
├── readme.md                 # Información del proyecto
├── html/
│   ├── miprimerapágina.html  # 
│   ├── .html                 # 
│   ├── .html                 # 
│   ├── .html                 # 
│   └── .html                 # 
├── css/
│   ├── style.css             # Hoja de estilos externa común a todas las páginas
│   └── .css                  # Script para aprender estilos de css
└── js/
    ├── function.js           # Script que contiene lógica de javascript
    └── .js                   # Script para aprender js
```

## 🛠️ Tecnologías Utilizadas

| Tecnología              | Logo                                                                  | Descripción                                                                                   |
|-------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **HTML5**               | ![HTML5](https://img.icons8.com/color/48/html-5--v1.png)              | Lenguaje de marcado usado para estructurar las páginas web.                                   |
| **CSS3**                | ![CSS3](https://img.icons8.com/color/48/css3.png)                     | Hojas de estilo para personalizar la apariencia de la web.                                    |
| **JavaScript**          | ![JS](https://img.icons8.com/color/48/javascript--v1.png)             | Se utilizará más adelante para validaciones y lógica interactiva.                             |
| **SweetAlert2**         | <img src="https://sweetalert2.github.io/images/SweetAlert2.png" alt="SweetAlert2" width="48" height="48">  | Librería JS para mostrar alertas modernas, elegantes y personalizadas.                        |
<!-- | **SweetAlert2**         | ![SweetAlert2](https://sweetalert2.github.io/images/SweetAlert2.png)  | Librería JS para mostrar alertas modernas, elegantes y personalizadas.                        | -->

<!-- Para agregarle el enlace
<a href="https://sweetalert2.github.io/">
  <img src="https://sweetalert2.github.io/images/SweetAlert2.png" alt="SweetAlert2" width="48" height="48">
</a> -->

## 📁 Eliminar último commit 

Guarda un respaldo antes de resetear. (Opcional) 
git branch respaldo-antes-del-reset

1. Elimina el último commit localmente (Moverá HEAD y master al commit anterior)
git reset --hard HEAD~1

2. Sube ese cambio al repositorio remoto
git push origin master --force
