---
created: 2025-11-28T14:30:00Z
updated: 2025-12-09T19:00:00Z
authors:
  - manu-reyes-23p
description: >
  Servicio de integración de sistemas empresariales B2B. Conectamos aplicaciones y plataformas para que intercambien información de forma eficiente y segura.
---

# Integración de Sistemas

!!! example "Propuesta de Valor de Integración de Sistemas"

    El cliente delega en 23people la conexión de sus sistemas empresariales, permitiéndole que sus plataformas intercambien datos de forma confiable sin tener que desarrollar y mantener ese conocimiento especializado internamente.

## Descripción del Servicio

23people ofrece servicios de integración de sistemas empresariales, conectando aplicaciones y plataformas para que intercambien información de forma eficiente, segura y escalable. Este es uno de los servicios más demandados por nuestros clientes.

Los sistemas empresariales a menudo necesitan interactuar con datos provenientes de otras fuentes. Por ejemplo, una solución SAP que necesita ser alimentada desde otras plataformas o sistemas ya existentes pero no conectados. Estas integraciones se realizan típicamente mediante APIs, lo que requiere conocimiento especializado en diseño de integraciones, manejo de protocolos, transformación de datos, y mantenimiento de las conexiones en el tiempo.

El servicio consiste en diseñar, desarrollar y mantener estas integraciones entre sistemas que necesitan comunicarse, ya sean aplicaciones internas de la organización o conexiones con sistemas externos (clientes, proveedores, partners).

## Tipos de Integraciones que Realizamos

### Integración de Sistemas E-commerce y Retail

Conectamos plataformas de comercio electrónico con sistemas internos de gestión:

**Sistemas típicamente integrados**:

- Plataformas e-commerce (Shopify, Magento, BSale, desarrollos custom) con sistemas ERP
- Sincronización de catálogos de productos, inventarios y precios
- Sistemas de fulfillment y tracking de envíos
- Pasarelas de pago y sistemas de facturación

**Ejemplo de proyecto**: [COMPLETAR - Proyecto Falabella: descripción técnica de qué integraron, qué sistemas conectaron, tecnologías usadas]

---

### Integración de Sistemas Financieros y Scoring

Conectamos plataformas con servicios de scoring crediticio, validación de identidad y procesamiento de pagos:

**Sistemas típicamente integrados**:

- APIs de bureaus de crédito y scoring (Equifax, DICOM, etc.)
- Sistemas de prevención de fraude
- Pasarelas de pago y procesadores (Transbank, Flow, Stripe, etc.)
- Sistemas bancarios para conciliación

**Ejemplos de proyectos**:

- **FALP (Fundación Arturo López Pérez)**: Integración entre la plataforma de FALP y el servicio de evaluación de riesgo crediticio de Equifax Chile. 23people conectó la API de Equifax a la plataforma de FALP para habilitar evaluaciones crediticias automatizadas.

- **Equifax USA**: Equipos de 23people desarrollaron y mantuvieron integraciones de APIs de scoring crediticio en la plataforma de decisiones del cliente. [Ver caso completo](../client-cases/equifax-usa-formando-escalando-equipos-agiles-sdc.md)

---

### Integración de ERP, CRM y Plataformas Empresariales

Conectamos sistemas core del negocio (ERP, CRM) con otras aplicaciones específicas:

**Sistemas típicamente integrados**:

- ERPs (SAP, Oracle, Microsoft Dynamics, etc.) con aplicaciones custom
- CRMs (Salesforce, HubSpot, etc.) con sistemas de facturación, soporte o logística
- Plataformas de gestión de proyectos con sistemas de time tracking y facturación
- Integraciones B2B con sistemas de clientes o proveedores (EDI, APIs, webhooks)

**Ejemplo de proyecto**: [COMPLETAR - Proyecto Replay: descripción técnica de qué integraron]

---

### Integración de Sistemas de Salud (Healthcare)

Conectamos sistemas de salud con plataformas de gestión, cumpliendo con regulaciones del sector:

**Sistemas típicamente integrados**:

- Plataformas de telemedicina con sistemas ERP (SAP, etc.)
- Sistemas de información médica (IMED, historias clínicas electrónicas)
- Pasarelas de pago para servicios de salud
- Sistemas de agendamiento con bases de datos de pacientes

**Ejemplo de proyecto**: **ACHS** - Durante la pandemia de COVID-19, 23people desarrolló una plataforma integral de agendamiento y telemedicina que se integró con SAP, IMED, y medios de pago. El sistema cumplió con regulaciones de la Superintendencia de Seguridad Social y permitió la continuidad de atención a miles de pacientes. [Ver caso completo](../client-cases/achs-manteniendo-la-atencion-de-pacientes-en-tiempos-de-pandemia.md)

