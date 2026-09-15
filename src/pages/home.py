# -*- coding: utf-8 -*-
from src.layout import *
from src.components import yt_card, appointment_form, location_block, TESTIMONIALS
from src.content import load as _load

H = _load("home")

PATH = "/"
TITLE = "Vancouver Dentist | Atlantis Dental Yaletown"
DESCRIPTION = "Atlantis Dental Yaletown – your trusted dentist in downtown Vancouver. Cosmetic, sedation, restorative and preventative dentistry, Invisalign, CDCP accepted, 0% financing. Open 7 days. (604) 899-0775."
ACTIVE = "home"


def promo_card(c, delay):
    dl = f' data-delay="{delay}"' if delay else ""
    small = f'<small>{c["small"]}</small>' if c.get("small") else ""
    ext = ' target="_blank" rel="noopener"' if c["button_url"].startswith("http") else ""
    if c.get("button2"):
        buttons = f'<div class="flex-wrap-gap"><a class="btn btn--primary" href="{c["button_url"]}">{c["button"]}</a><a class="btn btn--outline" href="{c["button2_url"]}">{c["button2"]}</a></div>'
    else:
        cls = "btn--accent" if c["style"] == "navy" else "btn--primary"
        arrow = f' {icon("arrow")}' if ext else ""
        buttons = f'<a class="btn {cls}" href="{c["button_url"]}"{ext}>{c["button"]}{arrow}</a>'
    return f'<article class="promo promo--{c["style"]} reveal"{dl}><span class="promo__tag">{c["tag"]}</span><h3>{c["title"]}</h3><p>{c["text"]}</p>{small}{buttons}</article>'


def delay_attr(i):
    return f' data-delay="{i}"' if i else ""


