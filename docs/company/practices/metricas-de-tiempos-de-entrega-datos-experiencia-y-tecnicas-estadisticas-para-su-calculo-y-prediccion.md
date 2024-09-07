---
created: 2024-02-01T13:18:32
updated: 2024-02-05T10:36:40
description: Técnicas que implementamos en 23people para predecir y poder responder con certeza a la importante pregunta de: ¿Cuándo estará listo?
author: 5127711
status: wip
slug: metricas-de-tiempos-de-entrega-datos-experiencia-y-tecnicas-estadisticas-para-su-calculo-y-prediccion
legacy_url: https://manual.23people.io/es/articles/8895652-metricas-de-tiempos-de-entrega-datos-experiencia-y-tecnicas-estadisticas-para-su-calculo-y-prediccion
---

# Métricas de Tiempos de Entrega: Datos, Experiencia y Técnicas Estadísticas para su cálculo y predicción.

## Introducción

Poder responder a las preguntas "**¿Cuándo estará listo?** ", o "**¿Cuándo se
entregará?** ", o "**¿Cuánto tiempo tomará hacerlo?** ", con confianza, es
esencial para la planificación y la gestión de expectativas.

En 23people, entendemos que la agilidad y precisión en nuestros procesos son
fundamentales para mantenernos a la vanguardia en un mercado competitivo. Los
tiempos operativos no solo son una medida de nuestra eficiencia operativa,
sino que también reflejan nuestra habilidad para cumplir con las expectativas
de nuestros clientes y colaboradores. Este documento ofrece una visión
detallada de cómo definimos y utilizamos los tiempos de operativos en nuestra
organización, su importancia estratégica y las metodologías estadísticas que
empleamos para predecir y optimizar estos tiempos. Al comprender las distintas
técnicas, desde el uso de percentiles directos hasta métodos más complejos
como Monte Carlo y Bootstrapping, equipamos a nuestro equipo con el
conocimiento necesario para seleccionar la mejor estrategia de predicción y
mejorar continuamente nuestros flujos de trabajo.

## Qué entendemos por Tiempos de Entrega

Los **Tiempos de Entrega** se refiere al período que transcurre desde el
inicio hasta la conclusión de un proceso o fase dentro de una operación. Es
una métrica crítica que ayuda a evaluar la eficiencia de diferentes
procedimientos al medir el tiempo que se tarda en completar una tarea
específica o en entregar un producto o servicio, ya sea interno como externo.

La adecuada gestión de los tiempos de entrega nos permite mantenernos ágiles y
responder efectivamente a las demandas del mercado. Al optimizar estos
tiempos, mejoramos la coordinación de proyectos, reducimos ineficiencias y
apoyamos la toma de decisiones basada en datos. Este enfoque contribuye a una
mejor asignación de recursos y a una mayor competitividad en el mercado.

Distinguimos entre dos tipos de tiempos, cada uno con su relevancia
específica:

  * **Lead Time:** Desde que se recibe una solicitud hasta la entrega final al cliente. En general, asociado a servicios a clientes.

  * **Cycle Time:** El tiempo para completar una tarea o proceso específico. En general para flujos de trabajo internos.

Estas categorías nos ayudan a identificar dónde y cómo podemos mejorar
nuestros flujos de trabajo.

**Ejemplos en 23people:**

  1. **Reclutamiento y Selección:** El tiempo de entrega podría medir el periodo desde que se recibe un requerimiento de talento hasta que se presenta el primer candidato idóneo al cliente.

  2. **Desarrollo de Software:** En el desarrollo ágil, el tiempo de entrega puede ser el tiempo desde que comienza el sprint hasta que se entrega una función o producto al cliente.

  3. **Onboarding de Profesionales:** Desde la aceptación de la oferta de trabajo por parte de un nuevo miembro del equipo hasta su completa integración y autonomía en sus tareas diarias.

  4. **Resolución de Incidencias de TI:** El tiempo que pasa desde que se reporta un problema técnico hasta que se soluciona y se cierra el ticket de soporte correspondiente.

  5. **Procesos de Aprobación:** El tiempo que tarda en obtenerse la autorización final para un proyecto o presupuesto desde que se inicia la solicitud.

Estos ejemplos reflejan cómo el tiempo de entrega puede aplicarse a diferentes
áreas de 23people para identificar cuellos de botella, mejorar la eficiencia y
asegurar la entrega de servicios en plazos óptimos.

