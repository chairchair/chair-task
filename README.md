# chair-task<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Airbnb</title>
    <link rel="canonical" href="">
    <link rel="stylesheet" href="reset.css">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="responsive.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>

<!-- ヘッダースタート -->
    <header>
        <nav class="main-nav">
            <ul>
                <li class="h-logo">
                    <a href=""><img class="h-logo" src="./img/logo.png" alt="logo"></a>
                </li>
                <li class="overview"><a href="">概要</a></li>
                <li><a class="u-line" href="">準備</a></li>
                <li><a class="u-line" href="">安全</a></li>
                <li><a class="u-line" href="">マネープラン</a></li>
            </ul>
        </nav>
        <p class="h-start" id="modal-switch">はじめる</p>
    </header>
<!-- ヘッダーラスト -->

    <main>
        <!-- モーダルスタート -->
        <article class="modal-wrapper" id="modal">
            <div class="modal-w">
                <p class="entry"><i class="fas fa-times" id="modal-close"></i>ログイン</p>
                <div class="m-scroll">
                    <form action="" method="post" class="m-form">
                        <label class="country">国／地域</label>
                        <select name="log-on-place" class="log-on-place">
                            <option value="">日本（+81)</option>
                            <option value="">コンゴ (+242)</option>
                            <option value="">イギリス (+44)</option>
                        </select>
                        <input type="text" name="log-on-phone" class="log-on-phone" placeholder="電話番号">
                    </form>
                    <p class="m-text">番号確認のため、電話またはSMSでご連絡いたします。 SMS基本料金およびデータ通信料がかかります。</p>
                    <p class="continue">続行する</p>
                    <p class="m-center">または</p>
                    <ul class="social-a">
                        <li class="s-account"><img src="./img/mail-icon.gif" alt="mail"><a href="">メールアドレスで続行</a></li>
                        <li class="s-account"><img src="./img/facebook-icon.gif" alt="facebook"><a
                                href="">Facebookで続行</a></li>
                        <li class="s-account"><img src="./img/google-icon.gif" alt="google"><a href="">Googleで続行</a>
                        </li>
                        <li class="s-account"><img src="./img/apple-icon.gif" alt="apple"><a href="">Appleで続行</a></li>
                    </ul>
                    <p class="already-a">すでにアカウントをお持ちですか？<a href="">ログイン</a></p>
                </div>
            </div>
        </article>
        <!-- モーダルラスト -->

        <!-- メインビジュアル　スタート -->
        <article class="main-v">
            <section class="select-box">
                <h1>Airbnbホストになって、暮らしをレベルアップ</h1>
                <p>宿泊施設の内容を記入</p>
                <!-- 選択バー×3　スタート -->
                <form class="select-three" action="" method="post">
                    <input type="text" autocomplete="on" list="p-list" name="place" class="place" value="東京"
                        placeholder="ロケーション">
                    <datalist id="p-list">
                        <option value="日本、東京都"></option>
                        <option value="東区東京塚町 日本、熊本県熊本市"></option>
                        <option value="中央区東京塚町 日本、熊本県熊本市"></option>
                        <option value="日本、新潟県上越市"></option>
                        <option value="中央区東京塚町 日本、熊本県熊本市"></option>
                    </datalist>
                    <select name="room-type" class="room-type">
                        <option value="reserved">まるまる貸切</option>
                        <option value="private-room">個室</option>
                        <option value="shared-room">シェアルーム</option>
                    </select>
                    <select name="guest" class="guest">
                        <option value="guest-1">ゲスト1人</option>
                        <option value="guest-2">ゲスト2人</option>
                        <option value="guest-3">ゲスト3人</option>
                        <option value="guest-4" selected>ゲスト4人</option>
                        <option value="guest-5">ゲスト5人</option>
                        <option value="guest-6">ゲスト6人</option>
                        <option value="guest-7">ゲスト7人</option>
                        <option value="guest-8">ゲスト8人</option>
                        <option value="guest-9">ゲスト9人</option>
                        <option value="guest-10">ゲスト10人</option>
                        <option value="guest-11">ゲスト11人</option>
                        <option value="guest-12">ゲスト12人</option>
                        <option value="guest-13">ゲスト13人</option>
                        <option value="guest-14">ゲスト14人</option>
                        <option value="guest-15">ゲスト15人</option>
                        <option value="guest-16">ゲスト16人</option>
                    </select>
                </form>
                <a class="start" href="">はじめる</a>
                <!-- 選択バー×3　ラスト -->
            </section>
        </article>
        <!-- メインビジュアル　ラスト -->

        <!-- 紹介　スタート -->
        <div class="introduction">
            <p>なぜAirbnbでホスト?<span>どんなお家やお部屋でも、Airbnbなら簡単かつ安全にシェアして、世界中の旅好きな仲間とつながれます。
                    予約可能日から料金、ハウスルール、ゲストとの交流頻度まで、すべて自分で決めることができます。</span></p>
            <p>困ったときも安心<span>万一に備えるUS$1,000,000の財物補償、US$1,000,000の賠償責任保険が全予約に自動付帯。ホストのみなさまと建物・家財の安全をお守りするため全力で取り組んでいます。</span>
            </p>
        </div>
        <!-- 紹介　ラスト -->

        <!-- 3ステップで簡単　スタート -->
        <section class="step-three">
            <h2>3ステップで簡単ホスティング</h2>
            <div class="check-left">
                <img src="./img/check-mark.gif" alt="check-mark">
                <p class="check-p01">無料でお部屋を掲載</p>
                <p class="check-p02">共有のリビングルームから別荘に至るまで、どんなスペースでも登録料なしで共有しましょう。</p>
            </div>
            <div class="check-center">
                <img src="./img/check-mark.gif" alt="check-mark">
                <p class="check-p01">ホスティング方法を設定</p>
                <p class="check-p02">ご希望のスケジュール、料金、ゲストの要件を選びます。設定の際にはヒントも表示されます。</p>
            </div>
            <div class="check-right">
                <img src="./img/check-mark.gif" alt="check-mark">
                <p class="check-p01">はじめてのゲストをもてなそう</p>
                <p class="check-p02">リスティングが掲載され次第、条件にかなったゲストから連絡を受けとることができます。ゲストの宿泊前にご質問があればメッセージを送信できます。</p>
                <a class="u-line" href="">ホスティングの始め方を学ぶ</a>
            </div>
            <div class="host-into-dennis">
                <div class="example">
                    <p class="example-p01">
                        <span>❝<br></span>「ホスト保証」があったからAirbnb参加を決めたといっても過言でないほどで、被害やトラブルがあったときに頼れるサポートがあるのは本当にありがたいですね。
                    </p>
                    <p class="example-p02">Dennisさんはロンドンのホスト。自由度の高さに魅力を感じています</p>
                    <p class="example-link"><a href="">ホスト実践例をチェック</a></p>
                </div>
                <img class="dennis" src="./img/8e6c68cc-e714-4849-bad9-464abf58e84a.jpg" alt="dennis">
            </div>
        </section>
        <!-- 3ステップで簡単　ラスト -->

        <!-- 万一の時も　スタート -->
        <section class="relief">
            <h2>万一のときも安心です</h2>
            <p>大切なお家にお迎えする相手選びは、信頼第一で進めたいですよね。 その思いに応えるため、Airbnbでは宿泊者に求める厳格な要件をホスト自身の手で設定し、滞在前にお互い交流できるシステムを採用しています。
                万一のトラブルのときには、Airbnbが全力でサポートします。 建物・家財の被害は「ホスト保証」、賠償責任は「ホスト補償保険」でカバー。ホストのみなさまのあらゆるシチュエーションに対処しています。
                <a class="u-line" href="">ホストをお守りするしくみを見る</a></p>
            <ul>
                <li><img src="./img/check-mark2.gif" alt="check-mark2">予約前に政府発行の身分証明書を求める権限</li>
                <li><img src="./img/check-mark2.gif" alt="check-mark2">ハウスルールに同意しないと泊まれない</li>
                <li><img src="./img/check-mark2.gif" alt="check-mark2">過去の宿泊のレビューもばっちり読める</li>
                <li><img src="./img/check-mark2.gif" alt="check-mark2">財物損害は¥100,000,000まで無料で補償</li>
                <li><img src="./img/check-mark2.gif" alt="check-mark2">$1,000,000の賠償責任保険が無料で付帯</li>
                <li><img src="./img/check-mark2.gif" alt="check-mark2">24時間365日対応グローバルカスタマーサポート</li>
            </ul>
            <img class="relief-mv" src="./img/bb358a46-fa25-4895-b5fd-048a386bdcac.jpg" alt="relief-img">
        </section>
        <!-- 万一の時も　ラスト -->

        <!-- シンプル決済 スタート -->
        <section class="settlement">
            <h2>シンプルな決済</h2>
            <div class="settlement-text-left">
                <p class="settlement-p01">料金設定は完全に自由</p>
                <p class="settlement-p02">いつでも好きなように価格設定できます。お手伝いが必要ですか？お住まいの地域の需要に合わせるためのツールがあります。</p>
            </div>
            <div class="settlement-text-center">
                <p class="settlement-p01">手数料が安い</p>
                <p class="settlement-p02">登録に費用は一切かかりません。Airbnbは通常、予約ごとに業界で最低の均一3％をサービス料としていただいております。</p>
            </div>
            <div class="settlement-text-right">
                <p class="settlement-p01">迅速な支払い</p>
                <p class="settlement-p02">ゲストのチェックイン後に、Paypal、直接振り込み、またはその他の利用可能な方法で受取金を送金できます。</p>
                <a href="">Airbnb収入を得るまでの流れを見る</a>
            </div>
            <div class="host-into-tessa">
                <img class="tessa" src="./img/4e8524b4-205e-4fdf-9f0a-f1f36905c8f6.jpg" alt="example-img">
                <div class="example">
                    <p class="example-p01"><span>❝</span>ホスト収入でキッチンリフォーム。お家をいろいろアップグレードしました。</p>
                    <p class="example-p02">Tessaさんはロンドン在住。ホストになって世界が（懐も）広がりました</p>
                    <p class="example-link"><a href="">ホスト実践例をチェック</a></p>
                </div>
            </div>
        </section>
        <!-- シンプル決済 ラスト -->

        <!-- 夢を共有　スタート -->
        <section class="dream-share">
            <h2>夢を共有する仲間が世界中に</h2>
            <div class="d-share-text">
                <p class="d-share-p01">290万</p>
                <p class="d-share-p02">Airbnbのホスト</p>
            </div>
            <div class="d-share-text">
                <p class="d-share-p01">80万</p>
                <p class="d-share-p02">Airbnbにおける毎晩の平均宿泊数</p>
            </div>
            <div class="d-share-text">
                <p class="d-share-p01">14,000</p>
                <p class="d-share-p02">月あたりの新規登録ホスト数</p>
            </div>
        </section>
        <!-- 夢を共有　ラスト -->

        <!-- Airbnbについて　スタート -->
        <section class="about">
            <h2>Airbnbについて</h2>
            <div class="about-text">
                <p class="about-p01">Airbnbとは?</p>
                <p class="about-p02">Airbnbは世界中の宿泊先や体験と人々をつなぎます。 ホストたちが原動力となるコミュニティが、地元のように旅するユニークな機会をゲストに提供しています。</p>
            </div>
            <div class="about-text">
                <p class="about-p01">ホスティングとは？</p>
                <p class="about-p02">空いているお部屋やお家、得意分野があるなら、世界中の仲間とシェアして暮らしをステップアップできます。 掲載できるのはお部屋や体験です。掛け持ちもOK。
                    無理のないペースでできます。</p>
                <a href="">体験ホスティングの詳細はこちら</a>
            </div>
        </section>
        <!-- Airbnbについて　ラスト -->

        <!-- よくある質問　スタート -->
        <section class="question">
            <h2>よくある質問</h2>
            <ul>
                <li><a href="">Airbnbホストになれるのはどんな人？</a></li>
                <li><a href="">家財破損があった場合、どのような補償がありますか？</a></li>
                <li><a href="">予約前にゲストに求められる要件は？</a></li>
                <li><a href="">リスティングの料金を選ぶには？</a></li>
                <li><a href="">お部屋の掲載料はいくら？</a></li>
                <li><a href="">料金設定の支援ツールはありますか？</a></li>
            </ul>
        </section>
        <!-- よくある質問　ラスト -->

        <!-- ホスティング詳細　スタート -->
        <section class="detail">
            <h3>ホスティングの詳細はこちら</h3>
            <div class="detail-contents">
                <a href="" class="detail-link">
                    <img src="./img/489faa5d-9519-48fa-aa0e-fe9673165e43.jpg" alt="detail-img">
                    <p class="detail-p01" href="">初期設定</p>
                    <p class="detail-p02" href="">ホスティング入門ガイド</p>
                    <p class="detail-p03" href="">もっと詳しく</p>
                </a>
            </div>
            <div class="detail-contents">
                <a href="" class="detail-link">
                    <img src="./img/b77eb430-aa14-4ceb-a832-109341f798cd.jpg" alt="detail-img">
                    <p class="detail-p01" href=""> 安全</p>
                    <p class="detail-p02" href="">ホストを守るAirbnbのしくみ</p>
                    <p class="detail-p03" href="">もっと詳しく</p>
                </a>
            </div>
            <div class="detail-contents">
                <a href="" class="detail-link">
                    <img src="./img/1ad4d764-38a6-464b-8fdd-b0f3339adf2f.jpg" alt="detail-img">
                    <p class="detail-p01" href="">マネープラン</p>
                    <p class="detail-p02" href="">Airbnbで収益を得るには</p>
                    <p class="detail-p03" href="">もっと詳しく</p>
                </a>
            </div>
        </section>
        <!-- ホスティング詳細　ラスト -->

        <!-- リスティング　スタート -->
        <section class="listing">
            <h3>収益化してみますか？</h3>
            <a href="">はじめる</a>
        </section>
        <!-- リスティング　ラスト -->

        <!-- フッタースタート -->
        <footer>
            <div class="f-menu">
                <ul>
                    <li class="f-menu-top">企業情報</li>
                    <li><a class="u-line opa" href="">ダイバーシティ＆ビロンギング</a></li>
                    <li><a class="u-line opa" href="">アクセシビリティ対応</a></li>
                    <li><a class="u-line opa" href="">信頼＆安全</a></li>
                    <li><a class="u-line opa" href="">Airbnb Citizen</a></li>
                    <li><a class="u-line opa" href="">オリンピック</a></li>
                    <li><a class="u-line opa" href="">ニュースルーム</a></li>
                </ul>
                <ul>
                    <li class="f-menu-top">コミュニティ</li>
                    <li><a class="u-line opa" href="">Airbnb Magazine</a></li>
                    <li><a class="u-line opa" href="">Airbnbアソシエイト</a></li>
                    <li><a class="u-line opa" href="">Airbnbビジネスプログラム</a></li>
                    <li><a class="u-line opa" href="">お友達を招待</a></li>
                    <li><a class="u-line opa" href="">採用情報</a></li>
                </ul>
                <ul>
                    <li class="f-menu-top">ホスト</li>
                    <li><a class="u-line opa" href="">お部屋を掲載</a></li>
                    <li><a class="u-line opa" href="">オンライン体験をホスティングしよう</a></li>
                    <li><a class="u-line opa" href="">CEOブライアン・チェスキーからのメッセージ</a></li>
                    <li><a class="u-line opa" href="">責任あるホスティング</a></li>
                    <li><a class="u-line opa" href="">オープンホーム</a></li>
                    <li><a class="u-line opa" href="">リソースセンター</a></li>
                    <li><a class="u-line opa" href="">コミュニティセンター</a></li>
                </ul>
                <ul>
                    <li class="f-menu-top">サポート</li>
                    <li><a class="u-line opa" href="">新型コロナウイルスに関する最新情報</a></li>
                    <li><a class="u-line opa" href="">ヘルプセンター</a></li>
                    <li><a class="u-line opa" href="">キャンセルオプション</a></li>
                    <li><a class="u-line opa" href="">近隣コミュニティサポート</a></li>
                </ul>
            </div>
            <div class="f-bottom">
                <div class="copyright">
                    <p class="cr-p01 u-line opa">Airbnb Global Services Limited<br> 観光庁長官(01)第S0001号(2018年6月15日-2023年6月14日)
                    </p>
                    <p class="cr-p02">© 2020 Airbnb, Inc. All rights reserved</p>
                    <ul>
                        <li><a class="u-line opa" href="">プライバシー</a></li>
                        <li><a class="u-line opa" href="">利用規約</a></li>
                        <li><a class="u-line opa" href="">サイトマップ</a></li>
                        <li><a class="u-line opa" href="">企業情報</a></li>
                    </ul>
                </div>
                <div class="sns-link">
                    <ul>
                        <li class="opa"><a href=""><img class="earth" src="./img/earth.gif" alt="earth"><span>日本語</span> (<span>JP</span>).</a></li>
                        <li class="jpy opa"><a href="">¥ <span>JPY</span></a></li>
                        <li class="sns-icon opa"><a href=""></a><i class="fab fa-facebook-f"></i></li>
                        <li class="sns-icon opa"><a href=""></a><i class="fab fa-twitter"></i></li>
                        <li class="sns-icon opa"><a href=""><img class="insta-logo" src="./img/instagram.gif" alt="instagram-logo"></a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <!-- フッターラスト -->

    </main>
    <script src="jQuery.js"></script>
</body>
