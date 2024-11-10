---
type:
  - Idea
created at: 2024-07-17 14:28 
updated at: 2024-07-17 14:28
status:
  - Maduro
aliases:
---

[[Troubleshooting]]: ERR_CONNECTION_TIMED_OUT al Acceder a Aplicación en [[Docker]] a través de [[Nginx]]

# Descripción del Problema
Al intentar acceder a una aplicación en un contenedor Docker a través de Nginx, se encuentra con el error `ERR_CONNECTION_TIMED_OUT`. Esto puede ser causado por configuraciones de firewall, reglas de red en el proveedor de nube, o configuraciones incorrectas de Nginx.

# Pasos para Solucionar

## 1. Verificar Configuración del Firewall en el Servidor

NOTA: Hacer eso solo si aplica. Puede que solo se use el [[Firewall]] que provee [[DigitalOcean]]

1. **Comprobar Estado de UFW**:
   ```bash
   sudo ufw status
   ```
2. **Asegurar que los Puertos Necesarios Están Permitidos**:
   ```bash
   sudo ufw allow 22
   sudo ufw allow 80
   sudo ufw reload
   sudo ufw enable
   ```

## 2. Verificar Configuración del Firewall del Proveedor de Nube (DigitalOcean)

1. **Acceder al Panel de Control de DigitalOcean**:
   - Navegar a la sección de "Networking" y seleccionar "Firewalls".
2. **Agregar Reglas de Entrada**:
   - Asegurarse de que las reglas permitan tráfico en los puertos `22` (SSH) y `80` (HTTP).

## 3. Verificar Configuración de Nginx

1. **Abrir Archivo de Configuración de Nginx**:
   ```bash
   sudo nano /etc/nginx/sites-available/[NOMBRE_DE_VIRTUAL_HOST]
   ```
2. **Configurar Nginx para Escuchar en el Puerto Correcto**:
   ```nginx
   server {
		# Ngnix will listen on port 80 and match the server name requested.
		# Then, it will forward the request to the localhost on port the given port.
		listen 80;		
		# This server_name should be configured in Cloudflare.
		# e.g tools-api.23people.ai
		server_name [DNS_RECORD];		
		  
		
		location / {		
			# This is the port where the API is running via Docker.
			proxy_pass http://localhost:[APP];			
			proxy_set_header Host $host;			
			proxy_set_header X-Real-IP $remote_addr;			
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;			
			proxy_set_header X-Forwarded-Proto $scheme;		
		}
 }
   ```
3. **Probar la Configuración de Nginx**:

   ```bash
   sudo nginx -t
   ```
4. **Reiniciar Nginx**:
   ```bash
   sudo systemctl restart nginx
   sudo systemctl status nginx
   ```

## 4. Verificar el Contenedor Docker

1. **Asegurar que el Contenedor Docker está Corriendo y Mapeado al Puerto Correcto**:
   ```bash
   docker ps
   ```
   La salida debe mostrar el contenedor corriendo y mapeado al puerto `[INSIDE_APP_PORT]`:
   ```
   CONTAINER ID   IMAGE       COMMAND        CREATED          STATUS          PORTS                    NAMES
   xxxxxxxxxxxx   flash-app   "python app.py"   x seconds ago   Up x seconds   0.0.0.0:[APP_PORT]->[APP_PORT]/tcp   flash-container
   ```

## 5. Probar la Conectividad desde el Servidor

1. **Probar Conectividad Local con Curl**:
   ```bash
   curl http://localhost:80
   ```

## 6. Utilizar Herramientas de Red para Diagnosticar

1. **Usar Traceroute desde la Máquina Local para Ver Dónde Falla la Conexión**:

   ```bash
   traceroute [IP_DIGITAL_OCEAN_SERVER]
   ```

2. **Asegurarse de que el Firewall Local no Está Bloqueando el Tráfico Saliente**:
   - En macOS, revisar la configuración del firewall en `Preferencias del Sistema -> Seguridad y Privacidad -> Firewall`.

## Resumen de Acciones Realizadas

1. **Verificación de Reglas del Firewall en el Servidor y Proveedor de Nube**.
2. **Configuración Correcta de Nginx**.
3. **Aseguramiento del Estado y Configuración del Contenedor Docker**.
4. **Pruebas de Conectividad y Diagnóstico con Herramientas de Red**.

# Conclusión

Estos pasos permiten diagnosticar y solucionar problemas de conectividad y configuración que pueden causar el error `ERR_CONNECTION_TIMED_OUT` al acceder a una aplicación en Docker a través de Nginx. Asegúrate de seguir estos pasos sistemáticamente para identificar y resolver el problema.


# References

- [How to Configure Firewall Rules](https://docs.digitalocean.com/products/networking/firewalls/how-to/configure-rules/)

