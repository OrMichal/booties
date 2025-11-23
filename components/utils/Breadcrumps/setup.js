class XBreadcrumps extends HTMLElement {
  static tag = `x-breadcrumps`;

  static get observedAttributes() {
    return ["route"];
  }

  attributeChangedCallback(name, _, value) {
    switch(name) {
      case "route":
          const div = this.shadowRoot.querySelector(".crumps");
          const crumps = value.split('/');
          
          for(const crump of crumps.slice(0, crumps.length - 1)) {
            const a = document.createElement("a");
            a.href = `#${crump}`;
            a.innerHTML = `${crump}`;
            div.appendChild(a);
          }

          const a = document.createElement("a");
          a.href = `#${crumps.at(-1)}`;
          a.classList = ["active"];
          a.innerHTML += `${crumps.at(-1)}`;
          div.appendChild(a);
        break;
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/utils/Breadcrumps/style.css`;

    const div = document.createElement("div");
    div.classList = ["crumps"];

    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(div);
  }
}

customElements.define(XBreadcrumps.tag, XBreadcrumps);
