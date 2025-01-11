---
created: 2024-11-20T14:30:00
updated: 2025-01-11T00:00:00
authors:
  - manu-reyes-23p
description: >
    Metodología de trabajo en 23people.
---

# Madures en desarrollo de software

!!! example ""

    **Co-construimos software empresarial** en una manera ágil, evolutiva y basados en datos.

Hemos adoptado una metodología de desarrollo de software ágil que nos permite construir productos digitales de alta calidad, evolutivos y basados en datos. Nuestro enfoque se basa en la colaboración, la transparencia y la iteración continua, permitiéndonos adaptarnos a los cambios y entregar valor de manera eficiente.

## Principios

..

## Roles y Responsabilidades

```mermaid
flowchart TB
    subgraph Consulting["Especialistas 23people"]
        direction LR
        UXC["UX Designer"]
        QSC["Quality Assurance"]
        ARC["Architect"]
    end

    subgraph Client["Cliente"]
        PO["Product Owner (o SRM)"]
    end

    subgraph Squad["Core Squad"]
        subgraph Leadership["Liderazgo"]
            SDM["Service Delivery Manager"]
            TL["Tech Lead"]
        end
        
        subgraph Team["Equipo"]
            Dev["Developers (Fullstack, QA, DevOps)"]
        end
    end

    %% Flujos principales
    PO -->|"Requerimientos"| SDM
    SDM -->|"Gestión de Flujo"| Team
    TL -->|"Dirección Técnica"| Team
    
    %% Interacciones consultivas
    UXC -.->|"Experiencia Usuario"| Squad
    QSC -.->|"Calidad"| Squad
    ARC -.->|"Arquitectura Técnica"| Squad
    
    %% Entregables
    Squad -->|"Incrementos"| Client

    %% Estilos
    classDef clientNode fill:#0577fa,stroke:#333,stroke-width:2px
    classDef squadNode fill:#0577fa,stroke:#333,stroke-width:2px
    classDef consultingNode fill:#0577fa,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5
    
    class PO clientNode
    class SDM,TL,Dev,D,Q,U squadNode
    class UXC,QSC,ARC consultingNode
```

## Procesos

..

## Gestión Ágil de Proyectos

..

## Buenas prácticas

...
