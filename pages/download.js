class Download extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="style/css/default.css">
        <link rel="stylesheet" href="style/css/components.css">
        <link rel="stylesheet" href="style/css/pages.css">

        <div class="download-container">
          <div class="download-logo">
            <img src="imgs/icon.png" alt="product icon"><br>
            <div>Ganimationのダウンロード</div>
          </div>
          <button class="download-btn" onclick="window.open('https://ganimation.booth.pm/items/3419118','_blank')">windows版</button>
          <p class="download-caution">※インストール先は管理者権限の不要な場所「C:&yen;Users&yen;ユーザー名&yen;??」</p>

          <div class="spec-desc">
            <b>必要な外部ソフト</b><br>
            <p>OBS Studio</p>
            <p>↓ダウンロードURL</p>
            <a href="#" onclick="window.open('https://obsproject.com/ja/download','_blank')">
              https://obsproject.com/ja/download
            </a>
          </div>
          <div class="spec-desc">
            <b>推奨スペック</b><br>
            <p>OS: Windows10 64-bit</p>
            <p>メモリー: 16GB RAM</p>
            <p>GPU: RTX2070super</p>
            <p>ストレージ: 6GB 利用可能</p>
          </div>
          <div class="space"></div>
        </div>

        <!----- footer ----->
        <global-footer></global-footer>
        `
    }
  }
   
  customElements.define('download-page', Download)
