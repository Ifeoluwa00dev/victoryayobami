/**
 * ALL SITE CONTENT LIVES HERE. Edit this file and nothing else for copy changes.
 *
 * Wording below reflects what Victory actually did in the field:
 * gathering market/customer feedback on the bank's products and reporting
 * it to the product team with ideas to solve customer problems.
 *
 * Metrics were deliberately left out. Add a number to `outcome` ONLY if she can
 * show where it came from. Any item with an `outcome` field renders a result chip;
 * leave it out and the chip simply doesn't show.
 *
 * TODO(verify): confirm each E-Business bullet below is accurate before publishing.
 */

export const content = {
  name: { first: "Victory", last: "Ayobami Ojo" },
  role: "Product Manager",
  tagline:
    "I get close to customers, surface what's actually broken, and push product teams to fix it.",
  contact: {
    email: "victoryayobami7@gmail.com",
    phone: "+234 810 159 5626",
    linkedin: "https://linkedin.com/in/victory-ayobami",
    linkedinLabel: "linkedin.com/in/victory-ayobami",
    location: "Lagos, Nigeria",
  },

  about:
    "I'm a product professional at Zenith Bank, working across digital channels and the merchant business since 2021. My strength is the space between customers and the product team: collecting first-hand market feedback, turning it into clear problems, and bringing solution ideas back to the people who decide what gets built.",

  focus: [
    {
      title: "Listen in the field",
      text: "First-hand feedback from customers and merchants on how the bank's products really perform.",
    },
    {
      title: "Make it actionable",
      text: "Scattered feedback turned into clear problems a product team can weigh and prioritise.",
    },
    {
      title: "Push for the fix",
      text: "Solution ideas from the field, brought to the team and advocated for when they're worth building.",
    },
  ],

  experience: [
    {
      role: "Product Manager, Merchant Business",
      company: "Zenith Bank Plc",
      dates: "Dec 2023 – Present",
      bullets: [
        "Gathered market and customer feedback on the bank's products directly from the field.",
        "Reported recurring customer problems to the product team, with suggested fixes.",
        "Contributed solution ideas from field experience for the team to consider and prioritise.",
      ],
    },
    {
      role: "E-Business Representative, Merchant Business",
      company: "Zenith Bank Plc",
      dates: "Dec 2021 – Dec 2023",
      bullets: [
        "Managed digital banking channels (mobile app, USSD, WhatsApp banking) for a smooth user experience.",
        "Worked with engineering on merchant USSD integrations, from requirements through testing.",
        "Supported merchant onboarding and adoption, using customer feedback to improve retention.",
        "Partnered with Customer Service on strategies for different customer segments.",
      ],
    },
  ],

  // Selected work. `outcome` is optional; omit it until there's a real, provable result.
  work: [
    {
      title: "Field feedback to product team",
      context: "Zenith Bank · Merchant Business",
      problem:
        "Customer pain points with the bank's products weren't always reaching the people deciding what to build.",
      action:
        "Collected market feedback across products and reported the recurring issues to the team, along with ideas from the field to solve them.",
      // outcome: "",
    },
    {
      title: "Merchant USSD integrations",
      context: "Zenith Bank · E-Business",
      problem:
        "Merchants needed a simple way to accept and manage payments on USSD without custom engineering each time.",
      action:
        "Gathered merchant requirements, coordinated with the integrations team, and tested each integration before go-live.",
      // outcome: "",
    },
    {
      title: "Merchant onboarding and adoption",
      context: "Zenith Bank · E-Business",
      problem:
        "Merchants who signed up weren't always using the digital channels available to them.",
      action:
        "Shaped onboarding and adoption approaches around what merchants and customers told us in the field.",
      // outcome: "",
    },
  ],

  skills: [
    "Customer Research",
    "Feedback Synthesis",
    "Product Strategy",
    "Stakeholder Management",
    "Digital Payments",
    "USSD Systems",
    "Merchant Platforms",
    "Agile & Scrum",
    "Jira",
    "Data Analysis",
    "Excel",
  ],

  certifications: [
    "Fundamental Scrum Master (2023)",
    "API Product Management (2023)",
    "Introduction to Product Management (2023)",
    "Data Analysis (2024)",
  ],

  education: [
    { degree: "M.Sc. Cell Biology & Genetics", school: "University of Lagos", year: "2023" },
    { degree: "B.Sc. Human Anatomy", school: "Bowen University", year: "2019" },
  ],

  languages: ["English", "Yoruba"],
};
