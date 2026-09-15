# -*- coding: utf-8 -*-
from src.layout import *
from src.components import page_hero


def privacy():
    body = f"""
{page_hero("Privacy Policy", "Statement regarding our policy on the protection of personal information", [("Privacy Policy", "/privacy-policy/")])}
<section class="section"><div class="container container--narrow prose">
<h2>STATEMENT REGARDING OUR POLICY ON THE PROTECTION OF PERSONAL INFORMATION</h2>
<p>For 123Dentist, respecting your privacy is essential. This is why we take all the necessary measures to protect and keep confidential all personal information you entrust to us.</p>
<p>Whether to serve you daily, when you receive services in our dental clinic, or to comply with our legal obligations, we must collect, use and communicate certain personal information.</p>
<p>The information collected allows us to identify you and serve you in a way that meets your expectations and allows us to comply with different legal and regulatory requirements.</p>
<p>It is on that basis that our Personal Information Protection Policy (the “Policy”) was designed and is applied within our dental centers. This statement explains why and how, applying the provisions of our Policy, we collect, process, and protect your personal information.</p>
<h3>Our Policy is based on four main principles:</h3>
<ul>
<li>Your consent to the collection, use and communication of your personal information by professionals working in our dental clinic.</li>
<li>Our commitment to only collect necessary personal information.</li>
<li>Our responsibilities regarding the security and protection of the confidentiality of your personal information.</li>
<li>Our transparency regarding our practices and obligations in this regard.</li>
</ul>
<h2>Obtaining your consent</h2>
<h3>What does my consent to the collection, use and communication of personal information consist of?</h3>
<p>By giving your consent, you authorize dental professionals and members of the clinical team to collect, use and communicate personal information, to serve you and comply with their legal obligations.</p>
<p>This consent to the collection, use and communication of your personal information is necessary to serve you. It remains valid as long as you are a patient in one of our dental clinic.</p>
<h3>Can I withdraw my consent to the processing of my personal information or refuse to provide certain information?</h3>
<p>If you decide to withdraw your consent to the collection, use and communication of your personal information necessary to serve you and to comply with our legal obligations, we will send you the required information to explain the repercussions of a such decision on our ability to provide our services.</p>
<p>In some cases, it will not be possible to withdraw this consent at your discretion due to legal or regulatory requirements.</p>
<p>If you object to us collecting certain personal information, we may not be able to provide you with the required services.</p>
<h2>Limiting the collection of information to what is necessary.</h2>
<h3>What type of personal information could be collected?</h3>
<p>Information is considered personal when it concerns an individual and allows them to be identified. This type of information is confidential.</p>
<p>The type of personal information we may collect varies depending on the type of service required. This information may include but is not limited to:</p>
<ul><li>First and last name</li><li>Date of birth</li><li>Address</li><li>Email Address</li><li>Telephone number</li><li>Health information</li><li>Financial information</li></ul>
<p>*If you provide us with information about another person, you must ensure that you are authorized to do so.</p>
<p>If you use our website, we may also collect certain information, such as your IP address, as part of your digital interactions. For more information regarding the information collected through our website and our use of cookies, please see our Online Privacy Policy.</p>
<p><strong>IMPORTANT:</strong> We limit the collection of your information to what is necessary to serve you.</p>
<h3>Your personal information may be collected from three sources:</h3>
<ul>
<li>When you wish to obtain services offered in our dental clinic or communicate with us, regardless of the means of communication you use (in person in one of our dental clinic, by telephone, email or, where applicable, by live chat online or when you respond to a survey, etc.).</li>
<li>When you use services offered in one of our dental clinic.</li>
<li>When you browse our websites or use online services. This information may be collected through cookies or directly on our sites or applications. For more information, please see our Online Privacy Policy.</li>
</ul>
<h3>Who has access to my personal information?</h3>
<p>Access to your information is limited to authorized professionals and personnel who need access to perform their duties.</p>
<p>Professionals and clinical teams are committed to protecting the confidentiality of the personal information they need to perform their professional duties. In the event that we have to communicate your personal information to third parties, we will make sure to inform you and ask for your consent, where this is required.</p>
<p>In all cases, we ensure that security measures are put in place to ensure the protection of the personal information we communicate.</p>
<h2>Ensuring the security and confidentiality of your information.</h2>
<p>No mobile information or SMS opt-in consent will be shared with third parties or affiliates for marketing or promotional purposes.</p>
<h3>Is my personal information secure?</h3>
<p>We follow generally accepted industry standards to protect the information submitted to us, both during transmission and once we receive it. We maintain appropriate physical, technical and administrative safeguards to protect personal information against accidental or unlawful destruction, accidental loss, unauthorized alteration, unauthorized disclosure or access, misuse, and any other unlawful form of processing of the personal information in our possession. We have taken steps to ensure that the only personnel, under a duty of confidentiality, who are granted access to your personal information are those with a business ‘need-to-know’ or whose duties reasonably require such information.</p>
<h3>How long is my personal information kept?</h3>
<p>We only retain personal information for as long as reasonably necessary to achieve the purposes for which it was collected or to comply with the minimum retention periods prescribed by the laws and regulations we are subjected to. Once the retention period has expired, we ensure that your personal information is destroyed.</p>
<h3>Can I have access to my personal information or request correction?</h3>
<p>You can ask us to access the personal information we hold or to correct it if it turns out to be inaccurate, incomplete or ambiguous. You can do the same if you wish to modify information that we hold, for example following a change in your personal situation or a change of address. It is your responsibility to contact the dental clinic where you receive care to update your information.</p>
<p>To do this, please consult the information provided in the “How to contact us” section.</p>
<h3>How to contact us?</h3>
<p>Please direct any questions or requests regarding the processing of your personal information to the manager of the dental clinic where you receive care or to contact the person responsible for the protection of personal information directly.</p>
<p>The person responsible for the protection of personal information and privacy within our organization is responsible for the practices applied in our dental clinic. You can contact that person using the following contact details:</p>
<p><strong>Privacy Officer</strong><br><a href="mailto:privacy@123dentist.com">privacy@123dentist.com</a></p>
<p>If such cases, please indicate your name and contact information, the nature of your request, the name and address of the clinic where you receive care, the name of your dental professional or the person with whom you have already communicated and any other relevant information.</p>
</div></section>
"""
    return page("/privacy-policy/", "Privacy Policy", "Atlantis Dental Centre privacy policy: how we collect, use, protect and retain your personal information.", body)


