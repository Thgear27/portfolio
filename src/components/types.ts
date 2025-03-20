export type NavbarOption = { label: string; href: string; icon?: (_props: Record<string, any>) => any };

export type SocialLink = { label: string; href: string; icon: (_props: Record<string, any>) => any };

export type JobInfo = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  workTeamates?: { name: string; imgURL: string }[];
};
