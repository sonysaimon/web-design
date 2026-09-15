# -*- coding: utf-8 -*-
"""Reusable page components."""
from src.layout import *

from src.content import load as _load, render_text
_V = _load("videos")
TESTIMONIALS = [(t["name"], t["id"]) for t in _V["testimonials"]]
VIDEOS = [(v["title"], v["id"]) for v in _V["videos"]]


def yt_card(video_id, title, subtitle=""):
    sub = f"<p>{subtitle}</p>" if subtitle else ""
    return f"""<div class="video-card">
  <button class="yt" type="button" data-id="{video_id}" data-title="{escape(title)}" aria-label="Play video: {escape(title)}">
    <img src="https://i.ytimg.com/vi/{video_id}/hqdefault.jpg" alt="" width="480" height="360" loading="lazy">
    <span class="yt__play">{icon("play")}</span>
  </button>
  <div class="video-card__body"><h3>{title}</h3>{sub}</div>
</div>"""


def wave_svg(cls=""):
    return f'<svg class="{cls}" viewBox="0 0 400 200" fill="none" aria-hidden="true"><path d="M0 120c60-60 120-60 180 0s120 60 180 0" stroke="#01ADFF" stroke-width="26" stroke-linecap="round"/><path d="M20 160c60-60 120-60 180 0s120 60 180 0" stroke="#fff" stroke-width="26" stroke-linecap="round" opacity=".7"/><path d="M-20 80c60-60 120-60 180 0s120 60 180 0" stroke="#17213C" stroke-width="26" stroke-linecap="round" opacity=".6"/></svg>'


def appointment_form(heading="Request An Appointment"):
    options = "".join(f'<option value="{o}">{o}</option>' for o in FORM_OPTIONS)
    return f"""<div class="form-card">
  <h2 class="card__title mb-025">{heading}</h2>
  <p class="muted text-95 mb-125">Fields marked <span class="req">*</span> are required.</p>
  <form data-form action="{FORMSPREE}" method="POST" novalidate>
    <input type="hidden" name="_subject" value="New appointment request – Atlantis Dental Yaletown">
    <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" style="display:none" aria-hidden="true">
    <div class="form-grid">
      <div class="field"><label for="f-first">First<span class="req">*</span></label><input id="f-first" name="First Name" type="text" autocomplete="given-name" required><p class="field__error" role="alert"></p></div>
      <div class="field"><label for="f-last">Last<span class="req">*</span></label><input id="f-last" name="Last Name" type="text" autocomplete="family-name" required><p class="field__error" role="alert"></p></div>
      <div class="field"><label for="f-email">Email<span class="req">*</span></label><input id="f-email" name="Email" type="email" autocomplete="email" inputmode="email" required><p class="field__error" role="alert"></p></div>
      <div class="field"><label for="f-phone">Phone</label><input id="f-phone" name="Phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(999) 999-9999"></div>
      <div class="field span-2"><label for="f-source">How did you hear about us?<span class="req">*</span></label><div class="select-wrap"><select id="f-source" name="How did you hear about us" required><option value="">Please select…</option>{options}</select></div><p class="field__error" role="alert"></p></div>
      <div class="field span-2"><label for="f-msg">Message<span class="req">*</span></label><textarea id="f-msg" name="Message" required placeholder="Tell us how we can help, and any preferred days or times."></textarea><p class="field__error" role="alert"></p></div>
    </div>
    <div class="form__actions">
      <button class="btn btn--primary btn--lg" type="submit">{icon("calendar")}Send Request</button>
      <p class="form__note">Protected by reCAPTCHA. By submitting you agree to our <a href="/privacy-policy/">Privacy Policy</a>.</p>
    </div>
    <div class="form__status" role="status" aria-live="polite" tabindex="-1"></div>
  </form>
</div>"""


def location_block(dark=False):
    return f"""<ul class="contact-list mt-2">
  <li>{icon("pin")}<div><strong>Atlantis Dental Yaletown</strong>{ADDRESS_1}, {ADDRESS_2}<br><a href="{MAPS_URL}" target="_blank" rel="noopener">Get directions</a></div></li>
  <li>{icon("phone")}<div><strong>Phone</strong><a href="tel:{PHONE_TEL}">{PHONE}</a></div></li>
  <li>{icon("mail")}<div><strong>Email</strong><a href="mailto:{EMAIL}">{EMAIL}</a></div></li>
  <li>{icon("alert")}<div><strong>Dental Emergency</strong><a href="tel:{EMERGENCY_TEL}">{EMERGENCY}</a> · {EMERGENCY_HOURS}</div></li>
</ul>
<h3 class="fs-11 mb-05">Our Hours</h3>
{hours_html()}"""


