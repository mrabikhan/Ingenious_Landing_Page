import {
  TrendingUp,
  Search,
  ShoppingCart,
  Code2,
  Palette,
  Gamepad2,
  Workflow,
  Users,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface MegaMenuColumn {
  id: string;
  label: string;
  tagline: string;
  accent: string; // tailwind gradient classes for this column's icon chips
  items: MegaMenuItem[];
}

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    id: "grow",
    label: "Grow",
    tagline: "Get found, get chosen, get paid",
    accent: "from-gold-400 to-gold-600",
    items: [
      {
        title: "AI Digital Marketing",
        description: "SEO, content and PPC built around AI-assisted targeting",
        href: "/services/ai-digital-marketing",
        icon: TrendingUp,
      },
      {
        title: "SEO & GEO",
        description: "Rank higher on search, rank faster on generative engines",
        href: "/services/seo-geo",
        icon: Search,
      },
      {
        title: "E-Commerce",
        description: "Storefronts on Shopify, WooCommerce and custom CMS",
        href: "/services/e-commerce",
        icon: ShoppingCart,
      },
    ],
  },
  {
    id: "build",
    label: "Build",
    tagline: "Ship the product",
    accent: "from-amber-400 to-gold-600",
    items: [
      {
        title: "Software Development",
        description: "Web and mobile apps, from MVP to scale",
        href: "/services/software-development",
        icon: Code2,
      },
      {
        title: "Design",
        description: "Figma, UI/UX and brand identity systems",
        href: "/services/design",
        icon: Palette,
      },
      {
        title: "Gaming & XR",
        description: "Games, AR, VR and XR experiences",
        href: "/services/gaming-xr",
        icon: Gamepad2,
      },
    ],
  },
  {
    id: "secure",
    label: "Secure & Scale",
    tagline: "Operate with confidence",
    accent: "from-gold-500 to-orange-600",
    items: [
      {
        title: "Automation",
        description: "Workflows, n8n pipelines, chatbots and CRM",
        href: "/services/automation",
        icon: Workflow,
      },
      {
        title: "Staff Augmentation",
        description: "Hire top vetted talent, fast",
        href: "/services/staff-augmentation",
        icon: Users,
      },
      {
        title: "Cybersecurity",
        description: "Compliance, penetration testing and managed security",
        href: "/services/cybersecurity",
        icon: ShieldCheck,
      },
    ],
  },
];

export const primaryNavLinks = [
  { label: "Explore More", href: "/explore" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];