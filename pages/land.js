class Land extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="style/css/default.css">
        <link rel="stylesheet" href="style/css/components.css">
        <link rel="stylesheet" href="style/css/pages.css">

        <div class="land-container">
            <!-- float:left -->
            <div class="disp-left">
                <div class="chars">
                    <video src="imgs/chars/char1.webm" autoplay loop playsinline muted></video>
                    <video src="imgs/chars/char2.webm" autoplay loop playsinline muted></video>
                    <video src="imgs/chars/char3.webm" autoplay loop playsinline muted></video>
                    <video src="imgs/chars/char4.webm" autoplay loop playsinline muted></video>
                    <video src="imgs/chars/char5.webm" autoplay loop playsinline muted></video>
                    <video src="imgs/chars/char6.webm" autoplay loop playsinline muted></video>
                    <video src="imgs/chars/char7.webm" autoplay loop playsinline muted></video>
                    <video src="imgs/chars/char8.webm" autoplay loop playsinline muted></video>
                    <video src="imgs/chars/char9.webm" autoplay loop playsinline muted class="char9-video"></video>
                </div>
            </div>
    
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
                        <button class="to-download-btn" onclick="window.open('https://drive.google.com/drive/folders/1ZPVfz4f4PAbgHfV33CDD0TPmnyapCzX9','_blank')">ダウンロード</button>
                        <button class="github-btn" onclick="window.open('https://github.com/AnimFaceGAN/Ganimation','_blank')">github</button>
                        <div class="space"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <!----- footer ----->
        <global-footer></global-footer>
        `
    }
  }
   
  customElements.define('land-page', Land)