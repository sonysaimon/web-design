# -*- coding: utf-8 -*-
from src.layout import *
from src.components import page_hero, cta_band, aside_why, yt_card

PATH = "/why-choose-us/"
TITLE = "Why Choose Us As Your Yaletown Dentist"
DESCRIPTION = "Atlantis Dental takes pride in being an authentic, genuine and integral part of Vancouver’s Yaletown community. Read our promises to patients and principles of excellence, and tour our office."
ACTIVE = "why"
OG_IMAGE = "/assets/img/clinic-reception.jpg"

PROMISES = [
    "To do our upmost to ensure all our patients are happy with their treatment.",
    "We promise to offer individualized treatment planed to suit our patient’s wants and needs. To set up hygiene, restorative, and/or aesthetic programs that are customized to each patient’s needs.",
    "We commit to staying current with education, innovations and potential in the dental industry through continuing education.",
    "We’re always “looking out” for new, beneficial technologies and products that help us solve our patients’ needs more comfortably, conveniently, efficiently, and effectively.",
    "We promise to meet our patients’ needs to the best of our ability, and whatever we cannot achieve on our own we will refer our patients to one of the many specialists in our network.",
    "We fully respect our patients’ valuable time, and use systems and technology that helps them enjoy a peaceful, comfortable and efficient experience.",
    "We promise to value what our patients’ value: health, vitality, beauty and success in all areas of their lives.",
]

PRINCIPLES = [
    ("Humanistic Health", "We get to know our patients personally so we can understand their lives and unique needs – both dental and lifestyle. We value the relationships we develop, and the mutual respect and loyalty that flow as a result of them."),
    ("Personal Care", "We believe that establishing a solid, friendly foundation is the key to a long-term dentist/patient relationship. That’s why we spend quality time with new patients to discover their oral health goals, share the unique Atlantis Dentist philosophy, and chat about possibilities and options. Once we established that the right “fit” exists between what our patients desire and our ability to help achieve their goals, we perform a cleaning, and then take patients “on a tour of their mouth” so that they can discover the possibilities for filling their specific wants and needs. We are facilitators who bring forth to our patients all the possibilities that modern dentistry can provide."),
    ("Experience", "Atlantis Dental’s principal dentist, Dr. Tom Karkanis, is a respected member of the dental community, and patients from all parts of the world who come to see him, specifically. As a passionate “lifelong learner,” Dr. Karkanis participates in a range of accredited study groups and continuing education programs. Dr. Karkanis has also developed a network of expert professional colleagues with whom he can confer or refer, if needed."),
    ("Technology", "We use dental technology for its efficiency, and to allow us to bring a broader range of possibilities and options to our patients. For example, we use (a) Soft Tissue Laser for effective and efficient treatment of gum disease and gum contouring and (b) Invisalign® invisible braces as a convenient lifestyle solution for bite correction."),
    ("Comprehensive And Collaborative Treatment Planning", "We understand that oral health is linked intrinsically to other areas of health, and to overall levels of self-esteem and positive well-being. In order to embrace this, we offer comprehensive and collaborative treatment planning with all of our patients. A key way that we demonstrate this is through (a) our use of Digital Xrays and Intraoral Camera video to share our observations and diagnoses with patients and (b) our proactive screening for oral cancer, and (c) continuous education of patients on the connection between oral health and overall health."),
    ("Child And Family Friendly", "Some dental practices “dissuade” children from becoming patients, because it takes a special kind of training and personal temperament– and they have neither. Fortunately, we have both and warmly invite our patients to bring their children. We are all about family and community, and are delighted when generations of patients from the same family turn to us for their needs."),
]


def body():
    promises = "".join(f'<li>{icon("shield")}<span>{p}</span></li>' for p in PROMISES)
    principles = "".join(
        f'<div class="principle reveal"><div class="principle__num">{i:02d}</div><div><h3>{t}</h3><p>{d}</p></div></div>'
        for i, (t, d) in enumerate(PRINCIPLES, 1)
    )
    return f"""
{page_hero("Why Choose Us As Your Yaletown Dentist", "See How Your Yaletown &amp; Cambie Dentist Provides Outstanding Dentistry", [("Why Us", "/why-choose-us/")], "What Sets Our Dental Clinic Apart")}
<section class="section"><div class="container with-aside">
  <div>
    <div class="split items-start">
      <div class="prose reveal">
        <h2 class="mt-0">What Sets Our Dental Clinic Apart</h2>
        <p class="lead">Atlantis Dental takes pride in being an authentic, genuine and integral part of Vancouver’s Yaletown community. We are passionate, heartfelt individuals who are committed to improving our patients’ oral health and providing outstanding cosmetic and restorative dentistry services. Read about our <a href="#promises">Promises to Our Patients</a> and our <a href="#principles">Principles of Excellence</a>.</p>
      </div>
      <div class="img-frame reveal" data-delay="1"><img src="/assets/img/dentist-itero.jpg" alt="Dentist showing a patient a digital scan of their teeth" width="1600" height="1067" loading="lazy"></div>
    </div>

    <h2 id="promises" class="reveal mt-3 anchor-offset">Promises To Our Patients</h2>
    <ul class="contact-list promise-list reveal">{promises}</ul>

    <h2 id="principles" class="reveal mt-3 anchor-offset">Principles Of Excellence</h2>
    <p class="lead reveal">Alongside the promises to our target market, we also stand for a set of principles that define who we are, where we’re going, and why we’re going in that direction. These principles include:</p>
    <div class="principles cols-1 mt-15">{principles}</div>
    <p class="lead reveal mt-2">Atlantis Dental is a dental practice which combines a commitment to dentistry with providing the services, techniques and solutions that enable us to achieve the results our patients look for.</p>

    <h2 id="office" class="reveal mt-35 anchor-offset">Tour Our Office</h2>
    <p class="muted reveal">Take a 3D virtual walk through Atlantis Dental Yaletown at 1278 Pacific Boulevard.</p>
    <div class="tour-frame reveal"><iframe src="{MATTERPORT_URL}" title="3D virtual tour of Atlantis Dental Yaletown" loading="lazy" allowfullscreen allow="xr-spatial-tracking"></iframe></div>
    <div class="grid grid--2 mt-15">
      <div class="img-frame reveal"><img src="/assets/img/clinic-reception.jpg" alt="Bright modern dental clinic reception area" width="1600" height="900" loading="lazy"></div>
      <div class="reveal" data-delay="1">{yt_card("p53ApTn7fmM", "Introduction to Atlantis Dental Centre, Yaletown Dentist")}</div>
    </div>
  </div>
  {aside_why("/why-choose-us/")}
</div></section>
{cta_band()}
"""
