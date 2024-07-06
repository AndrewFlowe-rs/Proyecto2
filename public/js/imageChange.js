document.getElementById('avatar').addEventListener('change', function() {
    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var image = document.createElement('img');
        image.src = e.target.result;
        image.classList.add('preview-image');

        var previewDiv = document.getElementById('imagenPreview');
        previewDiv.innerHTML = '';
        previewDiv.appendChild(image);
    };

    reader.readAsDataURL(file);
});