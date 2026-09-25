const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light Theme";
    } else {
        themeButton.textContent = "Dark Theme";
    }
});
