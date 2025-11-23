class Footer extends HTMLElement {
  static tag = "x-footer";
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const div = document.createElement("div");
    div.classList = ["container"];

    const footer = document.createElement("footer");
    div.appendChild(footer);

    const newsletter = document.createElement("x-newsletter");
    footer.appendChild(newsletter);

    const footer_main = document.createElement("div");
    footer_main.classList = ["wrapper"];
    footer.appendChild(footer_main);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `./components/utils/Footer/style.css`;

    const js_newsletter_import = document.createElement("script");
    js_newsletter_import.src = `./components/utils/Newsletter/setup.js`;

    const section_info = document.createElement("section");

    footer_main.appendChild(section_info);

    const div_info_about = document.createElement("div");
    div_info_about.classList = ["basic-info-wrapper"];
    section_info.appendChild(div_info_about);

    const div_info_about_h6 = document.createElement("h6");
    div_info_about_h6.classList = ["info-heading"];
    div_info_about_h6.innerHTML = `o nás`;
    div_info_about.appendChild(div_info_about_h6);

    const div_info_about_p = document.createElement("p");
    div_info_about_p.classList = ["info-article"];
    div_info_about_p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam augue, commodo ut est eget, lacinia facilisis metus. Aliquam in diam et lorem porta sodales vitae nec justo. Fusce non tristique magna. Suspendisse vulputate sit amet libero ut dignissim. Vivamus tincidunt libero vitae odio dapibus, nec lacinia lorem rutrum. Nullam eu nulla non urna sodales sodales. Etiam in egestas velit. Praesent tincidunt porttitor ornare. Maecenas ut ultrices dui. Aliquam blandit lobortis elit, ut cursus arcu porta nec. Curabitur tincidunt consequat nisi, sit amet ornare massa scelerisque eleifend. Ut molestie rutrum consectetur. Vestibulum tellus risus, efficitur quis euismod finibus, porttitor quis libero. Sed eu pharetra metus. Cras dignissim ac nisi et tincidunt. `;
    div_info_about.appendChild(div_info_about_p);

    const div_info_about_img = document.createElement("img");
    div_info_about_img.src = `./img/Group 4.png`;
    div_info_about_img.alt = `eshop logo`;
    div_info_about_img.classList = ["info-img"];
    div_info_about.appendChild(div_info_about_img);


    const div_info_offer = document.createElement("div");
    div_info_offer.classList = ["basic-info-wrapper"];
    section_info.appendChild(div_info_offer);

    const div_info_offer_h6 = document.createElement("h6");
    div_info_offer_h6.classList = ["info-heading"];
    div_info_offer_h6.innerHTML = `Naše nabíka`;
    div_info_offer.appendChild(div_info_offer_h6);

    const div_info_offer_sections = document.createElement("div");
    div_info_offer_sections.classList = ["offer-sections"];
    div_info_offer.appendChild(div_info_offer_sections);


    const div_info_offer_section_female = document.createElement("div");
    div_info_offer_section_female.classList = ["section"];
    div_info_offer_sections.appendChild(div_info_offer_section_female);

    const div_info_offer_section_female_h6 = document.createElement("h6");
    div_info_offer_section_female_h6.classList = ["heading"];
    div_info_offer_section_female_h6.innerHTML = `Dívčí`;
    div_info_offer_section_female.appendChild(div_info_offer_section_female_h6);

    const div_info_offer_section_female_ul = document.createElement("ul");
    div_info_offer_section_female_ul.classList = ["items"];
    div_info_offer_section_female.appendChild(div_info_offer_section_female_ul);

    ["Tenisky", "Holinky", "Sandály", "Baleríny", "Polobotky"].forEach(i => {
      const li = document.createElement("li");
      li.classList = ["item"];
      div_info_offer_section_female_ul.appendChild(li);

      const a = document.createElement("a");
      li.appendChild(a);
      a.href = `/products?gender=female&type=${i.toLowerCase()}`;
      a.innerHTML = i;
    });

    const div_info_offer_section_male = document.createElement("div");
    div_info_offer_section_male.classList = ["section"];
    div_info_offer_sections.appendChild(div_info_offer_section_male);

    const div_info_offer_section_male_h6 = document.createElement("h6");
    div_info_offer_section_male_h6.classList = ["heading"];
    div_info_offer_section_male_h6.innerHTML = `Chlapecké`;
    div_info_offer_section_male.appendChild(div_info_offer_section_male_h6);

    const div_info_offer_section_male_ul = document.createElement("ul");
    div_info_offer_section_male_ul.classList = ["items"];
    div_info_offer_section_male.appendChild(div_info_offer_section_male_ul);

    ["Tenisky", "Holinky", "Sandály", "Baleríny", "Polobotky"].forEach(i => {
      const li = document.createElement("li");
      li.classList = ["item"];
      div_info_offer_section_male_ul.appendChild(li);

      const a = document.createElement("a");
      li.appendChild(a);
      a.href = `/products?gender=male&type=${i.toLowerCase()}`;
      a.innerHTML = i;
    });
    
    const section_contacts = document.createElement("section");
    section_contacts.classList = ["basic-info-wrapper"];
    footer_main.appendChild(section_contacts);

    const div_contacts_h6 = document.createElement("h6");
    div_contacts_h6.classList = ["info-heading"];
    div_contacts_h6.innerHTML = `Kontaktujte nás`;
    section_contacts.appendChild(div_contacts_h6);

    const div_contacts = document.createElement("div");
    div_contacts.classList = ["contact-links"];
    section_contacts.appendChild(div_contacts);

    const div_contacts_email = document.createElement("div");
    div_contacts_email.classList = ["contact-item"];
    div_contacts.appendChild(div_contacts_email);

    const div_contacts_email_img = document.createElement("img");
    div_contacts_email_img.src = `./img/6.png`;
    div_contacts_email_img.alt = `mail icon`;
    div_contacts_email_img.classList = ["icon"];
    div_contacts_email.appendChild(div_contacts_email_img);

    const div_contacts_email_span = document.createElement("a");
    div_contacts_email_span.innerHTML = `info@nejlepsiboticky.cz`;
    div_contacts_email_span.href = `mailto:${div_contacts_email_span.innerHTML}`
    div_contacts_email_span.classList = ["text"];
    div_contacts_email.appendChild(div_contacts_email_span);

    const div_contacts_tel = document.createElement("div");
    div_contacts_tel.classList = ["contact-item"];
    div_contacts.appendChild(div_contacts_tel);

    const div_contacts_tel_img = document.createElement("img");
    div_contacts_tel_img.src = `./img/8.png`;
    div_contacts_tel_img.classList = ["icon"];
    div_contacts_tel.appendChild(div_contacts_tel_img);

    const div_contacts_tel_a = document.createElement("a");
    div_contacts_tel_a.innerHTML = `+420 777 666 555`;
    div_contacts_tel_a.href = `tel:${div_contacts_tel_a.innerHTML}`;
    div_contacts_tel_a.classList = ["text"];
    div_contacts_tel.appendChild(div_contacts_tel_a);

    const div_contacts_socials = document.createElement("div");
    div_contacts_socials.classList = ["socials"];
    div_contacts.appendChild(div_contacts_socials);

    ["./img/facebook.png", "./img/Group 153.png", "./img/twitter.png"].forEach(s => {
      const img = document.createElement("img");
      img.src = s;
      img.classList = ["icon"];
      div_contacts_socials.appendChild(img);
    });

    const section_contacts_a_address = document.createElement("a");
    section_contacts_a_address.innerHTML = `Litvínovská 600,Praha 9,190 00`;
    section_contacts_a_address.classList = ["address"];
    section_contacts_a_address.href = `#`;
    section_contacts.appendChild(section_contacts_a_address);
    

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(js_newsletter_import);
    this.shadowRoot.appendChild(div);
  }
}

customElements.define(Footer.tag, Footer);
