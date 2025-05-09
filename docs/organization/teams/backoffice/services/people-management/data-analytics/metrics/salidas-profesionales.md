---
reindex: true
reindex-date: 2025-04-29T17:42:23Z
created: 2024-10-29T00:00:00
updated: 2025-04-29T17:43:00Z
description: Registro mensual detallado de las salidas de profesionales, considerando múltiples dimensiones de análisis como tribu, empresa, equipo, perfil profesional, tipo y motivo de salida.
---

# Salidas de Profesionales

## Descripción e Importancia

Esta métrica registra mensualmente el número de profesionales que dejan la empresa, capturando en detalle las diferentes dimensiones asociadas a cada salida. Su importancia radica en:

- Proporcionar datos base precisos para el cálculo de KPIs de rotación
- Permitir análisis detallados de patrones de salida por diferentes dimensiones
- Facilitar la identificación de tendencias específicas por equipo, perfil o motivo
- Habilitar la toma de decisiones basada en datos sobre retención de talento

| **Atributo**                    | **Valor**              |
|---------------------------------|------------------------|
| **ID**                          | PGR_METRIC_SP          |
| **Responsable**                 | People Growth          |
| **Impacto a medir**             | Calidad (para equipo)  |
| **Frecuencia de actualización** | Mensual                |
| **Período base de medición**    | Mensual                |
| **Unidad de medida**            | Número                 |

## Fuente de datos

Los datos para esta métrica provienen de:

- BUK: Registro principal de desvinculaciones
- Formulario de Salida: Documento completado durante el proceso de salida que captura motivos detallados
- Cartas de renuncia o documentos de desvinculación: Para la causal legal
- Businessmap: Para la verificación de equipo y proyecto asociado

## Dimensiones a considerar y Frecuencia de actualización

Esta métrica debe ser medida y registrada de manera mensual, considerando las siguientes dimensiones:

1. **Tribu de 23people**. Corresponde a una de las 2 [Tribus](/about-us/nuestra-organizacion/#tribus) que tenemos en nuestra organización.

2. **Empresa**
      - Para la Tribu Drakkar: Nombre del cliente (ej: Equifax, ACHS, Sura, Entel, etc.)
      - Para la Tribu Iarvis: "23people"

3. **Equipo**
      - Para Drakkar: Equipo específico en el cliente (ej: Transformación, Desarrollo, etc.)
      - Para Jarvis: Departamento (ej: People Growth, IT Talent Services, etc.)

4. **Perfil Profesional**: De acuerdo al [Catálogo de Perfiles Profesionales TI]() y al [Catálogo de Perfiles Profesionales Administrativos](../../catalogo-perfiles-profesionales-admin.md) que se maneja en la empresa.

5. **Tipo de Salida**:
      - Voluntaria
      - No voluntaria

6. **Causal Legal de Término**: Corresponde a los tipos indicados en la Dirección del Trabajo.
      - Renuncia del trabajador
      - Necesidades de la empresa
      - Mutuo acuerdo

7. **Motivo de Salida**: Tipos de motivos por la cual el profesional renunció o fue desvinculado de la empresa de acuerdo al [Catálogo de Motivos de Salida](../../catalogo-motivos-salida.md).

## Cómo Medir

La métrica registra el conteo mensual de salidas para cada combinación única de las dimensiones anteriores.

**Fórmula**:

$$\text{Salidas Mensuales}_{dimensiones} = \text{COUNT}(\text{salidas del mes donde se cumplen las dimensiones})$$

### Ejemplos de Cálculo

Considerando, como ejemplo ficticio, que se quiere calcular la métrica para el mes de **Octubre 2024** y se registraron los siguientes datos:

```plaintext
Salidas registradas:
1. Tribu: Drakkar
   Empresa: Equifax
   Equipo: Transformación
   Perfil: Software Engineer
   Tipo: Voluntaria
   Causal: Renuncia del trabajador
   Motivo: Mejor oportunidad laboral

2. Tribu: Drakkar
   Empresa: ACHS
   Equipo: Desarrollo
   Perfil: Data Engineer
   Tipo: No voluntaria
   Causal: Necesidades de la empresa
   Motivo: Desvinculación por desempeño

3. Tribu: Jarvis
   Empresa: 23people
   Equipo: IT Talent Services
   Perfil: Recruiter
   Tipo: Voluntaria
   Causal: Renuncia del trabajador
   Motivo: Renuncia voluntaria
```

El registro mensual incluiría estas tres combinaciones, cada una con su respectivo conteo:

$$\text{Salidas}_{\text{Drakkar,Equifax,Transformación,SWE,Voluntaria,Renuncia,MejorOportunidad}} = 1$$
$$\text{Salidas}_{\text{Drakkar,ACHS,Desarrollo,DataEng,NoVoluntaria,Necesidades,Desempeño}} = 1$$
$$\text{Salidas}_{\text{Jarvis,23people,ITTS,Recruiter,Voluntaria,Renuncia,RenunciaVoluntaria}} = 1$$

Cada registro representa una combinación única de las dimensiones y debe ser almacenado para su posterior uso en el cálculo de KPIs o para análisis específicos.
