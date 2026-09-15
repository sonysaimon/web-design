# -*- coding: utf-8 -*-
"""Promotions, Press, Media, CDCP, 123Dentist Community pages (multi-page module)."""
from src.layout import *
from src.components import page_hero, cta_band, aside_why, yt_card, VIDEOS, TESTIMONIALS
from src.content import load as _load


def promotions():
    P = _load("promotions")
    items = "".join(f'<li><a href="{x["url"]}"{" target=\"_blank\" rel=\"noopener\"" if x["url"].startswith("http") else ""}>{x["link_text"]}</a> – {x["text"]}</li>' for x in P["programs"])
    body = f"""
{page_hero(P["title"], "", [("Why Us", "/why-choose-us/"), ("Promotions", "/why-choose-us/promotions/")], "Promotions")}
<section class="section"><div class="container with-aside">
  <div class="prose reveal">
    <p class="lead">{P["intro"]}</p>
    <div class="card card--soft mt-2"><h2 class="card__title">{P["box_title"]}</h2>
      <ul>{items}</ul>
    </div>
    <p class="mt-2">To learn about current offers, call <a href="tel:{PHONE_TEL}">{PHONE}</a> or email <a href="mailto:{EMAIL}">{EMAIL}</a>.</p>
  </div>
  {aside_why("/why-choose-us/promotions/")}
</div></section>
{cta_band()}
"""
    return page("/why-choose-us/promotions/", P["title"].replace("&amp;", "&"), "Current offers, contests and programs at Atlantis Dental Yaletown, including CDCP, 0% patient financing and in-office whitening.", body, active="why")


def press():
    body = f"""
{page_hero("Press Releases From Atlantis General Dentistry Vancouver", "", [("Why Us", "/why-choose-us/"), ("Press", "/why-choose-us/press/")], "Press")}
<section class="section"><div class="container with-aside">
  <div class="reveal">
    <ul class="downloads">
      <li><a href="/assets/forms/illuminateYaletownPR.pdf" target="_blank" rel="noopener">{icon("file")}<span>Atlantis Dental Light Up the Night with Smiles at Illuminate Yaletown<small>Feb 14, 2011 – Press release (PDF)</small></span><span class="dl">{icon("download")}</span></a></li>
      <li><a href="/assets/forms/illuminateYaletown.pdf" target="_blank" rel="noopener">{icon("file")}<span>Atlantis Dental and Max Dental Celebrate Community Spirit at Illuminate Yaletown on February 11 and 12<small>Feb 10, 2011 – Press release (PDF)</small></span><span class="dl">{icon("download")}</span></a></li>
    </ul>
    <p class="muted mt-2">For media inquiries, please contact <a href="mailto:{EMAIL}">{EMAIL}</a> or call <a href="tel:{PHONE_TEL}">{PHONE}</a>.</p>
  </div>
  {aside_why("/why-choose-us/press/")}
</div></section>
{cta_band()}
"""
    return page("/why-choose-us/press/", "Press Releases From Atlantis General Dentistry Vancouver", "Press releases and media coverage from Atlantis Dental Yaletown, including Illuminate Yaletown 2011.", body, active="why")


def media():
    vids = "".join(f'<div class="reveal">{yt_card(v, t)}</div>' for t, v in VIDEOS)
    tests = "".join(f'<div class="reveal">{yt_card(v, n, "Patient testimonial")}</div>' for n, v in TESTIMONIALS)
    body = f"""
{page_hero("Media From Atlantis Dental Vancouver", "Videos about our clinic, our dentists and our treatments, plus real patient testimonials.", [("Why Us", "/why-choose-us/"), ("Media", "/why-choose-us/media/")], "Media")}
<section class="section"><div class="container">
  <div class="section__head reveal"><p class="eyebrow">Videos</p><h2>Atlantis Dental Centre on video</h2></div>
  <div class="grid grid--3">{vids}</div>
</div></section>
<section class="section section--soft" id="testimonials"><div class="container">
  <div class="section__head reveal"><p class="eyebrow">Patient Testimonials</p><h2>Hear from our patients</h2></div>
  <div class="grid grid--4">{tests}</div>
  <div class="reviews-cta reveal">
    <span class="rating"><span class="stars" aria-hidden="true">★★★★★</span> {RATING} · {RATING_COUNT} Google reviews</span>
    <a class="btn btn--white" href="{GOOGLE_REVIEWS}" target="_blank" rel="noopener">{icon("google")} Read our Google reviews</a>
    <a class="btn btn--white" href="{YELP}" target="_blank" rel="noopener">{icon("yelp")} Read us on Yelp</a>
  </div>
</div></section>
{cta_band()}
"""
    return page("/why-choose-us/media/", "Media From Atlantis Dental Vancouver", "Watch videos from Atlantis Dental Centre – Dr. Tom Karkanis, Invisalign, sedation, VELscope, veneers, whitening – and patient testimonials from Derek, Laleh, Marvin, Nela, Sheila, Stacey, Tony and Colin.", body, active="why")


