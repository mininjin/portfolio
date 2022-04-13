import { IconName } from "@fortawesome/fontawesome-common-types";

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

type CategoryContent = {
  title?: string;
  direction?: VerticalPosition;
};

export type TopContent = CategoryContent & {
  content: {
    message: string;
  };
};

export type ProfileContent = CategoryContent & {
  content: {
    image: string;
    name: string;
    nickname: string;
    birth: string;
    comment: string;
  };
};

export type SkillsContent = CategoryContent & {
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

export type CareerContent = CategoryContent & {
  content: {
    blocks: CareerBlock[];
    message: string;
  };
};

export type CareerBlock = {
  position: VerticalPosition;
  data: (CareerText | CareerImage)[];
  animationType: CareerAnimationType;
};

export type CareerAnimationType = "gradual" | "at-once";

export type CareerText = {
  type: "text";
  term: string;
  title: string;
  explanation?: string;
};

export type CareerImage = { type: "image"; src: string; alt: string };

export type WorksContent = CategoryContent & {
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

export type ContactContent = CategoryContent & {
  content: {
    elements: ContactElement[];
  };
};

export type ContactElement = {
  icon: { name: IconName; color: string;  };
  name: string;
  href: string;
};

export type VerticalPosition = "left" | "right";
