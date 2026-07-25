# Talemodas

Página principal de una tienda online de ropa, desarrollada como práctica de maquetación web utilizando **HTML5**, **CSS3** y **Bootstrap 5**.

El proyecto presenta una interfaz visual limpia y responsiva, inspirada en una tienda real. Incluye un carrusel promocional, un menú lateral de categorías, tarjetas de productos, un carrito visual y un pie de página con la información del autor.

---

## Estudiante

- **Nombre:** Albino Sebastian Rosales Ruano
- **Carné:** 1890-23-12105

---

## Objetivo

El objetivo de este proyecto es realizar la maquetación visual de la página principal de una tienda online utilizando Bootstrap.

La página fue diseñada para adaptarse correctamente a diferentes tamaños de pantalla. En dispositivos móviles, los productos se muestran uno por fila, mientras que en pantallas medianas y grandes se muestran tres productos por fila.

> Este proyecto es únicamente una maquetación visual. Los botones, categorías y el contador del carrito no poseen funcionalidad real.

---

## Características principales

- Diseño responsivo mediante el sistema Grid de Bootstrap.
- Carrusel de imágenes promocionales.
- Encabezado con nombre de la tienda.
- Ícono de carrito de compras con contador visual.
- Menú lateral con categorías de ropa.
- Catálogo con seis productos.
- Tarjetas con imagen, nombre, descripción, precio y botón.
- Pie de página centrado con nombre y carné.
- Estilos personalizados mediante CSS.
- Adaptación para teléfonos, tabletas y computadoras.

---

## Componentes de Bootstrap utilizados

### Carousel

Se utilizó el componente `carousel` para mostrar imágenes promocionales en la parte superior de la página.

El carrusel contiene:

- Indicadores.
- Botones para avanzar y retroceder.
- Imágenes adaptables.
- Transiciones entre diapositivas.

### Sistema Grid

La distribución principal se realizó con el sistema de filas y columnas de Bootstrap:

- `row`
- `col-sm-3`
- `col-sm-9`
- `col-12`
- `col-md-4`

La columna izquierda contiene las categorías y la columna derecha contiene el catálogo de productos.

### Cards

Cada producto se representa mediante una tarjeta de Bootstrap utilizando:

- `card`
- `card-img-top`
- `card-body`
- `card-title`
- `card-text`

### Botones

Los botones de cada producto utilizan las clases:

- `btn`
- `btn-primary`
- `w-100`

### List Group

El menú lateral de categorías fue creado mediante:

- `list-group`
- `list-group-item`
- `active`

### Badge e íconos

El contador del carrito utiliza:

- `badge`
- `rounded-pill`
- `position-absolute`

El ícono del carrito pertenece a la biblioteca **Bootstrap Icons**.

### Utilidades

También se utilizaron clases de utilidad para:

- Márgenes y padding.
- Colores.
- Sombras.
- Bordes.
- Alineación.
- Flexbox.
- Tamaños responsivos.

---

## Categorías incluidas

- Ropa para caballeros.
- Ropa para damas.
- Ropa para niños.
- Ropa para niñas.
- Ropa para bebés.
- Ropa para mascotas.
- Jerseys deportivos.

---

## Productos mostrados

- Camisa.
- Jersey deportivo.
- Pantalón.
- Falda.
- Vestido.
- Playera.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons

---

## Estructura del proyecto

```text
talemodas/
│
├── index.html
├── README.md
│
├── styles.css
│
└── images/
    ├── carousel-1.jpg
    ├── carousel-2.jpg
    ├── carousel-3.jpg
    ├── camisa.jpg
    ├── jersey.jpg
    ├── pantalon.jpg
    ├── falda.jpg
    ├── vestido.jpg
    └── playera.jpg
```

> La estructura puede variar si el archivo `styles.css` se encuentra dentro de una carpeta llamada `css`.

---

## Cómo ejecutar el proyecto

1. Clona o descarga este repositorio.
2. Abre la carpeta del proyecto.
3. Ejecuta el archivo `index.html` en un navegador.
4. También puedes abrirlo mediante la extensión **Live Server** de Visual Studio Code.

No se necesita instalar dependencias, ya que Bootstrap y Bootstrap Icons se cargan mediante CDN.

---

## Diseño responsivo

La página utiliza un enfoque responsivo:

- En pantallas pequeñas, las categorías y los productos se apilan verticalmente.
- En teléfonos, cada producto ocupa el 100 % del ancho.
- En pantallas medianas y grandes, se muestran tres productos por fila.
- Las imágenes del carrusel mantienen una altura uniforme mediante CSS y `object-fit: cover`.

---

## Enlaces del proyecto

- **Repositorio en GitHub:** https://github.com/codsebas/tienda-online.git
- **Sitio publicado:** https://talemodas.netlify.app/

---

## Estado del proyecto

✅ Maquetación principal completada  
✅ Diseño responsivo  
✅ Carrusel de imágenes  
✅ Menú de categorías  
✅ Seis tarjetas de productos  
✅ Carrito visual  
✅ Footer con datos del estudiante  
⚠️ Sin funcionalidad de compra, filtros o carrito real

---

## Autor

**Albino Sebastian Rosales Ruano**  
Carné: **1890-23-12105**

---
