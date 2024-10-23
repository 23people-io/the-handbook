---
created: 2024-10-23T11:43:54
updated: 2024-10-23T14:36:38
description: Mide el tiempo (en días hábiles) que toma completar la cantidad de candidatos IT solicitada por el cliente, desde la aprobación del requerimiento.
author: 5127711
---

# Lead Time de Candidatos IT

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

## Descripción e Importancia

Este KPI es vital para responder con precisión y confianza a la pregunta del cliente: "¿En cuántos días recibiré X candidatos, luego de que yo de el ok para partir su búsqueda y selección por parte de 23people?". Al medir el tiempo desde la aprobación de requerimientos hasta el envío de la cantidad solicitada de candidatos al cliente, este indicador ayuda a 23people a establecer expectativas realistas y confiables con los clientes.

Se utiliza un análisis estadístico para poder predecir la cantidad de días con una confianza probabilística de un 80%. Poder predecir el tiempo que tomará a 23people el poder enviar candidatos que cumplan con los requerimientos acordados con el cliente previamente, refleja la capacidad de la empresa para entender y satisfacer las necesidades del cliente de manera confiable, lo cual es un diferenciador competitivo en el mercado de servicios de talento IT.

| **Atributo**                               | **Valor**                |
|--------------------------------------------|--------------------------|
| **ID**                                     | ITTS_LTC                 |
| **Responsable**                            | IT Talent Services       |
| **Impacto a medir**                        | Eficiencia Operacional   |
| **Frecuencia de actualización y registro** | Mensual                  |
| **Unidad de medida**                       | Días hábiles             |
| **Umbrales de salud**                      | **Rango**                |
| *Objetivo*                                 | <= 7 días hábiles        |
| *Alerta*                                   | > 7 y <= 10 días hábiles |
| *Crítico*                                  | > 10 días hábiles        |

## Fuente de datos y actualización

Los datos para este KPI provienen del sistema de gestión de candidatos (ATS) de 23people, donde se registran las fechas de:

1. Aprobación del requerimiento por parte del cliente
2. Envío de cada candidato que cumple con los requisitos al cliente

## Dimensiones a considerar

Este KPI debe poder desagregado en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Semestral
- Anual

Además, se debe considerar la posibilidad de desagregar el KPI por las siguientes dimensiones:

- Perfil IT (Software Engineer, Data Engineer, etc.)
- Nivel de Experiencia (Entry, Entry Avanzado, Midlevel, Senior)
- Cliente
- Tecnologías requeridas

## Cálculo

El Lead Time de Candidatos IT se calcula utilizando el método Monte Carlo para pronosticar el tiempo necesario para completar múltiples ítems, siguiendo el enfoque descrito en el libro ["When will it be done?"](https://actionableagile.com/books/wwibd/). Este método nos permite responder con precisión estadística a la pregunta: **"¿Cuánto tiempo (en días hábiles) tomará el poder cumplir con haber enviado X candidatos al cliente?"** (donde X puede ser 1, 2, 3...n).

### Metodología de Cálculo

1. **Recolección de Datos Históricos**:
   - Se recopilan los tiempos históricos de lead time para envíos individuales de candidatos
   - Se registra la fecha de inicio (aprobación del requerimiento) y fecha de fin (envío del candidato)

2. **Simulación Monte Carlo**:
   - Para cada predicción de X candidatos:
     1. Se realizan múltiples simulaciones (típicamente 10,000 iteraciones)
     2. En cada iteración:
        - Se seleccionan aleatoriamente X tiempos históricos de lead time
        - Se simula el proceso de completar los X candidatos
        - Se registra el tiempo total necesario para completar todos los candidatos
     3. Se ordenan los resultados de todas las iteraciones
     4. Se calcula el percentil 80 de los resultados para obtener una predicción con 80% de confianza

**Fórmula Base**:

$$\text{Lead Time de Candidatos IT}_{X} = \text{Percentil}_{80}(\text{Simulación Monte Carlo}(X, \text{datos históricos}))$$

Donde:

- X = número de candidatos solicitados
- La simulación Monte Carlo realiza 10,000 iteraciones
- El Percentil 80 nos da un valor con 80% de confianza estadística

**Ejemplo**:

Considerando que necesitamos enviar 1 candidato y tenemos los siguientes datos históricos de lead times individuales (en días hábiles):

```plaintext
Datos históricos de lead times individuales:
[3, 4, 3, 5, 4, 3, 4, 5, 4, 3, 6, 3, 4, 5, 4]

Simulación Monte Carlo para 1 candidato (10,000 iteraciones):
Iteración 1: [3] = 3 días
Iteración 2: [4] = 4 días
Iteración 3: [5] = 5 días
Iteración 4: [3] = 3 días
Iteración 5: [4] = 4 días
...
Iteración 10000: [4] = 4 días

Resultado del Percentil 80 de todas las iteraciones = 5 días hábiles
```

Por lo tanto:

$$\text{Lead Time de Candidatos IT}_{1} = 5 \text{ días hábiles}$$

Esto significa que podemos afirmar con un 80% de confianza que el envío de 1 candidato tomará 5 días hábiles o menos. Este resultado podría ser típico para:

- Perfiles IT con alta demanda en el mercado
- Niveles Entry o Entry Avanzado donde hay mayor disponibilidad de candidatos
- Tecnologías más comunes en el mercado
- Casos donde ya se tiene una base de candidatos pre-evaluados

La distribución de los datos históricos muestra un proceso bastante estable y eficiente, con la mayoría de los casos completándose entre 3 y 5 días, lo que refleja un proceso de reclutamiento bien optimizado para este tipo de requerimiento específico.
