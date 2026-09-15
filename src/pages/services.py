# -*- coding: utf-8 -*-
"""Services overview + 5 service pages + Patient Financing."""
from src.layout import *
from src.components import page_hero, cta_band, aside_services, yt_card
from src.content import load as _load, render_text

CONTACT_LINK = '<a href="/contact-us/">Contact Atlantis Dental</a>'
BOOK_LINK = '<a href="/contact-us/book-now/">request an appointment</a>'


SV = _load("services")


def overview():
    html = "".join(
        f'<a class="card card--media reveal" href="{c["url"]}"><img src="/assets/img/brand/{c["image"]}" alt="" width="600" height="375" loading="lazy"><div class="card__body"><h2 class="card__title">{c["title"]}</h2><p>{c["text"]}</p><span class="link-arrow">{c["link_text"]} {icon("arrow")}</span></div></a>'
        for c in SV["cards"]
    )
    body = f"""
{page_hero(SV["overview_title"], SV["overview_lead"], [("Services", "/our-services/")], "Our Services")}
<section class="section"><div class="container">
  <p class="lead reveal maxw-70 mb-25">{SV["overview_intro"]}</p>
  <div class="grid grid--3">{html}</div>
</div></section>
<section class="section section--soft"><div class="container">
  <div class="split">
    <div class="reveal"><p class="eyebrow">Technology</p><h2>Tomorrow’s Dentistry – today!</h2><p class="lead">iTero digital scanning, VELscope oral cancer screening, digital x-rays with up to 90% less radiation and computerized laser dentistry.</p><a class="btn btn--primary" href="/our-technology/">Explore Our Technology {icon("arrow")}</a></div>
    <div class="img-frame reveal" data-delay="1"><img src="/assets/img/dentist-itero.jpg" alt="Dentist showing an iTero digital scan" width="1600" height="1067" loading="lazy"></div>
  </div>
</div></section>
{cta_band()}
"""
    return page("/our-services/", SV["overview_title"], "Restorative, cosmetic, preventative and sedation dentistry, Invisalign and 0% patient financing at Atlantis Dental Yaletown in downtown Vancouver.", body, active="services")


def service_page(pg):
    """Standard service page rendered from content/services.toml."""
    path = pg["path"]
    main = render_text(pg.get("intro", ""), first_class="lead reveal", para_class="reveal")
    for sec in pg.get("sections", []):
        main += f'\n<h2 class="reveal">{sec["heading"].replace("&", "&amp;")}</h2>\n' + render_text(sec["text"], para_class="reveal")
    cards = pg.get("cards", [])
    if cards:
        cols = "grid--3" if len(cards) >= 3 else "grid--2"
        cs = ""
        for c in cards:
            ic = f'<div class="card__icon">{icon(c["icon"])}</div>' if c.get("icon") else ""
            cs += f'<div class="card{"" if c.get("icon") else " card--soft"}">{ic}<h2 class="card__title">{c["title"].replace("&", "&amp;")}</h2><p>{c["text"]}</p></div>'
        main += f'<div class="grid {cols} reveal mt-2">{cs}</div>'
    vid = f'<div class="reveal mt-2 maxw-640">{yt_card(pg["video"], pg.get("video_title", pg["title"]))}</div>' if pg.get("video") else ""
    body = f"""
{page_hero(pg["title"], pg.get("subtitle", ""), [("Services", "/our-services/"), (pg["menu_label"], path)], pg["menu_label"])}
<section class="section"><div class="container with-aside">
  <div>
    <div class="img-frame reveal mb-25 ar-21-9"><img src="{pg["image"]}" alt="{pg.get("image_alt", "")}" width="1600" height="686" loading="lazy" class="ar-21-9"></div>
    <div class="prose">{main}</div>
    {vid}
  </div>
  {aside_services(path)}
</div></section>
{cta_band()}
"""
    return page(path, pg["title"], pg["seo_description"], body, active="services", og_image=pg["image"])


