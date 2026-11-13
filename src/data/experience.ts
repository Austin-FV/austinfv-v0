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
    role: "Software Developer, Quality Engineer",
    start: "Mar 2024",
    end: "Present",
    bullets: [
      "Introduced and architected a TypeScript Playwright framework replacing the legacy Selenium/Cucumber suite, with page objects, fixtures, and stable locators; cut code per test ~50% and runtime 60% (55 to 22 min).",
      "Embedded automated axe-core accessibility scans into every Playwright page test, enforcing AODA compliance across 100+ pages and surfacing 40+ violations before release.",
      "Built a Java test-data tool that seeds production-like environments with 1,000+ users and linked pharmacy records while enforcing integrity constraints, reducing setup from 3–4 days to 30 minutes.",
      "Developed JMeter load tests for login and file-download flows, simulating up to 500 concurrent users to establish sub-2s response-time baselines and validate a 99.5% download success rate under load.",
      "Converted 75% of manual regression in a Java BDD framework (Cucumber, Selenium), defining Gherkin acceptance scenarios with the business analyst; cut those cases from 6 hours to 55 minutes.",
      "Automated API and data validation across 50+ REST endpoints, pairing REST assertions with Oracle SQL consistency checks; saved 4+ hours of manual checks per release and caught 15+ data defects.",
      "Reviewed developer code for testability and edge-case risk and investigated production defects through Oracle data analysis, contributing to a 30% drop in post-release defects over 10+ releases.",
    ],
  },
  {
    company: "Hammond Power Solutions",
    companyUrl: "https://www.hammondpowersolutions.com",
    role: "Software Developer Intern",
    start: "May 2021",
    end: "Apr 2022",
    bullets: [
      "Built SharePoint internal tools for 3 departments, including an issue-tracking system managing 100+ requests.",
      "Integrated custom SharePoint forms with Excel reporting, eliminating 80% of manual data-entry errors.",
      "Automated form validation and email notification workflows, cutting average request response time by 40%.",
    ],
  },
];