def page_hero(title, lead="", crumbs=None, eyebrow=""):
    bc = ""
    if crumbs:
        items = "".join(f'<li><a href="{h}">{l}</a></li>' for l, h in crumbs[:-1])
        items += f'<li><span aria-current="page">{crumbs[-1][0]}</span></li>'
        bc = f'<nav aria-label="Breadcrumb"><ol class="breadcrumb"><li><a href="/">Home</a></li>{items}</ol></nav>'
    eb = f'<p class="eyebrow">{eyebrow}</p>' if eyebrow else ""
    ld = f'<p class="lead">{lead}</p>' if lead else ""
    return f'<section class="page-hero"><div class="container">{bc}{eb}<h1>{title}</h1>{ld}</div></section>'


def cta_band(title="Request An Appointment With Atlantis Dental Yaletown", text="Our caring team is ready to help you achieve a healthy, beautiful smile. Book online or call us today."):
    return f"""<section class="section section--tight"><div class="container"><div class="cta-band reveal">
  <div><h2>{title}</h2><p>{text}</p></div>
  <div class="actions"><a class="btn btn--accent btn--lg" href="/contact-us/book-now/">{icon("calendar")}Book Now</a><a class="btn btn--ghost-light btn--lg" href="tel:{PHONE_TEL}">{icon("phone")}{PHONE}</a></div>
  {wave_svg("cta-band__wave")}
</div></div></section>"""


def aside_services(current=""):
    links = [("Dental Restorations", "/our-services/dental-restorations/"), ("Cosmetic Dentistry", "/our-services/cosmetic-dentistry/"), ("Invisalign", "/invisalign/"), ("Preventative Dentistry", "/our-services/preventative-dentistry/"), ("Sedation Dentistry", "/our-services/sedation-dentistry/"), ("Patient Financing", "/patient-financing/")]
    li = "".join(f'<li><a href="{h}"{" aria-current=\"page\"" if h == current else ""}>{l}{icon("chevron-right")}</a></li>' for l, h in links)
    return f"""<aside class="aside">
  <div class="card"><h2 class="aside__h">Our Services</h2><ul class="aside__links">{li}</ul></div>
  <div class="card card--navy"><h2 class="aside__h">Request An Appointment</h2><p>Call <a class="white-bold" href="tel:{PHONE_TEL}">{PHONE}</a> or book online.</p><a class="btn btn--accent btn--block" href="/contact-us/book-now/">{icon("calendar")}Book Now</a></div>
  <div class="card"><h2 class="aside__h">Our Hours</h2>{hours_html()}</div>
</aside>"""


def aside_why(current=""):
    links = [("Why Choose Us", "/why-choose-us/"), ("Our Team", "/why-choose-us/our-team/"), ("Our Office", "/why-choose-us/#office"), ("Promotions", "/why-choose-us/promotions/"), ("Press", "/why-choose-us/press/"), ("Media", "/why-choose-us/media/"), ("CDCP Vancouver", "/cdcp-in-downtown-vancouver/"), ("123Dentist Community", "/123dentist-community/")]
    li = "".join(f'<li><a href="{h}"{" aria-current=\"page\"" if h == current else ""}>{l}{icon("chevron-right")}</a></li>' for l, h in links)
    return f"""<aside class="aside">
  <div class="card"><h2 class="aside__h">Why Choose Atlantis Dental?</h2><ul class="aside__links">{li}</ul></div>
  <div class="card card--navy"><h2 class="aside__h">Request An Appointment</h2><p>Call <a class="white-bold" href="tel:{PHONE_TEL}">{PHONE}</a> or book online.</p><a class="btn btn--accent btn--block" href="/contact-us/book-now/">{icon("calendar")}Book Now</a></div>
  <div class="card"><h2 class="aside__h">Our Hours</h2>{hours_html()}</div>
</aside>"""


def aside_contact(current=""):
    links = [("Contact Us", "/contact-us/"), ("Patient Forms", "/contact-us/patient-forms/"), ("Emergency Dentist", "/contact-us/emergency-dentist/")]
    li = "".join(f'<li><a href="{h}"{" aria-current=\"page\"" if h == current else ""}>{l}{icon("chevron-right")}</a></li>' for l, h in links)
    return f"""<aside class="aside">
  <div class="card"><h2 class="aside__h">Contact Us</h2><ul class="aside__links">{li}</ul></div>
  <div class="card"><h2 class="aside__h">Our Location</h2>{location_block()}</div>
</aside>"""
