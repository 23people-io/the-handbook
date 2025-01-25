---
created: 2024-01-11T12:15:10
updated: 2025-01-11T00:00:00
description: Mide el total de ingresos mensuales generados por la venta de servicios, expresado en Unidades de Fomento (UF).
author: 5127711
status: wip
slug: ventas-netas-uf
legacy_url: https://manual.23people.io/es/articles/8807214-ventas-netas-uf-nrclf
---

# Ventas Netas UF

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

## Descripción e Importancia

El KPI "Ventas Netas UF" representa el total de ingresos generados a partir de la venta de servicios en un periodo mensual, medidos en la moneda reajustable Unidad de Fomento (UF) utilizada en Chile, y excluye el Impuesto al Valor Agregado (IVA). Este indicador es fundamental para evaluar el desempeño comercial de la empresa, ya que captura la magnitud de las transacciones comerciales llevadas a cabo, proporcionando una medida estandarizada que ajusta por inflación. Representa la capacidad total de generación de ingresos de la empresa y sirve como una medida clave del crecimiento y la salud financiera del negocio.

| **Atributo**                               | **Valor**                |
|--------------------------------------------|--------------------------|
| **ID**                                     | FIN-NRCLF                |
| **Responsable**                            | Finances                 |
| **Impacto a medir**                        | Crecimiento              |
| **Frecuencia de actualización y registro** | Mensual                  |
| **Unidad de medida**                       | Unidades de Fomento (UF) |
| **Umbrales de salud**                      | **Rango**                |
| *Objetivo*                                 | Privado                  |
| *Alerta*                                   | Privado                  |
| *Crítico*                                  | Privado                  |

## Fuente de datos y actualización

Los datos se registran en un enlace específico (no proporcionado en el documento original). La actualización, con base en la frecuencia mensual, es realizada por el equipo del Departamento de Finanzas.

## Dimensiones a considerar

Este KPI debe poder desagregado en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Anual

Además, se debe considerar la posibilidad de desagregar el KPI por las siguientes dimensiones no temporales:

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

El cálculo de las Ventas Netas UF se realiza sumando todas las ventas realizadas durante el mes en UF, sin incluir el IVA. **Es importante notar que se enfoca en las ventas netas que se reflejan mediante una Factura en SII, no en la prefacturación**.

**Fórmula**:

$$\text{Ventas Netas UF} = \sum(\text{Valor de cada venta en UF})$$

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de **Julio 2023** y se registraron los siguientes datos:

```plaintext
- Departamento: IT Talent Services (ITTS)
- Geografía: Chile
- Cliente: Empresa ABC
- Servicio: Outsourcing TI
- Contacto del Cliente: Juan Pérez, Gerente de TI
- Ventas: 1,000 UF

- Departamento: Digital Platforms, Data & AI Services (DPS)
- Geografía: Colombia
- Cliente: Empresa XYZ
- Servicio: Modernización y Evolución
- Contacto del Cliente: María Gómez, Directora de Innovación
- Ventas: 500 UF
```

Dada la formula del KPI, el cálculo sería:

$$\text{Ventas Netas UF} = 1,000 \text{ UF} + 500 \text{ UF} = 1,500 \text{ UF}$$

Así, el KPI de Ventas Netas UF para ese mes sería de 1,500 UF, reflejando los ingresos totales de la empresa por la prestación de servicios, expresados en Unidades de Fomento y sin considerar el IVA. Este total puede ser desglosado según las diferentes dimensiones para un análisis más detallado.
