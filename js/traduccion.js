// traduccion.js

let currentLang = localStorage.getItem("lang") || "es";

function loadLanguage(lang) {
    fetch(`../i18n/${lang}.json`)
        .then(res => res.json())
        .then(translations => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (translations[key]) el.textContent = translations[key];
            });
        });

    localStorage.setItem("lang", lang);
    currentLang = lang;
}

// Cambio al hacer clic en el menú
document.querySelectorAll(".idioma .dropdown-item").forEach(item => {
    item.addEventListener("click", e => {
        const lang = e.target.textContent.trim().toLowerCase();
        loadLanguage(lang);
        document.querySelector("#idioma").textContent = lang.toUpperCase();
    });
});

// Carga inicial
document.addEventListener("DOMContentLoaded", () => {
    loadLanguage(currentLang);
    document.querySelector("#idioma").textContent = currentLang.toUpperCase();
});
