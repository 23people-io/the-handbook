---
type: how-to-note
status: inmature
created at: 2024-10-03 12:38
updated at: 2024-10-15 12:29
category:
- software-engineering
- ci/cd
aliases: 
- 

---

Estos son los pasos para configurar el [[Deployment]] automatizado con [[GitHub Actions]], [[SSH]] y [[Nginx]] en un servidor remoto.

## Pasos

**Importante**: Previamente, debes ya haber podido acceder al servidor remoto con una clave SSH previamente configurada desde tu computador local.

### Generar un Par de Claves SSH

 En el servidor remoto, genera un par de claves SSH que serán luego utilizadas para la conexión SSH entre el Github Runner (Origen) y el Servidor Remoto (Destino). Se puede usar este comando:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/PROJECT_NAME_deploy_key
```

En donde:

- `PROJECT_NAME`: Es el nombre del repositorio. Esto es una convención mas que nada (e.g. `23people-ai-itts-chatbot`)

**NOTE**: Se debe crear un par de claves por cada proyecto en Github. Sino, cuando se esté añadiendo el `deploy key` en el Repositorio vía la web de Github, se indica que la llave ya existe (dado que está añadida en otro repositorio).

### Agregar la Clave Pública como un Deploy Key en GitHub

Obtén el contenido de la clave pública

```bash
cat ~/.ssh/PROJECT_NAME_deploy_key.pub
```

- Ve al repositorio en GitHub.
- Navega a Settings > Deploy keys.
- Haz clic en Add deploy key.
- Pega el contenido de `~/.ssh/PROJECT_NAME_deploy_key.pub` en el campo "Key".
- Deja la opción "Allow write access" no marcada (en general no es necesario).
- Haz clic en Add key.

### Agrega la Clave Pública al Servidor Remoto de Deployment

En el servidor remoto, copia el contenido de la clave pública `~/.ssh/PROJECT_NAME_deploy_key.pub` y añádelo como una linea mas en el archivo `~/.ssh/authorized_keys`.

	```bash
	cat ~/.ssh/PROJECT_NAME_deploy_key.pub >> ~/.ssh/authorized_keys
	```

### Configurar el Servidor Remoto para Usar la Clave Privada

En el servidor remoto, edita o crea el archivo de configuración SSH:

```bash
nano ~/.ssh/config
```

Agrega la configuración para usar la clave privada `PROJECT_NAME_deploy_key` para GitHub:

```bash
# Otros alias de hosts para otros proyectos
# ...

# Alias de host para el proyecto en GitHub
Host github.com-PROJECT_NAME
  HostName github.com
  User git
  IdentityFile ~/.ssh/PROJECT_NAME_deploy_key
  IdentitiesOnly yes
```

Guarda y cierra el archivo.

### Verificar la Configuración

En el servidor remoto, prueba la conexión SSH hacia GitHub:

```bash
ssh -T git@github.com-PROJECT_NAME
```

Deberías ver un mensaje de bienvenida de GitHub, indicando que la autenticación fue exitosa. Algo asi:
  
```bash
Hi ...! You've successfully authenticated, but GitHub does not provide shell access.
```

### Configurar environments en GitHub

Debes configurar los ambientes (environments) en Github. Para esto, realiza los siguientes pasos:

- Ve al repositorio en GitHub.
- Navega a Settings > Environments.
- Asegúrate de que estén los ambientes de: `development`, `staging` y `production` (en base a la convención indicada en [[Política de ramas a desplegar en ambientes]])
- En la sección `Deployment branches and tags`, selecciona la rama del repositorio que esté de acuerdo a la política anterior.
- En la sección `Environment secrets`, agrega las siguientes variables secretas del ambiente:
   	- `SSH_PRIVATE_KEY`: Este secreto debe contener la clave privada `PROJECT_NAME_deploy_key` generada en el servidor remoto.
   	- `SSH_DEPLOYMENT_HOST`: Este secreto debe contener la IP del servidor remoto.
   	- `SSH_USERNAME`: Este secreto debe contener el nombre de usuario para la conexión SSH.

### Configurar el Workflow de GitHub Actions

Ejemplos de workflows se pueden encontrar en el repositorio del proyecto de `23people-handbook` en la carpeta [.github](https://github.com/23people-io/23people-handbook/tree/main/.github/workflows)

### Configurar Nginx

- En el servidor remoto, crea o edita el archivo: 

```bash
sudo nano /etc/nginx/sites-available/PROJECT_NAME
```

Pedirá la clave `sudo`

- Agrega la configuración en el archivo y guarda. Ejemplos de configuración se pueden encontrar en el repositorio del proyecto de `23people-handbook` en la carpeta [deploy](https://github.com/23people-io/23people-handbook/tree/main/deploy).

- Crear un enlace simbólico en `sites-enabled`:
  
  Crea un enlace simbólico del archivo de configuración en `sites-enabled`:

  ```bash
  sudo ln -s /etc/nginx/sites-available/PROJECT_NAME /etc/nginx/sites-enabled/
  ```

- Probar la configuración de Nginx:

  Verifica que la configuración de Nginx no tenga errores:

  ```bash
  sudo nginx -t
  ```

- Reinicia el servicio de Nginx mediante:

  ```bash
  sudo systemctl restart nginx
  ```

- **Paso Adicional 1**: Configuración directiva `sites-enabled` (si es necesario):

  Abre el archivo `nginx.conf`:

  ```bash
  sudo nano /etc/nginx/nginx.conf
  ```

  Asegúrate de que la directiva `include` para `sites-enabled` esté presente:

  ```plaintext
  http {
      ...
      include /etc/nginx/sites-enabled/*;
      ...
  }
  ```

- **Paso Adicional 2**: Configuración server_names_hash_bucket_size (si es necesario)

  Abre el archivo nginx.conf:

  ```bash
  sudo nano /etc/nginx/nginx.conf
  ```

  Busca la línea que contiene `server_names_hash_bucket_size 64;`. Si está comentada (precedida por #), quita el comentario eliminando el # al inicio de la línea. Debería verse así:

  ```plaintext
  server_names_hash_bucket_size 64;
  ```

Con estos pasos y configuraciones, deberías poder configurar un despliegue automatizado usando GitHub Actions y SSH para cualquier proyecto.

### Configurar Cloudflare



## Referencias

Creado mediante el uso de Github Copilot y experiencia previa en configuración de despliegues automatizados.
