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
          <button class="download-btn" onclick="window.open('https://drive.google.com/drive/folders/1ZPVfz4f4PAbgHfV33CDD0TPmnyapCzX9','_blank')">windows版</button>
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
            <p>ストレージ: 5GB 利用可能</p>
          </div>
          <div class="space"></div>
        </div>

        <!----- footer ----->
        <global-footer></global-footer>
        `
    }
  }
   
  customElements.define('download-page', Download)