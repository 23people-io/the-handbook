---
created: 2024-01-24T11:43:54
updated: 2024-10-03T14:36:38
description: Mide la calidad del servicio mediante la aprobación de candidatos por parte de los clientes.
author: 5127711
slug: tasa-aceptacion-candidatos
legacy_url: https://manual.23people.io/es/articles/8862466-tasa-de-candidatos-aprobados-por-cliente
---

# Tasa de Aceptación de Candidatos

Mide el porcentaje de candidatos aceptados por los clientes en relación al total de candidatos presentados para posiciones de TI.

## Descripción e Importancia

La Tasa de Aceptación de Candidatos es un indicador clave que evalúa la efectividad del proceso de selección de IT Talent Services y su capacidad para entender y satisfacer las necesidades específicas de los clientes. Este KPI refleja la calidad del servicio proporcionado, midiendo la proporción de candidatos que son aceptados por los clientes en relación al total de candidatos presentados para posiciones de TI. Una alta tasa de aceptación indica una buena comprensión de los requisitos del cliente y un proceso de selección eficaz, lo que puede llevar a una mayor satisfacción del cliente y a relaciones comerciales más sólidas.

| **Atributo**                               | **Valor**                    |
| ------------------------------------------ | ---------------------------- |
| **ID**                                     | ITTS-TAC                     |
| **Responsable**                            | IT Talent Services           |
| **Impacto a medir**                        | Calidad (para clientes)      |
| **Frecuencia de actualización y registro** | Mensual                      |
| **Unidad de medida**                       | Porcentaje (%)               |
| **Umbrales de salud**                      | **Rango**                    |
| *Objetivo*                                 | >= 70%                       |
| *Alerta*                                   | >= 50% y < 70%               |
| *Crítico*                                  | < 50%                        |

## Fuente de datos y actualización

Los datos para este KPI provienen del sistema de seguimiento de candidatos utilizado por IT Talent Services. Se registra cada candidato presentado a un cliente y su resultado (aceptado o no aceptado). La actualización se realiza mensualmente, considerando todos los candidatos presentados y sus resultados en el mes anterior.

## Dimensiones a considerar

Este KPI debe poder desagregado en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Semestral
- Anual

Además, se debe considerar la posibilidad de desagregar el KPI por las siguientes dimensiones:

- Cliente
- Perfil Profesional TI
- Nivel de Experiencia (Entry, Entry Avanzado, Midlevel, Senior)
- Tecnologías Principales
- Nivel de Inglés

## Cálculo

La Tasa de Aceptación de Candidatos se calcula dividiendo el número de candidatos aceptados por los clientes entre el número total de candidatos presentados en un período determinado, y multiplicando el resultado por 100 para obtener un porcentaje.

**Fórmula**:

$$\text{Tasa de Aceptación de Candidatos} = \left( \frac{\text{Número de candidatos aceptados}}{\text{Número total de candidatos presentados}} \right) \times 100$$

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de **Julio 2024** y se registraron los siguientes datos:

```plaintext
- Número de candidatos aceptados: 35
- Número total de candidatos presentados: 50
```

Dada la formula del KPI, el cálculo sería:

$$\text{Tasa de Aceptación de Candidatos} = \left( \frac{35}{50} \right) \times 100 = 70\%$$

En este ejemplo, la Tasa de Aceptación de Candidatos para Julio 2024 sería del 70%, lo cual alcanza justo el umbral objetivo establecido para este KPI.
