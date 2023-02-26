class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer mt-auto py-3">
            <div class="container">
                <!-- Section: Links -->
                <div class="d-flex justify-content-center">
                    <a href="https://www.kaggle.com/datasets/whenamancodes/london-uk-airbnb-open-data" class="text-black-50">Kaggle dataset</a>
                    <a href="#!" class="text-black-50">Full Power Point Presentation</a>
                    <a href="https://github.com/kelleryvk/AirbnbLondon2022/tree/main/charts" class="text-black-50">Interactive Charts</a>
                </div>
            </div>
        
            <!-- Copyright -->
            <div class="text-center p-3">
                © 2023 Copyright
            </div>
            <!-- Copyright -->
        </footer>
    `;
    }
}

customElements.define('footer-component', Footer);