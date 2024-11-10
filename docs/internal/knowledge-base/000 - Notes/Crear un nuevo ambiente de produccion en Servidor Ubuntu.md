---
type:
  - Idea
  - Definición
created at: 2024-07-17 17:43 
updated at: 2024-07-17 17:43
status:
  - Inmaduro
  - Maduro
aliases:
---

## Crear usuarios separados en Linux para ejecutar aplicaciones.

Se busca tener un usuario linux por aplicación a ejecutar en el servidor. Con esto, se tiene aislado cualquier problema que pueda suceder y se limitan los permisos a cada usuario en cada aplicación.

Para esta guia, se asumirá que el usuario creado se llama `sammy` y que la IP del servidor es `1.2.3.4`

## Crear nuevo usuario linux

1. Crear el nuevo usuario:
`sudo adduser sammy`

2. Agregarlo al grupo `sudoers`:
`usermod -aG sudo sammy`

3. Para agregar al nuevo usuario al grupo de docker. De esta manera, se podrán ejecutar comandos docker sin tener que usar `sudo`:
`sudo usermod -aG docker ${USER}`


## Crear par de llaves de SSH

Crear un par de llaves SSH por defecto para el usuario creado.

`ssh-keygen -t rsa -b 4096`

## Subir la llave publica del computador local a este servidor con este usuario.

En el servidor, en el archivo `/home/sammy/.ssh/authorized_keys` agregar la llave publica del computador personal y probar la conexión mediante `ssh sammy@1.2.3.4`.

## Crear carpeta workspace

`mkdir ~/workspace`

## Agregar llave publica del usuario en Github Repository

En `Settings/Deploy` Keys en el Repositorio de Github, agregar la llave publica del servidor. Al `title` de la llave, colocarle `sammy@1.2.3.4`

## Probar clonar el repositorio

En `~/workspace`, 

`git clone git@github.com:23people-io/repo_name.git`


# References

 - [Create separate users in Linux for running applications](https://dev.to/atosh502/create-separate-users-in-linux-for-running-applications-4c4o)
 - [How to Add and Delete Users on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-20-04)