def terms():
    body = f"""
{page_hero("Terms of Use", "Usage agreement for the website of Atlantis Dental Centre", [("Terms of Use", "/terms-of-use/")])}
<section class="section"><div class="container container--narrow prose">
<h2>USAGE AGREEMENT FOR THE WEBSITE OF ATLANTIS DENTAL CENTRE</h2>
<h3>Your acceptance of this Agreement</h3>
<p>The website (the “Site”) is owned and operated by Atlantis Dental Centre (“Atlantis Dental Centre”). Each time you use the Site, you signify your acceptance and agreement and the acceptance and agreement of any person you purport to represent (for purposes of this Agreement, “person” includes natural persons and any type of incorporated or unincorporated entity), without limitation or qualification, to be bound by this Website Usage Agreement (the “Agreement”).</p>
<p>If you do not accept the terms of use stated here, do not use the Site.</p>
<p>Atlantis Dental Centre reserves the right to modify the terms and conditions of this agreement at any time. You are responsible for keeping up to date with these terms and conditions. Your continued use of the Site after any changes to this Agreement have been posted will be considered as signifying your understanding and acceptance of those changes.</p>
<h3>Authorized users and access</h3>
<p>By using the Site, you signify your understanding and agreement that you are responsible for complying with all applicable laws and regulations. The Site may not be used by persons in territories where access to the Site in full or in part, or use of the Site in full or in part, is illegal or prohibited.</p>
<h3>No professional advice</h3>
<p>The Site is for convenience and informational purposes only. The Site is not intended to constitute a comprehensive or detailed statement concerning the matters addressed, professional or any other kind of advice, or an offer to sell or a solicitation to buy any product or service. The Site is not a tool for seeking professional advice. You should seek appropriate, qualified professional advice before acting or omitting to act based on any information provided on or though the Site.</p>
<p>Atlantis Dental Centre takes every precaution and uses every means at its disposal, including encryption, to optimize the security and confidentiality of your personal information. Nonetheless, due to the nature of the Internet and associated technologies, security and privacy risks cannot be fully eliminated, and Atlantis Dental Centre cannot guarantee that your personal information will not be disclosed in ways that run counter to the provisions of this policy.</p>
<h3>Intellectual property</h3>
<p>The Site and its contents (including but not limited to text, images, videos and software) are owned by Atlantis Dental Centre or its assignees and are protected by Canadian and international laws governing copyright, trademarks and other applicable issues. Atlantis Dental Centre reserves all intellectual property rights that are not expressly granted under this Agreement.</p>
<h3>Protection of personal information</h3>
<p>Atlantis Dental Centre collects, uses and discloses your personal information in compliance with the <a href="/privacy-policy/">Privacy Policy</a> for website and electronic communications of Atlantis Dental Centre, which you can view by clicking on the provided link. By accepting this Agreement and each time you use the Site, you consent to the collection, use and disclosure of your personal information by Atlantis Dental Centre in accordance with the Policy in its current form, without any further notice or any liability to you or any other person.</p>
<h3>Ownership and permitted use of the Site</h3>
<p>© <span data-year>2026</span> Atlantis Dental Centre. All rights reserved. Note that any product, process or technology described in the Site’s content may be subject to other intellectual property rights reserved by Atlantis Dental Centre. Your use of the Site does not transfer to you any ownership or other rights in the Site or its content. No material on this site may be copied, reproduced, republished, uploaded, posted, transmitted or distributed in any way. The Site is available for your legitimate personal and non-commercial use.</p>
<p>You may print or download Site pages for your personal and non-commercial use provided that you do not modify any of the Site’s pages or other content and you do not remove or alter any visible or non-visible identification, marks, notices, or disclaimers. You may not use the Site or its content for any other purpose or in any other way. In particular, the Site and its content may not be reproduced, imitated, copied, republished, uploaded, posted, transmitted, indexed, catalogued, mirrored or distributed in any way, in whole or in part, without the express prior written consent of Atlantis Dental Centre. Atlantis Dental Centre and its logo are registered and protected trademarks. All other trademarks are the property of their respective owners.</p>
<h3>Warnings</h3>
<p>The information and materials on this Site may contain typographical errors or other errors or inaccuracies (including errors, inaccuracies or omissions in the descriptions of products or services, pricing, availability or self-assessment of your current condition) and may not be complete or updated. Atlantis Dental Centre does not guarantee that any document or information on the site is free from error, is complete or is updated. Atlantis Dental Centre may change any information or materials on the Site at any time without prior notice, but Atlantis Dental Centre makes no formal promise to update the elements and information contained on this Site. Atlantis Dental Centre makes no statement to the effect that the content provided on Site is applicable, legitimately accessible or permitted to be used outside of Canada.</p>
<h3>Other sites</h3>
<p>For your convenience, the Site may include links to other Internet sites or resources and businesses operated by other persons (collectively, “Other Sites”). Other Sites are independent from Atlantis Dental Centre, and Atlantis Dental Centre has no responsibility or liability for or control over Other Sites or their business, goods, services or content. Your use of Other Sites and your dealings with the owners or operators of Other Sites are at your own risk.</p>
<h3>No Warranties</h3>
<p>Atlantis Dental Centre does not warrant the quality, accuracy or completeness of any information on our website. Such information is provided “as is” without warranty or condition of any kind. This website may include inaccuracies or typographical errors. In no event shall Atlantis Dental Centre be liable for any damages whatsoever, including special, indirect or consequential damages, arising out of or in connection with the use or performance of information available on this website.</p>
<h3>No Endorsement</h3>
<p>No endorsement of any third-party products or services is expressed or implied by any information, material or content referred to or included on, or linked from or to this website</p>
<h3>Changes to this Agreement</h3>
<p>Atlantis Dental Centre may, from time to time and at its sole discretion, change or supplement this Agreement as it relates to your future use of the Site, for any reason and without any prior notice or any liability to you or any other person. You may not change or amend this Agreement in any manner whatsoever.</p>
<h3>Other matters</h3>
<p>This Agreement, including any changes made to this Agreement from time to time, constitutes the entire agreement between you and Atlantis Dental Centre relating to your use of the Site, and supersedes all previous agreements, written, oral or otherwise, between you and Atlantis Dental Centre with respect to your use of the Site.</p>
<p>Should any provision of this Agreement be found unlawful, void or for any reason unenforceable, then that provision shall be deemed to be severed from the rest of this Agreement and shall not affect the validity or enforceability of any remaining provisions. The provisions of this Agreement shall be drawn in favour of and shall be binding upon Atlantis Dental Centre and its successors and assignees and related persons, and of you and your heirs, executors, administrators, successors, permitted assignees and personal representatives. You may not assign this Agreement or your rights and obligations under this Agreement without the express prior written consent of Atlantis Dental Centre, which may be withheld at Atlantis Dental Centre’s sole discretion. Atlantis Dental Centre may assign this Agreement and its rights and obligations under this Agreement without your consent.</p>
<p>No consent or waiver by either party to or of any breach or default by the other party in its performance of its obligations under this Agreement shall be deemed or construed to signify consent to or a waiver of a continuing breach or default or any other breach or default of those or any other obligations of that party. No consent or waiver will be effective unless in writing and signed by both parties.</p>
</div></section>
"""
    return page("/terms-of-use/", "Terms of Use", "Website usage agreement for Atlantis Dental Centre.", body)


def build():
    return [("/privacy-policy/", privacy()), ("/terms-of-use/", terms())]
