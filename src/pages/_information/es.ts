import ExternalLink from "@components/svgs/ExternalLink.astro";
import GitHubLogo from "@components/svgs/social/GitHubLogo.astro";
import LinkedInLogo from "@components/svgs/social/LinkedInLogo.astro";
import AstroIcon from "@components/svgs/tech/AstroIcon.astro";
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
  { label: "Inicio", href: "#home" },
  { label: "Mi Experiencia", href: "#my-experience" },
  { label: "Sobre mí", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Hablemos", href: "https://www.linkedin.com/in/thgear27/", icon: ExternalLink, target: "_blank" },
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
  title: "Mi Experiencia",
  subtitle: "Donde he trabajado y colaborado",
  collaboratedText: "~ colaboré con",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Akou",
      date: "Jul - Nov 2024",
      location: "Londres, Reino Unido",
      description:
        "Desarrollé diseños responsivos, menús dinámicos y autenticación segura, mejoré elementos de la interfaz de usuario e implementé un sistema de importación de CSV con validaciones, trabajando en colaboración con un diseñador.",
    },
    {
      title: "Full Stack Developer",
      company: "Modular Rocks",
      date: "Nov 2023 - Nov 2024 ",
      location: "Londres, Reino Unido",
      description:
        "Integré la API de GitHub, implementé autenticación segura con OAuth y utilicé SSR en Astro. También trabajé con AST para manipulación de código, escribí pruebas para asegurar la calidad e incorporé conceptos de diseño desde Figma.",
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
      location: "Lima, Perú",
      description:
        "Diseñé el sitio web de XXX - CONEIMERA, construí un backend seguro con RLS en Supabase, integré una pasarela de pagos y desarrollé un panel de administración para gestionar registros y pagos.",
    },
  ],
};

export const aboutMeCopy: AboutCopy = {
  title: "Sobre mí",
  subtitle: "¿Quién soy yo?",
  paragraphs: [
    "Me apasiona la programación y me fascina cómo el software interactúa con el hardware. Mi camino comenzó con *C*, *C++* y *Ensamblador*, donde adquirí una *sólida comprensión* de la gestión de memoria, punteros y arquitectura de sistemas. Estos lenguajes de bajo nivel me enseñaron a pensar críticamente sobre el rendimiento y la eficiencia.",
    "Cuando hice la transición a *JavaScript*, me intrigaron sus peculiaridades: su naturaleza asíncrona, la herencia prototípica y su arquitectura orientada a eventos. Decidido a dominarlo, exploré sus aspectos internos, desde el alcance léxico y los closures hasta las complejidades del event loop.",
    "Me encanta construir soluciones *eficientes*, *escalables* y *mantenibles*. Para mí, programar es más que escribir funciones: se trata de crear experiencias de usuario fluidas y diseñar sistemas que resistan el paso del tiempo.",
  ],
};

export const techStackCopy: TechStackCopy = {
  title: "Tech Stack",
  subtitle: "Tecnologías que utilizo",
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
        {
          name: "Next.js",
          icon: NextIcon,
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
  otherTechsTitle: "Otras tecnologías",
  sectionParagraphs: [
    "Más allá de solo usar tecnologías, disfruto *entender* su funcionamiento interno y cómo interactúan entre sí. Me mantengo al día con *herramientas emergentes* y *mejores prácticas* para refinar continuamente mi flujo de trabajo y entregar *código de alta calidad*.",
  ],
};

export const heroCopy: HeroCopy = {
  title: "Hola, soy *Fernando*",
  subtitle: "Web Developer - Problem Solver",
  description:
    "Creo experiencias web *rápidas*, *modernas* y *amigables para el usuario*. Apasionado por el código limpio, el rendimiento y crear soluciones digitales que generen impacto.",
  emailText: "Email",
  email: email,
  socialLinks: socialLinks,
};

export const callToActionCopy: CallToActionCopy = {
  title: "¡Trabajemos juntos para crear algo genial!",
  subtitle: "Contáctame para colaboraciones, consultas o simplemente para saludar.",
  emailText: "Envíame un correo",
  email: email,
};
