---
created: 2024-10-22T12:15:10
updated: 2025-04-29T17:43:00Z
description: Mide el número total de nuevos profesionales TI contratados en un período específico.
author: 5127711
---
# Total de Nuevas Contrataciones

> 🚧 **Work in Progress**
>
> Esta página es un trabajo en proceso.

## Descripción e Importancia

El Total de Nuevas Contrataciones es un indicador fundamental que mide la capacidad de la empresa para atraer y contratar nuevo talento TI para los equipos de Drakkar. Este KPI es crítico para evaluar la efectividad de las estrategias de reclutamiento, los canales de atracción de talento y la capacidad de respuesta ante las necesidades de los clientes. También permite analizar tendencias en la contratación y ajustar las tácticas de reclutamiento según las necesidades del mercado y los clientes.

| **Atributo**                               | **Valor**            |
|--------------------------------------------|----------------------|
| **ID**                                     | ITTS-TNC             |
| **Responsable**                            | IT Talent Services   |
| **Impacto a medir**                        | Crecimiento          |
| **Frecuencia de actualización y registro** | Mensual              |
| **Unidad de medida**                       | Número               |
| **Umbrales de salud**                      | **Rango**            |
| *Objetivo*                                 | >= 10 contrataciones |
| *Alerta*                                   | 5-9 contrataciones   |
| *Crítico*                                  | < 5 contrataciones   |

## Fuente de datos y actualización

Los datos para este KPI provienen de la plataforma BUK y se actualizan mensualmente. Se considera la fecha efectiva de inicio de contrato de cada nuevo profesional TI contratado durante el período de medición.

## Dimensiones a considerar

Este KPI debe poder desagregado en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Semestral
- Anual

Además, se debe considerar la posibilidad de desagregar el KPI por las siguientes dimensiones:

- Empresa (Nombre del cliente)
- Equipo en el Cliente (Centro de Costo específico del cliente)
- Perfil del Profesional (Software Engineer, Account Manager, Data Engineer, etc.)
- Nivel de Experiencia (Entry, Entry Avanzado, Midlevel, Senior)
- Tipo de Contratación:
    - Reemplazo (cubre la salida de otro profesional)
    - Nuevo (responde a un nuevo pedido del cliente)

## Cálculo

El **Total de Nuevas Contrataciones** se calcula sumando el número total de nuevos profesionales TI que iniciaron contrato durante el período de medición.

**Fórmula**:

$$\text{Total de Nuevas Contrataciones} = \sum{\text{Nuevas Contrataciones en el período}}$$

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de **Marzo 2024** y se registraron los siguientes datos:

```plaintext
Nuevas contrataciones en Marzo 2024:
- 3 Software Engineers Senior para Equifax Chile Transformacion (2 reemplazos, 1 nuevo)
- 2 Data Engineers Midlevel para Equifax Chile Datafabric Latam (nuevos)
- 4 Software Engineers Midlevel para Equifax Chile BAU (1 reemplazo, 3 nuevos)
```

Dada la formula del KPI, el cálculo sería:

$$\text{Total de Nuevas Contrataciones} = 3 + 2 + 4 = 9\text{ contrataciones}$$

Del total:

- 3 fueron reemplazos
- 6 fueron nuevas posiciones
