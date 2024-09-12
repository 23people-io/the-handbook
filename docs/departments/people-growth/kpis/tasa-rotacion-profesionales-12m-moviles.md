---
created: 2024-09-12T12:15:10
updated: 2024-09-12T14:30:00
description: Mide el porcentaje de profesionales que han dejado la empresa en los últimos 12 meses.
author: 5127711
status: wip
slug: tasa-rotacion-profesionales-12m-moviles
legacy_url: 
---

# Tasa de Rotación Profesionales (12 meses móviles)

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

## Descripción e Importancia

La Tasa de Rotación Profesionales (12 meses móviles) es un indicador crucial que permite a 23people evaluar la estabilidad y satisfacción de su fuerza laboral. Este KPI mide el porcentaje de profesionales que han dejado la empresa en los últimos 12 meses, considerando todas las causas de salida. Al monitorear este indicador, la empresa puede identificar tendencias en la retención de empleados, entender las razones detrás de la salida del personal, y desarrollar estrategias para mejorar la satisfacción y retención laboral.

| **Atributo**                               | **Valor**                  |
|--------------------------------------------|----------------------------|
| **ID**                                     | PGR_PTR12M                 |
| **Responsable**                            | People Growth              |
| **Impacto a medir**                        | Calidad para profesionales |
| **Frecuencia de actualización y registro** | Mensual                    |
| **Unidad de medida**                       | Porcentaje (%)             |
| **Umbrales de salud**                      | **Rango**                  |
| *Objetivo*                                 | <= 20%                     |
| *Alerta*                                   | > 20% y <= 30%             |
| *Crítico*                                  | > 30%                      |

## Fuente de datos y actualización

Los datos para este KPI provienen del sistema de recursos humanos y se actualizan mensualmente. Se considera el número de profesionales que han dejado la empresa en cada mes de los últimos 12 meses y el número promedio de profesionales durante ese período.

## Dimensiones a considerar

Este KPI debe poder desagregado en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Semestral
- Anual

Además, se debe considerar la posibilidad de desagregar el KPI por las siguientes dimensiones:

- Tribu (Drakkar, Jarvis)
- Empresa (Nombre del cliente en el caso de Drakkar, "23people" en el caso de Jarvis)
- Equipo (Equipo en el cliente en el caso de Drakkar, Nombre del Departamento en el caso de 23people)
- Perfil del Profesional (Software Engineer, Account Manager, Recruiter, Data Engineer, etc.)
- Causal de Término. Corresponde a los tipos indicados en la Dirección del Trabajo (e.g. Renuncia del trabajador, Necesidades de la empresa, Mutuo acuerdo, etc.)
- Motivo del Término. Tipos de motivos por la cual el profesional renunció o fue desvinculado de la empresa.

## Cálculo

La Tasa de Rotación Profesionales (12 meses móviles) se calcula sumando el número de profesionales que han dejado la empresa en los últimos 12 meses, dividiendo este número entre el promedio de profesionales durante ese período, y multiplicando por 100.

**Fórmula**:

$$\text{Tasa de Rotación} = \left( \frac{\text{Número total de salidas en los últimos 12 meses}}{\text{Promedio de profesionales en los últimos 12 meses}} \right) \times 100$$

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de **Diciembre 2023** y se registraron los siguientes datos:

```plaintext
- Salidas los últimos 12 meses: 37
- Número promedio de profesionales los últimos 12 meses: 150
```

Dada la formula del KPI, el cálculo sería:

$$\text{Tasa de Rotación} = \left( \frac{37}{150} \right) \times 100 = 24.67\%$$

La Tasa de Rotación Profesionales (12 meses móviles) sería de 24.67%, lo cual está dentro del rango de alerta (>20% y <= 30%).
