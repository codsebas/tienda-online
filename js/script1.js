const url = 'https://backservicetest-g8emcvdff0fqe2b8.canadacentral-01.azurewebsites.net/api/producto';
const productosContainer = document.getElementById('productosContainer');

fetch(url)
    .then(response => response.json())
    .then(productos => {
        productos.forEach(producto => {
            if (!producto.nombre == "" || producto.id == 0 || producto.id == null) {
                const col = document.createElement("div");
                col.className = "col-12 col-md-4";
                let precioHTML = "";

                if (producto.enOferta && producto.precioOferta !== null) {
                    precioHTML = `
            <span class="text-danger">$${parseFloat(producto.precioOferta).toFixed(2)}</span>
            <small class="text-muted text-decoration-line-through">$${parseFloat(producto.precio).toFixed(2)}</small>`

                } else {
                    precioHTML = `$${parseFloat(producto.precio).toFixed(2)}`;
                }

                col.innerHTML = `
        <article class="card product-card h-100">
          <img src="${producto.imagen}" class="card-img-top product-image" alt="${producto.nombre}"
            loading="lazy">

          <div class="card-body d-flex flex-column">
            <span class="product-category">${producto.categoriaNombre}</span>
            <h3 class="card-title h5 mt-3">${producto.nombre}</h3>
            <p class="card-text text-secondary">
              ${producto.descripcion}
            </p>
            <p class="fw-bold">${precioHTML}</p>
            <button type="button" class="btn btn-primary w-100 mt-auto">
              <i class="bi bi-cart-plus me-1" aria-hidden="true"></i>
              Agregar al carrito
            </button>
          </div>
        </article>
        `;
                productosContainer.appendChild(col);
            }
        })
            .catch(error => {
                console.error("Error al cargar productos:", error);
                productosContainer.innerHTML = '<div class="alert alert-danger">No se pudieron cargar los productos.</div>';
            });
    })