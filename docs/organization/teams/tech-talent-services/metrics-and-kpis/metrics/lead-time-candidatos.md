---
created: 2024-10-23T11:43:54
updated: 2024-10-23T14:36:38
description: Esta métrica mide el tiempo (en días hábiles) que toma enviar candidatos TI a un cliente, desde la aprobación de un requerimiento.
---

# Lead Time de Candidatos

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

## Descripción e Importancia

Esta métrica mide el tiempo (en días hábiles) que toma enviar candidatos TI a un cliente, desde la aprobación de un requerimiento. Es fundamental para:

- Predecir y gestionar tiempos de respuesta a clientes
- Optimizar el proceso de reclutamiento
- Establecer expectativas realistas con clientes
- Monitorear la eficiencia del proceso de selección

| **Atributo**                               | **Valor**              |
|--------------------------------------------|------------------------|
| **ID**                                     | ITTS_METRIC_LTC85      |
| **Responsable**                            | IT Talent Services     |
| **Impacto a medir**                        | Eficiencia Operacional |
| **Frecuencia de actualización y registro** | Mensual                |
| **Período base de medición**               | Mensual                |
| **Unidad de medida**                       | Días hábiles           |

## Fuente de datos

Los datos para esta métrica provienen desde el [Tablero de Reclutamiento y Selección de IT Talent Services](https://23peoplespa.kanbanize.com/ctrl_board/23) en BusinessMap. En particular, se deben considerar las marcas (timestamp) de inicio y término de las tarjetas en los siguientes flujos:

- Timestamp inicial: Cuando la tarjeta pasa a "Pre selección/En progreso" en el Flujo de Requerimientos
- Timestamp final: Cuando la tarjeta pasa a "Selección de Candidato/Filtro CV cliente/CV Enviado a Cliente" en el Flujo de Postulaciones

## Dimensiones a considerar y Frecuencia de actualización

Esta métrica debe ser medida y registrada de manera mensual, considerando las siguientes dimensiones:

- Perfil Profesional TI (Software Engineer, Data Engineer, etc.)
- Nivel de Experiencia (Entry, Entry Avanzado, Midlevel, Senior)

Es decir, se debe medir y registrar la métrica para cada **combinación existente** de estas dimensiones en el mes determinado.

## Cómo Medir

El Lead Time de Candidatos se calcula restando la fecha de envío del CV al cliente menos la fecha de aprobación del requerimiento, considerando solo días hábiles. El resultado se redondea hacia arriba y debe ser mínimo 1 día.

**Fórmula**:

$$\text{Lead Time de Candidatos} = \text{CEILING}(\text{MAX}(1, \text{NETWORKDAYS}(\text{Fecha Aprobación}, \text{Fecha Envío CV})))$$

Donde:

- CEILING: Función de redondeo hacia arriba
- MAX: Función que retorna el valor máximo entre dos números
- NETWORKDAYS: Función que calcula días hábiles entre dos fechas

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular la métrica para el mes de **Octubre 2024** y se registraron los siguientes datos:

```plaintext
Software Engineer - Senior:
- Fecha de Aprobación del Requerimiento: 2024-10-15 10:30:00
- Fecha de Envío del CV al Cliente: 2024-10-18 15:45:00
- Días hábiles entre fechas: 4 días

Software Engineer - Midlevel:
- Fecha de Aprobación del Requerimiento: 2024-10-15 10:30:00
- Fecha de Envío del CV al Cliente: 2024-10-16 09:15:00
- Días hábiles entre fechas: 2 días

Data Engineer - Senior:
- Fecha de Aprobación del Requerimiento: 2024-10-15 10:30:00
- Fecha de Envío del CV al Cliente: 2024-10-15 17:45:00
- Días hábiles entre fechas: 1 día
```

Dada la formula de la métrica, el cálculo para cada combinación sería:

$$\text{Lead Time Software Engineer Senior} = \text{CEILING}(\text{MAX}(1, 4)) = 4 \text{ días hábiles}$$
$$\text{Lead Time Software Engineer Midlevel} = \text{CEILING}(\text{MAX}(1, 2)) = 2 \text{ días hábiles}$$
$$\text{Lead Time Data Engineer Senior} = \text{CEILING}(\text{MAX}(1, 1)) = 1 \text{ día hábil}$$
