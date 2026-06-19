/* Logique commune à toutes les pages (accueil + pages détaillées).
   Le contenu (objet CONTENT) et les constantes restent définis dans chaque page. */
(function(){
  "use strict";
  const LANGS = ["el","en","fr"];
  const LS_KEY = "demodocos-lang";
  const ZOOM = { el:"Μεγέθυνση", en:"Enlarge", fr:"Agrandir" };

  function pickInitial(){
    try { const s = localStorage.getItem(LS_KEY); if(LANGS.includes(s)) return s; } catch(e){}
    const n = (navigator.language||"").slice(0,2).toLowerCase();
    if(LANGS.includes(n)) return n;
    return (typeof DEFAULT_LANG !== "undefined") ? DEFAULT_LANG : "en";
  }
  let lang = pickInitial();

  function render(){
    document.documentElement.lang = lang;
    if(typeof CONTENT !== "undefined"){
      if(CONTENT.doc_title && CONTENT.doc_title[lang]) document.title = CONTENT.doc_title[lang];
      document.querySelectorAll("[data-i18n]").forEach(el=>{
        const key = el.getAttribute("data-i18n");
        if(CONTENT[key] && CONTENT[key][lang] != null) el.textContent = CONTENT[key][lang];
      });
      document.querySelectorAll("[data-i18n-alt]").forEach(el=>{
        const key = el.getAttribute("data-i18n-alt");
        if(CONTENT[key] && CONTENT[key][lang] != null) el.setAttribute("alt", CONTENT[key][lang]);
      });
      const lbc = document.getElementById("lightbox-close");
      if(lbc && CONTENT.lightbox_close && CONTENT.lightbox_close[lang])
        lbc.setAttribute("aria-label", CONTENT.lightbox_close[lang]);
    }
    const zl = ZOOM[lang] || ZOOM.en;
    document.querySelectorAll("[data-zoom]").forEach(b=>{
      const img = b.querySelector("img");
      b.setAttribute("aria-label", zl + (img && img.alt ? " : " + img.alt : ""));
    });
    document.querySelectorAll(".langs button").forEach(b=>{
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
  }

  document.querySelectorAll(".langs button").forEach(b=>{
    b.addEventListener("click", ()=>{
      lang = b.dataset.lang;
      try { localStorage.setItem(LS_KEY, lang); } catch(e){}
      render();
    });
  });

  // Liens dynamiques (présents seulement sur certaines pages → on vérifie).
  function setLink(id, href, text){
    const el = document.getElementById(id);
    if(!el) return;
    if(href != null) el.setAttribute("href", href);
    if(text != null) el.textContent = text;
  }
  if(typeof INSTAGRAM_URL !== "undefined"){ setLink("insta", INSTAGRAM_URL); setLink("insta-foot", INSTAGRAM_URL); }
  if(typeof PHONE !== "undefined"){ setLink("phone-link", "tel:" + PHONE.replace(/\s/g, ""), PHONE); }
  if(typeof EMAIL !== "undefined"){ setLink("email-link", "mailto:" + EMAIL, EMAIL); }
  if(typeof MAPS_URL !== "undefined"){ setLink("map", MAPS_URL); }

  render();

  // Apparition au défilement.
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold:.12, rootMargin:"0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  // Lightbox (uniquement si la page en contient une).
  const lb = document.getElementById("lightbox");
  if(lb){
    const lbImg = document.getElementById("lightbox-img");
    const lbClose = document.getElementById("lightbox-close");
    let lastFocus = null;
    const open = (src, alt)=>{
      lbImg.src = src; lbImg.alt = alt || "";
      lastFocus = document.activeElement;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
      lbClose.focus();
    };
    const close = ()=>{
      lb.classList.remove("open");
      lbImg.removeAttribute("src");
      document.body.style.overflow = "";
      if(lastFocus) lastFocus.focus();
    };
    document.querySelectorAll("[data-zoom]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const img = btn.querySelector("img");
        if(img) open(img.currentSrc || img.src, img.alt);
      });
    });
    lbClose.addEventListener("click", close);
    lb.addEventListener("click", e=>{ if(e.target === lb) close(); });
    document.addEventListener("keydown", e=>{ if(e.key === "Escape" && lb.classList.contains("open")) close(); });
  }
})();
