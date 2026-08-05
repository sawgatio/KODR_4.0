const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const message = document.getElementById("message");


imageInput.addEventListener("change", function(){

    const file = this.files[0];

    preview.innerHTML = "";
    message.textContent = "";


    if (!file) {
        return;
    }


    
    const validTypes = [
        "image/jpeg",
        "image/png"
    ];

    if (!validTypes.includes(file.type)) {

        message.textContent =
            "Only JPEG and PNG images are allowed.";

        message.className = "error";

        imageInput.value = "";

        return;
    }


  
    const maxSize = 2 * 1024 * 1024;

    if (file.size > maxSize) {

        message.textContent =
            "Image size must be less than 2MB.";

        message.className = "error";

        imageInput.value = "";

        return;
    }


    
    const imageURL = URL.createObjectURL(file);

    const img = document.createElement("img");

    img.src = imageURL;

    preview.appendChild(img);

});
