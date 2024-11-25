---
created: 2024-10-09T11:43:54
updated: 2024-10-09T14:36:38
description: Mide retrospectivamente la proporción de vacantes TI cubiertas exitosamente por 23people en relación al número total de posiciones solicitadas por los clientes en requerimientos completados.
author: 5127711
legacy_url: 
---

# Tasa de Completitud de Vacantes

Mide retrospectivamente la proporción de vacantes TI cubiertas exitosamente por 23people en relación al número total de posiciones solicitadas por los clientes en requerimientos completados.

## Descripción e Importancia

La Tasa de Completitud de Vacantes (Histórico) evalúa el desempeño pasado de 23people en satisfacer las necesidades de personal TI de sus clientes. Este KPI es crucial para analizar tendencias a largo plazo, identificar patrones de éxito o áreas de mejora, y tomar decisiones estratégicas basadas en datos históricos. Permite una comprensión más profunda de la eficacia de la empresa en el mercado de talento TI a lo largo del tiempo.

| **Atributo**                               | **Valor**                          |
|--------------------------------------------|------------------------------------|
| **ID**                                     | ITTS-TCVH                          |
| **Responsable**                            | IT Talent Services (ITTS)          |
| **Impacto a medir**                        | Crecimiento y Calidad del Servicio |
| **Frecuencia de actualización y registro** | Mensual                            |
| **Unidad de medida**                       | Porcentaje (%)                     |
| **Umbrales de salud**                      | **Rango**                          |
| *Objetivo*                                 | >= 85%                             |
| *Alerta*                                   | >= 70% y < 85%                     |
| *Crítico*                                  | < 70%                              |

## Fuente de datos y actualización

Los datos para este KPI provienen del sistema de gestión de requerimientos y vacantes de 23people, considerando solo los requerimientos que han sido completados (ya sea por finalización normal o por término anticipado por parte del cliente). Se actualizan mensualmente, incorporando los requerimientos que se cerraron durante el mes anterior.

## Dimensiones a considerar

Este KPI debe poder desagregarse en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Semestral
- Anual

Además, se debe considerar la posibilidad de desagregar el KPI por las siguientes dimensiones:

- Cliente
- Contraparte en el cliente
- Equipo en el cliente
- Perfil Profesional TI
- Nivel de Experiencia (Entry, Entry Avanzado, Midlevel, Senior)

## Cálculo

La Tasa de Completitud de Vacantes (Histórico) se calcula dividiendo el número total de vacantes cubiertas por 23people en requerimientos completados entre el número total de vacantes solicitadas en esos requerimientos, y multiplicando por 100.

**Fórmula**:

$$\text{Tasa de Completitud de Vacantes} = \left( \frac{\text{Número de vacantes cubiertas por 23people en requerimientos completados}}{\text{Número total de vacantes solicitadas en requerimientos completados}} \right) \times 100$$

## Ejemplos de Cálculo

Consideremos el siguiente escenario ficticio para el cálculo del KPI en el mes de Julio 2024, desglosado por múltiples dimensiones:

```plaintext
1. Cliente: TechCorp
   Contraparte en el Cliente: María González (IT Manager)
   Equipo en el Cliente: Desarrollo de Productos
   Perfil Profesional TI: Desarrollador Full Stack
   Nivel de Experiencia: Senior
   Vacantes Solicitadas: 5
   Vacantes Cubiertas por 23people: 4

2. Cliente: TechCorp
   Contraparte en el Cliente: Carlos Rodríguez (Data Science Lead)
   Equipo en el Cliente: Análisis de Datos
   Perfil Profesional TI: Data Engineer
   Nivel de Experiencia: Midlevel
   Vacantes Solicitadas: 3
   Vacantes Cubiertas por 23people: 3

3. Cliente: FinanceX
   Contraparte en el Cliente: Ana Martínez (CTO)
   Equipo en el Cliente: Infraestructura Cloud
   Perfil Profesional TI: DevOps Engineer
   Nivel de Experiencia: Senior
   Vacantes Solicitadas: 4
   Vacantes Cubiertas por 23people: 3

4. Cliente: FinanceX
   Contraparte en el Cliente: Luis Pérez (Software Development Manager)
   Equipo en el Cliente: Aplicaciones Móviles
   Perfil Profesional TI: Desarrollador iOS
   Nivel de Experiencia: Entry Avanzado
   Vacantes Solicitadas: 2
   Vacantes Cubiertas por 23people: 2

5. Cliente: HealthTech
   Contraparte en el Cliente: Elena Sánchez (IT Operations Manager)
   Equipo en el Cliente: Soporte Técnico
   Perfil Profesional TI: Analista de Sistemas
   Nivel de Experiencia: Entry
   Vacantes Solicitadas: 6
   Vacantes Cubiertas por 23people: 5
```

### Cálculo Global

Total de Vacantes Solicitadas: 5 + 3 + 4 + 2 + 6 = 20
Total de Vacantes Cubiertas: 4 + 3 + 3 + 2 + 5 = 17

$$\text{Tasa de Completitud de Vacantes (Histórico)} = \left( \frac{17}{20} \right) \times 100 = 85\%$$

### Cálculos por Dimensión

1. Por Cliente:
   - TechCorp: (7/8) × 100 = 87.5%
   - FinanceX: (5/6) × 100 = 83.33%
   - HealthTech: (5/6) × 100 = 83.33%

2. Por Perfil Profesional TI:
   - Desarrollador Full Stack: (4/5) × 100 = 80%
   - Data Engineer: (3/3) × 100 = 100%
   - DevOps Engineer: (3/4) × 100 = 75%
   - Desarrollador iOS: (2/2) × 100 = 100%
   - Analista de Sistemas: (5/6) × 100 = 83.33%

3. Por Nivel de Experiencia:
   - Senior: (7/9) × 100 = 77.78%
   - Midlevel: (3/3) × 100 = 100%
   - Entry Avanzado: (2/2) × 100 = 100%
   - Entry: (5/6) × 100 = 83.33%

### Análisis de Resultados

1. Desempeño Global: La tasa global de completitud del 85% indica un buen desempeño general, alcanzando el umbral objetivo.

2. Por Cliente:
    - TechCorp muestra el mejor desempeño con un 87.5% de completitud.
    - FinanceX y HealthTech tienen un desempeño ligeramente inferior pero aún dentro del rango objetivo.

3. Por Perfil Profesional TI:
    - Se logró una tasa de completitud del 100% para Data Engineers y Desarrolladores iOS.
    - Los DevOps Engineers muestran la tasa más baja (75%), sugiriendo una posible área de mejora.

4. Por Nivel de Experiencia:
    - Se alcanzó el 100% de completitud para niveles Midlevel y Entry Avanzado.
    - La tasa más baja se observa en el nivel Senior (77.78%), lo que podría indicar una mayor dificultad en la contratación de perfiles más experimentados.

5. Áreas de Enfoque:
    - Mejorar la tasa de completitud para perfiles Senior, especialmente en roles de DevOps.
    - Investigar las razones del éxito en la contratación de perfiles Midlevel y Entry Avanzado para replicar estas prácticas en otros niveles.
    - Analizar las estrategias de reclutamiento utilizadas con TechCorp para posiblemente aplicarlas con otros clientes.

Este análisis detallado permite a 23people identificar fortalezas y áreas de mejora específicas, ajustar estrategias de reclutamiento por perfil y nivel de experiencia, y adaptar su enfoque según las necesidades particulares de cada cliente y equipo.