def invisalign():
    checks = ["No pokey wires or discomfort", "Available for children, teens and adults", "Clear and removable to fit your lifestyle", "Fewer and shorter appointments", "No food restrictions", "Easier to maintain your oral health"]
    checks_html = "".join(f'<li>{icon("shield")}<span>{c}</span></li>' for c in checks)
    signs = ["Receding gums", "Gum disease", "Indentations at the gum line", "Cold sensitivity", "Chipped or fractured teeth", "Tooth loss"]
    signs_html = "".join(f"<li>{s}</li>" for s in signs)
    Y = '<img class="check-icon" src="/assets/img/brand/check-mark.svg" alt="Yes" width="22" height="22">'
    N = '<img class="check-icon check-icon--no" src="/assets/img/brand/check-mark-grey.svg" alt="No" width="22" height="22">'
    rows = [
        ("Made from SmartTrack material for predictability and comfort", Y, "", ""),
        ("In-person consultations with real doctors", Y, N, ""),
        ("Easily removable for eating, drinking &amp; flossing", Y, N, ""),
        ("No emergency visits for broken wires", Y, N, ""),
        ("Virtually invisible", Y, N, ""),
        ("Made from traditional brackets and wires", "", "", N),
        ("Each aligner is trimmed to your gum line for optimal comfort and appearance", Y, "", ""),
        ("Blue compliance indicator dots to help you stay on track", Y, "", ""),
        ("Covered by many orthodontic insurance plans", Y, N, N),
    ]
    table = "".join(f"<tr><th scope=\"row\">{r[0]}</th><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>" for r in rows)
    body = f"""
{page_hero("Invisalign in Downtown Vancouver", "We are committed to creating healthy smiles. When your teeth are properly aligned, the health benefits are clear.", [("Services", "/our-services/"), ("Invisalign", "/invisalign/")], "Invisalign® Provider")}
<section class="section"><div class="container">
  <div class="split">
    <div class="reveal">
      <img class="h-48 mb-15" src="/assets/img/brand/invisalign-logo.svg" alt="Invisalign" width="220" height="60">
      <h2>What are the benefits?</h2>
      <ul class="contact-list">
        <li>{icon("heart")}<span><strong>Healthier gums</strong> because it is easier to brush and floss</span></li>
        <li>{icon("sparkle")}<span><strong>Improved dental hygiene</strong> because of reduced plaque buildup and tooth decay</span></li>
        <li>{icon("shield")}<span><strong>Less wear and trauma to your teeth</strong> because of less chipping, breaking and reduced stress on the jawbone and joints</span></li>
      </ul>
      <p class="muted text-sm">*Source: American Association of Orthodontists</p>
    </div>
    <div class="img-frame reveal" data-delay="1"><img src="/assets/img/invisalign-aligner.jpg" alt="Clear Invisalign aligner held between fingertips" width="1600" height="1067" loading="lazy"></div>
  </div>
</div></section>

<section class="section section--soft"><div class="container">
  <div class="section__head center reveal"><p class="eyebrow">Steps to a healthy smile</p><h2>It’s as easy as 1-2-3</h2></div>
  <div class="steps">
    <div class="step reveal"><img class="step-img" src="/assets/img/brand/Imnvisalign-Doctors-with-Patient.jpg" alt="" width="600" height="400" loading="lazy"><h3>Smile Step #1</h3><p><strong>Sign up for your free, no obligation, Dental Scan &amp; Treatment Plan Session</strong></p><p>Our dental team will take a 3D image of your teeth in minutes using our iTero digital scanner. Then, we’ll show you what your smile and bite could look like using an AI-powered, Outcome Simulator. Our dental team will take the time to review the results of your 3D scan and the Outcome Simulator. If Invisalign is the right treatment for you, we will review the process and share the financing options that are available.</p></div>
    <div class="step reveal" data-delay="1"><img class="step-img" src="/assets/img/brand/Aligners-Focus-2-HR.jpg" alt="" width="600" height="400" loading="lazy"><h3>Smile Step #2</h3><p><strong>Start your Smile Journey</strong></p><p>If Invisalign clear aligner treatment is right for you, we will provide you with a series of trays customized to your individual needs. You will need to wear the trays for 20 to 22 hours every day except for when you eat, brush and floss. Each week, you’ll switch your aligners. And, every 3 months or so, you’ll visit the office to check in with our dental team to ensure your treatment is on track and your teeth and gums are staying healthy. We’ll monitor your dental health throughout the journey.</p></div>
    <div class="step reveal" data-delay="2"><img class="step-img" src="/assets/img/brand/Invisalign-Adults-Traveling-3.jpg" alt="" width="600" height="400" loading="lazy"><h3>Smile Step #3</h3><p><strong>Celebrate your healthy smile</strong></p><p>Congratulations. You made it. Your teeth are straight and healthy and your smile is beautiful. We will make sure you have completed all the requirements of the treatment and may recommend retainers to ensure you maintain your beautiful smile.</p></div>
  </div>
</div></section>

<section class="section"><div class="container"><div class="cta-band reveal">
  <div><h2>You’re invited to a free, no-obligation, Dental Scan &amp; Treatment Plan session compliments of our office.</h2><p>Your smile matters to us. Schedule your free, no obligation, Dental Scan &amp; Treatment Plan session today. And when you are done with your appointment, we can send you the pictures to share with your family and friends. They are sure to be impressed.</p></div>
  <div class="actions"><a class="btn btn--accent btn--lg" href="/contact-us/book-now/">{icon("calendar")}Book My Free Scan</a><a class="btn btn--ghost-light btn--lg" href="tel:{PHONE_TEL}">{icon("phone")}{PHONE}</a></div>
</div></div></section>

<section class="section section--soft"><div class="container">
  <div class="split">
    <div class="reveal">
      <p class="eyebrow">Introducing Invisalign Clear Aligner Therapy</p>
      <h2>Straight Teeth Mean Better Oral Health.</h2>
      <p>Invisalign treatment can be a great solution – for adults, teens, and even children – using clear aligner therapy to improve your smile and bite. Invisalign treatment uses a series of clear aligners that work to correct your orthodontic issues while offering the appearance of wearing no braces.</p>
      <ul class="contact-list">{checks_html}</ul>
    </div>
    <div class="grid reveal grid-2-tight" data-delay="1">
      <div class="img-frame span-all"><img class="ar-16-10" src="/assets/img/brand/Teen_Irresistible_Invis_Is_Comfortable-to-wear.jpg" alt="Teen smiling with Invisalign" width="800" height="500" loading="lazy"></div>
      <div class="img-frame"><img class="sq" src="/assets/img/brand/Invisalign-first-kid-holding-invisalign.jpg" alt="Child holding an Invisalign aligner" width="400" height="400" loading="lazy"></div>
      <div class="img-frame"><img class="sq" src="/assets/img/brand/girl-with-happy-smile.jpg" alt="Girl with a happy smile" width="400" height="400" loading="lazy"></div>
    </div>
  </div>
  <div class="prose reveal mt-3 maxw-none">
    <h3>Plus, with our digital scanner, you can view your virtual results before even starting treatment.</h3>
    <p>For over 20 years, Invisalign has invested in innovations and technological advancements to make it possible to fix nearly all common teeth-straightening and bite issues, from simple to complex. Rest assured, Invisalign clear-aligner treatment is the most advanced clear aligner system in the world, backed by more than two decades of innovation. And, at Atlantis Dental Yaletown, our entire practice team is here to improve your oral health and support you through this journey.</p>
  </div>
</div></section>

<section class="section"><div class="container with-aside">
  <div class="prose">
    <h2 class="reveal mt-0">Is Invisalign covered by my Dental Insurance Benefits?</h2>
    <p class="reveal">Many insurance plans cover all or a portion of orthodontic treatment. Check with your insurance provider for details of your specific plan. The final cost of your treatment and payment terms depends on your specific case and determined based on each individual patient needs. We are also offer <a href="/patient-financing/">flexible financing options</a> that fit your budget.</p>
    <h2 class="reveal">What are the signs of misaligned teeth?</h2>
    <p class="reveal">If you’re experiencing cold sensitivity, jaw or muscle pain or headaches, teeth chipping or wearing, difficulty flossing, bad breath, dry mouth or receding gums, you could have abnormal tooth alignment. If you are presenting any of these conditions, we can help get your teeth out of trauma and we can help treat the problem and the symptoms related to these conditions:</p>
    <h3 class="reveal">As your oral health professionals, these conditions are a concern. There are consequences with poorly aligned teeth including:</h3>
    <ul class="reveal two-col">{signs_html}</ul>
    <p class="reveal">Severe gum infections may increase your risk of heart disease, stroke, lunch diseases, problems in pregnancy, complications related to diabetes and Alzheimer’s disease. All these are major health concerns and the solution is straighter teeth.</p>
    <h2 class="reveal">What are the differences between Invisalign® and other clear aligners?</h2>
    <div class="reveal scroll-x"><table class="compare">
      <thead><tr><th scope="col"></th><th scope="col"><img class="logo-inline" src="/assets/img/brand/invisalign-logo.svg" alt="Invisalign" width="120" height="32"><span class="logo-inline-sm">clear aligners</span></th><th scope="col">Other clear aligners</th><th scope="col">Traditional braces</th></tr></thead>
      <tbody>{table}</tbody></table></div>
    <div class="reveal mt-2 maxw-640">{yt_card("6g9hgXwU85I", "Atlantis Dental Centre – Invisalign® Provider in Vancouver")}</div>
  </div>
  {aside_services("/invisalign/")}
</div></section>
{cta_band("Ready to start your Smile Journey?", "Book your free, no-obligation Dental Scan & Treatment Plan session with our Invisalign team today.")}
"""
    return page("/invisalign/", "Invisalign in Downtown Vancouver", "Invisalign clear aligners at Atlantis Dental Yaletown. Free, no-obligation iTero dental scan & treatment plan session, flexible financing, and care for children, teens and adults.", body, active="services", og_image="/assets/img/invisalign-aligner.jpg")


