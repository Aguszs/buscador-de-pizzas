document.addEventListener('DOMContentLoaded', () => {
  const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen: "./img/muzzarella.png",
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      imagen: "./img/cebolla.png",
    },
  
    {
      id: 3,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
      imagen: "./img/4quesos.png",
    },
  
    {
      id: 4,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      imagen: "./img/especial.png",
    },
  
    {
      id: 5,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
      imagen: "./img/anana.png",
    },
  ];

  const form = document.getElementById('search-form');
  const resultado = document.getElementById('result-container');

  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevenir el envío del formulario (evita recarga de la página)

      // Capturar el valor del input
      const input = document.getElementById('pizza-id');
      const pizzaId = parseInt(input.value.trim(), 10);

      // Validar el número ingresado
      if (isNaN(pizzaId) || pizzaId < 1 || pizzaId > 5) {
          renderError("Por favor, ingresa un número válido entre 1 y 5.");
          return;
      }

      // Buscar la pizza por ID
      const pizzaBuscada = pizzas.find(pizza => pizza.id === pizzaId);

      // Renderizar la pizza encontrada o el mensaje de error
      if (pizzaBuscada) {
          renderPizza(pizzaBuscada);
      } else {
          renderError("No existe una pizza con el ID ingresado.");
      }
  });

  function renderPizza(pizza) {
      resultado.innerHTML = `
          <div class="pizza-card">
              <h2>${pizza.nombre}</h2>
              <img src="${pizza.imagen}" alt="${pizza.nombre}">
              <p>Ingredientes: ${pizza.ingredientes.join(', ')}</p>
              <p>Precio: $${pizza.precio}</p>
          </div>
      `;
  }

  function renderError(mensaje) {
      resultado.innerHTML = `<p class="error">${mensaje}</p>`;
  }
});