def body():
    hero, intro, why, doc, tst, pr, ap, loc = H["hero"], H["intro"], H["why"], H["doctor"], H["testimonials"], H["promos"], H["appointment"], H["location"]
    testimonials = "".join(f'<div class="carousel__item">{yt_card(vid, name, "Patient testimonial")}</div>' for name, vid in TESTIMONIALS)
    service_cards = "".join(
        f'<a class="card service-card reveal"{delay_attr(i)} href="{c["url"]}"><div class="card__icon"><img src="/assets/img/brand/{c["icon_image"]}" alt="" width="40" height="40"></div><h3>{c["title"]}</h3><p>{c["text"]}</p><span class="link-arrow">Learn More {icon("arrow")}</span></a>'
        for i, c in enumerate(H["service_cards"])
    )
    more_cards = "".join(
        f'<a class="card card--soft reveal"{delay_attr(i)} href="{c["url"]}"><h3 class="flex-center">{icon(c["icon"])} {c["title"]}</h3><p>{c["text"]}</p><span class="link-arrow">Learn More {icon("arrow")}</span></a>'
        for i, c in enumerate(H["more_cards"])
    )
    principles = "".join(
        f'<div class="principle reveal"{delay_attr(i % 3)}><div class="principle__num">{i + 1:02d}</div><div><h3>{p["title"]}</h3><p>{p["text"]}</p></div></div>'
        for i, p in enumerate(H["principles"])
    )
    creds = "".join(f"<li>{c}</li>" for c in doc["credentials"])
    promos = "".join(promo_card(c, i % 2) for i, c in enumerate(H["promo_cards"]))
    rating = f"""<a class="hero__rating" href="{GOOGLE_REVIEWS}" target="_blank" rel="noopener">
        <span class="g">{icon("google")}</span>
        <span class="stars" aria-hidden="true">★★★★★</span>
        <span><strong>{RATING}</strong> on Google · {RATING_COUNT} patient reviews</span>
      </a>""" if SHOW_RATING else ""
    rating_line = f'<span class="rating"><span class="stars" aria-hidden="true">★★★★★</span> {RATING} · {RATING_COUNT} Google reviews</span>' if SHOW_RATING else ""
    return f"""
<!-- ============ HERO ============ -->
<section class="hero">
  <div class="container hero__inner">
    <div class="hero__copy reveal">
      <p class="eyebrow">{hero["eyebrow"]}</p>
      <h1>{hero["headline"]}</h1>
      <p class="lead">{hero["lead"]}</p>
      <div class="hero__actions">
        <a class="btn btn--primary btn--lg" href="{hero["button_primary_url"]}">{icon("calendar")}{hero["button_primary"]}</a>
        <a class="btn btn--outline btn--lg" href="{hero["button_secondary_url"]}">{hero["button_secondary"]}</a>
      </div>
      {rating}
    </div>
    <div class="hero__visual reveal" data-delay="1">
      <div class="img-frame"><img src="{hero["image"]}" alt="{hero["image_alt"]}" width="1600" height="1075" fetchpriority="high"></div>
      <div class="hero__badges">
        <div class="hero__badge hero__badge--tl">{icon("clock")}<div><strong>{hero["badge_1_title"]}</strong><span>{hero["badge_1_text"]}</span></div></div>
        <div class="hero__badge hero__badge--br">{icon("shield")}<div><strong>{hero["badge_2_title"]}</strong><span>{hero["badge_2_text"]}</span></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ TRUST STRIP ============ -->
<section class="trust" aria-label="Why patients choose us">
  <div class="container">
    <ul class="trust__list">
      <li><img src="/assets/img/brand/123-community-member-square-100px.png" alt="" width="100" height="100"><span><strong>123Dentist Member</strong>BC’s community dentist network</span></li>
      <li>{icon("shield")}<span><strong>CDCP Accepted</strong>Canadian Dental Care Plan</span></li>
      <li>{icon("globe")}<span><strong>12 Languages Spoken</strong>Care in your language</span></li>
      <li>{icon("percent")}<span><strong>0% Patient Financing</strong>Flexible payment plans</span></li>
      <li>{icon("alert")}<span><strong>Emergency Line</strong><a href="tel:{EMERGENCY_TEL}">{EMERGENCY}</a>, {EMERGENCY_HOURS}</span></li>
    </ul>
  </div>
</section>

<!-- ============ INTRO + SERVICES ============ -->
<section class="section">
  <div class="container">
    <div class="section__head center reveal">
      <p class="eyebrow">{intro["eyebrow"]}</p>
      <h2>{intro["heading"]}</h2>
      <p class="lead">{intro["text"]}</p>
    </div>
    <div class="grid grid--3">{service_cards}</div>
    <div class="grid grid--3 mt-15">{more_cards}</div>
  </div>
</section>

<!-- ============ WHY US ============ -->
<section class="section section--soft">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <p class="eyebrow">{why["eyebrow"]}</p>
        <h2>{why["heading"]}</h2>
        <p class="lead">{why["lead"]}</p>
        <p>{why["text"]}</p>
        <a class="btn btn--primary" href="/why-choose-us/">{why["button"]} {icon("arrow")}</a>
      </div>
      <div class="img-frame reveal" data-delay="1"><img src="{why["image"]}" alt="{why["image_alt"]}" width="1600" height="900" loading="lazy"></div>
    </div>
    <div class="principles mt-3">{principles}</div>
  </div>
</section>

<!-- ============ MEET DR. KARKANIS ============ -->
<section class="section">
  <div class="container">
    <div class="doctor">
      <div class="doctor__photo reveal"><div class="img-frame"><img src="{doc["photo"]}" alt="{doc["photo_alt"]}" width="500" height="500" loading="lazy"></div></div>
      <div class="reveal" data-delay="1">
        <p class="eyebrow">{doc["eyebrow"]}</p>
        <h2>{doc["heading"]}</h2>
        <p class="lead">{doc["text"]}</p>
        <ul class="doctor__creds">{creds}</ul>
        <div class="hero__actions">
          <a class="btn btn--primary" href="/why-choose-us/our-team/">{doc["button_primary"]} {icon("arrow")}</a>
          <a class="btn btn--outline" href="/why-choose-us/media/">{doc["button_secondary"]}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="section section--soft">
  <div class="container">
    <div class="section__head reveal">
      <p class="eyebrow">{tst["eyebrow"]}</p>
      <h2>{tst["heading"]}</h2>
      <p class="lead">{tst["lead"]}</p>
    </div>
    <div class="carousel reveal" data-delay="1">
      <div class="carousel__track" tabindex="0" aria-label="Patient testimonial videos">{testimonials}</div>
      <div class="carousel__nav">
        <button class="carousel__btn" type="button" data-dir="prev" aria-label="Previous testimonials">{icon("arrow-left")}</button>
        <button class="carousel__btn" type="button" data-dir="next" aria-label="Next testimonials">{icon("arrow")}</button>
      </div>
    </div>
    <div class="reviews-cta reveal">
      {rating_line}
      <a class="btn btn--white" href="{GOOGLE_REVIEWS}" target="_blank" rel="noopener">{icon("google")} Read our Google reviews</a>
      <a class="btn btn--white" href="{YELP}" target="_blank" rel="noopener">{icon("yelp")} Read us on Yelp</a>
    </div>
  </div>
</section>

<!-- ============ PROMOS ============ -->
<section class="section">
  <div class="container">
    <div class="section__head reveal">
      <p class="eyebrow">{pr["eyebrow"]}</p>
      <h2>{pr["heading"]}</h2>
    </div>
    <div class="promo-grid">{promos}</div>
  </div>
</section>

<!-- ============ APPOINTMENT + LOCATION ============ -->
<section class="section section--navy" id="appointment">
  <div class="container">
    <div class="split items-start">
      <div class="reveal">
        <p class="eyebrow">{ap["eyebrow"]}</p>
        <h2>{ap["heading"]}</h2>
        <p class="lead">{ap["lead"]} <a href="tel:{PHONE_TEL}">{PHONE}</a>.</p>
        {location_block(dark=True)}
      </div>
      <div class="reveal" data-delay="1">{appointment_form()}</div>
    </div>
  </div>
</section>

<!-- ============ MAP ============ -->
<section class="section section--tight">
  <div class="container">
    <div class="split">
      <div class="map-frame reveal"><iframe src="{MAPS_EMBED}" title="Map to Atlantis Dental Yaletown, 1278 Pacific Boulevard" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
      <div class="reveal" data-delay="1">
        <p class="eyebrow">{loc["eyebrow"]}</p>
        <h2>{SITE_NAME}</h2>
        <p class="lead">{ADDRESS_1}<br>{ADDRESS_2}</p>
        <p>{loc["text"]}</p>
        <div class="hero__actions"><a class="btn btn--primary" href="{MAPS_URL}" target="_blank" rel="noopener">{icon("pin")}Get Directions</a><a class="btn btn--outline" href="/contact-us/">Contact Us</a></div>
      </div>
    </div>
  </div>
</section>
"""
