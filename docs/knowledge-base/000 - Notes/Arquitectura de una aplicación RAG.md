---
type:
  - Definición
created at: 2024-05-21 12:29 
updated at: 2024-05-26 13:19
status:
  - Inmaduro
aliases: RAG Architecture
---
La arquitectura de una aplicación [[RAG]] consta de 2 etapas principales: 

1. **Indexación de Documentos** [[Documents Indexation]]. Añadir contenido nuevo desde una o mas fuentes a una base de datos vectorial [[Vector Databases]] (es lo mismo que un [[Vector Store]]). 
2. **Recuperación de Documentos** [[Documents Retrieval]] y **Generación de Respuestas** [[Answer Generation]]. Por medio de un [[RAG Chain]], se toma la consulta del usuario, se recupera contenido relevante desde el indice y se entrega al [[LLM]] para generar la respuesta correspondiente.

Ahora, Indexar tiene en si otras subtareas relevantes:

1. **Load**. Corresponde a la carga explicita de contenido nuevo presente una fuente. Pueden ser archivos de distintos tipo, texto desde web sites, archivos Markdown, PDFs, etc. Esto se hace por medio de los DocumentLoader en frameworks como [[LangChain]].
2. **Split**. Corresponde a dividir el contenido del documento cargado en trozos mas pequeños conocidos como [[Chunks]]. Esto se hace por medio de los Text Splitters en frameworks como [[LangChain]]
3. **Store**. Corresponde a guardar los chunks para su posterior recuperación para uso. Esto se hace por medio de modelos de [[Embeddings]] que transforman los chunks en vectores almacenables en [[Vector Databases]].

![[Pasted image 20240521124334.png]]


---
## References

- [RAG Architecture](https://python.langchain.com/v0.1/docs/use_cases/question_answering/#rag-architecture)
