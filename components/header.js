class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <header>
        <div class="top-header py-4">
            <div class="container">
                <h2><span style='color:#E85158'>Airbnb</span>'s in London 2022</h2>
            </div>
        </div>
    </header>
    `;
    }
}

customElements.define('header-component', Header);