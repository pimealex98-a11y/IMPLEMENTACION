/**
 * SOMOS NETWORKS - PORTAL DE IMPLEMENTACIÓN
 * Scripts interactivos para Slider, Burbujas y Accesibilidad
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ========================================================
     1. SLIDER HERO PRINCIPAL
     ======================================================== */
  const fondos = [
    "https://i.imgur.com/omGJBFS.png",
    "https://staticprd.minuto30.com/wp-content/uploads/2024/04/SOMOS_ESPACIOS-88.jpg",
    "https://i.imgur.com/z8gcudR.jpg",
    "https://estaticos.elcolombiano.com/binrepository/600x450/0c0/780d565/none/11101/XVME/somos-internet-ofertas-laborales-colombia_48507894_20250808100052.jpg",
    "https://picsum.photos/1200/800?random=1",
    "https://i.imgur.com/oVjTlYd.jpg",
    "https://picsum.photos/1200/800?random=2"
  ];

  let indice = 0;
  const hero = document.querySelector(".hero");
  const flechaDerecha = document.querySelector(".flecha.derecha");
  const flechaIzquierda = document.querySelector(".flecha.izquierda");

  // Pre-carga suave de imágenes
  fondos.forEach(url => {
    const img = new Image();
    img.src = url;
  });

  function actualizarFondo(nuevoIndice) {
    indice = (nuevoIndice + fondos.length) % fondos.length;
    if (hero) {
      hero.style.backgroundImage = `url('${fondos[indice]}')`;
    }
  }

  // Inicializar slider con la primera imagen
  actualizarFondo(0);

  if (flechaDerecha) {
    flechaDerecha.addEventListener("click", () => actualizarFondo(indice + 1));
  }

  if (flechaIzquierda) {
    flechaIzquierda.addEventListener("click", () => actualizarFondo(indice - 1));
  }

  // Soporte de navegación por teclado para el slider
  document.addEventListener("keydown", (e) => {
    // Solo si el modal no está abierto
    const modalActivo = modalOverlay && modalOverlay.classList.contains("active");
    if (!modalActivo) {
      if (e.key === "ArrowRight") {
        actualizarFondo(indice + 1);
      } else if (e.key === "ArrowLeft") {
        actualizarFondo(indice - 1);
      }
    }
  });

  // Autoplay sutil del slider (cada 8 segundos, se detiene al pasar el ratón)
  let autoplayInterval = setInterval(() => {
    actualizarFondo(indice + 1);
  }, 8000);

  if (hero) {
    hero.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
    hero.addEventListener("mouseleave", () => {
      clearInterval(autoplayInterval);
      autoplayInterval = setInterval(() => actualizarFondo(indice + 1), 8000);
    });
  }

  /* ========================================================
     2. BURBUJAS INTERACTIVAS Y MODAL
     ======================================================== */
  const datosBurbujas = [
    {
      titulo: "Sede de Operaciones Somos",
      badge: "SOMOS ESPACIOS",
      imagen: "https://staticprd.minuto30.com/wp-content/uploads/2024/04/SOMOS_ESPACIOS-88.jpg",
      descripcion: "Instalaciones de alto rendimiento diseñadas para coordinar despliegues de fibra óptica y conectividad para toda la región.",
      link: "https://sites.google.com/somosinternet.co/somos-implementacion/home"
    },
    {
      titulo: "SOMOS UN GRAN EQUIPO",
      badge: "ACTIVIDADES QUE NOS SOCIALIZAN",
      imagen: "https://i.imgur.com/rZpjNTm.jpg",
      descripcion: "El equipo de Implementación Bogotá es un equipo con trayectoria, unido y comprometido a siempre dar lo mejor en un entorno lleno de innovación y mejora constante de procesos.",
      link: ""
    },
    {
      titulo: "Gestión e Implementación",
      badge: "EQUIPO TÉCNICO",
      imagen: "https://i.imgur.com/z8gcudR.jpg",
      descripcion: "Monitoreo continuo en tiempo real para activaciones PoE, validación de Direcciones MAC y auditoría de hardware.",
      link: "http://monitoreo.somosinternet.net/zabbix/index.php"
    }
  ];

  const modalOverlay = document.getElementById('modalBubble');
  const modalImage = document.getElementById('modalImage');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalLink = document.getElementById('modalLink');
  const modalCloseBtn = document.querySelector('.modal-close');

  window.abrirModal = function(index) {
    const data = datosBurbujas[index];
    if (!data || !modalOverlay) return;

    if (modalImage) modalImage.style.backgroundImage = `url('${data.imagen}')`;
    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalTitle) modalTitle.textContent = data.titulo;
    if (modalDesc) modalDesc.textContent = data.descripcion;

    if (modalLink) {
      if (data.link && data.link.trim() !== "") {
        modalLink.href = data.link;
        modalLink.style.display = "inline-flex";
        modalLink.target = "_blank";
        modalLink.rel = "noopener noreferrer";
      } else {
        modalLink.style.display = "none";
      }
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = "hidden"; // Evita scroll de fondo
    if (modalCloseBtn) modalCloseBtn.focus();
  };

  window.cerrarModal = function() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = "";
  };

  window.cerrarModalAfuera = function(event) {
    if (event.target === modalOverlay) {
      window.cerrarModal();
    }
  };

  // Event listener para botón cerrar
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', window.cerrarModal);
  }

  // Cerrar modal con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      window.cerrarModal();
    }
  });

  // Asignar listeners a las burbujas directamente
  document.querySelectorAll('.burbuja').forEach((burbuja, idx) => {
    burbuja.setAttribute('role', 'button');
    burbuja.setAttribute('tabindex', '0');
    burbuja.setAttribute('aria-label', `Abrir información de ${datosBurbujas[idx]?.titulo || 'burbuja'}`);
    
    burbuja.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.abrirModal(idx);
      }
    });
  });
});
