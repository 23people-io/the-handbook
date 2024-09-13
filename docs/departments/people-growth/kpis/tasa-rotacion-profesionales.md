---
created: 2024-09-12T12:15:10
updated: 2024-09-13T14:30:00
description: Mide el porcentaje de profesionales que han dejado la empresa
author: 5127711
status: wip
slug: tasa-rotacion-profesionales
legacy_url: 
---

# Tasa de Rotación Profesionales

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

## Descripción e Importancia

La Tasa de Rotación Profesionales es un indicador crucial que permite a 23people evaluar la estabilidad y satisfacción de su fuerza laboral. Este KPI mide el porcentaje de profesionales que han dejado la empresa, considerando todas las causas de salida. Al monitorear este indicador, la empresa puede identificar tendencias en la retención de empleados, entender las razones detrás de la salida del personal, y desarrollar estrategias para mejorar la satisfacción y retención laboral.

| **Atributo**                               | **Valor**                  |
|--------------------------------------------|----------------------------|
| **ID**                                     | PGR_PTR                    |
| **Responsable**                            | People Growth              |
| **Impacto a medir**                        | Calidad para profesionales |
| **Frecuencia de actualización y registro** | Mensual                    |
| **Unidad de medida**                       | Porcentaje (%)             |
| **Umbrales de salud**                      | **Rango**                  |
| *Objetivo*                                 | <= 20%                     |
| *Alerta*                                   | > 20% y <= 30%             |
| *Crítico*                                  | > 30%                      |

## Fuente de datos y actualización

Los datos para este KPI provienen del sistema de recursos humanos y se actualizan mensualmente. Se considera el número de profesionales que han dejado la empresa en cada mes y el promedio de profesionales activos en ese periodo.

## Dimensiones a considerar

Este KPI debe poder agregado/desagregado en las siguientes dimensiones temporales:

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

La Tasa de Rotación Profesionales se calcula sumando el número de profesionales que han dejado la empresa en el mes en cuestión, dividiendo este número entre el promedio de Profesionales Activos en ese mes, y multiplicando por 100.

**Fórmula**:

$$\text{Tasa de Rotación} = \left( \frac{\text{Número Total de Salidas en el mes}}{\text{Total de Profesionales Activos al inicio del mes}} \right) \times 100$$

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de **Diciembre 2023** y se registraron los siguientes datos:

```plaintext
- Salidas del mes: 5
- Promedio de profesionales activos en ese mes: 123
```

Dada la formula del KPI, el cálculo sería:

$$\text{Tasa de Rotación} = \left( \frac{5}{123} \right) \times 100 = 4.07\%$$

La Tasa de Rotación Profesionales sería de 4.07% en Diciembre 2024, lo cual está en el rango saludable (<= 20%).