def cdcp():
    def ul(items):
        return "<ul>" + "".join(f"<li>{i}</li>" for i in items) + "</ul>"
    body = f"""
{page_hero("The Canadian Dental Care Plan (CDCP) in Downtown Vancouver", "We accept the CDCP at our downtown Vancouver dental clinic to help make dental care more accessible for our patients and their families.", [("Why Us", "/why-choose-us/"), ("CDCP Vancouver", "/cdcp-in-downtown-vancouver/")], "CDCP Accepted")}
<section class="section"><div class="container with-aside">
  <div class="prose">
    <h2 class="reveal mt-0">What are the benefits of the CDCP?</h2>
    <div class="grid grid--3 reveal">
      <div class="card card--soft">{icon("users")}<h3 class="mt-075">Access</h3><p>It increases access to dental care for eligible Canadian residents.</p></div>
      <div class="card card--soft">{icon("heart")}<h3 class="mt-075">Oral Health</h3><p>It helps improve the oral health of our patients and their families.</p></div>
      <div class="card card--soft">{icon("shield")}<h3 class="mt-075">Protection</h3><p>It offers protection for your long-term health and wellness.</p></div>
    </div>

    <h2 class="reveal">How Does the CDCP Plan Work?</h2>
    <p class="lead reveal">Just Follow These 3 Easy Steps to Access Dental Coverage</p>
    <div class="steps reveal cols-1">
      <div class="step"><h3>Step #1: Apply for Coverage: Determine Your Eligibility and Apply Today</h3><p>The Canadian Dental Care Plan (CDCP) is opening eligibility in waves, determined by demographics. We recommend checking the <a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/apply.html" target="_blank" rel="noopener">official CDCP website</a> for updates on when and how to apply. The CDCP requires all applicants to meet the following four pieces of criteria:</p>{ul(["You don’t have access to dental insurance", "Your adjusted family net income is lower than $90,000", "You are a Canadian resident (for tax purposes)", "You have filed your tax return for the previous year"])}</div>
      <div class="step"><h3>Step #2: Book Your Appointment at Atlantis Dental: We Look Forward to Connecting with You!</h3><p>Once you’ve applied for the CDCP and received confirmation of your enrolment in the plan, you can book an appointment with our dental team. Our caring and experienced staff look forward to providing you with personalized services to ensure you receive quality care on every visit. Whether it’s your first visit to our clinic or a while since we last saw you, we’ll help you book the right appointment for your oral health needs.</p><a class="btn btn--primary" href="/contact-us/book-now/">{icon("calendar")}Book Your Appointment</a></div>
      <div class="step"><h3>Step #3: Gain Access to a Range of Dental Services: Schedule Your Treatments in Advance</h3><p>At Atlantis Dental, we offer a full range of dental services, from routine diagnostics and annual checkups to restorative treatments to cosmetic dental services. As soon as you know when your coverage begins, give our clinic a call and we can schedule your appointment in advance for the right date.</p></div>
    </div>
    <div class="grid grid--2 reveal mt-15">
      <div class="img-frame"><img src="/assets/img/brand/languages-offered.jpg" alt="Group of friends laughing together" width="600" height="400" loading="lazy"></div>
      <div class="img-frame"><img src="/assets/img/brand/Invisalign-Confident-couple-smiling.jpg" alt="Confident couple smiling" width="600" height="400" loading="lazy"></div>
    </div>

    <h3 class="reveal">You’re invited to book your next dental appointment at our Yaletown dental clinic.</h3>
    <p class="reveal">At Atlantis Dental, your oral health matters! For optimal oral health at every stage of life, we recommend scheduling annual dental checkups and routine oral hygiene appointments. Preventative oral care helps keep your smile happy and healthy while preventing more serious dental concerns later on.</p>

    <h2 class="reveal">What Is Covered by the CDCP Plan?</h2>
    <p class="reveal">The CDCP covers a wide range of oral healthcare services to help you maintain a happy smile, from diagnostic and preventative services to basic and major services. Our friendly and personable dental team is always happy to discuss your recommended dental treatments and eligible CDCP coverage.</p>
    <div class="faq reveal">
      <details open><summary>Diagnostic and Preventive Services</summary><div><p>The following dental care services are essential to maintaining good oral health, preventing dental concerns, such as cavities and gum disease, and detecting mouth conditions early.</p>{ul(["Routine, Complete, and Specific Dental Exams", "Emergency Dental Exams", "X-Rays", "Dental Hygiene Appointments (cleaning and scaling)", "Fluoride Applications", "Dental Sealants"])}</div></details>
      <details><summary>Basic Restorative, Endodontic, and Periodontal Services</summary><div><p>The CDPC covers basic treatments, such as cavities, broken teeth, decayed or infected teeth, gum disease, and jaw bone issues.</p>{ul(["Temporary and Permanent Dental Fillings", "Pain Control for Diseased Teeth", "Other Treatment for Cavities", "Root Canal Treatments", "Pulpectomies", "Infection reduction", "Re-Treatment of Previous Root Canal Treatment (Requires Pre-Authorization)", "Cleaning Under the Gumline", "Treating Abscesses", "Bonding for Mobile Teeth (Requires Pre-Authorization)", "Post-Surgical Evaluations (Requires Pre-Authorization)", "Non-Surgical Gum Disease Management"])}</div></details>
      <details><summary>Major Restorative Services and Oral Surgery</summary><div><p>The CDCP covers the following services for teeth restoration and oral surgery to remove teeth, tumours, and correct other concerns in the mouth and jaw.</p>{ul(["Dental Implants and Implant Removal", "Dental Crown Repairs", "Re-Bonding of Crowns and Posts", "Dental Crowns (Requires Preauthorization)", "Cores to Support Crowns (Requires Preauthorization)", "Posts for Dental Crowns (Requires Preauthorization)", "Complete Dentures (Standard and Temporary)", "Denture Repairs, Relines, and Rebases", "Complete Immediate and Overdentures (Requires Preauthorization)", "Partial Dentures (Requires Preauthorization)", "Tooth Extraction", "Surgical Removal of Tumours and Cysts", "Surgical Incisions (Including Draining)", "Treatment for Broken Jaw Bones"])}</div></details>
      <details><summary>Anesthesia or Sedation Services</summary><div><p>The CDCP offers coverage for sedation services to help control your pain while you receive various dental treatments.</p>{ul(["Minimal Sedation (conscious)", "Moderate Sedation (Requires Preauthorization)", "Deep Sedation (Requires Preauthorization)", "General Anaesthesia (Requires Preauthorization)"])}</div></details>
      <details><summary>Orthodontic Services</summary><div><p>The CDCP plans to add orthodontic services to its list of treatments covered in 2025. These cases will be covered based on medical needs using strict criteria with a maximum spending limit.</p></div></details>
    </div>

    <h2 class="reveal">CDCP Questions</h2>
    <div class="faq reveal">
      <details><summary>Do you offer direct billing for the CDCP?</summary><div><p>Yes, for eligible CDCP treatments, we will direct bill Sun Life (the managing insurer of the CDCP) on your behalf. If applicable, you will be required to pay the difference on any of your dental treatments.</p></div></details>
      <details><summary>Can I prepay for my dental treatment and be reimbursed by my CDCP?</summary><div><p>The CDCP requires direct billing in order to provide coverage for dental treatments. The <a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/visit-provider.html" target="_blank" rel="noopener">Government of Canada advises individuals <strong>not</strong> to pay in advance</a> for services as there is no way for Sun Life to pay you back after the fact. At Atlantis Dental, we take care of direct billing for CDCP on your behalf so you don’t have to worry about coverage or payments. You will be required to cover any outstanding fees or totals on the services.</p></div></details>
      <details><summary>How long does CDCP give me coverage?</summary><div><p>The CDCP requires recipients to reapply on an annual basis.</p></div></details>
      <details><summary>Will CDCP cover a treatment that is not on the official list?</summary><div><p>In some cases, the CDCP will approve treatments not on the official list of services. These treatments require our dental clinic to submit the details of the recommended services for approval before doing any work. Once they approve the recommendations, you may book an appointment with our dental team.</p></div></details>
    </div>

    <h2 class="reveal">Contact Us</h2>
    <p class="reveal">If you have questions about dental care, promotions, payment forms and more, please contact us. We look forward to hearing from you!</p>
    <div class="hero__actions reveal"><a class="btn btn--primary" href="/contact-us/book-now/">{icon("calendar")}Request An Appointment</a><a class="btn btn--outline" href="tel:{PHONE_TEL}">{icon("phone")}{PHONE}</a></div>
  </div>
  {aside_why("/cdcp-in-downtown-vancouver/")}
</div></section>
{cta_band("Make the most of your CDCP benefits", "Already covered? Book now. Need to renew or apply? Visit the official CDCP website, then call us to schedule your care.")}
"""
    return page("/cdcp-in-downtown-vancouver/", "The Canadian Dental Care Plan (CDCP) in Downtown Vancouver", "Atlantis Dental Yaletown accepts the Canadian Dental Care Plan (CDCP) with direct billing to Sun Life. Learn eligibility, the 3-step process, what’s covered and answers to common CDCP questions.", body, active="why")


