class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Navbar -->
        <nav class="navbar sticky-top navbar-expand-lg">
            <div class="container">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="./index.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="./neighbourhood.html" class="nav-link">Neighbourhood related data</a>
                    </li>
                    <li class="nav-item">
                        <a href="./room.html" class="nav-link">Room related data</a>
                    </li>
                    <li class="nav-item">
                        <a href="./reviews.html" class="nav-link">Prices & Review related data</a>
                    </li>
                    <li class="nav-item">
                        <a href="./links.html" class="nav-link">Links</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
    }
}

customElements.define('navbar-component', Navbar);