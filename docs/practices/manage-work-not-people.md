---
created: 2024-09-09T14:31:43
updated: 2025-01-30T18:22:39
authors:
  - manu-reyes-23p
description: >
    Preferir hacer uso de flujos de trabajo para gestionar actividades, solicitudes generales, tareas y proyectos.
---

# Gestionar el trabajo, no las personas

Considerar que: **Lo que que no se visualiza, no se puede gestionar**. Con base en lo anterior, es importante que todas los items de trabajo que se realizan, preferiblemente, se gestionen a través de flujos de trabajo visuales y sistemáticos.

## Tipos de Items de Trabajo

Los siguientes son los tipos de actividades principales (items de trabajo) que se gestionan en los flujos de trabajo:

1. **Actividades de Solicitud de Servicios**
      - Tareas específicas con inicio y fin definido
      - Responden a necesidades puntuales de los clientes
      - Ejemplo: Generación de un informe de antigüedad laboral para un período específico

2. **Actividades de Servicios Recurrentes**
      - Tareas que se repiten cada mes
      - Parten de un acuerdo inicial de servicio continuo
      - Ejemplo: Proceso mensual de remuneraciones, declaración mensual de impuestos

3. **Actividades de Resolución de Problemas**
      - Abordan situaciones donde algo no salió según lo esperado
      - Requieren corrección y prevención de situaciones similares
      - Ejemplo: Corrección de un pago erróneo y las acciones necesarias para regularizar la situación

4. **Actividades de Mejora Continua**
      - Iniciativas que surgen del propio equipo para mejorar su trabajo
      - Nacen de las reuniones de retrospectiva donde analizamos cómo mejorar
      - Buscan hacer nuestro trabajo más eficiente o prevenir problemas futuros

## Organización del Tablero

Todos los items de trabajo, independiente de su tipo, siguen un flujo común en el tablero.

### Areas de un Flujo de Trabajo

Existen 5 tipos de areas en un flujo de trabajo y que son comunes a todos los flujos de trabajo para todos los equipos de 23people:

1. **Backlog Area**: Actividades que aún necesitan ser refinadas.
2. **Requested Area**: Actividades listas para ser ejecutadas y que el equipo se **compromete** a realizar apenas se libere capacidad.
3. **In Progress Area**: Actividades en las que el equipo está trabajando actualmente. Políticas de gestión del [WIP Limit](), aplican aquí.
4. **Done Area**: Actividades completadas. Cumplen con la "Definición de Listo" de lo indicado en el item de trabajo y además con los "Criterios de Aceptación" del equipo.
5. **Ready to Archive Area**: Actividades que ya han sido completadas y que están listas para ser archivadas. Estas se usarán para mantener un registro histórico de las actividades realizadas y poder hacer analisis de mejoras.

### Plantilla de Etapas recomendadas

Dentro de cada area, el equipo define las etapas que considere necesarias para el flujo de trabajo. Se propone la siguiente estructura de etapas como plantilla:

- **Inmaduro** (Backlog Area): Ideas o solicitudes que aún necesitan ser refinadas.
- **Por Hacer** (Requested Area): Una cola de actividades listas para ser ejecutadas. El equipo ha revisado el contenido y cumple con lo "suficientemente maduro" para que el equipo pueda trabajar en ello apenas tenga capacidad.
- **Ejecución** (In Progress Area): El equipo está trabajando actualmente en estas actividades.  Tiene las siguientes sub-etapas:
    - **En Progreso**: Trabajo que se está realizando activamente.
    - **Terminado**: Una cola en donde quedan los items de trabajo que se han completado y están listo para ser revisado.
- **Validación** (In Progress Area): Actividades que han sido completadas y que están en proceso de validación.
- **Listo**: Una cola en donde quedan las actividades que han sido completadas y validadas. Estas actividades cumplen con la "Definición de Listo" y los "Criterios de Aceptación" del equipo.

!!! tip "Colores de Tarjetas"

    Para distinguir fácilmente los distintos tipos de actividades, se suguiere mantener un código de colores en las tarjetas. Esto permitirá visualizar rápidamente la naturaleza de cada actividad mientras se mantiene un flujo de trabajo simple y efectivo.

## Algoritmo para Daily Meetings

Esta es una de las practicas más importantes para el equipo. Dia a dia, el equipo debe revisar el tablero de trabajo y asegurarse de que todas las actividades estén en el estado correcto y avanzando a ser efectivamente terminadas. Se deben aplicar los principios de **"Preferir terminar algo antes de empezar algo nuevo"** y **"Limitar el trabajo en progreso"**.

