# -*- coding: utf-8 -*-
"""Shared layout: head, announcement bar, utility bar, header/nav, drawer, footer."""
from html import escape

from src.content import load as _load
CLINIC = _load("clinic")

SITE_URL = CLINIC["site_url"].rstrip("/")
DEMO = bool(CLINIC.get("demo", False))
SITE_NAME = CLINIC["name"]
PHONE = CLINIC["phone"]
PHONE_TEL = CLINIC["phone_tel"]
EMERGENCY = CLINIC["emergency"]
EMERGENCY_TEL = CLINIC["emergency_tel"]
EMERGENCY_HOURS = CLINIC.get("emergency_hours", "7 AM – 1 AM")
EMAIL = CLINIC["email"]
ADDRESS_1 = CLINIC["address_1"]
ADDRESS_2 = CLINIC["address_2"]
_L = CLINIC["links"]
MAPS_URL = _L["maps"]
MAPS_EMBED = _L["maps_embed"]
GOOGLE_REVIEWS = _L["google_reviews"]
YELP = _L["yelp"]
FACEBOOK = _L["facebook"]
TWITTER = _L["twitter"]
INSTAGRAM = _L["instagram"]
CAMBIE_URL = _L["cambie"]
ROUNDHOUSE_URL = _L["roundhouse"]
FINANCING_APPLY_URL = _L.get("financing_apply", "https://web.fairstone.ca/dental")
MATTERPORT_URL = _L.get("matterport_tour", "")
FORMSPREE = CLINIC["form"]["endpoint"]
FORM_OPTIONS = CLINIC["form"]["hear_about_us_options"]
RATING = CLINIC["rating"]["score"]
RATING_COUNT = CLINIC["rating"]["count"]
SHOW_RATING = bool(CLINIC["rating"].get("show", True))
ANNOUNCE = CLINIC.get("announcement", {"enabled": False})

HOURS = [(h["label"], h["time"], int(h["day"])) for h in CLINIC["hours"]]

# Navigation: (key, label, href, [(label, href, emphasis?)])
NAV = [
    ("home", "Home", "/", []),
    ("why", "Why Us", "/why-choose-us/", [
        ("Why Choose Us", "/why-choose-us/"),
        ("Our Team", "/why-choose-us/our-team/"),
        ("Our Languages", "/why-choose-us/our-team/#languages"),
        ("Our Office", "/why-choose-us/#office"),
        ("Promotions", "/why-choose-us/promotions/"),
        ("Press", "/why-choose-us/press/"),
        ("Media", "/why-choose-us/media/"),
        ("CDCP Vancouver", "/cdcp-in-downtown-vancouver/"),
    ]),
    ("services", "Services", "/our-services/", [
        ("All Services", "/our-services/"),
        ("Dental Restorations", "/our-services/dental-restorations/"),
        ("Cosmetic Dentistry", "/our-services/cosmetic-dentistry/"),
        ("Invisalign", "/invisalign/"),
        ("Preventative Dentistry", "/our-services/preventative-dentistry/"),
        ("Sedation Dentistry", "/our-services/sedation-dentistry/"),
        ("Patient Financing", "/patient-financing/"),
    ]),
    ("technology", "Technology", "/our-technology/", [
        ("Our Technology", "/our-technology/"),
        ("iTero Scanner", "/our-technology/#itero"),
        ("VELscope", "/our-technology/velscope-oral-cancer-screening/"),
    ]),
    ("blog", "Blog", "/blog/", []),
    ("contact", "Contact Us", "/contact-us/", [
        ("Contact Us", "/contact-us/"),
        ("Patient Forms", "/contact-us/patient-forms/"),
        ("Emergency Dentist", "/contact-us/emergency-dentist/", True),
        ("Book Now", "/contact-us/book-now/"),
    ]),
]

