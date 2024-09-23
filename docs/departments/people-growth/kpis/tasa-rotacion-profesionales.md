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
| *Objetivo*                                 | <= 1.5%                     |
| *Alerta*                                   | > 1.5% y <= 3%             |
| *Crítico*                                  | > 3%                      |

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

La Tasa de Rotación Profesionales (Mensual) se calcula sumando el número de profesionales que han dejado la empresa en el mes en cuestión, dividiendo este número entre el total de Profesionales Activos al inicio de ese mes, y multiplicando por 100.

Fórmula:

$$\text{Tasa de Rotación Mensual} = \left( \frac{\text{Número de Salidas en el mes}}{\text{Total de Profesionales Activos al inicio del mes}} \right) \times 100$$

### Trimestral, Semestral y Anual

Para periodos más largos, se calcula el promedio de las tasas mensuales en el periodo correspondiente.

Fórmula general:

$$\text{Tasa de Rotación Periodo} = \frac{\sum \text{Tasas de Rotación Mensuales en el periodo}}{\text{Número de meses en el periodo}}$$

## Ejemplos de Cálculo

### Ejemplo 1: Cálculo Mensual Básico

Considerando, como ejemplo, que se quiere calcular el KPI para el mes de Julio 2024:

```plaintext
- Salidas en Julio 2024: 2
- Total de Profesionales Activos al inicio de Julio 2024: 150
```

Cálculo:

$$\text{Tasa de Rotación Julio 2024} = \left( \frac{2}{150} \right) \times 100 = 1.33%$$

Este resultado está dentro del rango objetivo (<= 1.5%).

### Ejemplo 2: Cálculo Trimestral con Dimensiones

Supongamos que queremos calcular la tasa de rotación para el segundo trimestre de 2024, desglosado por Tribu y Perfil del Profesional:

```plaintext
Abril 2024:
- Drakkar: 1 salida (Software Engineer) de 80 profesionales
- Jarvis: 1 salida (Account Manager) de 70 profesionales

Mayo 2024:
- Drakkar: 2 salidas (1 Software Engineer, 1 Data Engineer) de 82 profesionales
- Jarvis: 0 salidas de 72 profesionales

Junio 2024:
- Drakkar: 1 salida (Software Engineer) de 81 profesionales
- Jarvis: 1 salida (Recruiter) de 73 profesionales
```

Cálculos mensuales:

Abril: (1/80 + 1/70) × 100 = 2.68%
Mayo: (2/82 + 0/72) × 100 = 2.44%
Junio: (1/81 + 1/73) × 100 = 2.60%

Tasa de Rotación Trimestral:

$$(2.68% + 2.44% + 2.60%) \div 3 = 2.57%$$

Desglose por Tribu:

Drakkar: ((1/80 + 2/82 + 1/81) ÷ 3) × 100 = 1.63%
Jarvis: ((1/70 + 0/72 + 1/73) ÷ 3) × 100 = 0.92%

Desglose por Perfil:

Software Engineer: 3 salidas
Data Engineer: 1 salida
Account Manager: 1 salida
Recruiter: 1 salida
