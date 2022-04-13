import { Messages } from "@/@types/schema";

export const INITIAL_MESSAGES: Messages = {
  top: {
    title: "Top",
    content: {
      message: "0ta Utan's Portfolio",
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
        "鳥取県出身のWebエンジニア。新卒2年目にして自分の事業を立てるために地元に帰ったやつ。数理学修士（専攻は数理物理学、論文賞受賞歴アリ）好きな言語=TypeScript。基本/応用情報技術者。",
    },
  },
  skills: {
    title: "Skills",
    direction: "right",
    content: {
      elements: [
        {
          title: "Front End",
          caption: "スキルの説明文が入ります。",
          chart: [
            { name: "Vanilla HTML/CSS", value: 3 },
            { name: "Vanilla JS", value: 3 },
            { name: "Vanilla TS", value: 3 },
            { name: "Vue/Nuxt", value: 4 },
            { name: "React", value: 1 },
            { name: "TailwindCSS", value: 3 },
          ],
          color: "#d9376e",
        },
        {
          title: "Back End",
          caption: "スキルの説明文が入ります。",
          chart: [
            { name: "Serverless Framework", value: 3 },
            { name: "Node", value: 3 },
            { name: "AWS", value: 3 },
            { name: "Python", value: 2 },
            { name: "PHP", value: 1 },
          ],
          color: "#ff8906",
        },
        {
          title: "Tools",
          caption: "スキルの説明文が入ります。",
          chart: [
            { name: "WordPress", value: 2 },
            { name: "Git", value: 3 },
            { name: "VSCode", value: 3 },
            { name: "Linux", value: 3 },
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
          animationType: "gradual",
          data: [
            {
              type: "text",
              term: "1996-",
              title: "Birth",
              explanation: "ここに説明文が入ります。",
            },
            {
              type: "image",
              src: "",
              alt: "",
            },
            {
              type: "text",
              term: "2003-2016",
              title: "Elementary - High School",
              explanation: "ここに説明文が入ります。",
            },
          ],
        },
        {
          position: "left",
          animationType: "gradual",
          data: [
            {
              type: "text",
              term: "2016-2021",
              title: "Undergraduate - Master",
              explanation: "ここに説明文が入ります。",
            },
            {
              type: "image",
              src: "",
              alt: "",
            },
            {
              type: "text",
              term: "2021",
              title: "Make Decision",
              explanation: "ここに説明文が入ります。",
            },
          ],
        },
        {
          position: "right",
          animationType: "gradual",
          data: [
            {
              type: "text",
              term: "2021-2022",
              title: "Working as SE",
              explanation: "ここに説明文が入ります。",
            },
            {
              type: "image",
              src: "",
              alt: "",
            },
            {
              type: "text",
              term: "2021-",
              title: "SNS Marketing",
              explanation: "ここに説明文が入ります。",
            },
          ],
        },
        {
          position: "right",
          animationType: "at-once",
          data: [
            {
              type: "text",
              term: "2021-2022",
              title: "And My Own Business...",
            },
          ],
        },
      ],
      message: "ここにキャリアのメッセージが入ります。",
    },
  },
  works: {
    title: "Works",
    direction: "right",
    content: {
      elements: [
        {
          title: "実家のWebサイト",
          src: "aoya_cafe_berry.webp",
          href: "https://aoya-cafe-berry.com",
          information: [{ title: "開発期間", detail: "1週間（60h）" }],
          caption: "ここに詳細が入ります。",
          color: "#a61c00",
        },
        {
          title: "スマホ向けUIテストアプリ",
          src: "",
          href: "https://aoya-cafe-berry.com",
          information: [],
          caption: "ここに詳細が入ります。",
          color: "#bae8e8",
        },
        {
          title: "ポートフォリオ",
          src: "",
          href: "https://aoya-cafe-berry.com",
          information: [],
          caption: "ここに詳細が入ります。",
          color: "#ff8e3c",
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
          icon: "",
          href: "https://twitter.com/Utan_Otouto",
        },
      ],
    },
  },
};
