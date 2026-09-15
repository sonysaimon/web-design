# -*- coding: utf-8 -*-
from src.layout import *
from src.components import page_hero, cta_band, aside_contact, appointment_form, location_block
from src.content import load as _load


def contact():
    body = f"""
{page_hero("Contact Your Vancouver Dentist on Pacific Boulevard", "We look forward to hearing from you!", [("Contact Us", "/contact-us/")], "Contact Us")}
<section class="section"><div class="container">
  <div class="split items-start">
    <div class="reveal">
      <h2>Atlantis Dental Yaletown</h2>
      {location_block()}
      <p class="muted text-sm mt-15">Please note that the reviews link shown will take you to an independent third-party website not endorsed by or affiliated with our dental practice.</p>
      <div class="hero__actions mt-1">
        <a class="btn btn--white" href="{GOOGLE_REVIEWS}" target="_blank" rel="noopener">{icon("google")} Google reviews</a>
        <a class="btn btn--white" href="{YELP}" target="_blank" rel="noopener">{icon("yelp")} Yelp</a>
        <a class="btn btn--white" href="{FACEBOOK}" target="_blank" rel="noopener">{icon("facebook")} Facebook</a>
        <a class="btn btn--white" href="{INSTAGRAM}" target="_blank" rel="noopener">{icon("instagram")} Instagram</a>
      </div>
    </div>
    <div class="map-frame reveal sq" data-delay="1"><iframe src="{MAPS_EMBED}" title="Map to Atlantis Dental Yaletown, 1278 Pacific Boulevard" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
  </div>
</div></section>

<section class="section section--navy anchor-offset" id="appointment"><div class="container">
  <div class="split items-start">
    <div class="reveal">
      <p class="eyebrow">General Inquiries</p>
      <h2>Request An Appointment With Atlantis Dental Yaletown</h2>
      <p class="lead">If you have questions about dental care, promotions, payment forms and more, please contact us. We look forward to hearing from you!</p>
      <p>New patient? Save time at your first visit by completing our <a href="/contact-us/patient-forms/">patient forms</a> in advance.</p>
      <p>Dental emergency? Call our Emergency Line at <a href="tel:{EMERGENCY_TEL}"><strong>{EMERGENCY}</strong></a> ({EMERGENCY_HOURS}) or read <a href="/contact-us/emergency-dentist/">what to do in a dental emergency</a>.</p>
      <div class="mt-2"><a href="{ROUNDHOUSE_URL}" target="_blank" rel="noopener"><img class="rounded-lg" src="/assets/img/brand/Atlantis-Roundhouse-Web-Banner-2.1-1200.jpg" alt="Why wait for an appointment? Visit our sister clinic Atlantis Dental Roundhouse, only 3 blocks away. Patients will receive a take-home teeth whitening kit just by booking! Some conditions may apply." width="1200" height="562" loading="lazy"></a></div>
    </div>
    <div class="reveal" data-delay="1">{appointment_form("General Inquiries &amp; Appointment Requests")}</div>
  </div>
</div></section>
"""
    return page("/contact-us/", "Contact Your Vancouver Dentist on Pacific Boulevard", "Contact Atlantis Dental Yaletown: 1278 Pacific Boulevard, Vancouver BC V6Z 2V1. Call (604) 899-0775, email yaletown@atlantisdental.ca or request an appointment online. Open 7 days.", body, active="contact")


def forms():
    F = _load("forms")
    li = "".join(f'<li><a href="/assets/forms/{f["file"]}" target="_blank" rel="noopener">{icon("file")}<span>{f["title"]}<small>PDF – opens in a new tab</small></span><span class="dl">{icon("download")}</span></a></li>' for f in F["forms"])
    body = f"""
{page_hero(F["title"], "", [("Contact Us", "/contact-us/"), ("Patient Forms", "/contact-us/patient-forms/")], "New Patients")}
<section class="section"><div class="container with-aside">
  <div class="prose">
    <p class="lead reveal">{F["intro"]}</p>
    <p class="reveal">{F["instruction"]}</p>
    <ul class="downloads reveal">{li}</ul>
    <p class="muted reveal mt-15 text-90">You’ll need a PDF reader to open these forms. Bring the completed forms with you, or email them to <a href="mailto:{EMAIL}">{EMAIL}</a>.</p>
  </div>
  {aside_contact("/contact-us/patient-forms/")}
</div></section>
{cta_band()}
"""
    return page("/contact-us/patient-forms/", F["title"], "Download new patient forms for Atlantis Dental Yaletown: dental history, medical history, records transfer, new patient information and office policies.", body, active="contact")


