import EmailLogo from "@components/svgs/social/EmailLogo.astro";
import GitHubLogo from "@components/svgs/social/GitHubLogo.astro";
import LinkedInLogo from "@components/svgs/social/LinkedInLogo.astro";
import type { JobInfo, SocialLink } from "@components/types";

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/thgear27/",
    icon: LinkedInLogo,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Thgear27",
    icon: GitHubLogo,
    label: "GitHub",
  },
  {
    href: "#",
    icon: EmailLogo,
    label: "Email me",
  },
];

export const jobs: JobInfo[] = [
  {
    title: "Full Stack Developer",
    company: "Akou",
    date: "Jul - Nov 2024",
    location: "London, UK",
    description:
      "I developed responsive layouts, dynamic menus, and secure authentication, improved UI elements, and implemented a validated CSV import system while collaborating with a designer.",
  },
  {
    title: "Full Stack Developer",
    company: "Modular Rocks",
    date: "Nov 2023 - Nov 2024 ",
    location: "Londrom, UK",
    description:
      "I integrated the GitHub API, implemented secure authentication with OAuth, and used SSR in Astro. I also worked with AST for code manipulation, wrote tests for quality, and incorporated Figma design concepts.",
    workTeammates: [
      {
        name: "Jean Pierre Rodríguez",
        imgURL: "/imgs/jeanpierre.webp",
        linkedInUrl: "https://www.linkedin.com/in/jean-piere-rodriguez/",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Coneimera",
    date: "Nov 2023 - Nov 2024",
    location: "Lima, Peru",
    description:
      "I designed the XXX - CONEIMERA website, built a secure backend with RLS in Supabase, integrated a payment gateway, and developed an admin panel for managing registrations and payments.",
  },
];

export const aboutParagraphs = [
  "I'm passionate about coding, fascinated by the way software interacts with hardware. My journey started with *C*, *C++*, and *Assembly*, where I gained a *solid grasp* of memory management, pointers, and system architecture. These low-level languages taught me to think critically about performance and efficiency.",
  "When I transitioned to *JavaScript*, I was intrigued by its quirks—its asynchronous nature, prototypal inheritance, and event-driven architecture. Determined to master it, I explored its internals, from lexical scope and closures to the intricacies of the event loop.",
  "I love building *efficient*, *scalable*, and *maintainable* solutions. To me, coding is more than just writing functions—it's about crafting seamless user experiences and architecting systems that stand the test of time.",
];
