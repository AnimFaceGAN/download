class News extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="ja/style.css">
        <link rel="stylesheet" href="components/default.css">

        <div class="news-container">
          <ul class="news-list">  
            <li class="a-news" data-news="20210915">2021/9/15 : testtesttest</li>
            <li class="a-news" data-news="20210914">2021/9/14 : testtesttest</li>
          </ul>
        </div>
        `
    }
  }
   
  customElements.define('news-page', News)