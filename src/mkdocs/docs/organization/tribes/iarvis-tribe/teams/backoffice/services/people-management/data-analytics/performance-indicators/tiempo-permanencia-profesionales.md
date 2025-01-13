---
created: 2024-05-31T17:23:39
updated: 2025-01-11T00:00:00
description: Mide la duración promedio en meses que los profesionales permanecen en 23people.
author: 5127711
legacy_url: https://manual.23people.io/es/articles/9407244-tiempo-de-permanencia-promedio-de-profesionales
---

# Tiempo de Permanencia de Profesionales

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

Mide la duración promedio en meses que los profesionales permanecen en 23people.

## Descripción e Importancia

El "Tiempo de Permanencia" es un KPI crucial que mide la duración promedio en meses que los profesionales permanecen en 23people, desde su contratación hasta su salida de la empresa. Este indicador proporciona una visión panorámica de la retención de talento y la estabilidad laboral en la organización. Es fundamental para evaluar la efectividad de las políticas de retención, identificar patrones de rotación, y tomar decisiones informadas sobre inversiones en desarrollo profesional, programas de beneficios y estrategias de retención de talento.

| **Atributo**                               | **Valor**                    |
| ------------------------------------------ | ---------------------------- |
| **ID**                                     | PGR-TDP                      |
| **Responsable**                            | People Growth                |
| **Impacto a medir**                        | Calidad (para profesionales) |
| **Frecuencia de actualización y registro** | Mensual                      |
| **Unidad de medida**                       | Meses                        |
| **Umbrales de salud**                      | **Rango**                    |
| *Objetivo*                                 | >= 24 meses                  |
| *Alerta*                                   | >= 12 y < 24 meses           |
| *Crítico*                                  | < 12 meses                   |

## Fuente de datos y actualización

Los datos para este KPI se obtienen de la plataforma BUK, que registra las fechas de contratación y salida de los profesionales. Se actualiza mensualmente, considerando todos los profesionales activos y aquellos que han salido de la empresa en el período de medición.

## Dimensiones a considerar

Este KPI debe poder desagregado en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Semestral
- Anual

Además, se debe considerar la posibilidad de desagregar el KPI por las siguientes dimensiones:

- Tribu (Drakkar, Jarvis)
- Cliente (Nombre del cliente en el caso de Drakkar, "23people" en el caso de Jarvis)
- Equipo (Equipo en el cliente en el caso de Drakkar, Nombre del Departamento en el caso de 23people)
- Perfil del Profesional (Software Engineer, Account Manager, Recruiter, Data Engineer, etc.)
- Nivel de Experiencia (Entry, Entry Avanzado, Midlevel, Senior)
- Motivo de Salida (Voluntaria, Mutuo Acuerdo, Necesidades de la empresa)

## Cálculo

El "Tiempo de Permanencia" se calcula como el promedio de meses que los profesionales han permanecido en la empresa, considerando tanto a los profesionales activos como a los que han salido durante el período de medición.

**Fórmula**:

$$\text{Tiempo de Permanencia} = \left( \frac{\text{Suma de meses de permanencia de todos los profesionales}}{\text{Número total de profesionales considerados}} \right)$$

Donde:

- Número total de profesionales considerados incluye activos y salidos en el período
- Meses de permanencia se calcula como la diferencia entre la fecha de salida (o la fecha actual para profesionales activos) y la fecha de contratación.

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de **Julio 2024** y se registraron los siguientes datos:

```plaintext
- Profesional A: 36 meses (activo)
- Profesional B: 24 meses (activo)
- Profesional C: 18 meses (salió este mes)
- Profesional D: 12 meses (activo)
- Profesional E: 6 meses (salió este mes)
```

Dada la formula del KPI, el cálculo sería:

$$\text{Tiempo de Permanencia} = \left( \frac{36 + 24 + 18 + 12 + 6}{5} \right) = 19.2 \text{ meses}$$

Este KPI proporciona una visión valiosa sobre la duración promedio de la permanencia de los profesionales en 23people, lo que puede ayudar a la empresa a:

1. Evaluar la efectividad de las políticas de retención de talento.
2. Identificar patrones de rotación en diferentes equipos, clientes o perfiles profesionales.
3. Tomar decisiones informadas sobre cuándo implementar programas de desarrollo o beneficios específicos.
4. Analizar el retorno de inversión en la contratación y formación de profesionales.
5. Establecer estrategias para aumentar la retención y estabilidad del equipo a largo plazo.
