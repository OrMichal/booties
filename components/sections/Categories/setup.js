class CategoriesSection extends HTMLElement {
  static tag = `x-categories`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/sections/Categories/style.css`;


    const div = document.createElement("div");
    div.classList = ["container"];

    const div_main = document.createElement("div");
    div_main.classList = ["wrapper"];
    div.appendChild(div_main);

    const data = [
      { text: `Klučičí boty`, src: `./img/01.png` },
      { text: `Dívčí boty`, src: `./img/02.png` },
      { text: `Jak správně vybrat?`, src: `./img/03-01.png` },
    ];

    data.forEach(d => {
      const card = document.createElement("div");
      card.classList = ["card"];

      const img = document.createElement("img");
      img.src = d.src;
      card.appendChild(img);

      const text = document.createElement("span");
      text.classList = ["text"];
      text.innerHTML = d.text;
      card.appendChild(text);

      div_main.appendChild(card);
    });

    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(div);
  }
}

customElements.define(CategoriesSection.tag, CategoriesSection);