def emergency():
    body = f"""
{page_hero("Emergency Dentist in Downtown Vancouver", "", [("Contact Us", "/contact-us/"), ("Emergency Dentist", "/contact-us/emergency-dentist/")], "Emergency Dentist")}
<section class="section"><div class="container">
  <div class="callout reveal">
    <div><h2>If you’re experiencing a dental emergency, call {EMERGENCY} – {EMERGENCY_HOURS.replace(" AM", "AM")}.</h2><p>On our Emergency Line you’ll speak to a real dental professional.</p></div>
    <a class="btn btn--danger btn--lg" href="tel:{EMERGENCY_TEL}">{icon("phone")}Call {EMERGENCY}</a>
  </div>
</div></section>
<section class="section section--tight"><div class="container with-aside">
  <div class="prose">
    <h2 class="reveal mt-0">We’ll help you through this and help you find peace of mind.</h2>
    <p class="reveal"><strong>We’ve all been there.</strong></p>
    <p class="reveal">The sudden toothache that wakes you up in the middle of the night, The crunchy snack that chips a tooth or dislodges a filling, The sudden mishap that knocks out a tooth.</p>
    <p class="reveal">Okay, maybe we haven’t all experienced accidentally losing a tooth, but we all know it can happen easily and without warning.</p>
    <p class="reveal">Any of these can mean pain, discomfort and difficulty with normal activities like eating, drinking, sleeping, even breathing.</p>
    <p class="reveal">But, what else do dental emergencies have in common?</p>
    <p class="reveal"><strong>Anxiety – worry – concern.</strong></p>
    <p class="reveal">It’s natural. Many people don’t know what to do when faced with a dental emergency.</p>
    <h3 class="reveal">What should you do?</h3>
    <ul class="reveal">
      <li>Should you rush to the hospital?</li>
      <li>Should you place a hot cloth on the jaw – a cold cloth?</li>
      <li>Should you take painkillers – or not take painkillers?</li>
      <li>Can a lost tooth be saved?</li>
      <li>Should you put the lost tooth in a baggie in the fridge?</li>
      <li>Can you eat and drink before you see the dentist?</li>
    </ul>
    <p class="reveal">So many questions.</p>
    <p class="reveal">And in an emergency, you should know where to look for the answers.</p>
    <h2 class="reveal">That’s why we created the Dental Emergency Line.</h2>
    <p class="reveal">When you experience a dental emergency, and we’re not available – call <a href="tel:{EMERGENCY_TEL}"><strong>{EMERGENCY}</strong></a>.</p>
    <p class="reveal">On our Emergency Line you’ll speak to a real dental professional.</p>
    <ul class="reveal">
      <li>We’ll help you understand what you should do – and what you shouldn’t.</li>
      <li>We’ll help you book the soonest possible appointment so you can get the problem resolved.</li>
      <li>And most of all, we’ll help you to reclaim your peace of mind.</li>
    </ul>
    <p class="reveal">Knowing what to do makes all the difference.</p>
    <p class="reveal">And now there’s only one thing you need to know.</p>
    <p class="reveal">Call <a href="tel:{EMERGENCY_TEL}"><strong>{EMERGENCY}</strong></a>.</p>
    <p class="reveal">We’ll help you through this.</p>
    <p class="muted reveal">This service is made possible through our membership in <a href="/123dentist-community/">123 Dentist</a>, a network of community-based dentists using technology and collaboration to provide our communities with great dental care.</p>
    <p class="reveal">Go here if you are experiencing <a href="https://123dentalemergency.com/" target="_blank" rel="noopener">dental problems</a> after hours.</p>
  </div>
  {aside_contact("/contact-us/emergency-dentist/")}
</div></section>
{cta_band("Dental emergency?", "Call our Emergency Line at " + EMERGENCY + " (" + EMERGENCY_HOURS + ") to speak with a real dental professional, or call the clinic during office hours.")}
"""
    return page("/contact-us/emergency-dentist/", "Emergency Dentist in Downtown Vancouver", "Dental emergency in Vancouver? Call the Atlantis Dental Emergency Line at 604-805-2500 (" + EMERGENCY_HOURS + ") to speak with a real dental professional and book the soonest appointment.", body, active="contact")


def book_now():
    body = f"""
{page_hero("Book An Appointment At Your Vancouver Dentist – Accepting New Patients", "To book an appointment with Atlantis Dental, please fill out simple request form below.", [("Contact Us", "/contact-us/"), ("Book Now", "/contact-us/book-now/")], "Book Now")}
<section class="section" id="appointment"><div class="container">
  <div class="split items-start">
    <div class="reveal" data-delay="1">{appointment_form("Request An Appointment")}</div>
    <div class="reveal">
      <h2>Atlantis Dental Yaletown</h2>
      {location_block()}
      <p class="mt-15">Prefer to talk? Call <a href="tel:{PHONE_TEL}"><strong>{PHONE}</strong></a>. Dental emergency? Call <a href="tel:{EMERGENCY_TEL}"><strong>{EMERGENCY}</strong></a> ({EMERGENCY_HOURS}).</p>
      <p>New patient? Save time by completing our <a href="/contact-us/patient-forms/">patient forms</a> before your visit.</p>
    </div>
  </div>
</div></section>
"""
    return page("/contact-us/book-now/", "Book An Appointment At Your Vancouver Dentist – Accepting New Patients", "Request an appointment at Atlantis Dental Yaletown, downtown Vancouver. Accepting new patients. Open 7 days, evenings until 8 pm Mon–Thu.", body, active="contact")


def build():
    return [("/contact-us/", contact()), ("/contact-us/book-now/", book_now()), ("/contact-us/patient-forms/", forms()), ("/contact-us/emergency-dentist/", emergency())]
