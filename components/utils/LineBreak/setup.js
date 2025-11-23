class XLineBreak extends HTMLElement {
  static tag = `x-linebreak`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/utils/LineBreak/style.css`;



    const div_main = document.createElement("div");
    div_main.classList = ["wrapper"];

    const img = document.createElement("img");
    img.src = `./img/Group 295.png`;
    img.alt = `feet icon`;
    div_main.appendChild(img);

    const line = document.createElement("div");
    line.classList = ["line"];
    div_main.appendChild(line);

    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(div_main);
  }
}

customElements.define(XLineBreak.tag, XLineBreak);
