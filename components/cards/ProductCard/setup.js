class XProductCard extends HTMLElement {
  static tag = `x-product-card`;

  static get observedAttributes() {
    return ["name", "image-src", "old-price", "new-price"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/cards/ProductCard/style.css`;

    const div_card = document.createElement("div");
    div_card.classList = ["card"];

    const img = document.createElement("img");
    img.src = this.getAttribute("image-src");
    img.alt = `product ${this.getAttribute("name")} image`;
    div_card.appendChild(img);

    const name = document.createElement("span");
    name.classList = ["name"];
    name.innerHTML = this.getAttribute("name");
    div_card.appendChild(name);

    const prices = document.createElement("div");
    prices.classList = ["prices"];
    div_card.appendChild(prices);

    const old_price = document.createElement("span");
    old_price.classList = ["old-price"];
    old_price.innerHTML = this.getAttribute("old-price");
    prices.appendChild(old_price);

    const new_price = document.createElement("span");
    new_price.classList = ["new-price"];
    new_price.innerHTML = this.getAttribute("new-price");
    prices.appendChild(new_price);

    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(div_card);
  }

  attributeChangedCallback(name, _, newValue) {
    if(!this.shadowRoot) return;

    switch(name) {
      case "image-src":
        this.shadowRoot.querySelector("img").src = newValue;
        break;

      case "name":
        this.shadowRoot.querySelector(".name").textContent = newValue;
        this.shadowRoot.querySelector("img").alt = `product ${newValue} image`;
        break;

      case "old-price":
        this.shadowRoot.querySelector(".old-price").textContent = `${newValue} Kč`;
        break;

      case "new-price":
        this.shadowRoot.querySelector(".new-price").textContent = `${newValue} Kč`;
        break;
    }
  }
}

customElements.define(XProductCard.tag, XProductCard);
