---
type:
  - Idea
created at: 2024-07-08 18:37 
updated at: 2024-07-08 18:37
status:
  - Inmaduro
  - Maduro
aliases:
---
El parámetro llamado Max [[Tokens]] (MAX_TOKENS) que se usa cuando se crea usa un cliente de modelos [[LLMs]], tales como [[OpenAI]] o [[Anthropic]], corresponde a la máxima cantidad de tokens que se comparten entre el prompt enviado al LLM y la respuesta generada por esta. Es la suma de ambas. Considerar ademas que en el prompt tambien se envia el historial de la conversación y todo eso suma.

En general, los modelos como [[gpt-4]], permiten un máximo de 4096 tokens.

# References

 - [How the max tokens are considered](https://community.openai.com/t/how-the-max-tokens-are-considered/313514/9)

