// Esperar a que cargue todo el DOM
document.addEventListener("DOMContentLoaded", () => {

  console.log("🚀 Página lista");

  // Título interactivo
  const titulo = document.querySelector("h1");

  titulo.addEventListener("click", () => {
    titulo.textContent = "¡Gracias por visitar!";
    titulo.style.color = "#0d6efd";
  });

  // Seleccionar tarjetas
  const tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach((tarjeta, index) => {

    // Efecto al pasar el mouse
    tarjeta.addEventListener("mouseenter", () => {
      tarjeta.style.transform = "scale(1.05)";
      tarjeta.style.transition = "0.3s";
      tarjeta.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    // Quitar efecto
    tarjeta.addEventListener("mouseleave", () => {
      tarjeta.style.transform = "scale(1)";
      tarjeta.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
    });

    // Click en tarjeta
    tarjeta.addEventListener("click", () => {
      tarjeta.style.backgroundColor = "#cff4fc";

      // Mensaje dinámico
      alert(`Hiciste clic en la tarjeta ${index + 1}`);
    });

  });

  // Menú interactivo
  const enlaces = document.querySelectorAll(".menu a");

  enlaces.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();

      alert(`Navegando a: ${enlace.textContent}`);
    });
  });

});
