class Download extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="ja/style.css">
        <link rel="stylesheet" href="components/default.css">

        <div class="download-container">
          <div class="download-logo">
            <img src="imgs/icon.png" alt="product icon"><br>
            <div>Ganimationのダウンロード</div>
          </div>
          <button class="download-btn" onclick="window.open('https://drive.google.com/file/d/1_LwXFVwz85g6T6CV-kqXaWQYMxo8U23n/view?usp=sharing','_blank')">windows版</button>
          <div class="spec-desc">
            <b>推奨スペック</b><br>
            <p>OS: Windows10 64-bit</p>
            <p>メモリー: 16GB RAM</p>
            <p>GPU: RTX2070super</p>
            <p>ストレージ: 5GB 利用可能</p>
          </div>
        </div>
        `
    }
  }
   
  customElements.define('download-page', Download)