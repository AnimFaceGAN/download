class About extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="ja/style.css">
        <link rel="stylesheet" href="components/default.css">

        <div class="about-container">
          <div class="about-title">
            <h1>Ganimationとは</h1>
            <h4>
                <p>キャラクターイラストが自分の顔に合わせて動く。</p>
                <p>お気に入りのアバターを作ろう。</p>
            </h4>
          </div>

          <div class="feature-1 feature-block">
            <div class="feature-img" id="feature-img">
                <img src="imgs/ticktack_move.gif" alt="feature1 img" loop=infinite>
            </div>
            <div class="feature-desc" id="feature-desc">
                <b>必要なものは1枚のイラストだけ</b>
                <p>
                  １枚のイラストからアバターが作れます。
                  ユーザーはアバターとして利用したいイラストを１枚準備し、アバター生成ボタンを押すだけで、簡単にオリジナルのアバターを用意できます。
                  使用できる画像、より高精度に変形できる画像にはいくつかの条件があるので注意が必要です。
                </p>
            </div>
          </div>

          <div class="feature-2 feature-block">
            <div class="feature-img" id="feature-img">
                <img src="imgs/ai.png" alt="feature2 img">
            </div>
            <div class="feature-desc" id="feature-desc">
              <b>画像生成AI(GAN)の利用</b>
              <p>
                このアプリはAIを使用することで実現しています。
                GANというAIの応用技術で作られたTalking Head Anime from a Signal Imageを流用しています。
                従来はGPUでの機動を前提としていたモデルですが、Prerenderingを行うことでCPUでも使えるようになりました。
              </p>
            </div>
          </div>

          <div class="feature-3 feature-block">
            <div class="feature-img" id="feature-img">
                <img src="imgs/home.png" alt="feature3 img">
            </div>
            <div class="feature-desc" id="feature-desc">
              <b>ビデオ通話を楽しく</b>
              <p>
                生成したアバターはDiscord、Zoomなどのビデオ通話アプリに接続することができます。
                Ganimationは仮想Webカメラとして機能するので、仲介アプリを用意する必要はありません。
                Ganimationでビデオ通話をより楽しくしましょう！
              </p>
            </div>
          </div>
        </div>
        `
    }
  }
   
  customElements.define('about-page', About)