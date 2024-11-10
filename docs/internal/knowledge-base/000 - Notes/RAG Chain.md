---
type:
  - Definición
created at: 2024-05-26 13:41
updated at: 2024-05-26 13:41
status:
  - Inmaduro
  - Maduro
aliases:
---
En el contexto de [[LangChain]], un **[[RAG]] Chain** (Retrieval-Augmented Generation Chain) es un tipo de cadena especializada que integra la recuperación de información con la generación de texto utilizando modelos de lenguaje extenso ([[LLMs]]). Esta cadena combina dos procesos clave para mejorar la precisión y la relevancia de las respuestas generadas:

1. **Recuperación de Información ([[Retrieval]])**: El RAG Chain comienza con un componente de recuperación que busca y obtiene documentos o datos relevantes basados en una consulta inicial proporcionada por el usuario. Este paso asegura que la información más pertinente y actualizada esté disponible para el modelo de lenguaje.
    
2. **Generación de Texto ([[Generation]])**: Una vez que se han recuperado los documentos relevantes, estos se pasan al LLM, que los utiliza para generar una respuesta. La inclusión de información recuperada permite al LLM producir respuestas más precisas y contextualmente relevantes.
    

## Ejemplo de Uso

Imaginemos que se desea construir un asistente virtual que responda preguntas sobre artículos científicos:

- **Recuperación**: El RAG Chain primero buscará y recuperará artículos científicos relevantes basados en la pregunta del usuario.
- **Generación**: Luego, estos artículos se pasan al LLM, que generará una respuesta informada utilizando tanto la pregunta inicial como la información recuperada.

## Beneficios

- **Precisión Mejorada**: Al combinar la capacidad de recuperación de información con la generación de texto, el RAG Chain mejora la precisión de las respuestas.
- **Contexto Enriquecido**: La inclusión de documentos relevantes proporciona un contexto más rico, permitiendo al LLM generar respuestas más detalladas y precisas.

## Relación con LLM Chains

El RAG Chain es una subcategoría de las [[LLM Chains]] en LangChain, ya que siempre incluye un modelo de lenguaje extenso para la generación de texto. La diferencia principal radica en el paso adicional de recuperación de información, que no está presente en todas las LLM Chains.

---

# Referencias

- [LangChain Documentation](https://python.langchain.com/v0.1/docs/modules/chains/)
- [Introduction to LangChain](https://python.langchain.com/docs/get_started/introduction)
- [Research Papers on Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401)

