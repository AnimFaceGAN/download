class Header extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="components/components.css">

        <div class="global-header">
            <div class="logo" part="logo">
                  <a href="#"><img id="land" data-state="inactive" class="img" src="imgs/logo.svg" alt="product icon" onclick="changePage(this);"></a>
            </div>
            <div class="nav">
                <ul class="menu">
                    <li id="about"    data-state="inactive" onclick="changeNav(this);"><a href="#">ABOUT</a></li>
                    <li id="news"     data-state="inactive" onclick="changeNav(this);"><a href="#">NEWS</a></li>
                    <li id="download" data-state="inactive" onclick="changeNav(this);"><a href="#">DOWNLOAD</a></li>
                </ul>
            </div>
        </div>
        `
    }
  }
   
  customElements.define('global-header', Header)