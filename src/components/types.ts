import type { ImageMetadata } from "astro";

export type NavbarOption = {
  label: string;
  href: string;
  icon?: (_props: Record<string, any>) => any;
  target?: string;
};

export type SocialLink = { label: string; href: string; icon: (_props: Record<string, any>) => any; target?: string };

export type WorkTeammate = {
  name: string;
  imgURL: string;
  linkedInUrl: string;
};

type JobInfoBase = {
  title: string;
  company: string;
  companyLogo?: ImageMetadata;
  date: string;
  location: string;
  description: string;
};

export type JobInfo =
  | (JobInfoBase & {
      workTeammates: WorkTeammate[];
      collaboratedText: string;
    })
  | (JobInfoBase & {
      workTeammates?: undefined;
      collaboratedText?: undefined;
    });

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
