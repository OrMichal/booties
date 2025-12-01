class XOfferGrid extends HTMLElement {
  static tag = `x-offer-grid`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/sections/OfferGrid/style.css`;



    const div_main = document.createElement("div");
    div_main.classList = ["wrapper"];

    const heading = document.createElement("span");
    heading.classList = ["heading"];
    div_main.appendChild(heading);

    const heading_first = document.createElement("span");
    heading.appendChild(heading_first);

    heading_first.innerHTML = `Nejnovější kousky <strong class="second-text">v naší nabídce</strong>`;

    const products = document.createElement("div");
    products.classList = ["products"];
    div_main.appendChild(products);

    const prods = [
      { name: "Papučky barefoot hnědé kožené", new_price: 529, old_price: 699, src: `./img2/15146773-eb93-11eb-9461-02420a000b04.png` },
      { name: "Papučky barefoot růžové", new_price: 529, old_price: 699, src: `./img2/79ec4063-e3fd-11eb-8d3f-02420a000b23.png` },
      { name: "Sandálky modré umělé", new_price: 529, old_price: 699, src: `./img2/7c895c56-e3fd-11eb-8d3f-02420a000b23.png` },
      { name: "Netlačící boty s vysokou špičkou", new_price: 529, old_price: 699, src: `./img2/8291fafa-e3fd-11eb-8d3f-02420a000b23.png` },
      { name: "Papučky barefoot hnědé kožené", new_price: 529, old_price: 699, src: `./img2/15146773-eb93-11eb-9461-02420a000b04.png` },
      { name: "Papučky barefoot hnědé kožené", new_price: 529, old_price: 699, src: `./img2/15146773-eb93-11eb-9461-02420a000b04.png` },
      { name: "Sandálky modré umělé", new_price: 529, old_price: 699, src: `./img2/7c895c56-e3fd-11eb-8d3f-02420a000b23.png` },
      { name: "Netlačící boty s vysokou špičkou", new_price: 529, old_price: 699, src: `./img2/8291fafa-e3fd-11eb-8d3f-02420a000b23.png` },
    ];

    prods.forEach(p => {
      const a = document.createElement("a");
      a.href = `./product.html`;
      const prod = document.createElement("x-product-card");
      prod.setAttribute("image-src", p.src);
      prod.setAttribute("name", p.name);
      prod.setAttribute("new-price", p.new_price);
      prod.setAttribute("old-price", p.old_price);

      a.appendChild(prod)

      products.appendChild(a);
    });

    const button = document.createElement("x-button");
    button.setAttribute("type", "button");
    button.innerHTML = `zobrazit celou nabídku`;
    div_main.appendChild(button);

    this.shadowRoot.appendChild(div_main);
    this.shadowRoot.appendChild(css_link);
  }
}

customElements.define(XOfferGrid.tag, XOfferGrid);
