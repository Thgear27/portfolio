export type NavbarOption = {
  label: string;
  href: string;
  icon?: (_props: Record<string, any>) => any;
  target?: string;
};

export type SocialLink = { label: string; href: string; icon: (_props: Record<string, any>) => any; target?: string };

export type JobInfo = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  workTeammates?: { name: string; imgURL: string; linkedInUrl: string }[];
};

export type ExperienceCopy = {
  title: string;
  subtitle: string;
  jobs: JobInfo[];
};

export type Tech = {
  name: string;
  icon?: (_props: Record<string, any>) => any;
};

export type TechCategory = {
  title: string;
  techs: Tech[];
};

export type TechStackCopy = {
  title: string;
  subtitle: string;
  techStack: TechCategory[];
  otherTechs: Tech[];
  otherTechsTitle: string;
  sectionParagraphs: string[];
};

export type HeroCopy = {
  title: string;
  subtitle: string;
  description: string;
  emailText: string;
  email: string;
  socialLinks: SocialLink[];
};

export type CallToActionCopy = {
  title: string;
  subtitle: string;
  emailText: string;
  email: string;
};

export type AboutCopy = {
  title: string;
  subtitle: string;
  paragraphs: string[];
};
