document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const descriptionInput = document.getElementById('description');
    const categoryInput = document.getElementById('category');
    const imageInput = document.getElementById('image');

    const nameError = document.getElementById('nameError');
    const priceError = document.getElementById('priceError');
    const descriptionError = document.getElementById('descriptionError');
    const categoryError = document.getElementById('categoryError');
    const imageError = document.getElementById('imageError');

    nameInput.addEventListener('keyup', function() {
        const name = nameInput.value.trim();
        nameError.innerText = '';
        nameInput.classList.remove('input-error', 'input-success');
        if (!name) {
            nameError.innerText = 'El título es requerido.';
            nameInput.classList.add('input-error');
        } else if (name.length < 5) {
            nameError.innerText = 'El título debe tener al menos 5 caracteres.';
            nameInput.classList.add('input-error');
        } else {
            nameInput.classList.add('input-success');
        }
    });

    priceInput.addEventListener('keyup', function() {
        const price = priceInput.value.trim();
        priceError.innerText = '';
        priceInput.classList.remove('input-error', 'input-success');
        if (!price) {
            priceError.innerText = 'El precio es requerido.';
            priceInput.classList.add('input-error');
        } else if (isNaN(price) || parseFloat(price) <= 0) {
            priceError.innerText = 'Ingrese un precio válido.';
            priceInput.classList.add('input-error');
        } else {
            priceInput.classList.add('input-success');
        }
    });

    descriptionInput.addEventListener('keyup', function() {
        const description = descriptionInput.value.trim();
        descriptionError.innerText = '';
        descriptionInput.classList.remove('input-error', 'input-success');
        if (!description) {
            descriptionError.innerText = 'La descripción es requerida.';
            descriptionInput.classList.add('input-error');
        } else if (description.length < 20) {
            descriptionError.innerText = 'La descripción debe tener al menos 20 caracteres.';
            descriptionInput.classList.add('input-error');
        } else {
            descriptionInput.classList.add('input-success');
        }
    });

    categoryInput.addEventListener('change', function() {
        const category = categoryInput.value.trim();
        categoryError.innerText = '';
        categoryInput.classList.remove('input-error', 'input-success');
        if (!category) {
            categoryError.innerText = 'La categoría es requerida.';
            categoryInput.classList.add('input-error');
        } else {
            categoryInput.classList.add('input-success');
        }
    });

    imageInput.addEventListener('change', function() {
        const image = imageInput.files[0];
        imageError.innerText = '';
        imageInput.classList.remove('input-error', 'input-success');
        if (!image) {
            imageError.innerText = 'La imagen es requerida.';
            imageInput.classList.add('input-error');
        } else {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!validImageTypes.includes(image.type)) {
                imageError.innerText = 'La imagen debe ser un archivo válido (jpg, jpeg, png, gif, webp).';
                imageInput.classList.add('input-error');
            } else {
                imageInput.classList.add('input-success');
            }
        }
    });

    document.getElementById('productForm').addEventListener('submit', function(event) {
        let isValid = true;

        //  Nombre
        const name = nameInput.value.trim();
        nameError.innerText = '';
        nameInput.classList.remove('input-error', 'input-success');
        if (!name) {
            isValid = false;
            nameError.innerText = 'El título es requerido.';
            nameInput.classList.add('input-error');
        } else if (name.length < 5) {
            isValid = false;
            nameError.innerText = 'El título debe tener al menos 5 caracteres.';
            nameInput.classList.add('input-error');
        } else {
            nameInput.classList.add('input-success');
        }

        //  Precio
        const price = priceInput.value.trim();
        priceError.innerText = '';
        priceInput.classList.remove('input-error', 'input-success');
        if (!price) {
            isValid = false;
            priceError.innerText = 'El precio es requerido.';
            priceInput.classList.add('input-error');
        } else if (isNaN(price) || parseFloat(price) <= 0) {
            isValid = false;
            priceError.innerText = 'Ingrese un precio válido.';
            priceInput.classList.add('input-error');
        } else {
            priceInput.classList.add('input-success');
        }

        //  Descripción
        const description = descriptionInput.value.trim();
        descriptionError.innerText = '';
        descriptionInput.classList.remove('input-error', 'input-success');
        if (!description) {
            isValid = false;
            descriptionError.innerText = 'La descripción es requerida.';
            descriptionInput.classList.add('input-error');
        } else if (description.length < 20) {
            isValid = false;
            descriptionError.innerText = 'La descripción debe tener al menos 20 caracteres.';
            descriptionInput.classList.add('input-error');
        } else {
            descriptionInput.classList.add('input-success');
        }

        //  Categoría
        const category = categoryInput.value;
        categoryError.innerText = '';
        categoryInput.classList.remove('input-error', 'input-success');
        if (!category) {
            isValid = false;
            categoryError.innerText = 'La categoría es requerida.';
            categoryInput.classList.add('input-error');
        } else {
            categoryInput.classList.add('input-success');
        }

        //  Imagen
        const image = imageInput.files[0];
        imageError.innerText = '';
        imageInput.classList.remove('input-error', 'input-success');
        if (!image) {
            isValid = false;
            imageError.innerText = 'La imagen es requerida.';
            imageInput.classList.add('input-error');
        } else {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!validImageTypes.includes(image.type)) {
                isValid = false;
                imageError.innerText = 'La imagen debe ser un archivo válido (jpg, jpeg, png, gif, webp).';
                imageInput.classList.add('input-error');
            } else {
                imageInput.classList.add('input-success');
            }
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