---

## Proceso de Entrega

### Fase 1: Discovery y Diseño de Arquitectura

**Duración típica**: 1-2 semanas

**Actividades**:

- Mapeo de sistemas existentes, endpoints disponibles y flujos de datos actuales
- Análisis de volumetría de datos y requisitos de performance
- Identificación de dependencias técnicas y riesgos
- Diseño de arquitectura de integración (definición de middleware, APIs, message queues según corresponda)
- Definición de estrategias de manejo de errores, retry logic y monitoreo
- Estimación de esfuerzo de desarrollo

**Entregable**: Documento de arquitectura de integración con diagramas de flujo, especificación técnica y plan de implementación.

---

### Fase 2: Desarrollo e Implementación

**Duración típica**: 3-8 semanas (depende de complejidad)

**Actividades**:

- Desarrollo de conectores y transformaciones de datos
- Implementación de capa de abstracción cuando se integran sistemas legacy
- Desarrollo de lógica de retry, circuit breakers y manejo de errores
- Testing funcional con datos de ambientes de prueba
- Documentación técnica de APIs y endpoints desarrollados

**Enfoque**: Entregas incrementales cada 1-2 semanas para validación continua con el cliente.

---

### Fase 3: Testing y Validación

**Duración típica**: 1-2 semanas

**Actividades**:

- Testing de integración end-to-end con datos reales en ambiente staging
- Testing de performance y carga según volumetría esperada
- Testing de manejo de errores y escenarios de falla
- Validación de seguridad (autenticación, autorización, encriptación)
- Pruebas de estrategia de rollback

---

### Fase 4: Despliegue a Producción

**Actividades**:

- Despliegue con estrategia de rollout gradual cuando aplica
- Monitoreo intensivo en las primeras 48-72 horas post-despliegue
- Plan de rollback preparado y validado
- Capacitación al equipo técnico del cliente para soporte de primer nivel

---

### Fase 5: Soporte y Mantenimiento Continuo

**Actividades**:

- Monitoreo continuo con alertas automáticas configuradas para fallos o anomalías
- Dashboard de métricas de la integración (volumen procesado, latencia, tasa de errores)
- Soporte reactivo para resolución de incidentes
- Mantenimiento proactivo: ajustes de performance, optimizaciones, actualizaciones de seguridad

---

## Capacidades Técnicas

### Protocolos y Estándares

- REST APIs (JSON, XML)
- GraphQL
- SOAP / XML Web Services (sistemas legacy)
- Webhooks y arquitecturas event-driven
- [COMPLETAR: EDI, otros protocolos específicos que manejen]

### Plataformas y Herramientas

**Plataformas de integración**:
[COMPLETAR: ¿MuleSoft? ¿Dell Boomi? ¿Desarrollo custom? ¿API Gateways como Kong, Apigee, AWS API Gateway?]

**Message queues y streaming**:
[COMPLETAR: ¿RabbitMQ? ¿Apache Kafka? ¿AWS SQS/SNS? ¿Azure Service Bus? ¿Google Pub/Sub?]

**Monitoreo y observabilidad**:
[COMPLETAR: ¿Prometheus/Grafana? ¿Datadog? ¿CloudWatch? ¿ELK Stack? ¿New Relic?]

### Seguridad

- OAuth 2.0 / OpenID Connect para autenticación
- API Keys y JWT tokens
- Encriptación TLS/SSL en tránsito
- Encriptación de datos sensibles en reposo
- Audit trails y logging de transacciones
- Cumplimiento de regulaciones según industria (PCI-DSS para pagos, HIPAA para salud, etc.)

### Arquitectura y Patrones

- Microservicios y arquitecturas distribuidas
- Event-driven architecture
- Circuit breakers y resilience patterns
- Retry logic y manejo de backpressure
- Capa de abstracción para sistemas legacy
- API Gateway patterns

---

## Proyectos Representativos

### ACHS - Plataforma de Telemedicina

**Descripción**: Desarrollo de plataforma integral de agendamiento de visitas y telemedicina durante la pandemia de COVID-19.

**Sistemas conectados**:

- Plataforma de telemedicina ↔ SAP (ERP)
- Plataforma de telemedicina ↔ IMED (sistema de información médica)
- Plataforma de telemedicina ↔ Medios de pago

**Desafío técnico**: Cumplimiento de regulaciones de la Superintendencia de Seguridad Social, integración con múltiples sistemas legacy, implementación bajo presión de tiempo crítica (pandemia).

**Metodología**: Ágil, con entregas incrementales y adaptación rápida a cambios normativos.

**Impacto**: Permitió continuidad de atención a miles de pacientes durante la pandemia. Cliente contrató a 23people nuevamente para expandir y mejorar la plataforma.

