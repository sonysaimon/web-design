# -*- coding: utf-8 -*-
from src.layout import *
from src.components import page_hero, cta_band, yt_card
from src.content import load as _load, render_text

TM = _load("team")

PATH = "/why-choose-us/our-team/"
TITLE = "Our Team Of Local Vancouver Dentists"
DESCRIPTION = "Meet the dentists, hygienists, assistants and front-desk team at Atlantis Dental Yaletown. Appointments available in 12 languages including Cantonese, Mandarin, Farsi, Punjabi, Spanish and Tagalog."
ACTIVE = "why"
OG_IMAGE = "/assets/img/team/" + TM["dentists"][0]["photo"]


def body():
    dentists = ""
    for d in TM["dentists"]:
        video = f'<div class="mt-125 maxw-380">{yt_card(d["video"], d["name"] + " – Atlantis Dental Centre")}</div>' if d.get("video") else ""
        dentists += f'''<article class="dentist reveal"><img src="/assets/img/team/{d["photo"]}" alt="{d["name"]}, {d["role"]}" width="500" height="500" loading="lazy"><div><p class="member__role mb-025">{d["role"]}</p><h3>{d["name"]}</h3>{render_text(d["bio"])}{video}</div></article>'''
    staff = "".join(
        f'<div class="member reveal"><img src="/assets/img/team/{m["photo"]}" alt="{m["name"]}, {m["role"]}" width="400" height="400" loading="lazy"><div class="member__body"><p class="member__role">{m["role"]}</p><h3>{m["name"]}</h3></div></div>'
        for m in TM["staff"]
    )
    langs = "".join(f"<li>{l}</li>" for l in TM["languages"])
    return f"""
{page_hero("Our Team Of Local Vancouver Dentists", "Experienced, caring professionals dedicated to your smile.", [("Why Us", "/why-choose-us/"), ("Our Team", "/why-choose-us/our-team/")], "Meet the Team")}
<section class="section"><div class="container">
  <div class="section__head reveal"><p class="eyebrow">Our Dentists</p><h2>General Dentists at Atlantis Dental Yaletown</h2></div>
  <div class="stack-15">{dentists}</div>
</div></section>
<section class="section section--soft"><div class="container">
  <div class="section__head reveal"><p class="eyebrow">Our Team</p><h2>Front desk, hygienists &amp; assistants</h2></div>
  <div class="team-grid">{staff}</div>
</div></section>
<section class="section anchor-offset" id="languages"><div class="container">
  <div class="split">
    <div class="reveal">
      <p class="eyebrow">Our Languages</p>
      <h2>Do you prefer to speak another language other than English?</h2>
      <p class="lead">{TM["languages_intro"]}</p>
      <ul class="lang-grid mt-125">{langs}</ul>
    </div>
    <div class="img-frame reveal" data-delay="1"><img src="/assets/img/brand/languages-offered.jpg" alt="Group of friends laughing together" width="600" height="400" loading="lazy"></div>
  </div>
  <p class="muted center mt-3 text-90">{TM["owner_note"]}</p>
</div></section>
{cta_band()}
"""
