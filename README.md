# Proyecto "paradigmas"

Javascript por diseño, es multiparadigma. En este proyecto se ilustran dos que serán útiles en React:

🥑 **Orientado a Objetos**: Cualquier entidad del mundo que percibimos puede ser modelada a través de una clase, y reproducible a través de un objeto, por medio de tres principios:

- Herencia: Las clases pueden anidarse, de forma de categorizar los atributos y los métodos en categorías comunes (llamadas "clases padre").
- Poliformismo: Cada objeto puede modificar los atributos y los métodos de su clase padre, pudiendo implementarlos o no.
- Encapsulamiento: Todos los objetos tienen características y comportamientos únicos según su diseño, existiendo siempre dentro de un alcance (contexto).

🥑 **Funcional**: Cualquier entidad del mundo que percibimos debe ser modelada a través de una relación matemática conocida como función, bajo 3 principios:

- **Inmutabilidad**: Una función debe ser capaz de reproducir el estado de entrada, y alterarlo sin modificarlo, devolviendo así una transformación predecible.
- **Todo es una función**: Los datos y la información significativa deben ser modelados en términos de funciones, y deben ser capaces de ocultar su implementación.
- **Composición sobre Herencia**: Los tipos de datos complejos se construyen mediante distintas operaciones hechas con funciones, organizadas en diferentes formas.

En este proyecto se utilizan dos conceptos importantes dentro de la arquitectura de aplicaciones con Javascript, el concepto de `this` y el concepto de `prototype`.

🥑 **this**: Es una palabra reservada de Javascript que siempre devuelve un objeto. Este objeto es conocido como el entorno de ejecución, que cambiará conforme una expresión se escriba usando la palabra reservada. Por defecto, `this` devuelve el objeto global `Window`.

🥑 **prototype**: Es un objeto que es común a todos los objetos en Javascript. Este objeto puede ser modificado a libertad, pero una vez modificado, todas las instancias que se deriven de este objeto, contendrán todas las modificaciones. Dicho objeto sin modificación, contiene todos los atributos del tipo de dato `Object`

Lo leíste de un aguacate 🥑