class Header extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="components/components.css">

        <div class="global-header">
            <div class="logo" part="logo">
                <a href="#">
                    <picture id="land" data-state="inactive" onclick="changePage(this);">
                        <source srcset="imgs/icon.png" media="(max-width: 375px)">　
                        <img src="imgs/logo.svg" alt="product icon">
                    </picuture>
                </a>
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