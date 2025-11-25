class XInput extends HTMLElement {
  static tag = "x-input";
  static formAssociated = true;

  static get observedAttributes() {
    return ["placeholder", "type", "name", "stretch", "value", "src", "label", "error-msg"];
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
    this.input.id = crypto.randomUUID();
  
    const wrapper = document.createElement("div");
    wrapper.classList = ["wrapper"];

    const label = document.createElement("label");
    label.setAttribute("for", this.input.id);

    const div = document.createElement("div");
    div.classList = ["input-wrapper"];
    const img = document.createElement("img");
    img.src = this.getAttribute("src");
    img.onerror = () => {
      img.classList.add("img-err");
    };

    div.appendChild(img);
    div.appendChild(this.input);

    const error_msg = document.createElement("span");
    error_msg.classList = ["error-msg"];

    wrapper.appendChild(label);
    wrapper.appendChild(div);
    wrapper.appendChild(error_msg);

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

    this.shadowRoot.append(link, wrapper);
  }

  attributeChangedCallback(name, _, value) {
    if (name === "placeholder") this.input.placeholder = value;
    if (name === "type") this.input.type = value;
    if (name === "name") this.input.name = value;
    if (name === "stretch") this.input.classList.add("full-width");
    if (name === "value") this.value = value;
    if (name === "src") this.shadowRoot.querySelector("img").src = value;
    if (name === "label") this.shadowRoot.querySelector("label").innerHTML = value;
    if (name === "error-msg") this.shadowRoot.querySelector("span").innerHTML = value;
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
