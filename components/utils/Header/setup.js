class Header extends HTMLElement {
  static tag = "x-header";
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const header = document.createElement("header");
    header.classList = ["header-wrapper"];

    const div_content = document.createElement("div");
    div_content.classList = ["content"];

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./components/utils/Header/style.css";
    
    const div_contacts = document.createElement("div");
    div_contacts.classList = ["contacts"];
    
    const img_telnum = document.createElement("img");
    img_telnum.classList = ["icon"];
    img_telnum.src = "./img/8.png";
    img_telnum.alt = "tel icon";

    const a_telnum = document.createElement("a");
    a_telnum.innerHTML = `+420 777 666 555`;
    a_telnum.href = `tel:+420777666555`;
    a_telnum.classList = ["telnum"];

    const div_tel = document.createElement("div");
    div_tel.classList = ["icon-text"];
    div_tel.appendChild(img_telnum);
    div_tel.appendChild(a_telnum);
    
    const a_mail = document.createElement("a");
    a_mail.href = `mailto:info@nejlepsiboticky.cz`;
    a_mail.innerHTML = `info@nejlepsiboticky.cz`;
    a_mail.classList = ["mail"];

    const div_mail = document.createElement("div");
    div_mail.classList = ["icon-text"];
    div_mail.appendChild(a_mail);

    div_contacts.appendChild(div_tel);
    div_contacts.appendChild(div_mail);

    const img_login = document.createElement("img");
    img_login.classList = ["icon"];
    img_login.src = `./img/profile-user.png`;
    img_login.alt = `profile icon`;

    const a_login = document.createElement("a");
    a_login.href = `#`;
    a_login.innerHTML = `Přihlásit se`;

    const div_login = document.createElement("div");
    div_login.classList = ["icon-text"];
    div_login.appendChild(img_login);
    div_login.appendChild(a_login);

    div_content.appendChild(div_contacts);
    div_content.appendChild(div_login);

    header.appendChild(div_content);

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(header);
  }
}

customElements.define(Header.tag, Header);
