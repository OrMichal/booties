class Button extends HTMLElement {
  static tag = `x-button`;

  static get observedAttributes() {
    return ["type", "disabled"];
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

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = `stylesheet`;
    link.href = `./elements/Button/style.css`;

    const button = document.createElement("button");
    button.type = this.getAttribute("type");
    button.innerHTML = `<slot></slot>`;

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(button);
  }
}

customElements.define(Button.tag, Button);
