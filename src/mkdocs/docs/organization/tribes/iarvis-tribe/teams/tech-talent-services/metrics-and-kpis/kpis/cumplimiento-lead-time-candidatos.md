---
created: 2024-10-25T11:43:54
updated: 2025-01-11T00:00:00
description: Mide el porcentaje de cumplimiento entre el Lead Time real vs el Lead Time objetivo establecido para el envío de candidatos IT al cliente.
author: 5127711
---

# Cumplimiento del Lead Time Objetivo de Candidatos

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

## Descripción e Importancia

Este KPI es vital para evaluar la eficiencia operacional del proceso de reclutamiento y selección, midiendo qué tan cerca estamos de cumplir con los tiempos objetivo establecidos para cada tipo de búsqueda TI. Un 100% indica que el proceso se completó exactamente en el tiempo objetivo, mientras que porcentajes menores indican desviaciones del objetivo. El indicador normaliza los diferentes tiempos objetivo según el perfil profesional, nivel de experiencia, tecnologias y cantidad de candidatos, permitiendo una evaluación justa y comparable del desempeño del proceso de reclutamiento independientemente de su complejidad.

El cumplimiento de los tiempos objetivo refleja nuestra capacidad como empresa para entregar resultados predecibles y confiables a nuestros clientes, lo cual es un diferenciador competitivo en el mercado de servicios de Talento IT.

| **Atributo**                               | **Valor**              |
|--------------------------------------------|------------------------|
| **ID**                                     | ITTS_CLTOC             |
| **Responsable**                            | IT Talent Services     |
| **Impacto a medir**                        | Eficiencia Operacional |
| **Frecuencia de actualización y registro** | Mensual                |
| **Período base de medición**               | Mensual                |
| **Unidad de medida**                       | Días hábiles           |
| **Umbrales de salud (Mensual)**            | **Rango**              |
| *Objetivo*                                 | ≥ 85%                  |
| *Alerta*                                   | ≥ 70% y < 85%          |
| *Crítico*                                  | < 70%                  |

## Fuente de datos y actualización

Los datos para este KPI provienen de dos fuentes:

1. **Tiempos reales**: Flujos de Trabajo en el [Tablero de Reclutamiento y Selección de IT Talent Services](https://23peoplespa.kanbanize.com/ctrl_board/23) en Businessmap:
    - Fecha de inicio: Cuando una tarjeta pasa a "Pre selección/En progreso" en el "Flujo de Requerimientos"
    - Fecha de término: Cuando una tarjeta pasa a "Selección de Candidato/Filtro CV cliente/CV Enviado a Cliente" en el "Flujo de Postulaciones"

2. **Tiempos objetivo**: Tabla maestra de tiempos objetivo según perfil y cantidad de candidatos, mantenida por IT Talent Services:

## Períodos de Análisis

El KPI se calcula y registra mensualmente, pero puede analizarse en los siguientes períodos:

- **Mensual** (período base)

    - Los umbrales de salud definidos aplican directamente

- **Trimestral**

    - Se calcula como el promedio de los tres meses del trimestre
    - Los umbrales aplican al promedio trimestral

- **Semestral**

    - Se calcula como el promedio de los seis meses del semestre
    - Útil para análisis de tendencias y planificación

- **Anual**

    - Se calcula como el promedio de los doce meses del año
    - Usado para evaluación de desempeño anual y planificación estratégica

## Cálculo

El KPI se calcula como el porcentaje de cumplimiento del tiempo objetivo, considerando la diferencia entre el tiempo real y el tiempo objetivo establecido.

**Fórmula**:

$$\text{Cumplimiento Lead Time} = \begin{cases}
100\% & \text{si Tiempo Real} \leq \text{Tiempo Objetivo} \\
\left(2 - \frac{\text{Tiempo Real}}{\text{Tiempo Objetivo}}\right) \times 100\% & \text{si Tiempo Real} > \text{Tiempo Objetivo}
\end{cases}$$

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de **Marzo 2024** para un caso de búsqueda con los siguientes datos:

```plaintext
- Perfil: Software Engineer
- Nivel: Midlevel
- Cantidad de candidatos: 3
- Tiempo objetivo según tabla: 15 días hábiles
- Tiempo real tomado: 17 días hábiles
```

Dada la formula del KPI, el cálculo sería:

$$\text{Cumplimiento Lead Time} = \left(2 - \frac{17}{15}\right) \times 100\% = 86.67\%$$

Este resultado indica que el proceso está en estado de **Objetivo** ya que supera el 85% de cumplimiento.
