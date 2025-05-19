---
created: 2024-09-09T14:31:43
updated: 2025-04-29T17:43:00Z
index: false 
authors:
  - manu-reyes-23p
description: >
    Preferir hacer uso de flujos de trabajo para gestionar actividades, solicitudes generales, tareas y proyectos.
draft: false
---

# Flujos de Trabajo: Gestionamos el trabajo, no las personas

En 23people, creemos que la mejor forma de gestionar el trabajo es a través de flujos de trabajo visuales y sistemáticos. Esto nos permite tener una visión clara de las actividades que se están realizando, priorizar tareas y asegurar que todos los miembros del equipo estén alineados en sus objetivos. Gestionamos el trabajo, no las personas, lo que significa que nos enfocamos en cómo se realiza el trabajo y no en quién lo realiza. Esto fomenta un ambiente de colaboración y mejora continua.

Hacemos uso de los principios y practicas de **Kanban** para gestionar nuestros flujos de trabajo. Kanban es una metodología ágil que nos ayuda a visualizar el trabajo, limitar el trabajo en progreso y maximizar la eficiencia del equipo. A través de tableros Kanban, podemos ver el estado de cada actividad, identificar cuellos de botella y mejorar continuamente nuestros procesos.

## ¿Qué es un flujo de trabajo?

Un flujo de trabajo es una representación visual de las actividades y tareas que un equipo debe realizar para alcanzar un objetivo específico. En 23people, utilizamos tableros Kanban para gestionar estos flujos de trabajo, lo que nos permite visualizar el estado de cada actividad y facilitar la colaboración entre los miembros del equipo.

## ¿Por qué usar flujos de trabajo?

Los flujos de trabajo nos permiten:

- **Visualizar el trabajo**: Tener una representación clara de las actividades en curso, pendientes y completadas.
- **Priorizar tareas**: Identificar qué actividades son más importantes y deben ser atendidas primero.
- **Limitar el trabajo en progreso**: Evitar la sobrecarga de tareas y asegurar que el equipo se enfoque en completar lo que ya ha comenzado.
- **Facilitar la colaboración**: Permitir que todos los miembros del equipo vean el estado del trabajo y colaboren de manera efectiva.
- **Mejorar la comunicación**: Tener un espacio común donde todos puedan ver el progreso y los bloqueos, lo que reduce la necesidad de reuniones innecesarias.
- **Fomentar la mejora continua**: Analizar el flujo de trabajo y los bloqueos para identificar áreas de mejora y optimizar procesos.

## Tipos de Flujos de Trabajo

En 23people, existen diferentes tipos de flujos de trabajo que se adaptan a las necesidades específicas de cada equipo y actividad. Estos incluyen:

- **Flujos de Trabajo Principales**: El flujo de trabajo principal que sirve de puerta de entrada desde usuarios externos a los equipos de 23people. Este flujo gestiona en alto nivel las solicitudes/pedidos de servicios, incidencias, mejoras internas y actividades estratégicas.
- **Flujos de Trabajo Operativos**: Flujos de trabajo secundarios y operativos que derivan de los flujos principales. Estos flujos son específicos para cada equipo y se utilizan para gestionar tareas y actividades internas.

## Tipos de Items de Trabajo

Los siguientes son los tipos de items de trabajo que se gestionan en los flujos de trabajo:

### Items en Flujos de Trabajo Principales

Los flujos de trabajo principales gestionan los siguientes tipos de items de trabajo, cada uno con un propósito específico:

1. **Pedido de Servicios**
      - Responden a necesidades puntuales de los clientes o usuarios externos a un equipo
      - Tareas específicas con inicio y fin definido
      - Ejemplo: Generación de un informe de antigüedad laboral para un período específico

2. **Servicios Recurrentes**
      - Tareas que se repiten cada mes y que derivan desde un acuerdo de servicio continuo
      - Tienen un ciclo de vida definido y se repiten en intervalos regulares
      - Ejemplo: Proceso mensual de remuneraciones, declaración mensual de impuestos

3. **Incidencias**
      - Abordan situaciones donde algo no salió según lo esperado
      - Requieren corrección y prevención de situaciones similares
      - Ejemplo: Corrección de un pago erróneo y las acciones necesarias para regularizar la situación

4. **Mejora Interna**
      - Iniciativas que surgen del propio equipo para mejorar su trabajo
      - Nacen de las reuniones de retrospectiva donde analizamos cómo mejorar
      - Buscan hacer nuestro trabajo más eficiente o prevenir problemas futuros

5. **Actividades Estrátegicas**
      - Derivan desde una iniciativa estratégica de la organización
      - En general, son impulsadas por la dirección global

## Items en Flujos de Trabajo Operativos

Los flujos de trabajo operativos son específicos para cada equipo y se utilizan para gestionar tareas y actividades internas. Estos flujos pueden incluir:

- **Tareas Operativas**: Corresponde a actividades que el equipo debe realizar de manera regular para mantener su funcionamiento. Estas tareas pueden ser asignadas a miembros específicos del equipo y tienen un plazo definido para su finalización. Ejemplo: Autorizaciones bancarias, gestión de proveedores, Envío de candidatos a cliente, Historias de Usuario para funcionalidades de software, etc.

## Organización del Tablero

En todos los flujos de trabajo, se manejan 5 secciones que son secuenciales. Cada sección representa un estado del item de trabajo y permite al equipo visualizar el progreso de las actividades. Estas secciones son:

1. **Backlog Area (gris)**: Actividades que aún necesitan ser refinadas. Puede incluir etapas como "Nuevo" o "En refinamiento". Aquí se almacenan ideas o solicitudes que aún no están listas para ser trabajadas. Estas actividades pueden ser propuestas por el equipo o por stakeholders externos.
2. **Requested Area (azul)**: Actividades listas para ser ejecutadas y que el equipo se **compromete** a realizar apenas se libere capacidad.
3. **In Progress Area (naranja)**: Actividades en las que el equipo está trabajando actualmente. Políticas de gestión del [WIP Limit](), aplican aquí.
4. **Done Area (verde)**: Actividades completadas. Cumplen con la "Definición de Listo" de lo indicado en el item de trabajo y además con los "Criterios de Aceptación" del equipo.
5. **Ready to Archive Area (purpura)**: Actividades que ya han sido completadas y que están listas para ser archivadas. Estas se usarán para mantener un registro histórico de las actividades realizadas y poder hacer analisis de mejoras.

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
