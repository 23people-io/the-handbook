---
created: 2024-08-10T14:30:00
updated: 2025-04-29T17:43:00Z
authors:
  - manu-reyes-23p
description: >
  Como nos organizamos en 23people: Equipos y Jerarquía Organizacional.
---

# Nuestra Organización

En 23people nos organizamos en equipos multidisciplinarios. Cada equipo tiene un propósito claro y bien definido, y es responsable de la entrega de servicios a otros equipos internos o a clientes externos.

## Estructura Organizacional

La siguiente es un diagrama que ilustra la estructura organizacional de 23people:

```mermaid
%%{init: {'theme':'neutral'}}%%
flowchart TD
  
    %% High Council
    subgraph HIGH_COUNCIL_TRIBE["High Council"]
        GLOBAL_STRATEGY["Global Strategy & Vision"]
        subgraph GLOBAL_OPERATIONS["Global Operations"]
            direction TB

            OPS["Operations & Delivery"]
            ISEC["Information Security & Compliance"]
            DGOV["Data Governance"]
        end
    end

    %% Iarvis Tribe - Operational Teams
    subgraph IARVIS_TRIBE["Tribu Iarvis"]
        direction LR

        %% Tech Talent Services Column
        TTS_TEAM["Tech Talent Services"]
        BKO_TEAM["Backoffice"]
        SMK_TEAM["Sales & Marketing"]
        ERS_TEAM["Engineering & Research"]
    end

    %% Drakkar Tribe - IT Professionals as Contractors
    subgraph DRAKKAR_TRIBE["Tribu Drakkar"]
        direction LR

        %% IT Professionals as Contractors
        TEAM1["Equipo 1"]
        TEAM2["Equipo 2"]
        TEAM3["..."]
    end

    GLOBAL_OPERATIONS --> TTS_TEAM & BKO_TEAM & SMK_TEAM & ERS_TEAM

    TTS_TEAM -.-> DRAKKAR_TRIBE
    BKO_TEAM -.-> DRAKKAR_TRIBE

    %% Styling
    classDef directionStyle fill:#bae1ff,stroke:#0066cc,stroke-width:2px,color:#000
    classDef gomStyle fill:#ffb3ba,stroke:#ff6b6b,stroke-width:2px,color:#000
    classDef teamStyle fill:#f0f0f0,stroke:#666,stroke-width:2px,color:#000
    classDef apiStyle fill:#d4c5f9,stroke:#8b5cf6,stroke-width:2px,color:#000
    classDef srmStyle fill:#c3f0c3,stroke:#4caf50,stroke-width:2px,color:#000
    classDef invisibleStyle fill:none,stroke:none

    
```

Se puede observar que la estructura organizacional de 23people se compone de varios niveles jerárquicos y equipos multidisciplinarios que trabajan juntos para cumplir con los objetivos estratégicos de la organización.

Además, en 23people utilizamos el concepto de **Tribu** para agrupar equipos que comparten objetivos y propósitos comunes. Cada Tribu tiene un nombre y una identidad propia, y se relaciona con otras Tribus y equipos en la organización.

Estos son los principales componentes de nuestra estructura organizacional:

- [High Council](councils/high-council.md). Este es el equipo responsable de definir la estrategia global y la visión de 23people.
- [Tribu Iarvis](/organization/tribes/iarvis-tribe/). Es el nombre del conjunto de equipos operacionales y de entrega de servicios de 23people.
    - [Tech Talent Services Team](/organization/teams/tech-talent-services/)
    - [Backoffice Team](/organization/teams/backoffice/)
    - [Sales & Marketing Team](/organization/teams/sales-and-marketing/)
    - [Engineering & Research Team](/organization/teams/engineering-and-research/)
- [Tribu Drakkar](/organization/tribes/drakkar-tribe). Es el nombre del conjunto de equipos de Profesionales Tech que están en modo subcontratación en 23people.
