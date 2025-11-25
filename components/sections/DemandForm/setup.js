class XDemandForm extends HTMLElement {
  static tag = `x-demand-form`;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/sections/DemandForm/style.css`;



    const container = document.createElement("div");
    container.classList = ["container"];

    const img = document.createElement("img");
    img.alt = `kiddo image`;
    img.src = `./img2/booties.jpg`;
    container.appendChild(img);

    const div = document.createElement("div");
    div.classList = ["wrapper"];
    container.appendChild(div);

    const heading = document.createElement("h2");
    heading.innerHTML = `Poptávkový formulář`;
    div.appendChild(heading);

    const span = document.createElement("span");
    span.innerHTML = `Vyplňte formulář níže a my se Vám ozveme, jakmile to půjde.`;
    div.appendChild(span);

    const form = document.createElement("form");
    form.method = `GET`;
    form.action = "/demand.php";
    div.appendChild(form);

    const credentials = document.createElement("div");
    credentials.classList = ["credentials"];
    form.appendChild(credentials);

    const credentials_name = document.createElement("x-input");
    credentials_name.setAttribute("label", "Jméno");
    credentials_name.setAttribute("name", "firstname");
    credentials_name.setAttribute("type", "text");
    credentials_name.setAttribute("placeholder", "Zadejte své jméno");
    credentials_name.setAttribute("error-msg", "Jméno není ve správném formátu");

    const credentials_surname = document.createElement("x-input");
    credentials_surname.setAttribute("label", "Příjmení");
    credentials_surname.setAttribute("name", "surname");
    credentials_surname.setAttribute("placeholder", "Zadejte své příjmení");
    credentials_surname.setAttribute("type", "text");
    credentials_surname.setAttribute("error-msg", "Zadané jméno není ve správném formátu");

    credentials.appendChild(credentials_name);
    credentials.appendChild(credentials_surname);

    const email = document.createElement("x-input");
    email.setAttribute("label", "Email");
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Zadejte svůj email");
    email.setAttribute("name", "email");
    email.setAttribute("error-msg", "Email není ve správném formátu");

    form.appendChild(email);


    const phone = document.createElement("x-input");
    phone.setAttribute("label", "Telefon");
    phone.setAttribute("type", "tel");
    phone.setAttribute("placeholder", "Zadejte svoje telefonní číslo");
    phone.setAttribute("name", "telephone");
    phone.setAttribute("error-msg", "Telefonní číslo není ve správném formátu");

    form.appendChild(phone);

    const country_div = document.createElement("div");
    country_div.classList = ["country-wrapper"];
    form.appendChild(country_div);

    const country_div_select = document.createElement("select");
    country_div_select.id = `select-country`;
    country_div_select.name = "country";

    [
      { value: "", name: "Vyberte zemi" },
      { value: "czech_republic", name: "Česká republika" },
      { value: "nigeria", name: "Nigérie" },
    ].forEach(x => {
      const option = document.createElement("option");
      option.value = x.value;
      option.innerHTML = x.name;
      country_div_select.appendChild(option);
    });

    const country_div_label = document.createElement("label");
    country_div_label.innerHTML = `Země`;
    country_div_label.id = country_div_select.id;

    country_div.appendChild(country_div_label);
    country_div.appendChild(country_div_select);

    const payment_div = document.createElement("div");
    payment_div.classList = ["payment-wrapper"];
    form.append(payment_div);

    const payment_div_label = document.createElement("label");
    payment_div_label.innerHTML = `Způsob platby`;
    payment_div.append(payment_div_label);

    const payment_div_radios = document.createElement("div");
    payment_div_radios.classList = ["radios"];
    payment_div.append(payment_div_radios);
    [
      { label: "Hotově", value: "by_cash" },
      { label: "Převodem", value: "bank_transfer" },
      { label: "Kartou", value: "by_card" }
    ].forEach(x => {
      const div = document.createElement("div");
      div.classList = ["radio-wrapper"];

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `payment_method`;
      radio.value = x.value;
      radio.id = `radio-payment-${x.value}`;

      const label = document.createElement("label");
      label.setAttribute("for", radio.id);
      label.innerHTML = x.label;

      div.appendChild(radio);
      div.appendChild(label);

      payment_div_radios.appendChild(div);
    });

    const buttons_div = document.createElement("div");
    buttons_div.classList = ["buttons"];
    form.appendChild(buttons_div);

    const button_back = document.createElement("x-secondary-button");
    button_back.innerHTML = `Zpět`;
    buttons_div.appendChild(button_back);

    const button_next = document.createElement("x-button");
    button_next.innerHTML = `Pokračovat`;
    button_next.setAttribute("type", "submit");
    buttons_div.appendChild(button_next);

    this.shadowRoot.appendChild(css_link);
    this.shadowRoot.appendChild(container);
  }
}

customElements.define(XDemandForm.tag, XDemandForm);
