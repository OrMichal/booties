class XProductSection extends HTMLElement {
  static tag = `x-product-section`;

  static get observedAttributes() {
    return [
      "name",
      "company-img-src",
      "desc",
      "old-price",
      "new-price",
      "prod-desc",
      "prod-section-subheading",
      "prod-section-content",
      "prod-desc-content",
      "param-color",
      "param-kind",
      "param-meterial",
      "param-aim",
      "param-code"
    ];
  }

  attributeChangedCallback(name, _, value) {
    switch(name) {
      case "name":
          this.shadowRoot.querySelector("#name").innerHTML = value;
        break;
      case "company-img-src":
          this.shadowRoot.querySelector("#company-logo").src = value;
        break;
      case "desc":
          this.shadowRoot.querySelector("#desc").innerHTML = value;
        break;
      case "new-price":
          this.shadowRoot.querySelector(".new-price").innerHTML = `${value} Kč`;
        break;
      case "old-price":
          this.shadowRoot.querySelector(".old-price").innerHTML = `${value} Kč`;
        break;
      case "prod-desc":
          this.shadowRoot.querySelector("#prod-desc").innerHTML = value;
        break;
      case "prod-section-subheading":
          this.shadowRoot.querySelector("#prod-section-subheading").innerHTML = value;
        break;
      case "prod-section-content":
          this.shadowRoot.querySelector("#prod-section-content").innerHTML = value;
        break;
      case "prod-desc-content":
          this.shadowRoot.querySelector("#prod-desc-content").innerHTML = value;
        break;
      case "param-color":
          this.shadowRoot.querySelector("#param-color").innerHTML = value;
        break;
      case "param-kind":
          this.shadowRoot.querySelector("#param-kind").innerHTML = value;
        break;
      case "param-material":
          this.shadowRoot.querySelector("#param-meterial").innerHTML = value;
        break;
      case "param-aim":
          this.shadowRoot.querySelector("#param-aim").innerHTML = value;
        break;
      case "param-code":
          this.shadowRoot.querySelector("#param-code").innerHTML = value;
        break;
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const css_link = document.createElement("link");
    css_link.rel = `stylesheet`;
    css_link.href = `./components/sections/ProductSection/style.css`;
    
    const container = document.createElement("div");
    container.classList = ["container"];

    const div = document.createElement("div");
    div.classList = ["wrapper"];
    container.appendChild(div);

    const div_info = document.createElement("div");
    div_info.classList = ["info-wrapper"];
    div.appendChild(div_info);

    const img_selector_card = document.createElement("x-image-selector-card");
    [
      "./img2/bota1.png",
      "./img2/bota2.png",
      "./img2/bota3.png"
    ].forEach(s => {
      const img = document.createElement("img");
      img.src = s;
      img.alt = `bootie image`;

      img_selector_card.appendChild(img);
    });
    div_info.appendChild(img_selector_card);

    const div_info_data = document.createElement("div");
    div_info_data.classList = ["info-data-wrapper"];
    div_info.appendChild(div_info_data);

    const first_section = document.createElement("section");
    
    const first_section_head = document.createElement("div");
    first_section_head.classList = ["head"];

    const first_section_head_name = document.createElement("h3");
    first_section_head_name.id = "name";
    first_section_head_name.innerHTML = this.getAttribute("name");
    first_section_head.appendChild(first_section_head_name);
    
    const first_section_head_company = document.createElement("img");
    first_section_head_company.id = `company-logo`;
    first_section_head_company.src = this.getAttribute("company-img-src");
    first_section_head_company.alt = `manufacturer icon`;
    first_section_head.appendChild(first_section_head_company);

    const first_section_paragraph = document.createElement("p");
    first_section_paragraph.id = `desc`;
    first_section_paragraph.innerHTML = this.getAttribute("desc");

    first_section.appendChild(first_section_head);
    first_section.appendChild(first_section_paragraph);

    const second_section = document.createElement("section");

    const second_section_color_div = document.createElement("div");
    second_section_color_div.classList = ["colors-wrapper"];
    const second_section_color_div_heading = document.createElement("span");
    second_section_color_div_heading.innerHTML = `Barva`;
    second_section_color_div.appendChild(second_section_color_div_heading);
    const second_section_color_div_colors = document.createElement("div");
    second_section_color_div_colors.classList = ["radios"];

    for(let i = 0; i < 5; i++) {
      const color = document.createElement("div");
      color.classList = ["radio-wrapper"];

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "color";
      radio.id = `radio-color-${i}`;

      const fake_radio = document.createElement("label");
      fake_radio.classList = ["fake-radio"];
      fake_radio.setAttribute("for", radio.id);

      color.appendChild(fake_radio);
      color.appendChild(radio);
      second_section_color_div_colors.appendChild(color);
    }
    second_section_color_div.appendChild(second_section_color_div_colors);

    const second_section_size_div = document.createElement("div");
    second_section_size_div.classList = ["sizes"];

    const second_section_size_div_heading = document.createElement("span");
    second_section_size_div_heading.innerHTML = `Velikost`;
    second_section_size_div.appendChild(second_section_size_div_heading);

    const second_section_size_div_sizes = document.createElement("div");
    for(let i = 21; i <= 27; i++) {
      const size = document.createElement("div");
      size.classList = ["size"];

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "size";
      radio.id = i;

      if(i == 22) radio.disabled = true;
      
      const text = document.createElement("label");
      text.innerHTML = `${i}`;
      text.setAttribute("for", `${i}`);

      size.appendChild(radio);
      size.appendChild(text);

      second_section_size_div_sizes.appendChild(size);
    }
    second_section_size_div.appendChild(second_section_size_div_sizes);

    second_section.appendChild(second_section_color_div);
    second_section.appendChild(second_section_size_div);

    const third_section = document.createElement("section");

    const third_section_heading = document.createElement("span");
    third_section_heading.innerHTML = `Skladem`;
    third_section.appendChild(third_section_heading);

    const third_section_div = document.createElement("div");
    third_section_div.classList = ["actions"];
    third_section.appendChild(third_section_div);

    const third_section_div_prices = document.createElement("div");
    third_section_div_prices.classList = ["prices"];
    third_section_div.appendChild(third_section_div_prices);

    const third_section_div_prices_old = document.createElement("span");
    third_section_div_prices_old.classList = ["old-price"];
    third_section_div_prices_old.innerHTML = this.getAttribute("old-price");
    third_section_div_prices.appendChild(third_section_div_prices_old);

    const third_section_div_prices_new = document.createElement("span");
    third_section_div_prices_new.classList = ["new-price"];
    third_section_div_prices_new.innerHTML = this.getAttribute("new-price");
    third_section_div_prices.appendChild(third_section_div_prices_new);

    const third_section_div_button = document.createElement("x-button");
    third_section_div_button.innerHTML = `Přidat do košíku`;
    third_section_div.appendChild(third_section_div_button);

    div_info_data.appendChild(first_section);
    div_info_data.appendChild(second_section);
    div_info_data.appendChild(third_section);

    const div_desc_data = document.createElement("div");
    div_desc_data.classList = ["desc-wrapper"];
    div.appendChild(div_desc_data);

    const div_desc_data_prod_info = document.createElement("div");
    div_desc_data_prod_info.classList = ["prod-info-wrapper"];
    div_desc_data.appendChild(div_desc_data_prod_info);

    const div_desc_data_prod_info_heading = document.createElement("h3");
    div_desc_data_prod_info_heading.innerHTML = `Informace o produktu`;
    div_desc_data_prod_info.appendChild(div_desc_data_prod_info_heading);

    const div_desc_data_prod_info_paragraph = document.createElement("p");
    div_desc_data_prod_info_paragraph.id = "prod-desc";
    div_desc_data_prod_info_paragraph.innerHTML = this.getAttribute("prod-desc");
    div_desc_data_prod_info.appendChild(div_desc_data_prod_info_paragraph);

    const div_desc_data_prod_info_section = document.createElement("div");
    div_desc_data_prod_info.appendChild(div_desc_data_prod_info_section);

    const div_desc_data_prod_info_section_subheading = document.createElement("h5");
    div_desc_data_prod_info_section_subheading.id = "prod-section-subheading";
    div_desc_data_prod_info_section_subheading.innerHTML = this.getAttribute("prod-section-subheading");
    div_desc_data_prod_info_section.appendChild(div_desc_data_prod_info_section_subheading);

    const div_desc_data_prod_info_section_paragraph = document.createElement("p");
    div_desc_data_prod_info_section_paragraph.id = "prod-section-content";
    div_desc_data_prod_info_section_paragraph.innerHTML = this.getAttribute("prod-section-content");
    div_desc_data_prod_info_section.appendChild(div_desc_data_prod_info_section_paragraph);

    const div_desc_data_prod_info_paragraph_second = document.createElement("p");
    div_desc_data_prod_info_paragraph_second.id = "prod-desc-content";
    div_desc_data_prod_info_paragraph_second.innerHTML = this.getAttribute("prod-desc-content");
    div_desc_data_prod_info.appendChild(div_desc_data_prod_info_paragraph_second);


    const div_desc_table = document.createElement("table");
    div_desc_data.appendChild(div_desc_table);

    const table_head = document.createElement("thead");
    const table_head_data = document.createElement("tr");
    const table_head_data_text = document.createElement("th");
    table_head_data_text.setAttribute("colspan", 2);
    table_head_data_text.innerHTML = `Parametry produktu`;
    table_head_data.appendChild(table_head_data_text);
    table_head.appendChild(table_head_data);
    div_desc_table.appendChild(table_head);

    const table_body = document.createElement("tbody");
    div_desc_table.appendChild(table_body);

    [
      { name: "Barva", id: "param-color", data: this.getAttribute("param-color") },
      { name: "Druh", id:"param-kind", data: this.getAttribute("param-kind") },
      { name: "Materiál", id: "param-meterial", data: this.getAttribute("param-meterial") },
      { name: "Určení", id:"param-aim", data: this.getAttribute("param-aim") },
      { name: "Kód", id:"param-code", data: this.getAttribute("param-code") }
    ].forEach(d => {
      const tr = document.createElement("tr");

      const td_name = document.createElement("td");
      td_name.textContent = d.name;
      tr.appendChild(td_name);

      const td_value = document.createElement("td");
      td_value.id = d.id;
      td_value.innerHTML = d.data;
      tr.appendChild(td_value);

      table_body.appendChild(tr);
    });

    this.shadowRoot.appendChild(container);
    this.shadowRoot.appendChild(css_link);
  }
}

customElements.define(XProductSection.tag, XProductSection);
