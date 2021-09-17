class News extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="ja/style.css">
        <link rel="stylesheet" href="components/default.css">

        <div class="news-container">
          <ul class="news-list">  
            <li class="a-news">
              <a href="#" data-article-id="20210915" onclick="openModal(this);">2021/9/15 : testtesttest</a>
            </li>
            <li class="a-news">
              <a href="#" data-article-id="20210914" onclick="openModal(this);">2021/9/14 : testtesttest</a>
            </li>
          </ul>
        </div>
        `
    }
  }
   
  customElements.define('news-page', News)