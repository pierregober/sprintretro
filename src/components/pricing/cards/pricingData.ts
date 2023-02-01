export const products = [
  {
    name: "Freemium",
    description: "It's free forever membership, no credit card required",
    price: "$0",
    features: {
      // Features,
      Boards: "Unlimited",
      "Guest Invites": "Unlimited",
      "Access To All Retros": true,
      Integrations: true,
      "Export Action Items": true,
      "Export All Board Data": true,
      "Access to SOC Audit": false,
      "Volume Discount": false,
      "Annual Invoicing": false,
      "Custom Domain": false,
      "Custom Branding": false,
      "SAML SSO": false,
      // Analytics,
      "AI Insights": false,
      "Additional Dashboard Widgets": false,
      // Support
      "Priority Support": false,
    },
  },
  {
    name: "Premium",
    // isPopular: true,
    description: "Custom feel to your retros, make it official",
    price: "$-",
    features: {
      // Features,
      Boards: "Unlimited",
      "Guest Invites": "Unlimited",
      "Access To All Retros": true,
      Integrations: true,
      "Volume Discount": false,
      "Annual Invoicing": true,
      "Access to SOC Audit": true,
      "Export Action Items": true,
      "Export All Board Data": true,
      "Custom Domain": true,
      "Custom Branding": true,
      "SAML SSO": false,
      // Analytics,
      "AI Insights": false,
      "Additional Dashboard Widgets": false,
      // Support
      "Priority Support": false,
    },
  },
  {
    name: "Enterprise",
    description: "Overlook your organization & priority support",
    price: "$-",
    features: {
      // Features,
      Boards: "Unlimited",
      "Guest Invites": "Unlimited",
      "Access To All Retros": true,
      Integrations: true,
      "Volume Discount": true,
      "Annual Invoicing": true,
      "Export Action Items": true,
      "Export All Board Data": true,
      "Access to SOC Audit": true,
      "Custom Domain": true,
      "Custom Branding": true,
      "SAML SSO": true,
      // Analytics,
      "AI Insights": true,
      "Additional Dashboard Widgets": true,
      // Support
      "Priority Support": true,
    },
  },
];

interface Feature {
  category: string;
  items: {
    name: keyof typeof products[number]["features"];
    tooltip?: string;
  }[];
}

export const features: Feature[] = [
  {
    category: "Features",
    items: [
      { name: "Boards" },
      { name: "Guest Invites" },
      { name: "Access To All Retros" },
      {
        name: "Integrations",
        tooltip:
          "Import data from Jira, Trello, GitHub, GitLab, Asana, and more",
      },
      { name: "Export Action Items" },
      { name: "Export All Board Data" },
      { name: "Annual Invoicing" },
      { name: "Access to SOC Audit" },
      {
        name: "Custom Domain",
        tooltip:
          "Get a custom subdomain. Example: [company_name].sprintretro.com or [company_name].afteraction.ai",
      },
      { name: "Custom Branding", tooltip: "Company colors, logo, etc" },
      { name: "Volume Discount" },
      { name: "SAML SSO" },
    ],
  },
  {
    category: "Analytics",
    items: [{ name: "AI Insights" }, { name: "Additional Dashboard Widgets" }],
  },
  {
    category: "Support",
    items: [{ name: "Priority Support" }],
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
