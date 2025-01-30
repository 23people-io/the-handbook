---
created: 2024-10-21T12:46:17
updated: 2025-01-11T00:00:00
authors:
  - manu-reyes-23p
description: >
    Conceptos, expresiones y acuerdos de definiciones que se usan en la comunicación diaria en temas asociados a los servicios de Backoffice Services.
---

# Glosario de Backoffice Services

Este es el registro oficial de todos aquellos conceptos, expresiones y
acuerdos de definición que se usen en la comunicación diaria en temas
asociados a los servicios de Backoffce.

El objetivo es el poder alinear el conocimiento que se va adquiriendo a lo
largo del tiempo y así poder transmitirlo a las personas de una manera más
eficiente y efectiva.

## Conceptos Generales

[`Oportunidad de Negocio`](){#oportunidad-de-negocio}

:   Corresponde a un pedido realizado por un cliente (nuevo o existente) y que
representa la posibilidad de concretar una venta de nuestros servicios. Cada
oportunidad es única y puede pasar por las etapas del Flujo de Ventas General.

[`Flujo de Ventas General`](){#flujo-de-ventas-general}

:   Las etapas por las que puede pasar una Oportunidad de Negocio, son las
    siguientes:

    1. Oportunidad Inmadura
    2. Oportunidad Calificada
    3. Oportunidad Comprometida
    4. Oportunidad por Facturar
    5. Oportunidad en Facturación
    6. Oportunidad Lista
    7. Oportunidad Perdida

    ```mermaid
    %%{init: {'theme':'neutral'}}%%
    flowchart LR
    A[Oportunidad Inmadura]:::inmadura --> B[Oportunidad Calificada]:::calificada
    B --> C[Oportunidad Comprometida]:::comprometida
    C --> D[Oportunidad por Facturar]:::porFacturar
    D --> E[Oportunidad en Facturación]:::enFacturacion
    E --> F[Oportunidad Lista]:::lista
    
    B --> G[Oportunidad Perdida]:::perdida
    C --> G
    D --> G
    E --> G

    ```

[`Oportunidad Inmadura`](){#oportunidad-inmadura}

: Se considera como **Inmadura** aquella oportunidad de negocio que se encuentra
en una etapa inicial de exploración. En esta fase, puede haber un interés
preliminar del cliente, pero aún no se han cumplido los criterios para
considerarla calificada. Puede incluir primeros contactos o expresiones de
interés que requieren mayor desarrollo.

[`Oportunidad Calificada`](){#oportunidad-calificada}

  : Se considera como **Calificada** la oportunidad que cumple los siguientes
  criterios:

    1. Se ha tenido una interacción directa (1:1) con el cliente.

    2. El cliente ha demostrado interés concreto en nuestros productos y/o servicios.

    3. Se ha identificado y comprendido la(s) problemática(s) específica(s) del cliente en su negocio, función, departamento o área.

    4. Se ha confirmado que los servicios de 23people pueden abordar eficazmente el/los problema(s) identificado(s).

    5. Se ha verificado que el cliente posee tanto el presupuesto como la capacidad de decisión para contratar nuestros servicios.

[`Oportunidad Comprometida`](){#oportunidad-comprometida}

:   Se considera **Comprometida** cuando el cliente ha realizado una acción
    concreta, positiva y explícita para avanzar con la propuesta técnico-comercial
    acordada. Estas acciones pueden incluir:

      1. Una respuesta afirmativa vía correo electrónico a una propuesta formal.

      2. La generación de una orden de compra.

      3. La firma de un contrato o anexo de contrato.

[`Oportunidad por Facturar`](){#oportunidad-por-facturar}

:   Se clasifica como **Por Facturar** aquella oportunidad de negocio comprometida
    para la cual el cliente ha dado su aprobación explícita para iniciar el
    proceso administrativo de facturación.

[`Oportunidad en Facturación`](){#oportunidad-en-facturacion}

:   Se considera **En Facturación** la oportunidad de negocio para la cual se ha
    emitido satisfactoriamente al menos una factura de venta, independientemente
    del estado de pago de la misma.

[`Oportunidad Lista`](){#oportunidad-lista}

:   Se define como **Lista** aquella oportunidad de negocio cuya implementación
    del servicio comprometido con el cliente se ha completado, ya sea total o
    parcialmente, cumpliendo con los términos acordados.

[`Oportunidad Perdida`](){#oportunidad-perdida}

:   Se clasifica como **Perdida** aquella oportunidad de negocio que no se logró
    concretar en una venta. Desde cualquier etapa previa, puede llevarse la
    oportunidad a esta etapa. Esto puede deberse a diversas razones, como:

      1. El cliente decidió no proceder con la compra.

      2. El cliente optó por una solución de la competencia.

      3. Las necesidades del cliente cambiaron, haciendo que nuestra oferta ya no fuera adecuada.

      4. No se logró llegar a un acuerdo en términos comerciales o técnicos.

      5. El proyecto o la necesidad del cliente fue cancelada o pospuesta indefinidamente.
