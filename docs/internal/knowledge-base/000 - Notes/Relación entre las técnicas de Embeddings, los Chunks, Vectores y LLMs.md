
#idea
2024-05-18-18:42
Status: #inmature
Tags:  [[Embeddings]] [[Vector Databases]]

Los [[LLMs]] generan respuestas a partir de la recuperación de extractos de textos, los cuales son llamados [[Chunks]]. 

Para poder recuperar esos chunks relevantes, primero estos chunks han pasado por un proceso de indexación en el cual estos se han transformado a vectores mediante técnicas de [[Embeddings]] y almacenados en [[Vector Databases]].

La recuperación se realiza al transformar una consulta a un LLM en un vector, y buscar los otros vectores que son cercanos en el espacio vectorial dentro de un umbral predefinido.

---
# References

“I want Llama3 to perform 10x with my private knowledge”
https://youtu.be/u5Vcrwpzoz8?si=HqVurBvH_T9falgb


