import { IconName } from "@fortawesome/fontawesome-common-types";

export type ResponsiveKey = "desktop" | "tablet" | "mobile";

export type Category =
  | "top"
  | "profile"
  | "skills"
  | "career"
  | "works"
  | "contacts";

export type Messages = {
  top: TopContent;
  profile: ProfileContent;
  skills: SkillsContent;
  career: CareerContent;
  works: WorksContent;
  contacts: ContactContent;
};

type SectionContent = {
  title: string;
  direction?: VerticalPosition;
};

export type TopContent = SectionContent & {
  content: { message: string; animation: TopAnimationConfig };
};
export type TopAnimationConfig = {
  text: {
    value: Record<ResponsiveKey, string>;
    frontColor: string;
    sideColor: string;
    bouncingNumber: number;
  };
  background: { color: string };
  spotLight: { color: string };
  plane: { color: string };
};

export type ProfileContent = SectionContent & {
  content: {
    image: string;
    name: string;
    nickname: string;
    birth: string;
    comment: string;
  };
};

export type SkillsContent = SectionContent & {
  content: {
    elements: SkillElement[];
  };
};

export type SkillElement = {
  title: string;
  caption: string;
  chart: ChartObject[];
  color: string;
};

export type ChartObject = { name: string; value: 0 | 1 | 2 | 3 | 4 | 5 };

export type CareerContent = SectionContent & {
  content: {
    blocks: CareerBlock[];
    message: string;
  };
};

export type CareerBlock = {
  position: VerticalPosition;
  data: (CareerText | CareerImage)[];
  margin: boolean;
};

export type CareerText = {
  type: "text";
  term: string;
  title: string;
  explanation?: string;
};

export type CareerImage = { type: "image"; src: string; alt: string };

export type WorksContent = SectionContent & {
  content: {
    elements: WorkElement[];
  };
};

export type WorkElement = {
  title: string;
  src: string;
  href: string;
  information: { title: string; detail: string }[];
  caption: string;
  color: string;
};

export type ContactContent = SectionContent & {
  content: {
    elements: ContactElement[];
  };
};

export type ContactElement = {
  icon: { name: IconName; color: string };
  name: string;
  href: string;
};

export type VerticalPosition = "left" | "right";
