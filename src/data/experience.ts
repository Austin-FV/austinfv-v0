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
    role: "Automation Engineer",
    start: "Mar 2024",
    end: "Present",
    bullets: [
      "Engineered a data provisioning tool to generate 1,000+ test users in staging, enabling large-scale performance validation under production-like conditions.",
      "Designed and scaled a Java automation framework with Selenium, JUnit, Cucumber (BDD), and Maven, building 25+ reusable components that expanded regression coverage and cut manual QA by 75%.",
      "Automated API and data validation with REST assertions and Oracle SQL across 50+ endpoints, ensuring consistency between services and databases.",
      "Identified high-risk edge cases through code reviews with developers, reducing post-release defects by 30% across 10+ release cycles.",
      "Standardized Zephyr test case practices in Jira across 100+ test cases, improving consistency and traceability.",
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