def community():
    body = f"""
{page_hero("Atlantis Dental Centre &amp; 123Dentist Community Dentist Network", "At Atlantis Dental Centre, we’re very proud and fortunate to be members of BC’s own 123 Dentist – Community Dentist Network.", [("Why Us", "/why-choose-us/"), ("123Dentist Community", "/123dentist-community/")], "123Dentist Member")}
<section class="section"><div class="container with-aside">
  <div class="prose">
    <div class="reveal flex-start-gap"><img class="flex-none rounded" src="/assets/img/brand/123-community-member-square-100px.png" alt="123Dentist Community Member badge" width="100" height="100"><p>Atlantis Dental Centre is a proud member of 123 Dentist, an online network of community dentists gathered together because of their ongoing commitment to their neighborhoods. They have been selected for inclusion partly because they are a modern and caring dental facility as well as because they deliver an exceptional level of dentistry treatments. The network simplifies the search for a dental provider for both residents who have recently relocated to the Vancouver area as well as those individuals who are simply searching for a new dentist. Membership in 123 Dentist goes hand-in-hand with the commitment to practice modern dentistry in a caring environment.</p></div>
    <h2 class="reveal">The 123 Dentist Promise</h2>
    <div class="principles reveal cols-1">
      <div class="principle"><div class="principle__num">01</div><div><h3>We promise to listen to our patients.</h3><p>From the very first time a patient connects with any of the practices in our 123 Community Dentist Network, we will listen to our patients’ needs and tailor their care with our findings. Our goal is to provide our patients and their families with great dental care in a warm caring environment.</p></div></div>
      <div class="principle"><div class="principle__num">02</div><div><h3>We promise to educate our patients.</h3><p>We give our patients the tools and advice they need to prevent dental disease – and we do so without confusing jargon. We’ll invest the time it takes so that our patients are comfortable, confident, informed and empowered.</p></div></div>
      <div class="principle"><div class="principle__num">03</div><div><h3>We promise to be family friendly.</h3><p>The practices in our network are family-friendly and designed to be a place where kids want to come and visit.</p></div></div>
      <div class="principle"><div class="principle__num">04</div><div><h3>We promise to have ultra-modern, relaxing practices.</h3><p>Our dental practices reflect modern design and décor to create a soothing, modern ‘spa-like’ look and feel. We invite our patients to consider us as their home away from home, and to consider us a part of their family.</p></div></div>
      <div class="principle"><div class="principle__num">05</div><div><h3>We promise to use leading edge technology.</h3><p>The skilled use of leading edge technology enables us to solve our patients’ dental and overall health needs in a rapid, comfortable and safe manner.</p></div></div>
      <div class="principle"><div class="principle__num">06</div><div><h3>We promise to support our patients’ mobile lifestyle.</h3><p>Patients who relocate can easily have their patient file transferred to another practice in our 123 Community Dentist Network. We handle all of the paperwork.</p></div></div>
    </div>
    <div class="reveal mt-2 maxw-640">{yt_card("cHSVj7GduFU", "123Dentist Community Dentist Network")}</div>
    <p class="reveal mt-15">Visit our <a href="https://www.123dentist.com/our/bc/vancouver-dentists/atlantis-dental-yaletown/" target="_blank" rel="noopener">Yaletown Vancouver Dentist</a> profile and <a href="https://www.123dentist.com/our/bc/vancouver-dentists/atlantis-dental-cambie/" target="_blank" rel="noopener">Cambie Vancouver Dentist</a> profile on 123dentist.com.</p>
  </div>
  {aside_why("/123dentist-community/")}
</div></section>
{cta_band()}
"""
    return page("/123dentist-community/", "Atlantis Dental Centre & 123Dentist Community Dentist Network", "Atlantis Dental Centre is a proud member of BC’s 123 Dentist Community Dentist Network. Read the 123 Dentist Promise.", body, active="why")


def build():
    return [
        ("/why-choose-us/promotions/", promotions()),
        ("/why-choose-us/press/", press()),
        ("/why-choose-us/media/", media()),
        ("/cdcp-in-downtown-vancouver/", cdcp()),
        ("/123dentist-community/", community()),
    ]
