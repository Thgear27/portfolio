import ExternalLink from "@components/svgs/ExternalLink.astro";
import GitHubLogo from "@components/svgs/social/GitHubLogo.astro";
import LinkedInLogo from "@components/svgs/social/LinkedInLogo.astro";
import AstroIcon from "@components/svgs/tech/AstroIcon.astro";
import CloudflareIcon from "@components/svgs/tech/CloudflareIcon.astro";
import CssIcon from "@components/svgs/tech/CssIcon.astro";
import DenoIcon from "@components/svgs/tech/DenoIcon.astro";
import DigitalOceanIcon from "@components/svgs/tech/DigitalOceanIcon.astro";
import DockerIcon from "@components/svgs/tech/DockerIcon.astro";
import ExpressIcon from "@components/svgs/tech/ExpressIcon.astro";
import FigmaIcon from "@components/svgs/tech/FigmaIcon.astro";
import GithubIcon from "@components/svgs/tech/GithubIcon.astro";
import GitIcon from "@components/svgs/tech/GitIcon.astro";
import HtmlIcon from "@components/svgs/tech/HtmlIcon.astro";
import JavascriptIcon from "@components/svgs/tech/JavascriptIcon.astro";
import LinuxIcon from "@components/svgs/tech/LinuxIcon.astro";
import NextIcon from "@components/svgs/tech/NextIcon.astro";
import NodeIcon from "@components/svgs/tech/NodeIcon.astro";
import PnpmIcon from "@components/svgs/tech/PnpmIcon.astro";
import PostgresIcon from "@components/svgs/tech/PostgresIcon.astro";
import ReactIcon from "@components/svgs/tech/ReactIcon.astro";
import SupabaseIcon from "@components/svgs/tech/SupabaseIcon.astro";
import SvelteIcon from "@components/svgs/tech/SvelteIcon.astro";
import TailwindIcon from "@components/svgs/tech/TailwindIcon.astro";
import TypescriptIcon from "@components/svgs/tech/TypescriptIcon.astro";
import VscodeIcon from "@components/svgs/tech/VscodeIcon.astro";
import type {
  HeroCopy,
  ExperienceCopy,
  NavbarOption,
  SocialLink,
  TechStackCopy,
  CallToActionCopy,
  AboutCopy,
} from "@components/types";

export const navbarOptions: NavbarOption[] = [
  { label: "Home", href: "#home" },
  { label: "My Experience", href: "#my-experience" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Let's Talk", href: "https://www.linkedin.com/in/thgear27/", icon: ExternalLink, target: "_blank" },
];

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
];

export const email = "vegasfernando2003@gmail.com";

export const experienceCopy: ExperienceCopy = {
  title: "My Experience",
  subtitle: "Where I have been employed",
  collaboratedText: "~ collaborated with",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Taskd",
      date: "Nov 2025 - Present",
      location: "Canada",
      description:
        "I leverage Large Language Models, modern web development, and Cloudflare Workers to architect intelligent, serverless solutions. I develop sophisticated file parsers and integrate AI capabilities to create scalable, high-performance applications that solve complex problems efficiently.",
      workTeammates: [
        {
          name: "Antony Faris",
          imgURL: "/imgs/antonyfaris.webp",
          linkedInUrl: "https://www.linkedin.com/in/antony-faris/",
        },
      ],
    },
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
      location: "London, UK",
      description:
        "I integrated the GitHub API, implemented secure authentication with OAuth, and used SSR in Astro. I also worked with AST for code manipulation, wrote tests for quality, and incorporated Figma design concepts.",
      workTeammates: [
        {
          name: "Antony Faris",
          imgURL: "/imgs/antonyfaris.webp",
          linkedInUrl: "https://www.linkedin.com/in/antony-faris/",
        },
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
  ],
};

export const aboutMeCopy: AboutCopy = {
  title: "About Me",
  subtitle: "Who am I?",
  paragraphs: [
    "I'm passionate about coding, fascinated by the way software interacts with hardware. My journey started with *C*, *C++*, and *Assembly*, where I gained a *solid grasp* of memory management, pointers, and system architecture. These low-level languages taught me to think critically about performance and efficiency.",
    "When I transitioned to *JavaScript*, I was intrigued by its quirks—its asynchronous nature, prototypal inheritance, and event-driven architecture. Determined to master it, I explored its internals, from lexical scope and closures to the intricacies of the event loop.",
    "I love building *efficient*, *scalable*, and *maintainable* solutions. To me, coding is more than just writing functions—it's about crafting seamless user experiences and architecting systems that stand the test of time.",
  ],
};
export const techStackCopy: TechStackCopy = {
  title: "Tech Stack",
  subtitle: "Technologies I work with",
  techStack: [
    {
      title: "Frontend",
      techs: [
        {
          name: "HTML 5",
          icon: HtmlIcon,
        },
        {
          name: "CSS",
          icon: CssIcon,
        },
        {
          name: "JavaScript",
          icon: JavascriptIcon,
        },
        {
          name: "Tailwind",
          icon: TailwindIcon,
        },
        {
          name: "Astro",
          icon: AstroIcon,
        },
        {
          name: "Svelte",
          icon: SvelteIcon,
        },
        {
          name: "React",
          icon: ReactIcon,
        },
      ],
    },
    {
      title: "Backend",
      techs: [
        {
          name: "Node.js",
          icon: NodeIcon,
        },
        {
          name: "Deno",
          icon: DenoIcon,
        },
        {
          name: "Express",
          icon: ExpressIcon,
        },
        {
          name: "Supabase",
          icon: SupabaseIcon,
        },
        {
          name: "TypeScript",
          icon: TypescriptIcon,
        },
        {
          name: "PostgreSQL",
          icon: PostgresIcon,
        },
        {
          name: "Cloudflare",
          icon: CloudflareIcon,
        },
      ],
    },
    {
      title: "Tools",
      techs: [
        {
          name: "Linux",
          icon: LinuxIcon,
        },
        {
          name: "Digital Ocean",
          icon: DigitalOceanIcon,
        },
        {
          name: "Git",
          icon: GitIcon,
        },
        {
          name: "GitHub",
          icon: GithubIcon,
        },
        {
          name: "Figma",
          icon: FigmaIcon,
        },
        {
          name: "VS Code",
          icon: VscodeIcon,
        },
        {
          name: "pnpm",
          icon: PnpmIcon,
        },
        {
          name: "Docker",
          icon: DockerIcon,
        },
      ],
    },
  ],
  otherTechs: [
    {
      name: "Drizzle",
    },
    {
      name: "Sqlite",
    },
    {
      name: "MySQL",
    },
    {
      name: "C/C++",
    },
    {
      name: "Caddy",
    },
    {
      name: "Cloudflare",
    },
  ],
  otherTechsTitle: "Other Techs",
  sectionParagraphs: [
    "Beyond just using technologies, I enjoy *understanding * their inner workings and how they interact. I stay up to date with *emerging tools* and *best practices* to continuously refine my workflow and deliver *high-quality code*.",
  ],
};

export const heroCopy: HeroCopy = {
  title: "Hello, I'm *Fernando*",
  subtitle: "Web Developer - Problem Solver",
  description:
    "I build *fast*, *modern*, and *user-friendly* web experiences. Passionate about clean code, performance, and crafting digital solutions that make an impact.",
  emailText: "Email",
  email: email,
  socialLinks: socialLinks,
};

export const callToActionCopy: CallToActionCopy = {
  title: "Let's work together to build something great!",
  subtitle: "Reach out to me for collaborations, inquiries, or just to say hello.",
  emailText: "Send me an email",
  email: email,
};
