class XLikableProducts extends HTMLElement {
  static tag = `x-likable-products`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/sections/LikableProducts/style.css`;

    const container = document.createElement("div");
    container.classList = ["container"];

    const heading = document.createElement("h3");
    heading.classList = ["heading"];
    heading.innerHTML = `Mohlo by se <strong>Vám líbit</strong>`;
    container.appendChild(heading);

    const booties = document.createElement("div");
    booties.classList = ["booties"];
    container.appendChild(booties);

    [
      { name: "Papučky barefoot hnědé kožené", new_price: 529, old_price: 699, src: `./img2/15146773-eb93-11eb-9461-02420a000b04.png` },
      { name: "Papučky barefoot hnědé kožené", new_price: 529, old_price: 699, src: `./img2/15146773-eb93-11eb-9461-02420a000b04.png` },
      { name: "Sandálky modré umělé", new_price: 529, old_price: 699, src: `./img2/7c895c56-e3fd-11eb-8d3f-02420a000b23.png` },
      { name: "Netlačící boty s vysokou špičkou", new_price: 529, old_price: 699, src: `./img2/8291fafa-e3fd-11eb-8d3f-02420a000b23.png` },
    ].forEach(p => {
      const a = document.createElement("a");
      a.href = `#`;
      const prod = document.createElement("x-product-card");
      prod.setAttribute("image-src", p.src);
      prod.setAttribute("name", p.name);
      prod.setAttribute("new-price", p.new_price);
      prod.setAttribute("old-price", p.old_price);

      a.appendChild(prod)

      booties.appendChild(a);
    });


    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(container);
  }
}

customElements.define(XLikableProducts.tag, XLikableProducts);