def financing():
    body = f"""
{page_hero("Patient Financing", "We understand that dental expenses can be significant. That’s why we’re proud to offer 0% Patient Financing so that you can get the dental treatment you need, without financial constraints holding you back.", [("Services", "/our-services/"), ("Patient Financing", "/patient-financing/")], "0% Patient Financing")}
<section class="section"><div class="container with-aside">
  <div class="prose">
    <p class="reveal">123Dentist Patient Financing offers several financing options to fit all budgets. In partnership with you, our professionals will help you choose the payment method that best suits your life and goal.</p>
    <h2 class="reveal mt-2">Financing plans that make you smile.</h2>
    <p class="reveal">123Dentist Patient Financing* offers bite-sized 0% interest payment plan options to make looking your best more affordable. Take advantage of flexible financing options, which allow you to achieve your full potential now – and pay later.</p>
    <p class="muted reveal text-90">* See legal notes at the bottom of the page.</p>
    <h2 class="reveal">Is your dental treatment or procedure not covered by insurance?</h2>
    <h3 class="reveal">Apply online, on your time – any time!</h3>
    <div class="grid grid--2 reveal">
      <div class="card card--soft">{icon("clock")}<h3 class="mt-075">24/7 approvals</h3><p>Apply anytime and get your approval status quickly – 24/7.</p></div>
      <div class="card card--soft">{icon("percent")}<h3 class="mt-075">Pay over time</h3><p>Give yourself the luxury of paying over-time instead of all at once.</p></div>
    </div>
    <div class="grid grid--2 reveal mt-15">
      <div class="img-frame"><img src="/assets/img/brand/young-smiling-couple-walking.jpg" alt="Young smiling couple walking" width="600" height="400" loading="lazy"></div>
      <div class="img-frame"><img src="/assets/img/brand/group-of-friends-having-fun.jpg" alt="Group of friends having fun" width="600" height="400" loading="lazy"></div>
    </div>
    <div class="cta-band reveal mt-2"><div><h2 class="fs-16">Apply for financing online in minutes!</h2><p>123Dentist Patient Financing, in partnership with Fairstone.</p></div><div class="actions"><a class="btn btn--accent btn--lg" href="{FINANCING_APPLY_URL}" target="_blank" rel="noopener">Apply Online {icon("arrow")}</a></div></div>
    <h2 class="reveal">Insurance</h2>
    <p class="reveal">We invite you to contact your insurance company to find out the terms and conditions of coverage for eligible dental care under your policy, and if the dental care is covered by your insurance, we encourage you to have your policy information on hand when you come to the clinic. Whenever possible, we deal directly with your insurance company online in order to obtain an immediate response on your coverage and thus allow you, if necessary, to pay only the non-covered portion of the treatment you received.</p>
    <p class="reveal">But if the dental treatment you require is not covered, or only partly covered by your insurance, we’re pleased to be able to offer you our 123Dentist Patient Financing – exclusively available only at participating dental clinics within our network.</p>
    <h2 class="reveal">Legal notes</h2>
    <p class="muted reveal">*Upon credit approval. Subject to terms and conditions.</p>
  </div>
  {aside_services("/patient-financing/")}
</div></section>
{cta_band()}
"""
    return page("/patient-financing/", "Patient Financing – 0% Interest Payment Plans", "0% interest patient financing through 123Dentist Patient Financing (Fairstone) at Atlantis Dental Yaletown. Apply online 24/7. Insurance guidance for Vancouver patients.", body, active="services", og_image="/assets/img/brand/young-smiling-couple-walking.jpg")


def build():
    out = [("/our-services/", overview())]
    out += [(pg["path"], service_page(pg)) for pg in SV["pages"]]
    out += [("/invisalign/", invisalign()), ("/patient-financing/", financing())]
    return out
