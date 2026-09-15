---
title: "Ejemplo: cómo se ve un post con galería de fotos"
image: /assets/images/posts/ejemplo-galeria/portada.jpg
location: "Guayaquil, Ecuador"
tags: [ejemplo, fotos]
---

Este post muestra cómo agregar una **galería de fotos** dentro de una entrada. Ideal para cuando quieras compartir varias imágenes de una misma experiencia o lugar.

Así se ve la portada del post (arriba) y así se ve una galería dentro del texto:

{% include galeria.html folder="ejemplo-galeria" images="foto1.jpg,foto2.jpg,foto3.jpg" %}

## Cómo hacer esto en tus propios posts

1. Crea una carpeta dentro de `assets/images/posts/` con el nombre de tu post, por ejemplo `assets/images/posts/mi-viaje-a-montanita/`.
2. Copia ahí tus fotos (recomendado: menos de 1–2 MB cada una para que el blog cargue rápido).
3. En tu archivo del post, agrega:

```
{% raw %}{% include galeria.html folder="mi-viaje-a-montanita" images="foto1.jpg,foto2.jpg,foto3.jpg" %}{% endraw %}
```

Cambia `folder` por el nombre de tu carpeta y `images` por los nombres de tus archivos, separados por comas y sin espacios.

*(Puedes borrar este post de ejemplo cuando ya tengas los tuyos.)*
