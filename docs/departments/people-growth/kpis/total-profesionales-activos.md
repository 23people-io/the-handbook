# Total de Profesionales Activos

Mide la cantidad total de profesionales empleados activamente en la empresa.

## Descripción e Importancia

El KPI "Total de Profesionales Activos" cuantifica el número de profesionales empleados activamente en la empresa al final de cada mes. Este indicador es crucial ya que refleja la capacidad operativa de la empresa en el mercado local, así como su crecimiento o contracción en términos de personal. Proporciona una visión clara del tamaño de la fuerza laboral y es un indicador clave de la escala de operaciones de la empresa. Además, permite un análisis detallado por diferentes dimensiones, lo que facilita la toma de decisiones estratégicas en recursos humanos y planificación de proyectos.

| **Atributo**                               | **Valor**                    |
| ------------------------------------------ | ---------------------------- |
| **ID**                                     | PGR-TAP                      |
| **Responsable**                            | People Growth                |
| **Impacto a medir**                        | Crecimiento                  |
| **Frecuencia de actualización y registro** | Mensual                      |
| **Unidad de medida**                       | Número de profesionales      |
| **Umbrales de salud**                      | **Rango**                    |
| *Objetivo*                                 | >= 100 profesionales         |
| *Alerta*                                   | Entre 70 y 99 profesionales  |
| *Crítico*                                  | < 70 profesionales           |

## Fuente de datos y actualización

Los datos para este KPI se obtienen del sistema de gestión de recursos humanos de la empresa (por ejemplo, BUK) y se actualizan al final de cada mes.

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
- Tipo de Certificación Vigente (Idioma, Tecnología, etc.)

## Cálculo

El **Total de Profesionales Activos** se calcula contabilizando el número total de profesionales que están activamente empleados en la empresa al final de cada mes, considerando todas las dimensiones relevantes.

**Fórmula**:

$$\text{Total de Profesionales Activos} = \sum \text{Profesionales Activos al final del mes}$$

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de **Enero 2024** y se registraron los siguientes datos:

```plaintext
Drakkar Tribe:
- Equifax Chile:
  - Transformación: 20 (5 con certificación Amazon)
  - Otros equipos: 30
- Otros clientes: 40
Total Drakkar: 90 (15 con certificación de inglés vigente)

Jarvis Tribe:
- IT Talent Services: 15
- Digital Platforms, Data & AI Services: 25
- People Growth: 8
- Marketing & Strategic Growth: 5
- Finances: 4
- Engineering: 3
Total Jarvis: 60

Perfiles:
- Software Engineers: 70 (25 en Equifax Chile)
- Otros perfiles: 80

Total general: 150
```

Dada la fórmula del KPI, el cálculo del total sería:

$$\text{Total de Profesionales Activos} = 90 + 60 = 150 \text{ profesionales}$$

Este resultado indica que al final de Enero 2024, la empresa cuenta con un total de 150 profesionales activos.

Ahora, respondamos a las preguntas específicas:

1. ¿Cuántos profesionales de efx-chi-transformacion activos en Enero de 2024, tienen certificación Amazon?
   Respuesta: 5 profesionales

2. ¿Cuántos profesionales activos tenía People Growth en Enero de 2024?
   Respuesta: 8 profesionales

3. ¿Cuántos profesionales activos en Drakkar, tienen una certificación de inglés vigente en Enero de 2024?
   Respuesta: 15 profesionales

4. ¿Cuántos profesionales activos, de perfil Software Engineer, teníamos con Equifax Chile en Enero de 2024?
   Respuesta: 25 profesionales

Este ejemplo demuestra cómo el KPI "Total de Profesionales Activos" puede desagregarse en varias dimensiones para proporcionar información detallada y responder a preguntas específicas sobre la distribución de la fuerza laboral en la empresa.
