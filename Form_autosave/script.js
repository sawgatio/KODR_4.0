const form = document.getElementById("profileForm");
const nameInput = document.getElementById("name");
const bioInput = document.getElementById("bio");

let timer;


window.addEventListener("load", () => {
    const savedData = JSON.parse(localStorage.getItem("formData"));

    if (savedData) {
        nameInput.value = savedData.name || "";
        bioInput.value = savedData.bio || "";
    }
});


form.addEventListener("input", () => {

    clearTimeout(timer);

    timer = setTimeout(() => {

        const formData = {
            name: nameInput.value,
            bio: bioInput.value
        };

        localStorage.setItem(
            "formData",
            JSON.stringify(formData)
        );

        console.log("Form auto-saved");
    }, 500);
});


form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Form Submitted!");

    localStorage.removeItem("formData");

    form.reset();
});
