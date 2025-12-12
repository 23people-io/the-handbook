---
created: 2025-02-26T00:00:00
updated: 2025-04-29T17:43:00Z
index: true
slug: iarvis-tribe
tags: 
  - tribu
  - jarvis-tribe
authors:
  - 23people-io
description: >
    Tribu Iarvis: Descripción general, su propósito y cómo se relaciona con el resto de 23people.
---

# La Tribu Iarvis

La Tribu Iarvis es la que agrupa a todos los equipos operacionales de 23people.

## Propósito

El propósito de la Tribu Iarvis es potenciar la entrega de servicios de alta calidad y sostenibles, alineados con los objetivos estratégicos de 23people, mediante la colaboración efectiva entre sus equipos operacionales.

## Esquema General

```mermaid
%%{init: {'theme':'neutral'}}%%
flowchart TD
  
    %% High Council
    subgraph HIGH_COUNCIL["High Council"]
        GLOBAL_STRATEGY["Global Strategy & Vision"]
        GLOBAL_OPERATIONS["Global Operations"]
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
    classDef tribeStyle fill:#f0f0f0,stroke:#666,stroke-width:2px,color:#000
    classDef highlightedStyle fill:#bae1ff,stroke:#0066cc,stroke-width:2px,color:#000
    classDef gomStyle fill:#ffb3ba,stroke:#ff6b6b,stroke-width:2px,color:#000
    classDef teamStyle fill:#f0f0f0,stroke:#666,stroke-width:2px,color:#000
    classDef apiStyle fill:#d4c5f9,stroke:#8b5cf6,stroke-width:2px,color:#000
    classDef srmStyle fill:#c3f0c3,stroke:#4caf50,stroke-width:2px,color:#000

    class IARVIS_TRIBE apiStyle
    class ERS_TEAM,BKO_TEAM,RND_TEAM,SMK_TEAM,TTS_TEAM highlightedStyle
```

## Equipos de Iarvis

La Tribu Iarvis está compuesta por los siguientes equipos operacionales:

- [**Tech Talent Services Team (TTS)**](/organization/teams/tech-talent-services/): Encargado de la selección, validación y retención de profesionales tech.
- [**Sales & Marketing Team (S&M)**](/organization/teams/sales-and-marketing/): Responsable de la adquisición de nuevos clientes y la gestión de relaciones comerciales.
- [**Backoffice Services Team (BKO)**](/organization/teams/backoffice/): Proporciona soporte administrativo empresarial.
- [**Engineering & Research Team (R&D)**](/organization/teams/engineering-and-research/): Explora y domina tecnologías emergentes para generar valor real en las operaciones de los clientes.

## Como trabajan los Equipos Operacionales

Cada equipo tiene autonomía entorno a un próposito bien definido y un contrato de servicios que se compromete a entregar. Estos contratos funcionan similar a como funcionan las [API](https://aws.amazon.com/what-is/api/) y se espera que se especifique: que entrega, que esperar del servicio y como se solicita. Cada equipo debe medir constantemente la calidad de sus servicios y su eficiencial operacional, para luego mejorarlos de manera iterativa basandose en datos y experiencia acumulada.

![Esquema del modelo interno de un equipo](/_images/team-model-light.svg#only-light)

## Gestión y Liderazgo Operacional

Los equipos operacionales están liderados por el rol del **Global Operations Director**. Además, cada equipo cuenta con un/a líder que cumple con el rol principal de **Service Request Manager (SRM)** y secundariamente con el rol de **Service Delivery Manager (SDM)**.
