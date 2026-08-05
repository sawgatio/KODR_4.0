const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("content");


const tabContent = {
    about: `
        <h3>About</h3>
        <p>Welcome! This is the About section.</p>
    `,
    projects: `
        <h3>Projects</h3>
        <p>Here are some of my projects.</p>
    `,
    contact: `
        <h3>Contact</h3>
        <p>Email: example@email.com</p>
    `
};


function showTab(tabName) {
    content.innerHTML = tabContent[tabName];

    tabs.forEach(tab => tab.classList.remove("active"));

    document
        .querySelector(`[data-tab="${tabName}"]`)
        .classList.add("active");
}


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        showTab(tab.dataset.tab);
    });
});


showTab("about");
