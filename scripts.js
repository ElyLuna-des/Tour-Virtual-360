const kulaViewer = document.getElementById('kula-viewer');
const videoPlayer = document.getElementById('video-player');

function loadKuula(url) {
  const videoViewer = document.getElementById("videoViewer");
  const kuulaViewer = document.getElementById("kuulaViewer");

  // Pausar el video SOLO al hacer clic en una imagen
  videoViewer.pause();

  // Ocultar el video y mostrar el visor de Kuula
  videoViewer.style.display = "none";
  kuulaViewer.style.display = "block";
  kuulaViewer.src = url;
}

function showVideo(videoPath) {
  kulaViewer.style.display = 'none';
  videoPlayer.style.display = 'block';
  videoPlayer.src = videoPath;
  videoPlayer.play();
}

function regresarAlContenedorPrincipal() {
  const videoViewer = document.getElementById("videoViewer");
  const kuulaViewer = document.getElementById("kuulaViewer");
  const viewerContainer = document.getElementById("viewer");

  // Ocultar el visor de Kuula
  kuulaViewer.style.display = "none";

  // Mostrar el video y reiniciarlo
  videoViewer.style.display = "block";
  videoViewer.currentTime = 0;  // Reiniciar desde el inicio
  videoViewer.muted = false;    // Activar el audio
  videoViewer.play();           // Reproducir el video automáticamente

  // Desplazar la vista al contenedor del video
  viewerContainer.scrollIntoView({ behavior: "smooth" });
}
 // Aseguramos que las imágenes se carguen correctamente al cambiar el tamaño de la ventana
window.addEventListener('resize', adjustCarouselImages);

function adjustCarouselImages() {
const images = document.querySelectorAll('.carousel img');
images.forEach((image) => {
if (window.innerWidth < 768) {
  image.style.width = '100px';
  image.style.height = '70px';
} else {
  image.style.width = '150px';
  image.style.height = '100px';
}
});
}
document.addEventListener("DOMContentLoaded", function() {
  const videoViewer = document.getElementById("videoViewer");
  const kuulaViewer = document.getElementById("kuulaViewer");
  const viewerContainer = document.getElementById("viewer");
  const carouselItems = document.querySelectorAll(".carousel-item img");
  let isKuulaOpen = false;

  // Mostrar video inicial
  videoViewer.style.display = "block";
  videoViewer.play();

  // Función para cargar Kuula en el iframe
  window.loadKula = function(url) {
      isKuulaOpen = true;
      videoViewer.pause(); // Detiene el video
      videoViewer.style.display = "none"; // Oculta el video
      kuulaViewer.style.display = "block"; // Muestra el iframe
      kuulaViewer.src = url; // Carga la URL de Kuula
  };

  // Detener el video al pasar el mouse por el carrusel
  document.querySelector(".carousel").addEventListener("mouseenter", function() {
      videoViewer.pause();
  });

  // Reproducir el video solo si no hay imágenes de Kuula abiertas
  document.querySelector(".carousel").addEventListener("mouseleave", function() {
      if (!isKuulaOpen) {
          videoViewer.play();
      }
  });

 
  // Asegurar que las imágenes del carrusel se ajusten bien en diferentes tamaños de pantalla
  function adjustCarouselImages() {
      const images = document.querySelectorAll('.carousel img');
      images.forEach((image) => {
          if (window.innerWidth < 768) {
              image.style.width = '100px';
              image.style.height = '70px';
          } else {
              image.style.width = '150px';
              image.style.height = '100px';
          }
      });
  }

  window.addEventListener('resize', adjustCarouselImages);
  adjustCarouselImages(); // Ajustar imágenes al cargar la página
});