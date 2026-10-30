#!/usr/bin/env python3
"""Assemble the static site from src/ and services.js.
Run: python3 build.py   (writes index.html, the hub pages, and services/<slug>.html)"""
import json, re, pathlib, html

ROOT = pathlib.Path(__file__).parent
SITE = "https://web.soichirosaimon.com/brothers-plumbing/"
PHONE_TEL = "tel:+16472472230"

src = (ROOT / "services.js").read_text()
i = src.index("const SERVICES"); i = src.index("=", i) + 1
DATA = json.loads(src[i:].rstrip().rstrip(";"))
SERVICES = DATA["services"]; GROUPS = DATA["groups"]; BY = {s["slug"]: s for s in SERVICES}

def part(name): return (ROOT / "src/partials" / name).read_text()
def esc(s): return html.escape(s, quote=True)

def page_href(s, root): return f'{root}services/{s["slug"]}.html'

def card(s, root):
    if s.get("photo"):
        media = f'<img src="{root}photos/{s["photo"]}" alt="{esc(s.get("photoAlt",""))}" loading="lazy" width="800" height="500">'
    else:
        media = f'<div class="plate" aria-hidden="true">{esc(s["eyebrow"])}</div>'
    return (f'<a class="card reveal" href="{page_href(s, root)}">'
            f'<div class="card-media">{media}</div>'
            f'<div class="card-body"><span class="eyebrow">{esc(s["eyebrow"])}</span>'
            f'<h4>{esc(s["name"])}</h4><p>{esc(s["short"])}</p>'
            f'<span class="textlink">Details</span></div></a>')

def cards_for(group, root, limit=None):
    items = [s for s in SERVICES if s["group"] == group]
    if limit: items = items[:limit]
    return '<div class="cards">' + "".join(card(s, root) for s in items) + "</div>"

def symptoms(root):
    return '<div class="chips">' + "".join(
        f'<a class="chip" href="{root}{sy["to"]}" data-symptom="{esc(sy["label"])}">{esc(sy["label"])}</a>'
        for sy in DATA["symptoms"]) + "</div>"

def slip(r):
    stars = "★" * r["stars"]
    tech = f'<b>by {esc(r["tech"])}</b>' if r.get("tech") else '<b>Brothers crew</b>'
    return (f'<article class="slip reveal"><div class="slip-meta"><span>{esc(r["job"])}</span>{tech}</div>'
            f'<p>“{esc(r["text"])}”</p><cite><span>{esc(r["name"])} · {esc(r["when"])}</span><span class="stars" aria-label="{r["stars"]} stars">{stars}</span></cite></article>')

def reviews(n, slugs=None):
    rs = DATA["reviews"][:n]
    return '<div class="slips">' + "".join(slip(r) for r in rs) + "</div>"

def footer_links(group, root):
    return "".join(f'<li><a href="{page_href(s, root)}">{esc(s["name"])}</a></li>' for s in SERVICES if s["group"] == group)

def area_groups(root):
    out = []
    for g, towns in DATA["areas"].items():
        lis = "".join(f'<li{" class=\"home\"" if t == "The Junction" else ""}>{esc(t)}</li>' for t in towns)
        out.append(f'<div class="area-group"><h3>{esc(g)}</h3><ul>{lis}</ul></div>')
    return '<div class="area-groups">' + "".join(out) + "</div>"

def area_served():
    towns = [t for ts in DATA["areas"].values() for t in ts]
    return ", ".join(json.dumps({"@type": "City", "name": t}) for t in towns)

def service_options():
    return "".join(f'<option value="{esc(s["name"])}">{esc(s["name"])}</option>' for s in SERVICES)

