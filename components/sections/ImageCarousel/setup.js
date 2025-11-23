class ImageCarousel extends HTMLElement {
  static tag = `x-image-carousel`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/sections/ImageCarousel/style.css`;

    
    const div_main = document.createElement("div");
    div_main.classList = ["hero"];

    const carousel = document.createElement("div");
    carousel.classList = ["carousel"];
    div_main.appendChild(carousel);

    const carousel_buttons = document.createElement("div");
    carousel_buttons.classList = ["carousel-buttons"];
    div_main.appendChild(carousel_buttons);

    [`./img2/feet.png`, `./img2/feet.png`, `./img2/feet.png`].forEach((i, index) => {
      const img = document.createElement("img");
      img.classList = ["image"];
      img.src = i;
      img.alt = `carousel image`;
      img.id = `slide-${index}`;
      carousel.appendChild(img);

      const a = document.createElement("a");
      a.id = `slide-${index}`;
      a.classList = ["marker"];
      carousel_buttons.appendChild(a);
    });

    const content = document.createElement("div");
    content.classList = ["content"];
    div_main.appendChild(content);

    const cnt_heading = document.createElement("h6");
    cnt_heading.classList = ["heading"];
    cnt_heading.innerHTML = `Nová dívčí kolekce šetrná k dětským nohám`;
    content.appendChild(cnt_heading);

    const cnt_paragraph = document.createElement("span");
    cnt_paragraph.classList = ["text-main"];
    cnt_paragraph.innerHTML = `Nejen do města, ale i do přírody`;
    content.appendChild(cnt_paragraph);

    const button = document.createElement("x-button");
    button.innerHTML = `zobrazit produkty`;
    content.appendChild(button);

    this.shadowRoot.appendChild(div_main);
    this.shadowRoot.appendChild(css_link);
  }
}

customElements.define(ImageCarousel.tag, ImageCarousel);
