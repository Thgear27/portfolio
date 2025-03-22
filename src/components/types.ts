export type NavbarOption = { label: string; href: string; icon?: (_props: Record<string, any>) => any };

export type SocialLink = { label: string; href: string; icon: (_props: Record<string, any>) => any, target?: string };

export type JobInfo = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  workTeammates?: { name: string; imgURL: string; linkedInUrl: string }[];
};

export type Tech = {
  name: string;
  icon?: (_props: Record<string, any>) => any;
};

export type TechCategory = {
  title: string;
  techs: Tech[];
};

export type TechSectionInformation = {
  techStack: TechCategory[];
  otherTechs: Tech[];
  sectionParagraphs: string[];
};
