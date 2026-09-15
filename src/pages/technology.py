# -*- coding: utf-8 -*-
from src.layout import *
from src.components import page_hero, cta_band, yt_card, hours_html
from src.content import load as _load, render_text

T = _load("technology")


def aside(current):
    links = [("Our Technology", "/our-technology/")]
    links += [("iTero Scanner" if it.get("anchor") == "itero" else it["heading"], f"/our-technology/#{it['anchor']}") for it in T["items"] if it.get("anchor")]
    links += [("VELscope", "/our-technology/velscope-oral-cancer-screening/"), ("Invisalign", "/invisalign/")]
    li = "".join(f'<li><a href="{h}"{" aria-current=\"page\"" if h == current else ""}>{l}{icon("chevron-right")}</a></li>' for l, h in links)
    return f"""<aside class="aside">
  <div class="card"><h2 class="aside__h">Technology</h2><ul class="aside__links">{li}</ul></div>
  <div class="card card--navy"><h2 class="aside__h">Request An Appointment</h2><p>Call <a href="tel:{PHONE_TEL}" class="white-bold">{PHONE}</a> or book online.</p><a class="btn btn--accent btn--block" href="/contact-us/book-now/">{icon("calendar")}Book Now</a></div>
  <div class="card"><h2 class="aside__h">Our Hours</h2>{hours_html()}</div>
</aside>"""


def item_html(it):
    anchor = f' id="{it["anchor"]}"' if it.get("anchor") else ""
    tag = f' <span class="tag">{it["tag"]}</span>' if it.get("tag") else ""
    logo = f'<img src="{it["logo"]}" alt="{it.get("logo_alt", "")}" width="200" height="80" loading="lazy" class="h-64 mb-1">' if it.get("logo") else ""
    text = render_text(it["text"])
    if it.get("side_image"):
        inner = f'<div class="split items-start"><div>{text}</div><img src="{it["side_image"]}" alt="{it.get("side_image_alt", "")}" width="400" height="300" loading="lazy" class="rounded"></div>'
    else:
        inner = text
    image = f'<div class="img-frame mt-1 ar-21-9"><img src="{it["image"]}" alt="{it.get("image_alt", "")}" width="1600" height="686" loading="lazy" class="ar-21-9"></div>' if it.get("image") else ""
    return f'<article class="tech__item reveal anchor-offset"{anchor}><div class="tech__icon">{icon(it.get("icon", "scan"))}</div><div><h2>{it["heading"]}{tag}</h2>{logo}{inner}{image}</div></article>'


def technology():
    items = "".join(item_html(it) for it in T["items"])
    body = f"""
{page_hero(T["title"], T["lead"], [("Technology", "/our-technology/")], "Our Technology")}
<section class="section"><div class="container with-aside">
  <div class="tech">{items}</div>
  {aside("/our-technology/")}
</div></section>
{cta_band()}
"""
    return page("/our-technology/", T["title"], T["seo_description"], body, active="technology", og_image="/assets/img/dentist-itero.jpg")


def velscope():
    body = f"""
{page_hero("Velscope Oral Cancer Screening At Your Vancouver Dental Clinic", "Fight Oral Cancer With A Simple Screening", [("Technology", "/our-technology/"), ("VELscope", "/our-technology/velscope-oral-cancer-screening/")], "VELscope")}
<section class="section"><div class="container with-aside">
  <div class="prose">
    <div class="stats reveal">
      <div class="stat"><strong>83%</strong><span>survival rate when oral cancer is detected early</span></div>
      <div class="stat"><strong>32%</strong><span>chance of survival with late detection</span></div>
      <div class="stat"><strong>5 min</strong><span>a VELscope exam typically takes, with no side effects</span></div>
    </div>
    <h2 class="reveal">Fight Oral Cancer With A Simple Screening</h2>
    <p class="reveal">Oral Cancer can be a potentially deadly type of cancer but if detected early, the survival rate for patients with oral cancer is 83%.</p>
    <p class="reveal">Late detection of oral cancer, however, gives patients only a 32% chance of survival.</p>
    <div class="split reveal items-start"><div>
      <h2 class="mt-0">What is the VELscope System?</h2>
      <p>The VELscope is a safe handheld device that shines a blue light and highlights abnormal oral tissue and lesions that could indicate oral cancer. VELscope doesn’t use any dyes or rinses and is completely non-invasive.</p>
    </div><img src="/assets/img/brand/velscope-1.jpg" alt="VELscope oral cancer screening device" width="400" height="300" loading="lazy" class="rounded mb-0 mt-0"></div>
    <h2 class="reveal">How Long Does an Exam Last?</h2>
    <p class="reveal">A VELscope exam will typically take no more than 5 minutes and has no side effects. In this short time, your oral health care professional can investigate any abnormal oral tissue and help prevent not just oral cancer but fungal infections and bacterial growth.</p>
    <h2 class="reveal">Book Your VELscope Appointment</h2>
    <p class="reveal">Early detection is Key in the fight against oral cancer so contact our friendly dental staff and book your VELscope appointment for your peace of mind and excellent oral health. Please feel free to ask us any questions about VELscope, <a href="/contact-us/">online</a> or on the phone.</p>
    <p class="reveal">We look forward to seeing you!</p>
    <div class="reveal mt-2 maxw-640">{yt_card("L8Vrb4A3X2M", "Atlantis Dental Centre – VELScope")}</div>
  </div>
  {aside("/our-technology/velscope-oral-cancer-screening/")}
</div></section>
{cta_band("Book Your VELscope Appointment", "Early detection is key in the fight against oral cancer. A screening takes about 5 minutes.")}
"""
    return page("/our-technology/velscope-oral-cancer-screening/", "Velscope Oral Cancer Screening At Your Vancouver Dental Clinic", "VELscope oral cancer screening at Atlantis Dental Yaletown: a safe, non-invasive 5-minute exam. Early detection gives an 83% survival rate.", body, active="technology", og_image="/assets/img/brand/velscope-1.jpg")


def build():
    return [("/our-technology/", technology()), ("/our-technology/velscope-oral-cancer-screening/", velscope())]
