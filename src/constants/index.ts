

import { Linkedin, Twitter, Facebook, Instagram, Phone, Mail, Users, Briefcase, Building, FileCheck, CreditCard, Shield, Calculator, TrendingUp, PieChart } from 'lucide-react';



// ===============================
// Footer Links Links
// ===============================
export const FOOTER_LINKS = {
  services: [
    { label: "Tax Planning", href: "/services/tax-planning" },
    { label: "Business Tax", href: "/services/business-tax" },
    { label: "Personal Tax", href: "/services/personal-tax" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Services Fee", href: "/fees" },
  ],
  resources: [
    { label: "Tax Calculator", href: "/resources/calculator" },
    { label: "FAQs", href: "/resources/faq" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
] as const;

export const CONTACT_INFO = {
  phone: {
    label: "+1 (234) 567-890",
    href: "tel:+1234567890",
    icon: Phone,
  },
  email: {
    label: "hello@taxpraxis.com",
    href: "mailto:hello@taxpraxis.com",
    icon: Mail,
  },
} as const;



// ===============================
// Services Fees Lists
// ===============================

export const serviceCategories = [
  {
    id: "individual",
    title: "Individual Tax Returns",
    icon: Users,
    color: "bg-blue-600",
    items: [
      { service: "Individual Tax Return", description: "Review of wage/salary and deductions", fee: "$187" },
      { service: "Additional Reconciliations", description: "e.g., multiple dividend/trust distribution", fee: "$33" },
      { service: "Additional Schedules", description: "e.g., investment rental schedules", fee: "$66" },
      { service: "Significant Schedules", description: "e.g., crypto/capital gain transactions", fee: "$178" },
      { service: "No Return Necessary", description: "Filing not required", fee: "$110" },
    ]
  },
  {
    id: "sole-trader",
    title: "Sole Trader Business Returns",
    icon: Briefcase,
    color: "bg-blue-700",
    items: [
      { service: "Sole Trader – Micro", description: "Businesses under $75k", fee: "$365" },
      { service: "Sole Trader – Standard", description: "Standard return processing", fee: "$730" },
      { service: "Sole Trader – Full Reports", description: "Complete financial reports", fee: "$1,250" },
    ]
  },
  {
    id: "companies",
    title: "Companies, Trusts & SMSF",
    icon: Building,
    color: "bg-blue-800",
    items: [
      { service: "Partnerships", description: "Partnership tax returns", fee: "$1,250" },
      { service: "Companies / Trusts", description: "Corporate and trust returns", fee: "$1,850" },
      { service: "SMSF", description: "Including independent audit", fee: "$2,250" },
    ]
  },
  {
    id: "bas",
    title: "BAS Lodgements",
    icon: FileCheck,
    color: "bg-blue-900",
    items: [
      { service: "Review and Lodge", description: "Complete BAS processing", fee: "$300" },
      { service: "Nil BAS / PAYGi", description: "Lodgment of Nil BAS or vary PAYGi only", fee: "$110" },
    ]
  },
  {
    id: "registrations",
    title: "Registrations & Set‑Up",
    icon: CreditCard,
    color: "bg-blue-600",
    items: [
      { service: "Basic Registration", description: "ABN, TFN, GST, PAYG or business name", fee: "$200" },
      { service: "Companies", description: "Company registration", fee: "$1,200" },
      { service: "Trusts", description: "Trust setup", fee: "$1,200" },
      { service: "Trust with Corporate Trustee", description: "Complete trust structure", fee: "$2,100" },
      { service: "SMSF", description: "Self-Managed Superannuation Fund", fee: "$1,200" },
      { service: "SMSF with Corporate Trustee", description: "SMSF complete structure", fee: "$2,100" },
    ]
  },
  {
    id: "asic",
    title: "ASIC Corporate Compliance",
    icon: Shield,
    color: "bg-blue-700",
    items: [
      { service: "Annual Review", description: "ASIC annual review & minutes (+ASIC fees)", fee: "$250" },
      { service: "Change of Details", description: "Update company details (+ASIC fees)", fee: "$250" },
      { service: "De‑registration", description: "Including ASIC fees", fee: "$400" },
    ]
  },
];

export const servicePackages = [
  {
    period: "Quarterly",
    description: "Accounts updated quarterly",
    cap: "3 hrs/qtr",
    fee: "$370"
  },
  {
    period: "Monthly",
    description: "Accounts updated monthly",
    cap: "3 hrs/mth",
    fee: "$470"
  },
  {
    period: "Weekly",
    description: "Accounts updated weekly",
    cap: "3 hrs/week",
    fee: "$790"
  },
  {
    period: "Daily",
    description: "Accounts updated daily",
    cap: "3 hrs/day",
    fee: "$1,870"
  },
];

export const payrollRates = [
  { employees: "1", weekly: "$278", fortnightly: "$271", monthly: "$264" },
  { employees: "5", weekly: "$390", fortnightly: "$355", monthly: "$320" },
  { employees: "10", weekly: "$530", fortnightly: "$460", monthly: "$390" },
  { employees: "20", weekly: "$810", fortnightly: "$670", monthly: "$530" },
  { employees: "50", weekly: "$1,650", fortnightly: "$1,300", monthly: "$950" },
];

export const adhocRates = [
  { service: "Mixed Hourly Rate", fee: "$344" },
  { service: "Mixed Daily Rate", fee: "$1,720" },
  { service: "Mixed Weekly Rate", fee: "$6,880" },
];

// ===============================
// Navigation Links
// ===============================

export const navLinks = [
  
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
  {
    id: "team",
    label: "Meet Our Team",
    href: "/team",
  },
  {
    id: "vision",
    label: "Our Vision",
    href: "/vision",
  },
  {
    id: "service",
    label: "Services Fee",
    href: "/fees",
  },
] as const;


export const personalServices = [
  {
    id: 1,
    title: "Tax Returns",
    slug: "tax-returns",
    subtitle: "Smart solutions customised to optimise your tax return",
    description:
      "Maximize your refunds with strategic tax planning and precision filing. We go beyond basic deductions to uncover every legitimate opportunity for tax savings.",
    icon: Calculator,
    features: [
      "Personalized tax strategy development",
      "Investment property tax optimization",
      "Work-from-home expense maximization",
      "Investment income tax minimization",
      "Retirement contribution strategies",
    ],
  },
  {
    id: 2,
    title: "General Insurance",
    slug: "general-insurance",
    subtitle: "We'll find the smartest insurance solution for you",
    description:
      "Comprehensive protection tailored to your unique circumstances. From personal assets to income protection, we secure what matters most.",
    icon: Shield,
    features: [
      "Personal & family risk assessment",
      "Income protection insurance",
      "Life & trauma coverage tailored to you",
      "Professional indemnity solutions",
      "Health insurance optimization",
    ],
  },
  {
    id: 3,
    title: "Financial Planning",
    slug: "financial-planning",
    subtitle:
      "A smart financial plan is lifestyle insurance for you and your family",
    description:
      "Strategic roadmap to achieve your life goals. We create comprehensive plans that grow and protect your wealth through every life stage.",
    icon: TrendingUp,
    features: [
      "Personal wealth roadmap creation",
      "Retirement planning & projections",
      "Education funding strategies",
      "Estate planning & wealth transfer",
      "Debt management optimization",
    ],
  },
  {
    id: 4,
    title: "Self Managed Super Fund",
    slug: "self-managed-superannuation-fund",
    subtitle:
      "Is a self managed superannuation fund a smart solution for you?",
    description:
      "Take control of your retirement savings. Our SMSF experts guide you through establishment, compliance, and investment strategy optimization.",
    icon: PieChart,
    features: [
      "SMSF establishment & compliance",
      "Investment strategy optimization",
      "Property investment through SMSF",
      "Pension phase planning",
      "Ongoing administration & reporting",
    ],
  },
];