class Button extends HTMLElement {
  static tag = `x-button`;
  static formAssociated = true;

  static get observedAttributes() {
    return ["type", "disabled"];
  }

  constructor() {
    super();
    this._internals = this.attachInternals();
    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = `stylesheet`;
    link.href = `./elements/Button/style.css`;

    this.button = document.createElement("button");
    this.button.type = this.getAttribute("type");
    this.button.innerHTML = `<slot></slot>`;

    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      this._internals?.form.requestSubmit();
    });

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(this.button);
  }

  attributeChangedCallback(name, _, value) {
    switch(name) {
      case "type":
        this.shadowRoot.querySelector("button").type = value;
        break;

      case "disabled":
        this.shadowRoot.querySelector("button").disabled = value;
        break;
    }
  }
}

customElements.define(Button.tag, Button);
