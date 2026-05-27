export type ExperienceItem = {
  company: string;
  companyUrl?: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Express Scripts",
    companyUrl: "https://www.express-scripts.ca",
    role: "QA Automation Engineer",
    start: "Mar 2024",
    end: "Present",
    bullets: [
      "Architected and led a Playwright automation framework in TypeScript, designing for maintainability with a page-object model and reusable fixtures that cut code per test ~50% and suite runtime 60%.",
      "Engineered a data provisioning tool to generate 1,000+ test users mapped to linked pharmacy records, enforcing one-to-one integrity and dependency constraints for valid, production-like test data at scale.",
      "Built and maintained a Java automation framework using Selenium, JUnit, Cucumber/BDD, and Maven, developing 25+ reusable components that cut manual QA 75%.",
      "Automated API and data validation with REST assertions and Oracle SQL across 50+ endpoints, ensuring consistency between services and databases.",
      "Identified high-risk edge cases through code reviews with developers, reducing post-release defects by 30% across 10+ release cycles.",
    ],
  },
  {
    company: "Hammond Power Solutions",
    companyUrl: "https://www.hammondpowersolutions.com",
    role: "Software Developer Intern",
    start: "May 2021",
    end: "Apr 2022",
    bullets: [
      "Developed internal tools using SharePoint, supporting 3+ departments and optimizing cross-team workflows.",
      "Built a custom issue-tracking system managing 100+ internal requests, streamlining intake and categorization.",
      "Integrated custom SharePoint forms with Excel reporting, eliminating 80% of manual entry errors.",
      "Automated form validation and email notifications, cutting average request response time by 40%.",
      "Improved operational efficiency by 50% across North American operations through workflow automation.",
    ],
  },
];
