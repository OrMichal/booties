class Newsletter extends HTMLElement {
  static tag = `x-newsletter`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = `stylesheet`;
    link.href = `./components/utils/Newsletter/style.css`;


    const div_newsletter = document.createElement("div");
    div_newsletter.classList = ["wrapper"];

    const heading = document.createElement("h3");
    heading.innerHTML = `Nezmeškejte nové a výhodné akce`;
    heading.classList = ["heading"];
    div_newsletter.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Zadejte svůj e-mail a obratem vám bude zaslán PDF s inspirací zdarma.`;
    paragraph.classList = ["paragraph"];
    div_newsletter.appendChild(paragraph);

    const div_interaction = document.createElement("div");
    div_interaction.classList =  ["interactions"];
    div_newsletter.appendChild(div_interaction);

    const form = document.createElement("form");
    form.method = "GET";
    form.action = "/newsletter.php";

    const input = document.createElement("x-input");
    input.setAttribute("placeholder", `Zadejte svůj email...`);
    input.setAttribute("type", "email");
    input.setAttribute("name", "email");
    input.setAttribute("src", "./img/6.png");

    const button = document.createElement("x-button");
    button.setAttribute("type", "button");
    button.innerHTML = `přihlásit`;

    form.appendChild(input);
    form.appendChild(button);
    div_interaction.appendChild(form);

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(div_newsletter);
  }
}

customElements.define(Newsletter.tag, Newsletter);
