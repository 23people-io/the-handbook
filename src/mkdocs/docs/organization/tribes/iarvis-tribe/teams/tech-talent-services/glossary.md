---
created: 2024-10-21T12:46:17
updated: 2025-01-11T00:00:00
authors:
  - manu-reyes-23p
description: >
    Conceptos, expresiones y acuerdos de definiciones que se usan en la comunicación diaria en temas asociados a los servicios de Tech Talent Services.
---

# Glosario de Tech Talent Services

Este es el registro oficial de todos aquellos conceptos, expresiones y
acuerdos de definición que se usen en la comunicación diaria en temas
asociados a los servicios de Tech Talent Services.

El objetivo es el poder alinear el conocimiento que se va adquiriendo a lo
largo del tiempo y así poder transmitirlo a las personas de una manera más
eficiente y efectiva.

## Conceptos Generales

[`Profesional Tech`](){#profesional-tech}

:   Se define como un individuo (persona) con formación, experiencia y/o habilidades
especializadas en el campo de las Tecnologías de la Información (TI).

    Características clave:

    - Tiene competencias desarrolladas en programación.

    - Posee conocimientos técnicos en una o más áreas de TI, como desarrollo de software, administración de sistemas, seguridad informática, análisis de datos, inteligencia artificial, entre otras.

    - Puede tener formación académica formal en campos relacionados con TI (como ingeniería informática, ciencias de la computación, sistemas de información, etc.) y/o certificaciones profesionales relevantes.

    - Cuenta con experiencia práctica en proyectos o roles relacionados con TI.

    - Puede especializarse en tecnologías, lenguajes de programación o metodologías específicas.

[`Perfil de Profesional Tech (o Perfil Tech)`](){#perfil-tech}

:   Se define como el conjunto de características, habilidades, conocimientos y
experiencias profesionales que describen a un Profesional Tech en un momento
específico de su carrera.

    Un profesional puede desarrollar múltiples perfiles Tech a lo largo de su trayectoria.

[`Niveles de Experiencia de Profesionales Tech`](){#niveles-experiencia-profesionales-tech}

:   Corrensponden al grado de experiencia y conocimientos que un Profesional Tech. Estos niveles son:

    - **Entry**: Profesionales con poca o ninguna experiencia laboral en el campo de Tech.

    - **Entry Avanzado**: Profesionales con experiencia laboral limitada en el campo de Tech.

    - **Midlevel**: Profesionales con experiencia laboral moderada en el campo de Tech.

    - **Senior**: Profesionales con amplia experiencia laboral y conocimientos avanzados en el campo de Tech.

## Conceptos Comerciales

[`Oportunidad de Negocio`](){#oportunidad-negocio}

:   Corresponde a un pedido específico de Perfiles de Profesionales Tech realizado por un cliente
(nuevo o existente) y que representa la posibilidad de concretar una venta de
nuestros servicios de Outsourcing o Hunting Tech.

    Características clave:

    - Una Oportunidad de Negocio tiene uno y sólo un [Pedido](#pedido) asociado.

[`Pedido`](){#pedido}

:   Se define como la solicitud formal de un cliente que engloba uno o más
Requerimientos de Perfiles Tech.

    Características clave:

    - Está asociado a una Oportunidad de Negocio específica.

    - Contiene uno o más Requerimientos de Perfiles Tech.

    - Representa la necesidad total de talento Tech del cliente en un momento dado.

[`Requerimiento de Perfil Tech`](){#requerimiento-perfil-tech}

:   Se define como una solicitud específica de un tipo de Perfil Tech
dentro de un Pedido.

    Características clave:

    - Forma parte de un Pedido hecho a Tech Talent.

    - Describe un perfil profesional específico solicitado por el cliente.

    - Puede incluir una o más Vacantes Tech a ser cubiertas.

    - Define las características y habilidades requeridas para un rol particular.

[`Vacantes`](){#vacantes}

:   Se define como el número de posiciones individuales disponibles de ser completados para un Requerimiento
de Perfil Tech específico.

    Características clave:

    - Representa una oportunidad laboral concreta para un Profesional Tech.

    - Un Requerimiento de Perfil Tech puede tener uno o más Vacantes Tech disponibles de ser completados.

    - Indica el número de profesionales que el cliente está dispuesto a contratar para un perfil específico.

`Relación entre Pedidos, Requerimientos y Vacantes de Perfiles Tech`

:   Un Pedido (o Solicitud) es una petición formal que incluye uno o más Requerimientos de Perfil Tech. Cada Requerimiento especifica las características y habilidades técnicas necesarias para un determinado rol. A su vez, cada Requerimiento indica el número de Vacantes Tech a cubrir, es decir, la cantidad de profesionales que se necesitan contratar con ese perfil específico.

    ```mermaid
    flowchart TD
        ON[Oportunidad de Negocio]
        P[Pedido]
        R[Requerimiento de Perfil Tech]
        V[Vacante]
        
        ON --> |"tiene un"| P
        P --> |"contiene uno o más"| R
        R --> |"incluye una o más"| V
    ```

    **Ejemplo**:

    Un cliente puede hacer un Pedido que incluya:

    - Un Requerimiento para perfil "Senior Backend Developer" con 2 vacantes
    - Un Requerimiento para perfil "Data Engineer" con 1 vacante
    - Un Requerimiento para perfil "QA Automation" con 3 vacantes

    En este caso, el Pedido tiene 3 Requerimientos de Perfil Tech y un total de 6 Vacantes Tech a cubrir.

## Conceptos de Selección de Profesionales

[`Oferta Laboral`](){#oferta-laboral}

:   Se define como una propuesta formal de empleo que describe las condiciones y requisitos de un puesto de trabajo específico.

    Características clave:

    - Contiene información detallada sobre el puesto, las responsabilidades, los requisitos, las condiciones laborales y los beneficios asociados.

    - Representa una oportunidad de empleo concreta para un Profesional Tech.

    - Puede ser anunciada públicamente o presentada directamente a un Profesional Tech.

[`Flujo de Selección`](){#flujo-seleccion}

:   Se define como el conjunto de etapas y actividades desarrolladas por 23people, para evaluar y seleccionar Profesionales Tech, cuyo Perfil se ajuste a los requisitos de una [oferta laboral](#oferta-laboral) específica.

    Características clave:

    - Incluye las etapas de: 
        1. Filtro de Perfil Curricular
        2. Evaluación de Competencias Técnicas
        3. Evaluación de Experiencia Profesional
        4. Evaluación de Idiomas
        5. Entrevista Final
    - Lo que se evalúa es el perfil del profesional en ese momento determinado. El mismo profesional puede postular a otra oferta laboral en el futuro en donde se necesite otro perfil tech. De esta manera, no se filtra a profesionales, sino que al perfil que presentó en esa oferta laboral.

[`Postulación`](){#postulacion}

:   Se define como el proceso mediante el cual un [Profesional Tech](#profesional-tech) voluntariamente se presenta para ser evaluado como una opción para un puesto de trabajo específico anunciado por 23people.

    Características clave:

    - Un Profesional Tech puede tener múltiples postulaciones registradas con nuestra empresa.

    - Cada postulación relaciona una [oferta laboral](#oferta-laboral) específica y profesional especifico en un momento determinado.

    - La postulación marca el inicio del [flujo de selección](#flujo-seleccion) para el [perfil](#perfil-tech) del profesional.

[`Postulante`](){#postulante}

:   Se considera Postulante a todo Profesional Tech que ha presentado su postulación a una oferta laboral nuestra.

[`Candidato`](){#candidato}

:   Se considera Candidato a todo Profesional Tech que cumple con las siguientes
condiciones:

    1. Ha postulado a una o más ofertas laborales de 23people.

    2. Ha completado satisfactoriamente nuestro Flujo de Selección.

    3. Ha sido evaluado por nuestro equipo de Reclutamiento y Selección como apto para ser presentado a entrevista con un cliente.

    4. Su perfil profesional actual se ajusta a los requisitos de una oferta laboral específica.

    Características importantes:

    - El estado de Candidato es dinámico y depende del [perfil profesional](#perfil-tech) actual del individuo en relación con las ofertas laborales disponibles.

    - Un Profesional Tech puede ser considerado Candidato para múltiples ofertas laborales y/o clientes, siempre que su perfil se ajuste a los requisitos específicos de cada caso.

    - La designación como Candidato no es permanente y puede variar según cambios en el perfil profesional o en los requisitos de las ofertas laborales.