def render(body, meta, root, cur=""):
    page = part("head.html") + part("header.html") + body + part("footer.html")
    rep = {
        "{{title}}": esc(meta["title"]), "{{desc}}": esc(meta["desc"]),
        "{{canonical}}": SITE + meta["path"], "{{root}}": root,
        "{{body_class}}": meta.get("body_class", ""), "{{schema}}": meta.get("schema", ""),
        "{{areaServed}}": area_served(),
        "{{footer:plumbing}}": footer_links("plumbing", root), "{{footer:drains}}": footer_links("drains", root),
        "{{symptoms}}": symptoms(root), "{{areas}}": area_groups(root), "{{service_options}}": service_options(),
    }
    for k, v in rep.items(): page = page.replace(k, v)
    page = re.sub(r"\{\{cur:(\w+)\}\}", lambda m: 'aria-current="page"' if m.group(1) == cur else "", page)
    page = re.sub(r"\{\{services:(\w+)(?::(\d+))?\}\}", lambda m: cards_for(m.group(1), root, int(m.group(2)) if m.group(2) else None), page)
    page = re.sub(r"\{\{reviews:(\d+)\}\}", lambda m: reviews(int(m.group(1))), page)
    return page

def read_page(name):
    txt = (ROOT / "src/pages" / name).read_text()
    m = re.match(r"\s*<!--meta(.*?)-->\s*", txt, re.S)
    meta = json.loads(m.group(1)); body = txt[m.end():]
    return meta, body

# Top-level pages
for f in sorted((ROOT / "src/pages").glob("*.html")):
    meta, body = read_page(f.name)
    out = render(body, meta, "", meta.get("cur", ""))
    (ROOT / meta["path"].replace("", "") or "index.html").write_text(out) if False else (ROOT / (meta["path"] or "index.html")).write_text(out)
    print("wrote", meta["path"] or "index.html")

# Service pages
tpl = (ROOT / "src/service-template.html").read_text()
for s in SERVICES:
    root = "../"
    g = GROUPS[s["group"]]
    photo = (f'<figure class="page-photo"><img src="{root}photos/{s["photo"]}" alt="{esc(s.get("photoAlt",""))}" width="1200" height="900"></figure>'
             if s.get("photo") else
             f'<div class="placeholder page-photo"><b>Photo slot</b>Real {esc(s["name"].lower())} job photo from the owner goes here</div>')
    included = "".join(f"<li>{esc(x)}</li>" for x in s["included"])
    faqs = "".join(f"<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in s["faqs"])
    rel = [BY[r] for r in s["related"] if r in BY]
    related = '<div class="cards">' + "".join(card(r, root) for r in rel) + "</div>"
    faq_schema = json.dumps({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in s["faqs"]]})
    svc_schema = json.dumps({"@context": "https://schema.org", "@type": "Service", "name": s["name"], "serviceType": s["name"],
        "provider": {"@id": SITE + "#business"}, "areaServed": "Toronto, ON", "url": SITE + f"services/{s['slug']}.html",
        "description": s["short"]})
    crumbs = json.dumps({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE},
        {"@type": "ListItem", "position": 2, "name": g["name"], "item": SITE + g["page"]},
        {"@type": "ListItem", "position": 3, "name": s["name"], "item": SITE + f"services/{s['slug']}.html"}]})
    body = tpl
    for k, v in {
        "{{name}}": esc(s["name"]), "{{eyebrow}}": esc(s["eyebrow"]), "{{short}}": esc(s["short"]),
        "{{intro}}": esc(s["intro"]), "{{how}}": esc(s["how"]), "{{expect}}": esc(s["expect"]),
        "{{included}}": included, "{{faqs}}": faqs, "{{related}}": related, "{{photo}}": photo,
        "{{group_name}}": esc(g["name"]), "{{group_page}}": root + g["page"], "{{issue}}": esc(s["name"]),
        "{{reviews2}}": '<div class="slips">' + "".join(slip(r) for r in DATA["reviews"][:2]) + "</div>",
    }.items(): body = body.replace(k, v)
    meta = {"title": f'{s["name"]} in Toronto | Brothers Plumbing', "desc": s["short"] + " Brothers Plumbing, Toronto's west-end plumber since 1969. Call or text 647-247-2230.",
            "path": f"services/{s['slug']}.html", "body_class": "page-service",
            "schema": f'<script type="application/ld+json">{faq_schema}</script>\n<script type="application/ld+json">{svc_schema}</script>\n<script type="application/ld+json">{crumbs}</script>'}
    (ROOT / "services" / f"{s['slug']}.html").write_text(render(body, meta, root, s["group"]))
print("wrote", len(SERVICES), "service pages")
