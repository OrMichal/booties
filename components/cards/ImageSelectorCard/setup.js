class XImageSelectorCard extends HTMLElement {
  static tag = `x-image-selector-card`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/cards/ImageSelectorCard/style.css`;

    const div_main = document.createElement("div");
    div_main.classList.add("wrapper");

    const selected_image = document.createElement("img");
    selected_image.classList.add("active-image");

    const images = document.createElement("div");
    images.classList.add("images");

    const slot = document.createElement("slot");
    images.appendChild(slot);

    slot.addEventListener("slotchange", () => {
      const assigned = slot.assignedElements();
      if (!assigned.length) return;

      const imgs = assigned;
      if (!imgs.length) return;

      const first = imgs[0];

      imgs.forEach(img => {
        img.classList.remove("selected");
        img.addEventListener("click", () => {
          selected_image.src = img.src;
          imgs.forEach(e => e.classList.remove("selected"));

          img.classList.add("selected");
        });
      });
      first.classList.add("selected");

      selected_image.src = first.src;
      selected_image.alt = first.alt || "selected image";
    });

    div_main.appendChild(selected_image);
    div_main.appendChild(images);

    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(div_main);
  }
}

customElements.define(XImageSelectorCard.tag, XImageSelectorCard);
