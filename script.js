// EFECTO AL CARGAR

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});

// EFECTO EN TARJETAS

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const x = e.offsetX;
    const y = e.offsetY;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(0,255,238,0.3),
      #072334)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background = "#072334";

  });

});