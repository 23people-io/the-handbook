---
created: 2025-02-26T00:00:00
updated: 2025-02-26T00:00:00
index: true
slug: uso-claude-projects-tarjetas-flujo-trabajo
tags: 
  - jarvis-tribe
  - businessmap
  - herramientas
  - ia
  - claude
authors:
  - 23people-io
description: >
  Guía práctica para utilizar Claude Projects como herramienta de apoyo en la creación de descriptores de tarjetas en BusinessMap, facilitando una estandarización de las tarjetas en el flujo de trabajo en los equipos de 23people.
---

# Uso de Claude Projects para Tarjetas de Flujos de Trabajo

En el contexto de nuestros flujos de trabajo operativo, la creación de descriptores detallados y bien estructurados para las tarjetas es una tarea fundamental pero que puede resultar tediosa. Este artículo presenta una solución implementada por 23people para el uso de los profesionales de la [Tribu Iarvis](): el uso de Claude Projects como herramienta de apoyo para generar borradores de descriptores de tarjetas de forma rápida y estructurada, permitiendo a los equipos de Jarvis Tribe optimizar su tiempo y mantener un estándar de calidad en la documentación de tareas.

## ¿Qué es Claude Projects y cómo nos ayuda?

Claude Projects es una funcionalidad de [Claude.ai](https://www.anthropic.com/claude) que permite crear espacios de trabajo dedicados a tareas específicas. En 23people, hemos configurado un proyecto específico llamado: [Creador Tarjetas Kanban para BusinessMap](https://claude.ai/project/7b5ed878-99d1-40c7-902e-69e246556f24), para la generación de descriptores de tarjetas en BusinessMap, automatizando parte del proceso de documentación.

### Beneficios de utilizar Claude Projects para BusinessMap

- **Ahorro de tiempo**: Reduce el tiempo dedicado a redactar descriptores detallados
- **Consistencia**: Mantiene un formato estandarizado en todas las tarjetas
- **Estructura clara**: Organiza la información siguiendo nuestras prácticas de "Estructurar la narrativa"
- **Iteración rápida**: Facilita obtener un borrador inicial que puede perfeccionarse

## Cómo utilizar Claude Projects para generar descriptores

### Acceso al proyecto

1. Accede al proyecto de Claude dedicado a descriptores de BusinessMap a través del siguiente enlace: [https://claude.ai/project/7b5ed878-99d1-40c7-902e-69e246556f24](https://claude.ai/project/7b5ed878-99d1-40c7-902e-69e246556f24)
2. Si es la primera vez que accedes, asegúrate de tener una cuenta en Claude.ai o crear una nueva.

### Proceso paso a paso

**En Claude Projects**, sigue estos pasos para generar un descriptor de tarjeta:

1. **Iniciar una conversación**: Dentro del proyecto, inicia un nuevo chat con Claude
2. **Describir la tarjeta**: Proporciona a Claude la información sobre la tarjeta que deseas crear. Puedes:
   - Describir brevemente el propósito de la tarjeta
   - Incluir cualquier información contextual relevante
   - Mencionar equipos o roles involucrados
3. **Revisar el borrador generado**: Claude generará un borrador estructurado del descriptor
4. **Copiar el contenido**: Selecciona y copia todo el contenido generado

**En BusinessMap**, sigue estos pasos para integrar el contenido generado:

1. Accede a la tarjeta correspondiente en BusinessMap donde deseas agregar el descriptor
2. En el campo de descripción, asegúrate de formatear el texto como un bloque de código Markdown:

   ```markdown
   Contenido generado por Claude
   ```

3. Añade el texto generado por Claude en el bloque de código
4. Guarda los cambios en la tarjeta

## Consideraciones importantes

### El texto generado por Claude es solo un borrador

Es fundamental recordar que el texto generado por Claude es solo un **borrador inicial**. Es importante recordar que cada uno de nuestros profesionales debe ser capaz de darle sentido y contexto a la información generada por Claude, y ajustarla según sea necesario. Esta herramienta [es un multiplicador de las capacidades de nuestros equipos](docs/insights/ia-como-multiplicador-de-capacidades-profesionales.md), no un sustituto de su juicio y conocimiento.

### Tener cuidado con la información confidencial

Al utilizar Claude Projects para generar descriptores de tarjetas, es importante tener en cuenta la confidencialidad de la información. Asegúrate de no incluir datos sensibles o información confidencial en las conversaciones con Claude, ya que estas pueden ser almacenadas en la plataforma.

### Rol de SRM y SDM en la validación

Es fundamental recordar que el texto generado por Claude es solo un **borrador inicial**. Siguiendo nuestras prácticas en 23people:

- Los Service Request Managers (SRM) y Service Delivery Managers (SDM) deben revisar y validar el contenido antes de que la tarjeta pase al estado "Por Hacer"
- El contenido debe ser comprensible para todos los involucrados
- Se pueden realizar ajustes y mejoras al texto según sea necesario

### Mejores prácticas para obtener buenos resultados

- **Sé específico**: Cuanta más información contextual proporciones a Claude, mejor será el resultado
- **Revisa y edita**: El borrador generado debe considerarse un punto de partida, no un resultado final. Itera en el mismo chat iniciado en el proyecto de Claude para mejorar el contenido.
- **Mantén la estructura**: Asegúrate de que el formato se mantenga al copiarlo a BusinessMap
- **Colabora en la mejora**: Si encuentras formas de mejorar los resultados, compártelas con el equipo

## Ejemplo práctico

A continuación se muestra un ejemplo real de cómo utilizar esta herramienta:

1. **Información proporcionada a Claude**:
   Texto de una tarjeta existente en BusinessMap (por ejemplo, de la tarjeta #30248)

2. **Respuesta generada por Claude**:
   Un descriptor estructurado siguiendo el formato recomendado por 23people

3. **Implementación en BusinessMap**:
   El texto formateado como bloque de código en la descripción de la tarjeta

Este enfoque ha demostrado ser útil para equipos como [Backoffice](docs/organization/teams/backoffice) y [Tech Talent Services](docs/organization/teams/tech-talent-services), quienes ya han comenzado a implementarlo en su flujo de trabajo.

## Soporte y mejora continua

Si tienes dudas sobre cómo utilizar esta herramienta o sugerencias para mejorarla, puedes contactar al equipo de [Research & Development](docs/organization/teams/research-and-development), quien ha liderado esta iniciativa.

Recuerda que esta herramienta está alineada con nuestro valor de "Excelencia y Curiosidad Intelectual", aprovechando la tecnología para mejorar nuestros procesos y permitiéndonos dedicar más tiempo a tareas de mayor valor.
