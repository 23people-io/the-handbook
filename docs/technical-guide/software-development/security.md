Para 23people, la seguridad y la calidad del código son prioridades fundamentales que van de la mano con nuestro principio de simplificación. Un código limpio y seguro reduce complejidad, facilita el mantenimiento y protege los activos e información de nuestros clientes y usuarios. A continuación, describimos las principales herramientas y prácticas que empleamos:

1. **SonarQube**  
    - Realizamos análisis estáticos del código para identificar vulnerabilidades, malas prácticas y posibles bugs.  
    - SonarQube evalúa la calidad del software a lo largo de dimensiones como fiabilidad, seguridad y mantenibilidad, integrándose con nuestro flujo de CI/CD para la retroalimentación temprana.

2. **Burp Suite y OWASP ZAP**  
    - Herramientas de **pentesting** automatizado y semiautomatizado que utilizamos para probar la seguridad de nuestras aplicaciones web.  
    - Identifican vulnerabilidades comunes (como inyecciones, configuraciones inseguras y exposición de datos sensibles) siguiendo recomendaciones de OWASP.  
    - Permiten realizar escaneos dinámicos (DAST) y reportar hallazgos de seguridad en tiempo real.

3. **RUFF**  
    - Linter y formateador para proyectos en **Python** que ofrece una serie de reglas enfocadas en mejorar la calidad y legibilidad del código, así como en prevenir errores comunes.  
    - Ayuda a que nuestro equipo mantenga un estándar uniforme y facilite la colaboración en los proyectos de IA y ML.

4. **ESLint**  
    - Linter para **JavaScript/TypeScript** que utilizamos en proyectos basados en Node.js, NestJS y React.  
    - Aplica un conjunto configurable de reglas para detectar errores y malas prácticas, asegurando la consistencia del código y reduciendo el riesgo de fallos en producción.

5. **Prácticas de Integración y Automatización**  
    - **Integración con CI/CD**: Todas estas herramientas se ejecutan en nuestras pipelines, de modo que cualquier cambio en el repositorio se valide automáticamente antes de ser fusionado.  
    - **Monitoreo y reporte**: Automatizamos la generación de informes para que todo el equipo tenga visibilidad de los problemas de seguridad y calidad, permitiendo priorizar y corregir los hallazgos rápidamente.  
    - **Revisiones de seguridad y calidad periódicas**: Más allá de las revisiones de código cotidianas, establecemos auditorías ocasionales para garantizar que el proyecto cumpla con los requisitos de seguridad y que se apliquen las mejores prácticas.

Con este enfoque, nos aseguramos de que cada línea de código escrita en 23people cumpla con altos estándares de calidad y seguridad, reforzando la confianza de nuestros clientes y respaldando nuestro compromiso con la simplificación y la excelencia técnica.
