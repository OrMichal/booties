class XLabeledInput extends HTMLElement {
  static tag = `x-labeled-input`;
  static id = crypto.randomUUID();

  static get observedAttributes() {
    return ["placeholder", "label", "name", "invalid-text"];
  }

  attributeChangedCallback(name, _, value) {
    switch(name) {
      case "placeholder":
          this.shadowRoot.querySelector(`x-input`).setAttribute("placeholder", value);
        break;
      case "label":
          this.shadowRoot.querySelector("label").innerHTML = value;
        break;
      case "name":
          this.shadowRoot.querySelector(`x-input`).setAttribute("name", value);
        break;
      case "invalid-text":
          this.shadowRoot.querySelector(`span`).innerHTML = value;
        break;
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./elements/LabeledInput/style.css`;

    const div = document.createElement("div");
    const input = document.createElement("x-input");
    input.setAttribute("stretch","");
    input.id = this.id;

    const label = document.createElement("label");
    label.setAttribute("for", this.id);
    label.innerHTML = "default text";

    const invalid_text = document.createElement("span");
    invalid_text.classList = ["invalid-text"];
    invalid_text.id = `invalid ${this.id}`;
    invalid_text.innerHTML = "haha invalidní hodnota";


    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(invalid_text);

    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(div);
  }
}

customElements.define(XLabeledInput.tag, XLabeledInput);
