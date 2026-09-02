document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var translations = {
    en: {
      tagline: "Casio modding & leather accessories. Coming soon.",
      formHelper: "We'll email you when it's ready.",
      notify: "Notify Me",
      email: "your@email.com"
    },
    es: {
      tagline: "Modificación de Casios y accesorios de cuero. Próximamente.",
      formHelper: "Te avisaremos cuando esté listo.",
      notify: "Avísame",
      email: "tu@email.com"
    },
    gl: {
      tagline: "Modificación de Casios e accesorios de coiro. Nun futuro.",
      formHelper: "Avisarémosche cando estea listo.",
      notify: "Avísame",
      email: "teu@email.com"
    }
  };

  var select = document.getElementById("lang-select");

  function applyLang(lang) {
    var dict = translations[lang] || translations.en;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (!dict.hasOwnProperty(key)) continue;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, dict[key]);
      } else {
        el.textContent = dict[key];
      }
    }
    document.documentElement.setAttribute("lang", lang);
  }

  function setLang(lang) {
    if (!translations.hasOwnProperty(lang)) lang = "en";
    if (select) select.value = lang;
    localStorage.setItem("lang", lang);
    applyLang(lang);
  }

  if (select) {
    select.addEventListener("change", function () {
      setLang(select.value);
    });
  }

  var saved = localStorage.getItem("lang");
  setLang(saved || "en");
});
