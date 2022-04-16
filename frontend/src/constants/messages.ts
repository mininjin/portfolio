import { Messages } from "@/@types/schema";

export const INITIAL_MESSAGES: Messages = {
  top: {
    title: "Top",
    content: {
      message: "Welcome to Utan's Portfolio",
      animation: {
        text: {
          value: {
            mobile: "Hi!",
            tablet: "0taUtan",
            desktop: "0taUtan's Portfolio",
          },
          frontColor: "#eff0f3",
          sideColor: "#ffae8c",
          bouncingNumber: 2,
        },
        background: { color: "#ffe0cc" },
        spotLight: { color: "#ff8e3c" },
        plane: { color: "#aaaaaa" },
      },
    },
  },
  profile: {
    title: "Profile",
    direction: "left",
    content: {
      image: "utan.webp",
      nickname: "ゼロ田 うーた",
      name: "おおた ゆうや",
      birth: "1996-05-24",
      comment:
        "鳥取県出身のWebエンジニア。新卒2年目にして家族と事業を立てるために地元に帰る。数理学修士（専攻は数理物理学、論文賞受賞歴アリ）好きな言語=TypeScript。基本/応用情報技術者。ユーモラスな人間になりたい。",
    },
  },
  skills: {
    title: "Skills",
    direction: "right",
    content: {
      elements: [
        {
          title: "Front End",
          caption:
            "実務の割合はフロントエンドが最多。Vue3(Composition API)でのSPA開発がほとんど。Nuxt3は勉強中。SASSよりTailwindCSS。モバイルファースト。型付けは正義。",
          chart: [
            { name: "Vanilla HTML/CSS", value: 3 },
            { name: "Vanilla JS", value: 3 },
            { name: "Vue/Nuxt", value: 4 },
            { name: "TailwindCSS", value: 3 },
            { name: "React", value: 1 },
            { name: "Vanilla TS", value: 3 },
          ],
          color: "#d9376e",
        },
        {
          title: "Back End",
          caption:
            "基本的にAWSのサーバーレス構成しかやらない。Severless Frameworkの実務経験(3ヶ月)がある。Pythonでアルゴリズム設計の実務経験もある。",
          chart: [
            { name: "Serverless Framework", value: 3 },
            { name: "AWS", value: 3 },
            { name: "Python", value: 2 },
            { name: "Node", value: 3 },
            { name: "PHP", value: 1 },
          ],
          color: "#ff8906",
        },
        {
          title: "Tools",
          caption:
            "開発用エディターはVSCode。Vimは新人研修で3ヶ月やらされたのみ。WordPressは自分のブログを少しいじれる程度。",
          chart: [
            { name: "WordPress", value: 2 },
            { name: "Git", value: 3 },
            { name: "Vim", value: 1 },
            { name: "VSCode", value: 3 },
            { name: "Linux", value: 1 },
          ],
          color: "#078080",
        },
      ],
    },
  },
  career: {
    title: "Career",
    direction: "left",
    content: {
      blocks: [
        {
          position: "right",
          margin: false,
          data: [
            {
              type: "text",
              term: "1996-",
              title: "Birth",
              explanation:
                "鳥取県の一般家庭の男4兄弟の次男として生を受ける。忙しい両親に代わって祖母と兄に育てられる。",
            },
            {
              type: "image",
              src: "family.webp",
              alt: "最愛の家族",
            },
            {
              type: "text",
              term: "2003-2016",
              title: "Elementary - High School",
              explanation:
                "小中高とサッカーを続ける。環境に恵まれすくすくと成長。",
            },
          ],
        },
        {
          position: "left",
          margin: false,
          data: [
            {
              type: "text",
              term: "2016-2021",
              title: "Undergraduate - Master",
              explanation:
                "名古屋大学理学部にて数理物理学者を目指す。修士論文にて多元論文章を受賞。",
            },
            {
              type: "image",
              src: "research.webp",
              alt: "数理物理学",
            },
            {
              type: "text",
              term: "2021",
              title: "Make Decision",
              explanation:
                "末っ子の受験失敗を機にお金の大事さを知り、研究者を諦める。そして起業を目指すことを決意。まずは最低限のスキルを得るために就職を決める。",
            },
          ],
        },
        {
          position: "right",
          margin: false,
          data: [
            {
              type: "text",
              term: "2021-2022",
              title: "Working as SE",
              explanation:
                "東京の一部上場企業にてSEとして勤務。その傍らTypeScriptやAWSについて独学し、それを実戦投入。クライアントから高い評価を得て次期案件につなげる。",
            },
            {
              type: "image",
              src: "sns_marketing.webp",
              alt: "SNSマーケ",
            },
            {
              type: "text",
              term: "2021-",
              title: "SNS Marketing",
              explanation:
                "Twitterでマーケの師匠と出会う。起業には開発スキル以上にマーケスキルも必須だと教わり、SNSマーケを学ぶ。",
            },
          ],
        },
        {
          position: "right",
          margin: true,
          data: [
            {
              type: "text",
              term: "2022-",
              title: "And My Own Business...",
            },
          ],
        },
      ],
      comment: {
        title: "開発の楽しさと人生の目的",
        message: [
          "開発は楽しいです。ですが楽しいだけでは生きていけません。だからこそマーケを学んでいます。自分の技術を誰かの悩み解決に活かせるよう、試行錯誤を繰り返していきます。",
          "私のキャリアはまだ始まったばかりです。至らぬ点も多いので、間違いも多く犯してしまうかもしれません。それでもめげずに周りの先輩方からどんどん技術を盗んでいきたいと思います。常にチャレンジ精神を忘れず新しいことに貪欲に挑戦し続けます。",
          "最後に、私の人生は兄弟無くしては語れません。だからこそ地元に戻って起業し、兄弟みんなで支え合う道を選びました。兄弟全員が自分らしい人生を歩めるように支えていくのが私の人生の目的です。",
        ],
        signature: "Utan",
      },
    },
  },
  works: {
    title: "Works",
    direction: "right",
    content: {
      elements: [
        {
          title: "実家のWebサイト",
          images: [
            { src: "aoya_cafe_berry/top.webp", alt: "トップ" },
            { src: "aoya_cafe_berry/concept.webp", alt: "コンセプト" },
            { src: "aoya_cafe_berry/foods.webp", alt: "食事" },
            { src: "aoya_cafe_berry/footer.webp", alt: "フッター" },
            { src: "aoya_cafe_berry/loading.webp", alt: "トップ" },
          ],
          href: "https://aoya-cafe-berry.com",
          information: [
            { title: "開発期間", detail: "7日（60h）" },
            {
              title: "開発言語など",
              detail: "Vue, TypeScript, TailwindCSS",
            },
            { title: "プラットフォーム", detail: "AWS S3, Cloudfront" },
          ],
          caption:
            "実家のレストランのWebサイト。モバイルファースト。優しげなゆったりとしたサイトを意識。アニメーションもゆっくりめで作成。静的サイトにして運用コストを月数十円に抑えた。",
          color: { theme: "#a61c00", button: "#a61c00" },
        },
        {
          title: "スマホ向けUIテストアプリ",
          images: [
            { src: "ui_test/top.webp", alt: "UI TEST トップ" },
            { src: "ui_test/select.webp", alt: "選択式" },
            { src: "ui_test/seek_bar.webp", alt: "シークバー" },
            { src: "ui_test/number.webp", alt: "数値選択" },
            { src: "ui_test/barcode.webp", alt: "バーコードリーダー" },
            { src: "ui_test/menu.webp", alt: "メニュー" },
          ],
          href: "https://0ta-utan.com/questionnaire/index.html",
          information: [
            { title: "開発期間", detail: "5日（50h）" },
            {
              title: "開発言語など",
              detail:
                "Vue, TypeScript, TailwindCSS, (Node, Serverless Framework)",
            },
            {
              title: "プラットフォーム",
              detail: "AWS S3, Cloudfront, (DynamoDB, API Gateway, Lambda)",
            },
          ],
          caption:
            "実務で作ったアンケートアプリのUI部分のみを抽出して再デザイン・再設計したアプリ。直感的に選択肢を選ばせたり、VAS形式で回答させる方法にこだわった。また、QuaggaJSによるバーコードリーダーも実装。動的に設問を生成しているため、自由に設問を編集することが可能。実務ではさらにバックエンドのREST APIを作成。括弧書きは実務で使用したもの。",
          color: { theme: "#bae8e8", button: "#272343" },
        },
        {
          title: "ポートフォリオ",
          images: [{ src: "portfolio/top.webp", alt: "トップ" }],
          href: "https://0ta-utan.com",
          information: [
            { title: "開発期間", detail: "8日（60h）" },
            {
              title: "開発言語など",
              detail: "Vue, TypeScript, TailwindCSS, Three.js",
            },
            {
              title: "プラットフォーム",
              detail: "AWS S3, Cloudfront",
            },
          ],
          caption: "ここに詳細が入ります。",
          color: { theme: "#ff8e3c", button: "#d9376e" },
        },
      ],
    },
  },
  contacts: {
    title: "Contact",
    direction: "left",
    content: {
      elements: [
        {
          name: "Twitter",
          icon: { name: "twitter", color: "#1da1f2" },
          href: "https://twitter.com/Utan_Otouto",
        },
        {
          name: "GitHub",
          icon: { name: "github", color: "#333333" },
          href: "https://github.com/mininjin",
        },
      ],
    },
  },
};
