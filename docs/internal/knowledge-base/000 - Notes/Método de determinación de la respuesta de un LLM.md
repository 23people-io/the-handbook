---
type: literature-note
status: inmature
created at: 2024-10-26 22:55
updated at: 2024-10-26 22:55
category:
- technology

---
La salida desde un [[LLMs|LLM]], se determina a partir del vector de alta dimensionalidad resultante al final de la arquitectura de la red neuronal que tiene como valores la [[Distribución de Probabilidad]] de cada [[Tokens|Token]] del vocabulario posible de responder. La forma de determinar la elección, es con base al valor del parámetro de [[Temperatura del LLM]] y puede ser de 3 formas: Deter

1. **Determinístico**: El parámetro de temperatura es cercano a 0. El token con mayor probabilidad se elige. Es el mas seguro dado que se basa en la historia pasada. Se usa para predicciones que deben ser muy confiables y poco creativas (e.g. una cadena binaria, secuencia de ADN, etc.).  
2. **Según la distribución de probabilidad**. El parámetro de temperatura es cercano a 1. El token se elige con base a la distribución de probabilidad. Se usa para predicciones en donde se puede ser creativo y la respuesta equivocada no representa algo critico (e.g. texto de un párrafo,  generación de imágenes, etc.).
3. **Aleatorio**. El parámetro de temperatura es mayor a 1. 

---
## References

 - [Text](no-reference)

