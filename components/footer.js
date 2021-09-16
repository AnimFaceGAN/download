class Footer extends HTMLElement {
    constructor() {
        super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="components/components.css">
        
        <div class="global-footer">
            © Ganimation 2021
        </div>
        `
    }
  }
   
  customElements.define('global-footer', Footer)