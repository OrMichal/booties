class XMotivation extends HTMLElement {
  static tag = `x-motivation`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/utils/Motivation/style.css`;


    const div = document.createElement("div");
    div.classList = ["container"];

    const div_main = document.createElement("div");
    div_main.classList = ["wrapper"];
    div.appendChild(div_main);
    [
      { text: "Vše máme skladem", image: `./img/Group 195.png` },
      { text: "Doprava zdarma", image: `./img/Group 196.png` },
      { text: "Jak měřit velikosti", image: `./img/Group 293.png` },
    ].forEach(d => {
      const item = document.createElement("a");
      item.href = `#`;
      item.classList = ["item"];

      const img_container = document.createElement("div");
      img_container.classList = ["img-container"];

      const img = document.createElement("img");
      img.src = d.image;
      img.alt = `text image`;
      img_container.appendChild(img);

      item.appendChild(img_container);

      const text = document.createElement("span");
      text.classList = ["text"];
      text.textContent = d.text;
      item.appendChild(text);

      div_main.appendChild(item);
    });

    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(div);
  }
}

customElements.define(XMotivation.tag, XMotivation);
