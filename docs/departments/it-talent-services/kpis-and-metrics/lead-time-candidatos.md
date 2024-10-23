---
created: 2024-10-23T11:43:54
updated: 2024-10-23T14:36:38
description: Mide el tiempo (en días hábiles) que toma completar la cantidad de candidatos IT solicitada por el cliente, desde la aprobación del requerimiento.
author: 5127711
---

# Lead Time de Candidatos

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

## Descripción e Importancia

Este KPI es vital para responder con precisión y confianza a la pregunta del cliente: "¿En cuántos días recibiré X candidatos, luego de que yo de el ok para partir su búsqueda y selección por parte de 23people?". Al medir el tiempo desde la aprobación de requerimientos hasta el envío de la cantidad solicitada de candidatos al cliente, este indicador ayuda a 23people a establecer expectativas realistas y confiables con los clientes.

Se utiliza un análisis estadístico para poder predecir la cantidad de días con una confianza probabilística de un 85%. Poder predecir el tiempo que tomará a 23people el poder enviar candidatos que cumplan con los requerimientos acordados con el cliente previamente, refleja la capacidad de la empresa para entender y satisfacer las necesidades del cliente de manera confiable, lo cual es un diferenciador competitivo en el mercado de servicios de talento IT.

| **Atributo**                               | **Valor**                |
|--------------------------------------------|--------------------------|
| **ID**                                     | ITTS_LTC85               |
| **Responsable**                            | IT Talent Services       |
| **Impacto a medir**                        | Eficiencia Operacional   |
| **Frecuencia de actualización y registro** | Mensual                  |
| **Unidad de medida**                       | Días hábiles             |
| **Umbrales de salud**                      | **Rango**                |
| *Objetivo*                                 | <= 7 días hábiles        |
| *Alerta*                                   | > 7 y <= 10 días hábiles |
| *Crítico*                                  | > 10 días hábiles        |

## Fuente de datos y actualización

Los datos para este KPI provienen de los Flujos de Trabajo en el [Tablero de Reclutamiento y Selección de IT Talent Services](https://23peoplespa.kanbanize.com/ctrl_board/23) en BusinessMap. Se deben registrar las fechas de:

1. **Aprobación del Requerimiento por parte del cliente**. La marca de inicio se refleja cuando en el "Flujo de Requerimientos", una tarjeta pasa a la columna: "Pre selección/En progreso". Es decir, este tiempo de inicio será comun a todos los candidatos que se envíen al cliente.
2. **CV del Candidato enviado al cliente**. La marca de término se refleja cuando en el "Flujo de Postulaciones", una tarjeta pasa a la columna: "Selección de Candidato/Filtro CV cliente/CV Enviado a Cliente".

## Dimensiones a considerar

Este KPI debe poder desagregado en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Semestral
- Anual

Además, se debe considerar la posibilidad de desagregar el KPI por las siguientes dimensiones:

- Perfil Profesional TI (Software Engineer, Data Engineer, etc.)
- Nivel de Experiencia (Entry, Entry Avanzado, Midlevel, Senior)
- Cantidad de Candidatos (Considerar 1 o 3 candidatos como ejemplos)

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
     4. Se calcula el percentil 85 de los resultados para obtener una predicción con 80% de confianza

**Fórmula Base**:

$$\text{Lead Time de Candidatos}_{X} = \text{Percentil}_{85}(\text{Simulación Monte Carlo}(X, \text{datos históricos}))$$

Donde:

- X = número de candidatos solicitados
- La simulación Monte Carlo realiza 10,000 iteraciones
- El Percentil 85 nos da un valor con 85% de confianza estadística

### Ejemplos de Cálculo

#### Ejemplo 1: Lead Time para 1 Candidato

Consideremos los siguientes datos históricos de lead times individuales (en días hábiles):

```plaintext
Datos históricos de lead times individuales:
[4, 5, 3, 6, 4, 5, 3, 7, 4, 5, 4, 6, 3, 5, 4]

Simulación Monte Carlo para 1 candidato (10,000 iteraciones):
Iteración 1: [4] = 4 días
Iteración 2: [5] = 5 días
Iteración 3: [3] = 3 días
Iteración 4: [6] = 6 días
Iteración 5: [4] = 4 días
...
Iteración 9998: [5] = 5 días
Iteración 9999: [4] = 4 días
Iteración 10000: [5] = 5 días

Distribución de resultados:
- 3 días: 20% de las iteraciones
- 4 días: 33% de las iteraciones
- 5 días: 27% de las iteraciones
- 6 días: 13% de las iteraciones
- 7 días: 7% de las iteraciones

Resultado del Percentil 85 = 6 días hábiles
```

Por lo tanto:

$$\text{Lead Time de Candidatos}_{1} = 6 \text{ días hábiles}$$

Esto significa que podemos afirmar con un 85% de confianza que el envío de 1 candidato tomará 6 días hábiles o menos.

#### Ejemplo 2: Lead Time para 3 Candidatos

Para este caso, usamos los mismos datos históricos pero necesitamos simular el tiempo total para completar 3 candidatos:

```plaintext
Datos históricos de lead times individuales:
[4, 5, 3, 6, 4, 5, 3, 7, 4, 5, 4, 6, 3, 5, 4]

Simulación Monte Carlo para 3 candidatos (10,000 iteraciones):
Iteración 1: [4, 5, 3] = 8 días (se suman días para búsquedas parcialmente paralelas)
Iteración 2: [5, 6, 4] = 9 días
Iteración 3: [3, 7, 5] = 10 días
Iteración 4: [4, 4, 6] = 9 días
Iteración 5: [5, 3, 5] = 8 días
...
Iteración 9998: [4, 5, 6] = 9 días
Iteración 9999: [3, 5, 4] = 8 días
Iteración 10000: [5, 4, 5] = 9 días

Distribución de resultados:
- 7 días: 5% de las iteraciones
- 8 días: 25% de las iteraciones
- 9 días: 35% de las iteraciones
- 10 días: 25% de las iteraciones
- 11 días: 10% de las iteraciones

Resultado del Percentil 85 = 10 días hábiles
```

Por lo tanto:

$$\text{Lead Time de Candidatos}_{3} = 10 \text{ días hábiles}$$

Esto significa que podemos afirmar con un 85% de confianza que el envío de 3 candidatos tomará 10 días hábiles o menos.

#### Notas importantes sobre los ejemplos

1. **Paralelismo parcial**: Para el caso de 3 candidatos, el tiempo total no es simplemente la suma de tres tiempos individuales, ya que algunas actividades de búsqueda y evaluación pueden realizarse en paralelo.

2. **Variabilidad**: El método Monte Carlo considera la variabilidad natural del proceso, lo que resulta en una distribución de posibles resultados.

3. **Percentil 85**: Usando el percentil 85, estamos siendo conservadores en nuestra estimación para mantener un alto nivel de confiabilidad en nuestros compromisos con los clientes.

4. **Factores que afectan el tiempo**:
   - Disponibilidad de candidatos en el mercado
   - Nivel de experiencia requerido
   - Tecnologías específicas solicitadas
   - Temporada del año
   - Complejidad del perfil
