/* Base & tokens */
*{box-sizing:border-box}
html{scroll-behavior:smooth}
:root{
--bg:#0f1115; /* fond très sombre */
--panel:#1f2937; /* gris foncé */
--text:#e5e7eb; /* texte clair */
--muted:#9aa3b2; /* texte secondaire */
--brand:#f97316; /* ORANGE DSE */
--ring: rgba(249,115,22,.35);
}
body{margin:0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; background:var(--bg); color:var(--text); line-height:1.6}
img{max-width:100%; display:block}
a{color:var(--brand); text-decoration:none}
a:hover{text-decoration:underline}
h1,h2,h3,h4{line-height:1.2; margin:0 0 .6em}

/* Layout */
.container{max-width:1100px; margin:0 auto; padding:0 20px}
.section{padding:64px 0}
.section.alt{background:rgba(255,255,255,.03)}
.grid{display:grid; gap:20px}
.grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}
@media (max-width:860px){.grid.two{grid-template-columns:1fr}}
.cards{grid-template-columns:repeat(2,minmax(0,1fr))}
@media (max-width:900px){.cards{grid-template-columns:1fr}}

/* Header */
.site-header{position:sticky; top:0; z-index:50; background:rgba(15,17,21,.8); backdrop-filter:blur(8px); border-bottom:1px solid rgba(255,255,255,.06)}
.header-inner{display:flex; align-items:center; justify-content:space-between; min-height:64px}
.brand{display:flex; align-items:center; gap:12px; color:#fff}
.brand-logo{height:32px; width:auto}
.brand-text{color:#cbd5e1; font-size:13px; letter-spacing:.08em}
.site-nav{display:flex; gap:18px; align-items:center}
.site-nav a{color:#e5e7eb}
.btn.small{padding:6px 10px; border-radius:8px; border:1px solid rgba(255,255,255,.2)}
.nav-toggle{display:none; background:transparent; border:0; cursor:pointer}
.nav-toggle span{display:block; width:22px; height:2px; background:#e5e7eb; margin:4px 0}
@media (max-width:860px){
.nav-toggle{display:block}
.site-nav{position:fixed; inset:64px 0 auto 0; background:#0f1115; transform:translateY(-110%); transition:.3s; padding:16px 20px; flex-direction:column; align-items:flex-start; box-shadow:0 10px 30px rgba(0,0,0,.3)}
.site-nav.open{transform:translateY(0)}
}

/* Buttons */
.btn{display:inline-block; padding:12px 18px; border-radius:12px; border:1px solid rgba(255,255,255,.15); color:#e5e7eb; background:rgba(255,255,255,.03); transition:.2s}
.btn.primary{background:var(--brand); color:#1a1209; border-color:transparent; font-weight:700}
.btn:hover{transform:translateY(-1px)}
.cta-link{color:#e5e7eb}

/* Hero */
.hero{border-bottom:1px solid rgba(255,255,255,.06); background:
linear-gradient(180deg, rgba(249,115,22,.08), transparent 40%),
radial-gradient(800px 400px at 90% -10%, rgba(249,115,22,.18), transparent 60%)
}
.hero-inner{display:grid; grid-template-columns:1.15fr .85fr; gap:28px; align-items:center; padding:64px 0}
.hero h1{font-size: clamp(28px, 4vw + 8px, 48px)}
.hero h1 span{color:var(--brand)}
.hero p{color:#cbd5e1}
.hero-media img{border-radius:16px; border:1px solid rgba(255,255,255,.06); background:#111}
.hero-check{margin-top:10px}

/* Badges / chips / checklist */
.check{list-style:none; padding:0; margin:16px 0 0}
.check li{padding-left:28px; position:relative; margin:8px 0}
.check li::before{content:"✓"; position:absolute; left:0; top:0; color:var(--brand)}
.chips{display:flex; gap:10px; flex-wrap:wrap}
.chip{display:inline-block; padding:10px 12px; border-radius:999px; background:var(--panel); border:1px solid rgba(255,255,255,.08)}

/* Cards */
.card{background:var(--panel); border:1px solid rgba(255,255,255,.06); border-radius:16px; overflow:hidden}
.card-body{padding:18px}
.card h3{margin:0 0 .35em}
.link{display:inline-block}

/* Media card */
.media-card{border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,.06)}

/* CTA devis */
.cta-devis{border-top:1px solid rgba(255,255,255,.06)}
.center{text-align:center}
.inline-form{display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-top:14px}
.inline-form input{padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.15); background:rgba(255,255,255,.04); color:#fff; outline:none}
.inline-form input:focus{box-shadow:0 0 0 4px var(--ring)}

/* Footer */
.site-footer{padding:32px 0; border-top:1px solid rgba(255,255,255,.06); background:rgba(0,0,0,.25)}
.footer-grid{display:grid; gap:20px; grid-template-columns:2fr 1fr 1fr 1fr}
.footer-grid h4{margin-bottom:10px}
.footer-grid ul{list-style:none; padding:0; margin:0}
.footer-grid li{margin:6px 0}
@media (max-width:900px){.footer-grid{grid-template-columns:1fr 1fr}}
@media (max-width:560px){.footer-grid{grid-template-columns:1fr}}
.muted{color:var(--muted)}
