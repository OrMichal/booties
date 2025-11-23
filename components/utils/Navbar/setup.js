class Navbar extends HTMLElement {
  static tag = `x-navbar`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/utils/Navbar/style.css`;


    const div_navbar = document.createElement("nav");
    div_navbar.classList = ["wrapper"];

    const div_navbar_nav = document.createElement("div");
    div_navbar_nav.classList = ["navbar"];
    div_navbar.appendChild(div_navbar_nav);

    const logo = document.createElement("img");
    logo.src = `./img/Group 4.png`;
    logo.alt = `logo`;
    div_navbar_nav.appendChild(logo);


    const div_market_options = document.createElement("div");
    div_market_options.classList = ["options"];
    div_navbar_nav.appendChild(div_market_options);

    const input = document.createElement("x-input");
    input.setAttribute("placeholder", "Vyhledat zboží...");
    div_market_options.appendChild(input);

    const a_cart = document.createElement("a");
    a_cart.href = `#`;
    const a_cart_img = document.createElement("img");
    a_cart.appendChild(a_cart_img);
    a_cart_img.src = `./img/heart.png`;
    div_market_options.appendChild(a_cart);

    const a_heart = document.createElement("a");
    a_heart.href = `#`;
    const a_heart_img = document.createElement("img");
    a_heart_img.src = `./img/heart.png`;
    div_market_options.appendChild(a_heart);


    const div_navbar_sections = document.createElement("div");
    div_navbar_sections.classList = ["sections"];
    div_navbar.appendChild(div_navbar_sections);

    const a_boys = document.createElement("a");
    a_boys.href = `#`;
    a_boys.classList = ["section"];
    div_navbar_sections.appendChild(a_boys);
    const a_boys_span = document.createElement("span");
    a_boys_span.innerHTML = `Chlapecké`;
    a_boys.appendChild(a_boys_span);
    const a_boys_img = document.createElement("img");
    a_boys_img.src = `./img/Group 169.png`;
    a_boys_img.alt = `boys icon`;
    a_boys.appendChild(a_boys_img);

    const a_girls = document.createElement("a");
    a_girls.href = `#`;
    a_girls.classList = ["section"];
    div_navbar_sections.appendChild(a_girls);
    const a_girls_span = document.createElement("span");
    a_girls_span.innerHTML = `Dívčí`;
    a_girls.appendChild(a_girls_span);
    const a_girls_img = document.createElement("img");
    a_girls_img.src = `./img/Group 171.png`;
    a_girls_img.alt = `girls icon`;
    a_girls.appendChild(a_girls_img);

    const a_accessories = document.createElement("a");
    a_accessories.href = `#`;
    a_accessories.classList = ["section"];
    a_accessories.innerHTML = `Doplňky`;
    div_navbar_sections.appendChild(a_accessories);

    const a_other = document.createElement("a");
    a_other.href = `#`;
    a_other.classList = ["section"];
    a_other.innerHTML = `Ostatní`;
    div_navbar_sections.appendChild(a_other);

    const a_contact = document.createElement("a");
    a_contact.href = `#`;
    a_contact.classList = ["section"];
    a_contact.innerHTML = `Kontakt`;
    div_navbar_sections.appendChild(a_contact);


    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(div_navbar);
  }
}

customElements.define(Navbar.tag, Navbar);
