# 🌐 Guía de Despliegue Web con Docker

Una guía completa para subir archivos HTML, CSS y JavaScript al servidor utilizando Docker y Nginx Proxy Manager.

---

## 📋 Tabla de Contenidos

- [Requisitos Previos](#-requisitos-previos)
- [Preparación del Servidor](#️-preparación-del-servidor)
- [Configuración del Proyecto](#-configuración-del-proyecto)
- [Configuración de Nginx](#-configuración-de-nginx)
- [Despliegue](#-despliegue)
- [Configuración de Red](#-configuración-de-red)
- [Configuración de Firewall](#-configuración-de-firewall)
- [Configuración de Nginx Proxy Manager](#️-configuración-de-nginx-proxy-manager)
- [Verificación Final](#-verificación-final)
- [Recursos Adicionales](#-recursos-adicionales)

---

## ⚠️ Requisitos Previos

Antes de comenzar, asegúrate de tener configurado lo siguiente:

| Requisito                                    |       Descripción                                                  |
|-------------------------------------------|--------------------------------------------------------------|
| 👤 **Usuario no root**           | Con permisos `sudo` y contraseña configurada    |
| 👥 **Grupo Docker**              | Usuario no root agregado al grupo `docker`        |
| 🐳 **Docker**                         | Docker instalado y funcionando                          |
| 🌐 **Nginx Proxy Manager**  | Contenedor NPM instalado y configurado             |
| ❌ **Sin Base de Datos**        | El proyecto debe ser estático (HTML/CSS/JS)       |
| 🌍 **Subdominio**                  | Subdominio configurado apuntando a tu servidor |



---

## 🛠️ Preparación del Servidor

> ❗ **Importante:** Ejecuta todos los comandos con el usuario **no root**  
> ⚠️ **Nota:** Si no has creado el subdominio, hazlo antes de continuar

### 📁 Navegación al Directorio de Servicios

```bash
cd services  # Asegúrate de estar en el directorio correcto
```

---

## 🏗️ Configuración del Proyecto

### Paso 1: Crear Directorio del Portfolio

```bash
mkdir mi-portfolio
cd mi-portfolio
```

### Paso 2: Crear el Archivo docker-compose.yml

```bash
nano docker-compose.yml
```

**Contenido del archivo:**

````markdown
```yaml
services:
  web-portfolio:
    image: nginx:alpine
    container_name: ejemploContainerPortfolio
    # Reinicio automático en caso de fallo o reinicio del servidor
    restart: always     
    volumes:
      # Monta la carpeta 'www' como directorio web del contenedor
      - ./www:/usr/share/nginx/html:ro  
      # Monta la configuración personalizada de Nginx
      - ./default.conf:/etc/nginx/conf.d/default.conf:ro
    expose:
      - "80"
    networks:
      # Conecta a la red donde está Nginx Proxy Manager
      - ejemploNetworks

networks:
  ejemploNetworks:
    # Red externa existente (creada por NPM)
    external: true
```
````

---

## 🔧 Configuración de Nginx

### Paso 3: Crear Archivo de Configuración

```bash
nano default.conf
```

**Contenido del archivo:**

````markdown
```nginx
server {
    # Puerto interno del contenedor (gestionado por NPM)
    listen 80;  
    # Nombre del servidor dentro del contenedor
    server_name localhost;
    
    location / {
        # Directorio raíz de los archivos web
        root /usr/share/nginx/html;          
        # Archivo principal de entrada
        index index.html;
    }
}
```
````

### Paso 4: Crear Directorio Web y Agregar Archivos

```bash
mkdir www
cd www
# Aquí coloca tus archivos: index.html, style.css, script.js, etc.
```

> 💡 **Backup disponible:** [usuario-github/mi-portfolio](https://github.com/usuario-github/mi-portfolio)

---

## 🚀 Despliegue

### Paso 5: Lanzar el Contenedor

```bash
# Asegúrate de estar en el directorio 'mi-portfolio'
cd ..  # Si estás dentro de 'www'
docker compose up -d
```

---

## 🔍 Configuración de Red

### Verificación de Comunicación entre Contenedores

```bash
docker network inspect ejemploNetworks
```

**Busca que aparezcan estos contenedores:**
- `"Name": "ejemploContainerPortfolio"`
- `"Name": "ejemploContainernginxproxymanager"`

> ✅ Esto confirma que ambos contenedores están en la misma red y pueden comunicarse.

---

## 🔓 Configuración de Firewall

### Paso 6: Abrir Puertos Necesarios

**Verificar estado del firewall:**
```bash
sudo ufw status
```

**Abrir puerto 80 (si está cerrado):**
```bash
sudo ufw allow 80/tcp
```

### 🌍 Verificación de Conectividad

**Desde el servidor:**
```bash
ping mi-sitio.ejemplo.com
```

**Desde tu computadora local:**
```bash
ping mi-sitio.ejemplo.com
```

---

## 🛠️ Configuración de Nginx Proxy Manager

### Paso 7: Configurar Proxy Host

1. **Accede a la interfaz web:**
   ```
   http://[IP-DE-TU-SERVIDOR]:81/login
   ```

2. **Configuración básica:**
   |            Campo                           |                 Valor                     |
   |------------------------------------------|--------------------------------------|
   | **Domain Name**                 | `mi-sitio.ejemplo.com`          |
   | **Scheme**                           | `http`                                  |
   | **Forward Hostname/IP**   | `ejemploContainerPortfolio`    |
   | **Forward Port**                  | `80`                                     |
   | **Block Common Exploits**  | ✅ Activado                          |

3. **Configuración SSL (Opcional):**
   - Pestaña **"SSL"**
   - ✅ **SSL Certificate**
   - ✅ **Force SSL**
   - ✅ **HTTP/2 Support**

---

## 🎉 Verificación Final

### Paso 8: Probar el Despliegue

Abre tu navegador y accede a:
```
https://mi-sitio.ejemplo.com
```

> 🥳 **¡Deberías ver tu sitio web funcionando perfectamente!**

---

## 📚 Recursos Adicionales

### Comandos Útiles

````markdown
```bash
# Ver logs del contenedor
docker logs ejemploContainerPortfolio

# Reiniciar el contenedor
docker restart ejemploContainerPortfolio

# Ver contenedores en ejecución
docker ps

# Acceder al contenedor
docker exec -it ejemploContainerPortfolio sh
```
````

### Estructura de Archivos Final

````markdown
```
mi-portfolio/
├── docker-compose.yml
├── default.conf
└── www/
    ├── index.html
    ├── style.css
    ├── script.js
    └── [otros archivos web]
```
````

---

## 🆘 Solución de Problemas

|          Problema                    |                            Solución                                            |
|-------------------------------------|-----------------------------------------------------------------------------|
| **Contenedor no inicia** | Verificar sintaxis de `docker-compose.yml`                           |
| **Sitio no accesible**      | Comprobar configuración DNS y firewall                                |
| **Error 502**                   | Verificar que el contenedor esté en la red `ejemploNetworks` |
| **SSL no funciona**         | Verificar configuración en NPM                                         |

---

## 📝 Notas Importantes

- ⚠️ Siempre usar usuario **no root** para ejecutar comandos Docker
- 🔄 Los contenedores se reinician automáticamente con `restart: always`
- 🌐 El subdominio debe apuntar a la IP pública de tu servidor
- 🔒 Configurar SSL es opcional pero recomendado para producción

---

*Guía creada para facilitar el despliegue de sitios web estáticos usando Docker y Nginx Proxy Manager*