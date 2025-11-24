class XInput extends HTMLElement {
  static tag = "x-input";
  static formAssociated = true;

  static get observedAttributes() {
    return ["placeholder", "type", "name", "stretch", "value"];
  }

  constructor() {
    super();
    this._internals = this.attachInternals();
    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./elements/Input/style.css";

    this.input = document.createElement("input");
    this.input.placeholder = this.getAttribute("placeholder") || "";
    this.input.type = this.getAttribute("type") || "text";

    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = this.getAttribute("src");
    div.appendChild(img);
    div.appendChild(this.input);

    this.input.addEventListener("input", () => {
      this.value = this.input.value;
      this.updateValidity();
    });

    this.input.addEventListener("keydown", (e) => {
      if(e.key == "Enter") {
        e.preventDefault();
        this._internals.form.requestSubmit();
      }
    });

    this.shadowRoot.append(link, div);
  }

  attributeChangedCallback(name, _, value) {
    if (name === "placeholder") this.input.placeholder = value;
    if (name === "type") this.input.type = value;
    if (name === "name") this.input.name = value;
    if (name === "stretch") this.input.classList.add("full-width");
    if (name === "value") this.value = value;
  }

  get value() {
    return this.input.value || "";
  }

  set value(val) {
    this.input.value = val;
    this._internals.setFormValue(val);
  }

  updateValidity() {
    const validity = this.input.validity;
    if (validity.valid) {
      this._internals.setValidity({});
    } else {
      this._internals.setValidity(validity, this.input.validationMessage, this.input);
    }
  }

  formResetCallback() {
    this.value = "";
  }

  formStateRestoreCallback(state) {
    this.value = state;
  }
}

customElements.define(XInput.tag, XInput);