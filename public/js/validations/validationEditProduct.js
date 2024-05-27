document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('editProductForm').addEventListener('submit', function(event) {
        let isValid = true;

        // Nombre
        const title = document.getElementById('title').value.trim();
        const titleError = document.getElementById('titleError');
        titleError.innerText = '';
        if (!title) {
            isValid = false;
            titleError.innerText = 'El nombre es requerido.';
        } else if (title.length < 5) {
            isValid = false;
            titleError.innerText = 'El nombre debe tener al menos 5 caracteres.';
        }

        // Precio
        const price = document.getElementById('price').value.trim();
        const priceError = document.getElementById('priceError');
        priceError.innerText = '';
        if (!price) {
            isValid = false;
            priceError.innerText = 'El precio es requerido.';
        } else if (isNaN(price) || parseFloat(price) <= 0) {
            isValid = false;
            priceError.innerText = 'Ingrese un precio válido.';
        }

        // Descripción
        const description = document.getElementById('description').value.trim();
        const descriptionError = document.getElementById('descriptionError');
        descriptionError.innerText = '';
        if (!description) {
            isValid = false;
            descriptionError.innerText = 'La descripción es requerida.';
        } else if (description.length < 20) {
            isValid = false;
            descriptionError.innerText = 'La descripción debe tener al menos 20 caracteres.';
        }

        // Categoría
        const category = document.getElementById('category').value;
        const categoryError = document.getElementById('categoryError');
        categoryError.innerText = '';
        if (!category) {
            isValid = false;
            categoryError.innerText = 'La categoría es requerida.';
        }

        // Imagen
        const image = document.getElementById('image').files[0];
        const imageError = document.getElementById('imageError');
        imageError.innerText = '';
        if (image) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!validImageTypes.includes(image.type)) {
                isValid = false;
                imageError.innerText = 'La imagen debe ser un archivo válido (jpg, jpeg, png, gif, webp).';
            }
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});