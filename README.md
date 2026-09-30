# 🌐 Portal de Implementación - SOMOS Networks Colombia

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=for-the-badge&logo=github)](https://github.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

Portal web interactivo para el equipo de **Implementación y Operaciones de SOMOS Networks Colombia S.A.S.** Diseñado para centralizar el acceso a herramientas clave de gestión técnica, monitoreo de red (Zabbix, Lambda, Artemis), hojas de control operativo, topologías y recursos de capacitación.

---

## 🚀 Vista Previa en Vivo (GitHub Pages)

Una vez subido a GitHub y activado GitHub Pages, el sitio estará disponible en:
```
https://<tu-usuario-o-organizacion>.github.io/<nombre-del-repositorio>/
```

---

## 📁 Estructura del Proyecto

El repositorio ha sido organizado bajo las mejores prácticas y estándares de la industria para desarrollo web y despliegue en GitHub Pages:

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flujo automatizado CI/CD para GitHub Pages
├── assets/
│   └── favicon.svg             # Favicon corporativo SOMOS (vectorial optimizado)
├── css/
│   └── styles.css              # Hoja de estilos centralizada y responsive
├── js/
│   └── script.js               # Lógica interactiva (slider, modal, teclado)
├── .gitignore                  # Exclusión de archivos basura de SO y editores
├── .nojekyll                   # Evita procesamiento innecesario de Jekyll en GitHub
├── 404.html                    # Página de error 404 personalizada con diseño oficial
├── index.html                  # Punto de entrada principal para GitHub Pages
└── README.md                   # Documentación completa del proyecto
```

---

## ✨ Características y Mejoras Implementadas

1. **Punto de Entrada Estándar (`index.html`)**:
   - Requisito esencial para que GitHub Pages sirva automáticamente el sitio como la página de inicio sin configuraciones adicionales.

2. **Arquitectura Modular (HTML / CSS / JS)**:
   - Código limpio, desacoplado y fácil de mantener a futuro.

3. **Optimización SEO y Metadatos**:
   - Títulos semánticos, descripción, etiquetas Open Graph (redes sociales y chats corporativos como Slack o WhatsApp), y `theme-color`.

4. **Slider de Fondo Hero con Navegación Dual**:
   - Soporta navegación con botones táctiles/ratón, teclado (`←` y `→`), y autoplay sutil con pausa automática al pasar el cursor.

5. **Burbujas Flotantes con Ventana Modal Accesible**:
   - Animación continua de flotación y efecto zoom al pasar el cursor.
   - Ventana modal emergente con detalles ampliados e insensibilidad a enlaces vacíos.
   - Cierre rápido mediante botón, clic fuera del modal o tecla `ESC`.

6. **Seguridad y Rendimiento**:
   - Todos los enlaces externos cuentan con `rel="noopener noreferrer"` para proteger contra vulnerabilidades de manipulación de ventana padre (*tabnabbing*).

7. **Soporte de Iconos FontAwesome**:
   - Inclusión correcta de la hoja de estilos CSS de FontAwesome para garantizar que los iconos de búsqueda en las burbujas y botones se dibujen con nitidez.

---

## 📤 Guía para Subir este Proyecto a GitHub

Puedes subir este proyecto a GitHub mediante cualquiera de los siguientes 3 métodos:

### Método 1: Desde la Web de GitHub (Sin instalar nada)

1. Ingresa a [GitHub.com](https://github.com) e inicia sesión con tu cuenta.
2. Haz clic en el botón verde **"New"** (o en el icono `+` > **New repository**).
3. Nombra tu repositorio (por ejemplo: `portal-implementacion-somos`).
4. Déjalo como **Público** (requerido para GitHub Pages gratuito) y **NO** marques "Add a README file" (ya lo tenemos creado).
5. Haz clic en **"Create repository"**.
6. En la pantalla siguiente, selecciona la opción **"uploading an existing file"**.
7. Arrastra todos los archivos y carpetas de esta carpeta (`index.html`, `404.html`, `.gitignore`, `.nojekyll`, carpetas `css/`, `js/`, `assets/`, `.github/` y `README.md`).
8. En la parte inferior, escribe un mensaje de commit (ej. `Initial commit: Portal de Implementación Somos`) y haz clic en **"Commit changes"**.

---

### Método 2: Mediante GitHub Desktop (Recomendado con interfaz visual)

1. Descarga e instala [GitHub Desktop](https://desktop.github.com/).
2. Inicia sesión con tu cuenta de GitHub.
3. En el menú, ve a **File > Add Local Repository...**
4. Selecciona la carpeta de este proyecto:
   `c:\Users\USUARIO\Documents\IMPLEMENTACION SOMOS\Aplicacion\URL\PRUEBA Antigravity`
5. Si te indica que no es un repositorio Git, haz clic en **"create a repository here"**.
6. Haz clic en **Publish repository** para subirlo a tu cuenta de GitHub.

---

### Método 3: Mediante la Terminal (Git CLI)

Si tienes Git instalado en tu terminal o PowerShell:

```bash
# 1. Inicializar el repositorio
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el primer commit
git commit -m "feat: Portal de Implementación Somos Networks listo para producción"

# 4. Cambiar el nombre de la rama principal a main
git branch -M main

# 5. Vincular con tu repositorio remoto en GitHub
git remote add origin https://github.com/<tu-usuario>/<nombre-del-repositorio>.git

# 6. Subir el código a GitHub
git push -u origin main
```

---

## ⚙️ Cómo Activar GitHub Pages

Una vez que los archivos estén en tu repositorio de GitHub:

1. Ve a la página de tu repositorio en GitHub.
2. Haz clic en la pestaña **"Settings"** (Configuración) ubicada en el menú superior.
3. En el menú lateral izquierdo, haz clic en **"Pages"** (bajo la sección *Code and automation*).
4. En la sección **"Build and deployment"**:
   - **Source**: Selecciona **"Deploy from a branch"**.
   - **Branch**: Selecciona **`main`** (o `master`) y en la carpeta deja **`/ (root)`**.
   - Haz clic en el botón **"Save"**.
   *(Nota: También puedes elegir la opción "GitHub Actions", la cual detectará automáticamente el archivo `.github/workflows/deploy.yml` que ya incluimos).*
5. Espera aproximadamente 1 a 2 minutos.
6. Refresca la página y verás una barra verde con el enlace publicado:
   > *"Your site is live at https://<tu-usuario>.github.io/<repositorio>/"*

---

## 🛠️ Mantenimiento y Modificaciones

- **Agregar o modificar enlaces del Menú**:
  Edita las etiquetas `<li><a href="...">...</a></li>` dentro de `index.html`.
- **Cambiar imágenes del Slider**:
  Abre `js/script.js` y modifica las URLs dentro del arreglo `fondos`.
- **Modificar la información de las Burbujas**:
  Abre `js/script.js` y edita los objetos dentro del arreglo `datosBurbujas`.
- **Cambiar colores y estilos**:
  Abre `css/styles.css` donde todos los bloques están comentados y organizados.

---

## 🏢 Créditos

**SOMOS NETWORKS COLOMBIA S.A.S**  
NIT: 901464013  
Desarrollado para el **Equipo de Implementación y Operaciones**.
