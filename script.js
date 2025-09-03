/* Reset rapide */
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
margin:0;
font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, "Segoe UI Emoji";
background:#0b1220; color:#e5e7eb; line-height:1.6;
}
img{max-width:100%; display:block}
a{color:#0ea5e9; text-decoration:none}
a:hover{text-decoration:underline}
h1,h2,h3,h4{line-height:1.2; margin:0 0 .6em}

/* Tokens */
:root{
--brand:#0ea5e9;
--brand2:#22d3ee;
--bg:#0b1220;
--panel:#0f172a;
--muted:#94a3b8;
--ring:rgba(34,211,238,.35);
}

/* Layout */
.container{max-width:1100px; margin:0 auto; padding:0 20px}
.section{padding:64px 0}
.section.alt{background:rgba(255,255,255,.03)}
.grid{display:grid; gap:20px}
.grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}
.grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}
.grid.four{grid-template-columns:repeat(4,minmax(0,1fr))}
@media (max-width:1000px){.grid.three{grid-template-columns:repeat(2,1fr)} .grid.four{grid-template-columns:repeat(2,1fr)}}
@media (max-width:760px){.grid.two,.grid.three,.grid.four{grid-template-columns:1fr}}

/* Header */
.site-header{
position:sticky; top:0; z-index:50;
background:rgba(11,18,32,.7); backdrop-filter:blur(8px);
border-bottom:1px solid rgba(255,255,255,.06);
}
.header-inner{display:flex; align-items:center; justify-content:space-between; min-height:64px}
.brand{display:flex; align-items:center; gap:10px; color:#fff}
.logo{width:32px; height:32px; border-radius:8px; background:linear-gradient(135deg,var(--brand),var(--brand2)); display:grid; place-items:center; font-weight:700; color:#00131a}
.brand-text{font-weight:700}
.site-nav{display:flex; gap:18px; align-items:center}
.site-nav a{color:#e5e7eb}
.btn.small{padding:6px 10px; border-radius:8px; border:1px solid rgba(255,255,255,.2)}
.nav-toggle{display:none; background:transparent; border:0; cursor:pointer}
.nav-toggle span{display:block; width:22px; height:2px; background:#e5e7eb; margin:4px 0}
@media (max-width:860px){
.nav-toggle{display:block}
.site-nav{position:fixed; inset:64px 0 auto 0; background:#0b1220; transform:translateY(-110%); transition:.3s; padding:16px 20px; flex-direction:column; align-items:flex-start; box-shadow:0 10px 30px rgba(0,0,0,.3)}
.site-nav.open{transform:translateY(0)}
}

/* Buttons */
.btn{
display:inline-block; padding:12px 18px; border-radius:12px;
border:1px solid rgba(255,255,255,.2); color:#e5e7eb; background:rgba(255,255,255,.03);
transition:.2s;
}
.btn.primary{background:linear-gradient(90deg,var(--brand),var(--brand2)); color:#00131a; border-color:transparent; font-weight:600}
.btn:hover{transform:translateY(-1px)}

/* Hero */
.hero{
padding:96px 0 72px;
background:
radial-gradient(800px 400px at 10% -10%, rgba(14,165,233,.35), transparent 60%),
radial-gradient(800px 400px at 90% 0%, rgba(34,211,238,.20), transparent 60%);
border-bottom:1px solid rgba(255,255,255,.06);
}
.hero-inner{max-width:900px}
.hero h1{font-size: clamp(28px, 4vw + 8px, 48px)}
.hero h1 span{color:var(--brand)}
.hero p{color:var(--muted); margin-bottom:18px}
.cta{display:flex; gap:12px; flex-wrap:wrap}

/* Cards */
.cards{grid-template-columns:repeat(2,minmax(0,1fr))}
.card{background:#0f172a; border:1px solid rgba(255,255,255,.06); border-radius:16px; overflow:hidden}
.card-body{padding:18px}
.card h3{margin:0 0 .4em}
.link{display:inline-block}

/* Highlights badges */
.highlights .badge{
background:#0f172a; border:1px solid rgba(255,255,255,.06); border-radius:12px; padding:14px 16px; text-align:center
}
.highlights strong{display:block; font-size:18px}
.highlights span{color:var(--muted)}

/* Logos */
.logos{display:grid; grid-template-columns:repeat(5,1fr); gap:20px; align-items:center}
.logos img{filter:grayscale(1); opacity:.8; background:#0f172a; border:1px solid rgba(255,255,255,.06); border-radius:10px; padding:14px}
@media (max-width:900px){.logos{grid-template-columns:repeat(3,1fr)}}
@media (max-width:600px){.logos{grid-template-columns:repeat(2,1fr)}}

/* Check list */
.check{list-style:none; padding:0; margin:16px 0 0}
.check li{padding-left:28px; position:relative; margin:8px 0}
.check li::before{content:"✓"; position:absolute; left:0; top:0; color:var(--brand)}

/* Media card */
.media-card{border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,.06)}

/* Certifications */
.certs img{width:100%; height:auto; background:#0f172a; border:1px solid rgba(255,255,255,.06); border-radius:10px; padding:10px}

/* Stats */
.stats .stat{
background:#0f172a; border:1px solid rgba(255,255,255,.06); border-radius:16px; padding:18px; text-align:center
}
.stats .count{font-size:36px; font-weight:800; display:block}
.stats small{color:var(--muted)}

/* List services */
.list{padding-left:18px}
.list li{margin:8px 0}

/* Chips secteurs */
.chips{display:flex; gap:10px; flex-wrap:wrap}
.chip{display:inline-block; padding:10px 12px; border-radius:999px; background:#0f172a; border:1px solid rgba(255,255,255,.08)}

/* CTA devis */
.cta-devis{border-top:1px solid rgba(255,255,255,.06)}
.center{text-align:center}
.inline-form{display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-top:14px}
.inline-form input{padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.15); background:rgba(255,255,255,.04); color:#fff; outline:none}
.inline-form input:focus{box-shadow:0 0 0 4px var(--ring)}

/* Footer */
.site-footer{padding:32px 0; border-top:1px solid rgba(255,255,255,.06); background:rgba(0,0,0,.2)}
.footer-grid{display:grid; gap:20px; grid-template-columns:2fr 1fr 1fr 1fr}
.footer-grid h4{margin-bottom:10px}
.footer-grid ul{list-style:none; padding:0; margin:0}
.footer-grid li{margin:6px 0}
@media (max-width:900px){.footer-grid{grid-template-columns:1fr 1fr}}
@media (max-width:560px){.footer-grid{grid-template-columns:1fr}}