## Pasos a seguir recomendados

  1. **Entendimiento de Datos:** Pueden usarse dos herramientas por separado o en conjunto. Estadísticas Descriptivas: Utiliza estadísticas descriptivas (media, mediana, desviación estándar) para entender la tendencia central y la dispersión de los datos. Visualizaciones: Crea gráficos como histogramas, diagramas de caja y gráficos de dispersión para visualizar la distribución de los tiempos operativos.

  2. **Segmentación de Datos por variables relevantes:** Divide los datos según variables relevantes (por ejemplo: tipo de solicitud, niveles de requerimiento) para identificar patrones específicos. Un mismo ciclo con variables cambiantes se puede comportar de dos maneras muy diferentes; si esto ocurre, se deben analizar por separado.

  3. Utiliza las técnicas estadísticas descritas a continuación para realizar predicciones fiables.

## Técnicas estadísticas

Utilizamos análisis de datos históricos y métodos estadísticos, incluidos
Monte Carlo y Bootstrapping, para realizar predicciones fiables sobre los
tiempos operativos. Estas técnicas nos proporcionan una base para ajustar
procesos, asignar recursos de manera eficiente y mejorar continuamente el
servicio al cliente.

### Tabla de Predicciones

Nuestro objetivo **es poder tener disponibles predicciones basadas en nuestros
datos y nuestra experiencia**. Lo siguiente es una tabla que muestra un
ejemplo de lo que se debería disponer para poder responder con base en
distintos niveles de certeza:

**Predicciones** |  |  |  |   
---|---|---|---|---  
Certeza |  50% |  80% |  95%**** |  98%****  
Tiempo Operativo |  2 días |  5 días |  7 días |  12 días  
  
Dado lo anterior, frente a una pregunta como: "¿Cuándo estará esto terminado"?
La respuesta será: "hay una probabilidad del 50/50 de finalizarlo en 2 días o
menos". Si se quiere dar una respuesta verdaderamente segura, debería
responderse: "dentro de 12 días".

### Comparación de técnicas estadísticas

**Característica** |  **Percentiles Directos** |  **Método de Monte Carlo** |  **Bootstrapping**  
---|---|---|---  
**Descripción** |  Utiliza datos históricos para calcular directamente los puntos de datos específicos del porcentaje acumulado. |  Utiliza la simulación aleatoria para modelar y predecir resultados posibles, basándose en probabilidades y distribuciones de entrada. |  Re-muestrea los datos existentes con reemplazo para crear nuevas muestras y estimar la variabilidad de una estadística.  
**Complejidad** |  Baja. Cálculos estadísticos directos y fáciles de entender. |  Alta. Requiere un modelo detallado y conocimiento de las distribuciones de entrada. |  Media. Más complejo que los percentiles directos, pero generalmente menos que Monte Carlo.  
**Datos necesarios** |  Grandes conjuntos de datos históricos representativos. |  Datos históricos y/o suposiciones sobre incertidumbres y relaciones entre variables. |  Datos históricos, no necesariamente grandes, pero preferiblemente representativos.  
**Recursos computacionales** |  Bajos. Cálculos rápidos y sencillos. |  Potencialmente altos, dependiendo de la complejidad del modelo y el número de simulaciones. |  Moderados. Depende del número de muestras bootstrap generadas.  
**Uso práctico** |  Predicción rápida de tiempos de ciclo basada en la experiencia pasada. |  Análisis de riesgo, evaluación de escenarios futuros y toma de decisiones bajo incertidumbre. |  Estimación de intervalos de confianza y análisis de sensibilidad.  
**Ventajas** |  Intuitivo y fácil de comunicar, rápido de calcular. |  Puede incorporar múltiples variables y simular una amplia gama de resultados. |  No asume una distribución subyacente, útil para muestras pequeñas.  
**Desventajas** |  Asume que el futuro replicará el pasado, puede no capturar la incertidumbre futura. |  Requiere suposiciones claras y a veces complejas, es computacionalmente intensivo. |  Los resultados pueden variar con muestras muy pequeñas o no representativas.  
**Aplicabilidad** |  Adecuado para procesos estables y predecibles. |  Adecuado para procesos complejos y sistemas dinámicos. |  Adecuado para estimar la variabilidad y construir intervalos de confianza cuando la distribución es desconocida.  
  
  
​