ICONS = {
    "phone": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    "mail": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    "pin": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    "clock": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    "alert": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    "chevron": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>',
    "chevron-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>',
    "arrow": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    "arrow-left": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    "menu": '<svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>',
    "close": '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    "calendar": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>',
    "play": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
    "shield": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    "globe": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    "percent": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
    "sun": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    "sparkle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3"/></svg>',
    "tooth": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5.5c-1.5-1.5-3.5-2.5-5.5-2C4 4 2.5 6.5 3 9.5c.4 2.5 1.5 4 2.2 6.3.6 2 .8 4.2 1.8 5.2 1 .9 2-.3 2.5-1.6.5-1.4.9-3.4 2.5-3.4s2 2 2.5 3.4c.5 1.3 1.5 2.5 2.5 1.6 1-1 1.2-3.2 1.8-5.2.7-2.3 1.8-3.8 2.2-6.3.5-3-1-5.5-3.5-6-2-.5-4 .5-5.5 2Z"/></svg>',
    "moon": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    "heart": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    "scan": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>',
    "file": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8M16 13H8M16 17H8"/></svg>',
    "download": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    "users": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    "star": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    "google": '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.1 2.8-2.4 3.6v3h3.9c2.3-2.1 3.5-5.1 3.5-8.7z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.4 7.4 24 12 24z"/><path fill="#FBBC05" d="M5.4 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4V6.5H1.4C.5 8.2 0 10 0 12s.5 3.8 1.4 5.5l4-3.1z"/><path fill="#EA4335" d="M12 4.7c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.6 1.4 6.5l4 3.1c.9-2.8 3.5-4.9 6.6-4.9z"/></svg>',
    "facebook": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
    "instagram": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    "twitter": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.9-9.1L1 2h7l4.8 6.3L18.9 2zm-1.2 18h1.9L6.5 3.9H4.5L17.7 20z"/></svg>',
    "yelp": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.3 13.6c-.3-.2-.3-.7 0-.9l3.8-3.9c.3-.3.2-.8-.2-1l-1.4-.7c-.4-.2-.8 0-1 .4l-2.1 5c-.1.4.1.8.5.9zM10.8 2.3c-.4 0-.8.3-.8.7L9.6 12c0 .5.5.8.9.6l1.9-.8c.4-.2.6-.6.4-1L11.5 2.8c-.1-.3-.4-.5-.7-.5zm-6.5 8.9c-.4.1-.6.5-.5.9l.6 1.5c.2.4.6.6 1 .4l5-2.1c.4-.2.5-.7.2-1l-4.1-3.5c-.3-.3-.8-.2-1 .2L4.3 11.2zm5.6 4.6c-.4-.3-.9-.1-1 .3L7.5 20.5c-.1.4.1.8.5 1l1.5.5c.4.1.8-.1.9-.5l1.4-5.2c.1-.4-.2-.8-.6-.9zm7.8 1.3l-5-2.1c-.4-.2-.8.1-.9.5l-.2 1.9c0 .4.3.8.7.8l5.4.3c.4 0 .7-.3.7-.7l-.1-1.6c0-.3-.3-.6-.6-.7z"/></svg>',
}


def icon(name):
    return ICONS[name]


def nav_html(active):
    out = ['<nav class="nav" aria-label="Main"><ul class="nav__list">']
    for key, label, href, sub in NAV:
        cls = "nav__item" + (" is-active" if key == active else "")
        if sub:
            cls += " nav__item--has-menu"
            out.append(f'<li class="{cls}"><button class="nav__link" type="button" aria-expanded="false" aria-haspopup="true">{label}{icon("chevron")}</button><ul class="nav__menu">')
            for s in sub:
                emph = ' class="nav__menu-emph"' if len(s) > 2 and s[2] else ""
                out.append(f'<li{emph}><a href="{s[1]}">{s[0]}</a></li>')
            out.append("</ul></li>")
        else:
            cur = ' aria-current="page"' if key == active else ""
            out.append(f'<li class="{cls}"><a class="nav__link" href="{href}"{cur}>{label}</a></li>')
    out.append("</ul></nav>")
    return "".join(out)


def drawer_html():
    out = ['<div class="drawer" data-open="false" role="dialog" aria-modal="true" aria-label="Site menu"><div class="drawer__scrim"></div><div class="drawer__panel">']
    out.append(f'<div class="drawer__head"><img src="/assets/img/brand/atlantis_logo_854x200.png" alt="Atlantis Dental"><button class="drawer__close" type="button" aria-label="Close menu">{icon("close").replace("icon-close","")}</button></div>')
    out.append('<ul class="drawer__list">')
    for key, label, href, sub in NAV:
        if sub:
            out.append(f'<li><button type="button" aria-expanded="false">{label}{icon("chevron")}</button><ul class="drawer__sub" data-open="false">')
            for s in sub:
                out.append(f'<li><a href="{s[1]}">{s[0]}</a></li>')
            out.append("</ul></li>")
        else:
            out.append(f'<li><a href="{href}">{label}</a></li>')
    out.append("</ul>")
    out.append(f'<div class="drawer__cta"><a class="btn btn--primary" href="/contact-us/book-now/">{icon("calendar")}Book Now</a><a class="btn btn--outline" href="tel:{PHONE_TEL}">{icon("phone")}{PHONE}</a></div>')
    out.append(f'<div class="drawer__meta"><strong>Dental emergency?</strong><a href="tel:{EMERGENCY_TEL}">Call {EMERGENCY} ({EMERGENCY_HOURS})</a><a href="mailto:{EMAIL}">{EMAIL}</a><a href="{MAPS_URL}" target="_blank" rel="noopener">{ADDRESS_1}, {ADDRESS_2}</a><p class="mt-1">Other locations: <a class="inline" href="https://atlantisdentalcambie.ca/" target="_blank" rel="noopener">Cambie</a> · <a class="inline" href="https://www.atlantisroundhouse.com/" target="_blank" rel="noopener">Roundhouse</a></p></div>')
    out.append("</div></div>")
    return "".join(out)


