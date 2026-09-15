# Bitácora de Ivanov — guía rápida

Este es tu blog personal, listo para publicarse gratis en **GitHub Pages**. Está construido con **Jekyll**, el motor que usa GitHub para generar blogs automáticamente a partir de archivos de texto simples — no necesitas programar nada para usarlo día a día.

---

## 1. Publicarlo por primera vez

1. Crea una cuenta gratuita en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo llamado exactamente **`tuusuario.github.io`**, reemplazando `tuusuario` por tu nombre de usuario de GitHub. Este nombre exacto es lo que le indica a GitHub que debe publicarlo como página web.
   - Ejemplo: si tu usuario es `ivanovcruz`, el repositorio se debe llamar `ivanovcruz.github.io`.
   - Márcalo como **público**.
3. Sube todos los archivos de esta carpeta a ese repositorio. Las dos formas más simples:
   - **Sin usar la terminal:** en la página del repositorio en GitHub, usa el botón "Add file" → "Upload files" y arrastra todos los archivos y carpetas.
   - **Con git** (si te sientes cómodo):
     ```
     git init
     git add .
     git commit -m "Primera versión de mi blog"
     git branch -M main
     git remote add origin https://github.com/TUUSUARIO/TUUSUARIO.github.io.git
     git push -u origin main
     ```
4. Entra a **Settings → Pages** en tu repositorio y confirma que la fuente sea la rama `main`. GitHub construye el sitio automáticamente (tarda 1-2 minutos la primera vez).
5. Tu blog quedará publicado en:
   `https://tuusuario.github.io`
6. Abre el archivo `_config.yml` y cambia la línea `url:` por esa misma dirección. Vuelve a subir el archivo para que quede guardado.

Cada vez que subas cambios (nuevos posts, fotos, etc.), GitHub reconstruye el sitio solo, en uno o dos minutos.

---

## 2. Escribir una entrada nueva

1. Ve a la carpeta `_posts/`.
2. Crea un archivo nuevo con este formato de nombre (importante respetarlo):
   `AAAA-MM-DD-titulo-corto.md`
   Ejemplo: `2026-09-20-mi-viaje-a-montanita.md`
3. Empieza el archivo así:

   ```
   ---
   title: "Mi viaje a Montañita"
   location: "Montañita, Ecuador"
   tags: [viajes, playa]
   image: /assets/images/posts/montanita/portada.jpg
   ---

   Aquí escribes el contenido de tu post, en texto normal.
   Puedes usar **negritas**, *cursivas*, y párrafos separados
   por una línea en blanco.
   ```

   - `title`, `location`, `tags` e `image` son opcionales, pero le dan mejor forma a la entrada. Bórralos si no los necesitas.
   - `location` es el lugar (se muestra con un 📍).
   - `image` es la foto de portada que aparece en la lista de entradas.

4. Sube el archivo (y sus fotos, ver abajo) a GitHub. Listo.

---

## 3. Subir y organizar tus fotos

1. Dentro de `assets/images/posts/`, crea una carpeta con el nombre de tu post, por ejemplo `assets/images/posts/montanita/`.
2. Copia ahí las fotos de esa entrada. Recomendado: menos de 1-2 MB por foto para que el blog cargue rápido (puedes reducir el tamaño con cualquier compresor de imágenes gratuito en línea, como squoosh.app).
3. Para poner una foto de portada, usa `image: /assets/images/posts/montanita/portada.jpg` en el encabezado del post.
4. Para poner varias fotos dentro del texto del post (galería), agrega esta línea donde quieras que aparezcan:

   ```
   {% include galeria.html folder="montanita" images="foto1.jpg,foto2.jpg,foto3.jpg" %}
   ```

   Cambia `folder` por el nombre de tu carpeta, e `images` por los nombres de tus archivos separados por comas (sin espacios).

---

## 4. Incrustar tus fotos 360 de Kuula

1. En [kuula.co](https://kuula.co), abre la foto o colección que quieras compartir y pulsa **Compartir**.
2. Copia el enlace. Se ve parecido a:
   `https://kuula.co/share/collection/7Fabc?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1`
3. El **id** es la parte después de `/share/`. En este ejemplo: `collection/7Fabc`.
4. En tu post, agrega esta línea donde quieras que aparezca el visor:

   ```
   {% include kuula.html id="collection/7Fabc" caption="Mi recorrido 360" %}
   ```

   - `caption` es opcional: un texto debajo del visor.
   - `height="600px"` es opcional: para cambiar el alto (por defecto 480px).

Ya tienes dos posts de ejemplo en `_posts/` que muestran exactamente cómo se usa esto — puedes copiar y pegar de ahí, y borrarlos cuando ya no los necesites.

---

## 5. Personalizar el blog

- **Nombre, descripción y autor:** edita `_config.yml`.
- **Página "Acerca de mí":** edita `acerca-de/index.md`.
- **Colores y estilos:** edita `assets/css/style.css`. Los colores principales están definidos arriba del archivo, en la sección `:root { ... }`, así que puedes cambiar el tono cálido por otro sin tocar el resto del código.
- **Dominio propio:** si más adelante compras un dominio (por ejemplo `ivanov.com`), en Settings → Pages de GitHub puedes agregarlo como "Custom domain", y actualizar `url:` en `_config.yml`.

---

## 6. Ver el blog en tu computadora antes de publicar (opcional)

Si tienes Ruby instalado, puedes previsualizar cambios antes de subirlos:

```
bundle install
bundle exec jekyll serve
```

Luego abre `http://localhost:4000` en tu navegador. Esto es completamente opcional — también puedes simplemente subir los cambios a GitHub y ver el resultado en tu blog publicado un par de minutos después.

---

¿Dudas o quieres que te ayude a personalizar algo más (colores, secciones nuevas, otra estructura)? Solo pídemelo.
