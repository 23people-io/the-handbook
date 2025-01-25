---
created: 2024-09-10T12:15:10
updated: 2025-01-11T00:00:00
description: Mide el grado de concentración de las ventas entre los clientes de la empresa.
author: 5127711
status: wip
slug: concentracion-ventas
legacy_url: 
---

# Concentración de Ventas por Cliente

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

## Descripción e Importancia

La Concentración de Ventas por Cliente es un indicador crucial que evalúa la diversificación de los ingresos de la empresa y el riesgo asociado a la dependencia de un número reducido de clientes. Una alta concentración puede indicar vulnerabilidad ante la pérdida de clientes clave, mientras que una baja concentración sugiere una cartera de clientes más diversificada y un riesgo distribuido.

| **Atributo**                               | **Valor**                |
| ------------------------------------------ | ------------------------ |
| **ID**                                     | FIN-ORC                  |
| **Responsable**                            | Finances                 |
| **Impacto a medir**                        | Riesgo financiero        |
| **Frecuencia de actualización y registro** | Mensual                  |
| **Unidad de medida**                       | Índice (0-10000)         |
| **Umbrales de salud**                      | **Rango**                |
| *Objetivo*                                 | < 1500                   |
| *Alerta*                                   | >= 1500 y < 2500         |
| *Crítico*                                  | >= 2500                  |

## Fuente de datos y actualización

Los datos para este KPI provienen del sistema de facturación y contabilidad de la empresa. Se actualizan mensualmente.

## Dimensiones a considerar

Este KPI debe poder desagregado en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Semestral
- Anual

Además, se debe considerar la posibilidad de desagregar el KPI por las siguientes dimensiones:

- Departamento de Servicios:
    - IT Talent Services (ITTS)
    - Digital Platforms, Data & AI Services (DPS)
- Geografía: País o región asociados al cliente, independientemente de donde se facture

- Cliente: Nombre del cliente
- Servicio:
    - Outsourcing TI
    - Hunting TI
    - Integración
    - Modernización y Evolución
    - Otros servicios específicos
- Contacto del Cliente: Manager o representante del cliente asociado a los proyectos

## Cálculo

La Concentración de Ventas por Cliente se calcula utilizando el Índice de Herfindahl-Hirschman (HHI), que es la suma de los cuadrados de las participaciones de mercado de cada cliente.

**Fórmula**:

$$\text{HHI} = \sum (s_i^2) \times 10000$$

Donde:

- $s_i$ es la participación de mercado del cliente i expresada como fracción
- Σ representa la suma para todos los clientes

**Ejemplo de cálculo (valor de alerta)**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de Diciembre 2023 y se registraron los siguientes datos para los 5 clientes principales:

```plaintext
- Cliente A: 30% de las ventas totales
- Cliente B: 25% de las ventas totales
- Cliente C: 20% de las ventas totales
- Cliente D: 15% de las ventas totales
- Cliente E: 10% de las ventas totales
```

El cálculo sería:

$$
\text{HHI} = (0.30^2 + 0.25^2 + 0.20^2 + 0.15^2 + 0.10^2) \times 10000 \\
\text{HHI} = (0.09 + 0.0625 + 0.04 + 0.0225 + 0.01) \times 10000 \\
\text{HHI} = 0.2350 \times 10000 = 2350
$$

Este resultado de 2350 indica una concentración moderada-alta, ya que está en el rango de alerta (>= 1500 y < 2500). Sugiere que la empresa podría beneficiarse de diversificar más su base de clientes para reducir el riesgo.

**Ejemplo de cálculo (valor saludable)**:

Consideremos ahora un escenario más diversificado para el mes de Junio 2024:

```plaintext
- Cliente A: 15% de las ventas totales
- Cliente B: 12% de las ventas totales
- Cliente C: 10% de las ventas totales
- Cliente D: 8% de las ventas totales
- Cliente E: 7% de las ventas totales
- Otros 15 clientes: 48% de las ventas totales (promedio de 3.2% cada uno)
```

El cálculo sería:

$$
\text{HHI} = (0.15^2 + 0.12^2 + 0.10^2 + 0.08^2 + 0.07^2 + 15 \times 0.032^2) \times 10000 \\
\text{HHI} = (0.0225 + 0.0144 + 0.0100 + 0.0064 + 0.0049 + 0.0154) \times 10000 \\
\text{HHI} = 0.0736 \times 10000 = 736
$$

Este resultado de 736 está por debajo del umbral objetivo de 1500, indicando una concentración saludable y una base de clientes bien diversificada.

## Interpretación y Uso

- Un HHI bajo (< 1500) indica una base de clientes diversificada y un riesgo distribuido.
- Un HHI en el rango de alerta (1500-2500) sugiere una concentración moderada y la necesidad de vigilar la distribución de ventas.
- Un HHI alto (> 2500) indica una concentración significativa en pocos clientes, lo que podría representar un riesgo para la estabilidad financiera de la empresa.

Se recomienda utilizar este KPI en conjunto con otros indicadores financieros y de ventas para obtener una visión completa de la salud financiera y la estrategia de clientes de la empresa.
