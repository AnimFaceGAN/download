class News extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="style/css/default.css">
        <link rel="stylesheet" href="style/css/components.css">
        <link rel="stylesheet" href="style/css/pages.css">

        <div class="news-container">
          <ul class="news-list">  
            <li class="a-news">
              <a href="#" data-article-id="20210918-2" onclick="openModal(this);">2021/9/18 : 技育展に登壇します!!</a>
            </li>
            <li class="a-news">
              <a href="#" data-article-id="20210918-1" onclick="openModal(this);">2021/9/18 : 技育展の発表スライドURL</a>
            </li>
          </ul>
        </div>

        <!----- footer ----->
        <global-footer></global-footer>
        `
    }
  }
   
  customElements.define('news-page', News)