def hours_html(cls="hours"):
    li = "".join(f'<li data-day="{d}"><span>{lbl}</span><span>{h}</span></li>' for lbl, h, d in HOURS)
    return f'<ul class="{cls}">{li}</ul>'


def announce_html():
    a = ANNOUNCE
    if not a.get("enabled"):
        return ""
    second = f' &nbsp;·&nbsp; {a.get("second_prefix","")} <a href="{a.get("second_url","#")}">{a.get("second_text","")}</a>' if a.get("second_text") else ""
    return f"""<div class="announce" role="region" aria-label="Announcement">
  <div class="announce__inner">{icon("shield")}<span>{a.get("message","")} <a href="{a.get("link_url","#")}">{a.get("link_text","")}</a>{second}</span></div>
  <button class="announce__close" type="button" aria-label="Dismiss announcement">{icon("close").replace('class="icon-close" ','')}</button>
</div>"""


def header_html(active):
    return f"""
<a class="skip-link" href="#main">Skip to main content</a>
{announce_html()}
<div class="utility"><div class="container utility__inner">
  <div class="utility__group">
    <a href="tel:{PHONE_TEL}">{icon("phone")}{PHONE}</a>
    <a class="utility__hide-sm" href="mailto:{EMAIL}">{icon("mail")}{EMAIL}</a>
    <a class="utility__emergency" href="tel:{EMERGENCY_TEL}">{icon("alert")}<span>Dental emergency? <strong>Call {EMERGENCY}</strong></span></a>
  </div>
  <div class="utility__group utility__hide-sm">
    <span class="utility__locations">Other locations:<a href="{CAMBIE_URL}" target="_blank" rel="noopener">Cambie</a><a href="{ROUNDHOUSE_URL}" target="_blank" rel="noopener">Roundhouse</a></span>
  </div>
</div></div>
<header class="header"><div class="container header__inner">
  <a class="brand" href="/" aria-label="Atlantis Dental Yaletown home"><img src="/assets/img/brand/atlantis_logo_854x200.png" alt="Atlantis Dental – Family &amp; Cosmetic Dentistry" width="854" height="200"></a>
  {nav_html(active)}
  <div class="header__actions">
    <a class="header__phone" href="tel:{PHONE_TEL}">{icon("phone")}{PHONE}</a>
    <a class="btn btn--primary" href="/contact-us/book-now/">{icon("calendar")}<span>Book Now</span></a>
    <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">{icon("menu")}{icon("close")}</button>
  </div>
</div></header>
{drawer_html()}
"""


def footer_html():
    quick = "".join(f'<li><a href="{h}">{l}</a></li>' for l in [] for h in [])
    return f"""
<footer class="footer"><div class="container">
  <div class="footer__grid">
    <div class="footer__brand">
      <img src="/assets/img/brand/atlantis_logo_854x200.png" alt="Atlantis Dental" width="854" height="200">
      <p>Atlantis Dental is dedicated to improving and transforming the lives of our valued patients in Vancouver’s Yaletown community. <em>{CLINIC.get("tagline","")}</em></p>
      <div class="social">
        <a href="{FACEBOOK}" target="_blank" rel="noopener" aria-label="Facebook">{icon("facebook")}</a>
        <a href="{INSTAGRAM}" target="_blank" rel="noopener" aria-label="Instagram">{icon("instagram")}</a>
        <a href="{TWITTER}" target="_blank" rel="noopener" aria-label="X (Twitter)">{icon("twitter")}</a>
        <a href="{GOOGLE_REVIEWS}" target="_blank" rel="noopener" aria-label="Google Maps">{icon("pin")}</a>
        <a href="{YELP}" target="_blank" rel="noopener" aria-label="Yelp">{icon("yelp")}</a>
      </div>
    </div>
    <div>
      <h2 class="footer__h">Our Location</h2>
      <p><strong class="white">Atlantis Dental Yaletown</strong><br>{ADDRESS_1}<br>{ADDRESS_2}</p>
      <ul>
        <li><a href="tel:{PHONE_TEL}">{PHONE}</a></li>
        <li><a href="mailto:{EMAIL}">{EMAIL}</a></li>
        <li><a href="tel:{EMERGENCY_TEL}">Emergency: {EMERGENCY}</a></li>
        <li><a href="{MAPS_URL}" target="_blank" rel="noopener">Get directions</a></li>
      </ul>
      <p class="mt-1">Other locations:<br><a href="{CAMBIE_URL}" target="_blank" rel="noopener">Atlantis Dental Cambie</a><br><a href="{ROUNDHOUSE_URL}" target="_blank" rel="noopener">Atlantis Dental Roundhouse</a></p>
    </div>
    <div>
      <h2 class="footer__h">Quick Links</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/why-choose-us/">Why Us</a></li>
        <li><a href="/our-services/">Services</a></li>
        <li><a href="/our-technology/">Technology</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/contact-us/">Contact Us</a></li>
        <li><a href="/contact-us/patient-forms/">Patient Forms</a></li>
        <li><a href="/contact-us/emergency-dentist/">Emergency Dentist</a></li>
        <li><a href="/cdcp-in-downtown-vancouver/">CDCP Vancouver</a></li>
        <li><a href="/patient-financing/">Patient Financing</a></li>
      </ul>
    </div>
    <div>
      <h2 class="footer__h">Our Hours</h2>
      {hours_html()}
      <div class="footer__member">
        <img src="/assets/img/brand/123-community-member-square-100px.png" alt="123Dentist Community Member" width="100" height="100">
        <p class="text-sm">At Atlantis Dental Centre, we’re very proud and fortunate to be members of BC’s own <a href="/123dentist-community/">123 Dentist – Community</a>.</p>
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <span>© Copyright <span data-year>2026</span> Atlantis Dental. All rights reserved.</span>
    <ul><li><a href="/privacy-policy/">Privacy Policy</a></li><li><a href="/terms-of-use/">Terms of Use</a></li><li><a href="/sitemap.xml">Sitemap</a></li></ul>
  </div>
</div></footer>
<div class="mobile-cta">
  <a class="btn btn--outline" href="tel:{PHONE_TEL}">{icon("phone")}Call</a>
  <a class="btn btn--primary" href="/contact-us/book-now/">{icon("calendar")}Book Now</a>
</div>
<script src="/assets/js/main.js" defer></script>
"""


