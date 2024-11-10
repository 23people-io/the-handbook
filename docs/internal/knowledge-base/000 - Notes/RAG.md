---
type:
  - Definición
created at: 2024-05-26 13:00 
updated at: 2024-05-26 13:00
status:
  - Inmaduro
aliases:
---
RAG (Retrieved-augmented Generators), es una técnica que ayuda a aumentar el conocimiento de los [[LLMs]] por medio de la disposición de datos adicionales. Esto les ayuda a generar resultados mas precisos, basados en fuentes citables y mas actualizados. 

Se busca minimizar problemas detectados en los LLMs, como las [[Alucinaciones de los LLMs|Alucinaciones]] que realizan estos al momento de generar sus respuestas.

# Proceso de los LLMs with RAG implementado

Respecto de datos no actualizados, lo que se hace es: 

1. Un usuario escribe un prompt con la consulta al LLM.
2. El LLM recibe la consulta pero antes de responder lo que hace es ir a buscar información actualizada a sus fuentes de datos propias.
3. El LLM genera una respuesta aumentada por recuperación y la entrega al usuario.

# References

- [What is RAG?](https://python.langchain.com/v0.1/docs/use_cases/question_answering/#what-is-rag)
- [What is Retrieval-Augmented Generation (RAG)?](https://www.youtube.com/watch?v=T-D1OfcDW1M)

