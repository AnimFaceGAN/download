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
                    <video autoplay loop playsinline muted>
                        <source src="imgs/chars/char1.webm" type="video/webm">
                        <source src="imgs/chars/char1.mp4" type="video/mp4">
                    </video>
                    <video autoplay loop playsinline muted>
                        <source src="imgs/chars/char2.webm" type="video/webm">
                        <source src="imgs/chars/char2.mp4" type="video/mp4">
                    </video>
                    <video autoplay loop playsinline muted>
                        <source src="imgs/chars/char3.webm" type="video/webm">
                        <source src="imgs/chars/char3.mp4" type="video/mp4">
                    </video>
                    <video autoplay loop playsinline muted>
                        <source src="imgs/chars/char4.webm" type="video/webm">
                        <source src="imgs/chars/char4.mp4" type="video/mp4">
                    </video>
                    <video autoplay loop playsinline muted>
                        <source src="imgs/chars/char5.webm" type="video/webm">
                        <source src="imgs/chars/char5.mp4" type="video/mp4">
                    </video>
                    <video autoplay loop playsinline muted>
                        <source src="imgs/chars/char6.webm" type="video/webm">
                        <source src="imgs/chars/char6.mp4" type="video/mp4">
                    </video>
                    <video autoplay loop playsinline muted>
                        <source src="imgs/chars/char7.webm" type="video/webm">
                        <source src="imgs/chars/char7.mp4" type="video/mp4">
                    </video>
                    <video autoplay loop playsinline muted>
                        <source src="imgs/chars/char8.webm" type="video/webm">
                        <source src="imgs/chars/char8.mp4" type="video/mp4">
                    </video>
                    <video autoplay loop playsinline muted class="char9-video">
                        <source src="imgs/chars/char9.webm" type="video/webm">
                        <source src="imgs/chars/char9.mp4" type="video/mp4">
                    </video>
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