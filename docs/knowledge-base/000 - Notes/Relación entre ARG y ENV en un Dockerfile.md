---
type: fleeting-note
created at: 2024-09-08 14:02 
updated at: 2024-09-08 14:02
aliases:
---
En un [[Dockerfile]] de [[Docker]] se pueden hacer uso de dos tipos de variables: las ARG y ENV. Estas se usan al momento de construir una imagen mediante el `docker build`. 

ARG se usan para establecer valores de variables que solo serán usadas en el momento de la construcción de la imagen. Es usada principalmente para establecer versiones de distintas librerías o plataformas a ser usadas.

ENV se usan para establecer valores por defecto a las variables de entorno que se usaran en un [[Docker Container]]. Los valores de estas variables pueden ser sobre-escritas al momento de ejecutar una instancia (container).

Para ambos casos, los valores quedarán establecidos en la imagen misma por lo que no es buena practica el establecer valores de variables sensibles: como Tokens, Secrets, Private Keys, etc. 

## References

 - [Build variables](https://docs.docker.com/build/building/variables/)

