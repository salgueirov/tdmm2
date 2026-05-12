document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-luzu');
    const mensajeContenedor = document.getElementById('mensajeExito');

    if (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;

            mensajeContenedor.innerHTML = `
                <p><strong>¡Gracias ${nombre}!</strong> </p>
                <p> Ya llenaste correctamente el formulario. Te va a llegar un mail a <strong>${email}</strong> con la entrada.</p>
                <p>Te vemos en el festival aniversario!</p>
            `;

            formulario.style.display = 'none';
            mensajeContenedor.style.display = 'block';

            contenedorPrincipal.style.background = 'transparent';
            contenedorPrincipal.style.padding = '0';
            contenedorPrincipal.style.boxShadow = 'none';
        });
    }
});