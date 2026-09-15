---
title: "Ejemplo: cómo incrustar un visor 360 de Kuula"
image: /assets/images/posts/ejemplo-360/portada.jpg
location: ""
category: fotografia
tags: [ejemplo, 360, kuula]
---

Este post muestra cómo incrustar uno de tus recorridos 360° de [Kuula](https://kuula.co) directamente dentro de una entrada del blog.

## Paso 1: consigue el "id" de tu foto en Kuula

1. Abre tu foto o colección en Kuula y usa el botón **Compartir**.
2. Copia el enlace para compartir. Se verá parecido a esto:
   `https://kuula.co/share/collection/7Fabc?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1`
3. El **id** es la parte después de `/share/`, en este ejemplo: `collection/7Fabc`.

## Paso 2: pégalo en tu post

En el archivo Markdown de tu post, escribe:

```
{% raw %}{% include kuula.html id="collection/7Fabc" caption="Mi recorrido 360 en la playa" %}{% endraw %}
```

Y así se vería el visor (reemplaza el id de abajo por el tuyo real; el de este ejemplo es solo ilustrativo y puede no cargar):

{% include kuula.html id="collection/7Fabc" caption="Ejemplo de visor 360 (reemplaza el id por el tuyo)" %}

## Parámetros opcionales

- `caption="..."` — un texto que aparece debajo del visor.
- `height="600px"` — para hacer el visor más alto o más bajo (por defecto 480px).

*(Puedes borrar este post de ejemplo en cuanto tengas tus propios recorridos 360 listos para publicar.)*