[Ver caso completo](../client-cases/achs-manteniendo-la-atencion-de-pacientes-en-tiempos-de-pandemia.md)

---

### FALP - Integración con Equifax Chile

**Descripción**: Integración del servicio de evaluación de riesgo crediticio de Equifax Chile con la plataforma de FALP (Fundación Arturo López Pérez).

**Sistemas conectados**: Plataforma FALP ↔ API de Equifax Chile (scoring crediticio)

**Solución técnica**: Conexión mediante API REST de Equifax, implementación de lógica de evaluación crediticia automatizada en la plataforma de FALP.

**Impacto**: Automatización de evaluaciones crediticias para servicios médicos de FALP.

---

### Falabella

[COMPLETAR - Si tienen info sobre qué integraron para Falabella, agreguen aquí similar a los casos de arriba]

---

### Replay

[COMPLETAR - Si tienen info sobre qué integraron para Replay, agreguen aquí]

---

### Equifax USA

**Descripción**: Equipos de 23people desarrollaron y mantuvieron integraciones de APIs de scoring crediticio en el Software Development Center de Equifax USA.

**Enfoque**: Equipos multidisciplinarios (Backend, Frontend, QA, UX) trabajando en modalidad Outsourcing Tech de largo plazo.

**Resultados operativos**:

- Equipos con permanencia promedio de 1.6+ años
- Integraciones deployed a producción con alta disponibilidad
- eNPS de 85 (satisfacción del equipo), NPS de 90 (satisfacción del cliente)

[Ver caso completo](../client-cases/equifax-usa-formando-escalando-equipos-agiles-sdc.md)

---

## Industrias y Geografías Atendidas

**Industrias con experiencia**:

- Retail y E-commerce
- Servicios Financieros y Fintech
- Salud (Healthcare)
- [COMPLETAR: ¿Otros sectores como Logística, Manufactura, etc.?]

**Tamaño de organizaciones**:

- Mid-market a Enterprise
- Startups en fase de escala (casos seleccionados)

**Geografías**:

- Chile (trabajo presencial o remoto)
- Latinoamérica (remoto)
- Estados Unidos e internacional (equipos nearshore con overlap de timezone)

---

## Modalidades de Contratación

El servicio de integración se puede contratar mediante las siguientes modalidades:

**1. Tech Talent as a Service**

Para proyectos de integración de duración acotada (típicamente < 6 meses) o requerimientos muy específicos que requieren alta especialización, el equipo de ingeniería de 23people ejecuta el proyecto utilizando su propio staff interno.

Esta modalidad es apropiada cuando:

- El proyecto tiene duración definida
- Se requiere expertise muy específico
- No se justifica una contratación permanente

**2. Outsourcing Tech**

Para necesidades de integración continua o programas largos de integración (> 6 meses), 23people forma equipos dedicados bajo su estructura legal. Los profesionales trabajan dedicados al proyecto del cliente, pero la gestión administrativa corre por cuenta de 23people.

Esta modalidad es apropiada cuando:

- Hay necesidad continua de capacidad de integración
- Se busca estabilidad del equipo a largo plazo
- Se prefiere delegar gestión administrativa y retención

Ver detalles en [Tech Talent Services](tech-talent.md).

---

## Preguntas Frecuentes

### ¿Cuál es la duración típica de un proyecto de integración?

Depende de la complejidad:

- **Integraciones simples** (2 sistemas modernos con APIs documentadas): 3-6 semanas
- **Integraciones complejas** (múltiples sistemas, legacy, alto volumen): 8-16 semanas
- **Programas de integración** (múltiples integraciones coordinadas): 3-6 meses

La fase de Discovery permite determinar una estimación precisa para cada caso.

### ¿Trabajan con sistemas legacy?

Sí. Tenemos experiencia integrando sistemas legacy (mainframes, AS/400, SOAP APIs, bases de datos sin APIs expuestas) con plataformas modernas.

### ¿Incluyen el mantenimiento post-implementación?

Sí. Las integraciones se diseñan pensando en mantenibilidad desde el inicio. Se ofrecen contratos de soporte continuo que incluyen monitoreo, resolución de incidentes, ajustes de performance y actualizaciones.

### ¿Qué enfoque tienen respecto a tecnologías open source vs. propietarias?

[COMPLETAR: ¿Open source first? ¿Agnósticos según el caso? ¿Qué criterios usan para elegir tecnologías?]

---

## Recursos Relacionados

- [Tech Talent Services](tech-talent.md) - Modalidades de contratación para proyectos de integración
- [Cloud Migration & Modernization](cloud.md) - Integraciones en contexto de arquitecturas cloud
- [Caso de Éxito: Equifax USA](../client-cases/equifax-usa-formando-escalando-equipos-agiles-sdc.md)