def page(path, title, description, body, active=None, og_image="/assets/img/hero-patient.jpg", extra_head="", schema=None):
    """Return full HTML document."""
    canonical = SITE_URL + path
    full_title = title if "Atlantis" in title else f"{title} | {SITE_NAME}"
    ld = ""
    if schema:
        ld = f'<script type="application/ld+json">{schema}</script>'
    return f"""<!DOCTYPE html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{escape(full_title)}</title>
<meta name="description" content="{escape(description)}">
<link rel="canonical" href="{canonical}">
{'<meta name="robots" content="noindex, nofollow">' if DEMO else ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="{SITE_NAME}">
<meta property="og:title" content="{escape(full_title)}">
<meta property="og:description" content="{escape(description)}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{SITE_URL}{og_image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#17213C">
<link rel="icon" href="/assets/img/brand/atlantis_logo_square.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/img/brand/atlantis_logo_square.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&family=Noto+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/css/main.css">
{ld}{extra_head}
</head>
<body>
{header_html(active)}
<main id="main" tabindex="-1">
{body}
</main>
{footer_html()}
</body>
</html>
"""


LOCAL_BUSINESS_SCHEMA = """{
 "@context":"https://schema.org","@type":"Dentist","name":"Atlantis Dental Yaletown","alternateName":"Atlantis Dental Centre",
 "url":"__SITE__/","logo":"__SITE__/assets/img/brand/atlantis_logo_square.png","image":"__SITE__/assets/img/hero-patient.jpg",
 "telephone":"+1-604-899-0775","email":"yaletown@atlantisdental.ca","slogan":"Tomorrow's Dentistry – today!",
 "address":{"@type":"PostalAddress","streetAddress":"1278 Pacific Boulevard","addressLocality":"Vancouver","addressRegion":"BC","postalCode":"V6Z 2V1","addressCountry":"CA"},
 "geo":{"@type":"GeoCoordinates","latitude":49.27347,"longitude":-123.12643},
 "openingHoursSpecification":[
  {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday"],"opens":"08:00","closes":"20:00"},
  {"@type":"OpeningHoursSpecification","dayOfWeek":["Friday","Saturday","Sunday"],"opens":"09:00","closes":"17:00"}],
 "sameAs":["https://www.facebook.com/AtlantisDentalCentre/","https://twitter.com/AtlantisDental_","https://www.instagram.com/atlantisdentalclinics_","https://www.yelp.ca/biz/atlantis-dental-yaletown-vancouver-6"],
 "priceRange":"$$","paymentAccepted":"Cash, Credit Card, Debit Card, Insurance, CDCP, Financing",
 "medicalSpecialty":"Dentistry","availableLanguage":["English","Cantonese","Farsi","German","Gujarati","Hindi","Mandarin","Punjabi","Spanish","Tagalog","Turkish","Vietnamese"]
}""".replace("__SITE__", SITE_URL)
