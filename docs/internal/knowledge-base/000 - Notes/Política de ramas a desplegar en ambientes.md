---
type: decision-note
status: inmature
created at: 2024-10-03 12:38
updated at: 2024-10-03 12:38
category:
- software-engineering
- architecture
aliases: 

---

Dado un repositorio de algún proyecto en [[Github]], se debe configurar los [[Workflows]] de [[CI/CD]] para que los proyectos se desplieguen en los [[Environments]] de la siguiente manera:

- La rama `dev`debe desplegarse en el [[Ambiente de Desarrollo]] (development)
- La rama `staging`debe desplegarse en el [[Ambiente Pre-productivo]] (staging)
- La rama `main`debe desplegarse en el [[Ambiente Productivo]] (production).

---
## References

- Decisión en base a conversaciones técnicas por el equipo de Engineering de 23people.
