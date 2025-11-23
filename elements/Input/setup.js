class XInput extends HTMLElement {
  static tag = `x-input`;

  static get observedAttributes() {
    return ["placeholder", "icon-src", "type", "name", "stretch"];
  }

  icon_src = null;

  attributeChangedCallback(name, _, value) {
    switch(name) {
      case "placeholder":
        this.shadowRoot.querySelector("input").placeholder = value;
        break;

      case "type":
        this.shadowRoot.querySelector("input").type = value;
        break;
      case "name":
        this.shadowRoot.querySelector("input").name = value;
        break;
      case "stretch":
        this.shadowRoot.querySelector("input").classList.add("full-width");
        break;
    }
  }

  updateValidity() {
    if(this.input.checkValidity()) {
      this.input.setAttribute("valid", "");
      this.input.removeAttribute("invalid");
    } else {
      this.input.setAttribute("invalid", "");
      this.input.removeAttribute("valid");
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = `stylesheet`;
    link.href = `./elements/Input/style.css`;

    this.input = document.createElement("input");
    this.input.placeholder = this.getAttribute("placeholder");
    this.input.type = this.getAttribute("type");
    
    if(this.icon_src) {
      input.classList = ["has-icon"];
    }

    this.input.addEventListener("input", () => {
      this.checkValidity();
    });

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(this.input);
  }
}

customElements.define(XInput.tag, XInput);
