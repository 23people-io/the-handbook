# Glassdoor eNPS (Recommend to a Friend)

Mide la disposición de empleados a recomendar 23people como lugar de trabajo según lo indicado en la plataforma de Glassdoor.

## Descripción e Importancia

El Employee Net Promoter Score (eNPS) basado en "Recomendar a un amigo de Glassdoor" es una métrica clave para evaluar la satisfacción y lealtad de los/las profesionales en 23people. Al medir cuán probable es que los empleados recomienden a 23people como un lugar de trabajo a amigos o familiares, este KPI refleja directamente la percepción interna del ambiente laboral, la cultura empresarial y las políticas de gestión de personas. Un eNPS alto sugiere un ambiente de trabajo positivo y motivador, lo cual es crucial para la retención del talento y la atracción de nuevos profesionales.

| **Atributo**                               | **Valor**                                    |
| ------------------------------------------ | -------------------------------------------- |
| **ID**                                     | PGR-GENPS                                    |
| **Responsable**                            | People Growth                                |
| **Impacto a medir**                        | Calidad (para profesionales)                 |
| **Frecuencia de actualización y registro** | Mensual                                      |
| **Unidad de medida**                       | Porcentaje (%)                               |
| **Umbrales de salud**                      | **Rango**                                    |
| *Objetivo*                                 | >= 80%                                       |
| *Alerta*                                   | < 80% y >= 60%                               |
| *Crítico*                                  | < 60%                                        |

## Fuente de datos y actualización

Los datos se registran en un [enlace de Google Sheets](https://docs.google.com/spreadsheets/d/1ByGPYIGPmLcrTynZArGNhmeEcLmXrQqv2KjQ6bOtoJA/edit#gid=0). La actualización, con base en la frecuencia solicitada, es realizada por el equipo del Departamento de People Growth.

## Dimensiones a considerar

Este KPI debe poder desagregado en las siguientes dimensiones temporales:

- Mensual
- Trimestral
- Anual

No tiene otras dimensiones a considerar.

## Cálculo

El Glassdoor eNPS se calcula tomando el porcentaje de profesionales que han seleccionado 'Recomendaría a un amigo' en el perfil de Glassdoor de 23people.

**Fórmula**:

$$\text{Glassdoor eNPS} = \left( \frac{\text{Número de profesionales que recomendarían a un amigo}}{\text{Número total de evaluaciones}} \right) \times 100$$

**Ejemplo**:

Considerando, como ejemplo ficticio, que se quiere calcular el KPI para el mes de **Julio 2023** y se registraron los siguientes datos:

```plaintext
- Número de profesionales que recomendarían a un amigo: 80
- Número total de evaluaciones: 100
```

Dada la formula del KPI, el cálculo sería:

$$\text{Glassdoor eNPS} = \left( \frac{80}{100} \right) \times 100 = 80\%$$