Existe una receta para la gestión diaria del trabajo que se puede seguir haciendo uso del tablero:

### Pre-requisitos

1. Tablero Kanban configurado con las áreas establecidas
2. Todos los miembros del equipo presentes
3. Moderador designado
4. Duración máxima: 15 minutos

### Algoritmo Principal

1. Inicio

    1.1. Bienvenida y verificación de asistencia
    1.2. Compartir tablero visual

2. Celebración de logros

    2.1. Reconocer items completados desde la última daily

3. Actualización del Estado del Trabajo

    Por cada columna, desde la más cercana a "Listo" hacia atrás:

    3.1. Para cada item en la columna actual:
      - Preguntar: "¿Quién puede compartir el estado actual de esta actividad?"
      - Documentar avances y obstáculos encontrados
      - Actualizar subtareas si es necesario

    3.2. Verificar capacidad de la columna:
      - Si hay capacidad disponible, evaluar items de la columna anterior
      - Mover los items elegibles que cumplen criterios para avanzar

4. Determinación del Foco del Día (4 minutos)

    4.1. Evaluar prioridades:
      - Identificar items urgentes si existen
      - Revisar estado general de los items ya actualizados
      - Identificar items que, al completarse, desbloquearán otros trabajos

    4.2. Establecer el foco:
          - Comunicar los items prioritarios del día
          - Reorganizar al equipo para trabajo en "enjambre" si es necesario
          - Marcar como "Bloqueado - Cambio de Foco" los items que no se trabajarán

5. Cierre:
    5.1. Confirmar entendimiento del foco del día
    5.2. Programar conversaciones necesarias para resolver impedimentos

## Gestión de Bloqueos

### Tipos de Bloqueo

1. **Bloqueado - Cambio de Foco**
   - Cuando el item debe pausarse para priorizar otro trabajo
   - Cuando el equipo decide trabajar en modo "enjambre" en otro item

2. **Bloqueado - Dependencia Externa**
   - Esperando respuesta/acción de un stakeholder
   - Dependencia de otro equipo o sistema
   - Esperando aprobación necesaria

3. **Bloqueado - Impedimento Técnico**
   - Problemas técnicos que impiden el progreso
   - Falta de accesos o permisos
   - Problemas de infraestructura

4. **Bloqueado - Falta de Información**
   - Requerimientos incompletos o poco claros
   - Falta de criterios de aceptación
   - Necesidad de clarificación del cliente

### Cuándo Marcar un Item como Bloqueado

1. Criterios para Bloqueo:
   - El impedimento no puede resolverse en las próximas 4 horas
   - Se requiere intervención de alguien fuera del equipo
   - No hay trabajo alternativo que pueda avanzarse en el item
   - El riesgo de continuar es mayor que el beneficio

2. Proceso de Bloqueo:
   - Identificar y documentar la razón específica
   - Asignar un responsable de seguimiento
   - Establecer próxima fecha de revisión
   - Mover el item a la columna correspondiente (si aplica)

3. Gestión de Items Bloqueados:
   - Revisar diariamente el estado del bloqueo
   - Documentar acciones tomadas para resolver
   - Desbloquear inmediatamente cuando se resuelve el impedimento

## Métricas Clave

1. Flujo de Trabajo
   - Cantidad de items completados
   - Tiempo promedio de bloqueo por tipo
   - Efectividad del trabajo en "enjambre"

2. Bloqueos
   - Número de items bloqueados por tipo
   - Tiempo promedio de resolución
   - Patrones recurrentes de bloqueo

## Señales de Advertencia

- Items bloqueados por más de 3 días sin actualización
- Más del 25% de items bloqueados en una columna
- Cambios frecuentes de foco que generan múltiples bloqueos
- Bloqueos recurrentes del mismo tipo

## Cuando preferir no usar flujos de trabajo

Pueden existir situaciones en las que no sea necesario o conveniente usar flujos de trabajo. Algunos ejemplos son:

1. Cuando las tareas son simples y son muy rapidas de implementar. En general cuando se estima que lo que se debe realizar es menor a 1 hora. Si en medio de esto, se tuvo que pausar la tarea, ya se recomienda usar un flujo de trabajo.

## Políticas comunes de uso

1. **No retroceder tareas a una etapa anterior**: Una vez que una tarea ha avanzado a una etapa, no debe retroceder a una etapa anterior. En estos casos, se recomienda marcar la tarjeta como "Bloqueada" e indicar el motivo de este bloqueo. Un motivo válido podria ser: "Por cambio de foco". La intención es visualizar correctamente el estado en que está el trabajo.
