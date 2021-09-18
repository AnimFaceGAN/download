class Land extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="style/css/style.css">
        <link rel="stylesheet" href="style/css/default.css">

        <div class="land-container">
            <!-- float:left -->
            <div class="disp-left"></div>
    
            <!-- float:right -->
            <div class="disp-right">
                <div class="product-description">
                    <div>
                        <img src="imgs/logo.png" alt="product logo"><br>
                        <div class="main-description">顔イラストでVtuber!<br></div>
                        <div class="sub-description">
                            用意するのは1枚のイラストだけであとはAIにおまかせ.<br>
                            さあ,あなたもVtuber気分を味わおう !
                        </div>
                        <button class="to-download-btn" onclick="window.open('./download.html','_blank')">ダウンロード</button>
                        <button class="github-btn" onclick="window.open('https://github.com/AnimFaceGAN/Ganimation','_blank')">github</button>
                        <div class="space"></div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
  }
   
  customElements.define('land-page', Land)