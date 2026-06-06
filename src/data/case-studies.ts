export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  headline: string;
  summary: string;
  cover: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
  quote?: { text: string; author: string; role: string };
};

import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "apex-university",
    client: "Apex University",
    category: "Higher Education",
    headline: "Onboarding 18,000 students in a single semester",
    summary:
      "A flagship public university unified eight legacy campus systems onto Kumora without disrupting the academic calendar.",
    cover: blog1,
    metrics: [
      { value: "18,000", label: "Students migrated" },
      { value: "40 hrs", label: "Saved per week" },
      { value: "8 wks", label: "Total rollout" },
    ],
    challenge:
      "Apex was operating eight disconnected systems for enrollment, attendance, hostel, library, payments, and security — leading to data drift and a poor student experience.",
    approach: [
      "Migrated 18,000 student records into a single Kumora profile with verified history.",
      "Rolled out the Smart Attendance and Navigation modules cohort-by-cohort to minimize risk.",
      "Trained 220 faculty members through Kumora's in-app onboarding flows.",
    ],
    outcome:
      "Within one semester, Apex reduced administrative overhead by ~40 staff-hours per week and lifted student satisfaction scores on operations from 62 to 88.",
    quote: {
      text: "Kumora transformed how we manage our 18,000-student campus. The smart attendance system alone saved us 40 staff-hours per week.",
      author: "Dr. Amara Okonkwo",
      role: "Vice Chancellor, Apex University",
    },
  },
  {
    slug: "northfield-college",
    client: "Northfield College",
    category: "Private College",
    headline: "Replacing a 12-year-old SIS in two days",
    summary:
      "Northfield's IT team migrated their core student information system and integrated with their existing LMS in 48 hours.",
    cover: blog2,
    metrics: [
      { value: "48 hrs", label: "Migration time" },
      { value: "100%", label: "Data integrity" },
      { value: "0", label: "Class disruptions" },
    ],
    challenge:
      "A legacy SIS was slowing down every administrative workflow and lacked an API surface for the modern LMS Northfield had adopted.",
    approach: [
      "Used Kumora's connector framework to map legacy schemas in under a day.",
      "Ran the new system in parallel for 24 hours with diff-based reconciliation.",
      "Cut over on a Sunday with full LMS sync verified at the user level.",
    ],
    outcome:
      "The IT team described the rollout as the smoothest infrastructure project in a decade. Faculty saw response times drop from seconds to milliseconds.",
    quote: {
      text: "The API documentation is world-class and integration with our existing LMS took two days.",
      author: "Marcus Thompson",
      role: "Head of IT, Northfield College",
    },
  },
  {
    slug: "global-tech-institute",
    client: "Global Tech Institute",
    category: "Multi-campus Institute",
    headline: "An 8-minute campus evacuation drill, verified",
    summary:
      "Global Tech adopted Kumora's emergency alert and roll-call modules across four campuses serving 4,200 students.",
    cover: blog3,
    metrics: [
      { value: "8 min", label: "Full evacuation" },
      { value: "4,200", label: "Students verified" },
      { value: "4", label: "Campuses live" },
    ],
    challenge:
      "Existing alert systems lacked real-time roll-call and reached only a fraction of students through outdated SMS gateways.",
    approach: [
      "Deployed Kumora's multi-channel alert pipeline (push, SMS, voice, signage).",
      "Wired NFC and facial-recognition check-ins to evacuation muster points.",
      "Trained campus security leaders on the live operations dashboard.",
    ],
    outcome:
      "During the first campus drill on the new system, Global Tech evacuated and verified 4,200 students in under eight minutes — a number their previous vendor never reached.",
    quote: {
      text: "We evacuated 4,200 students with verified roll-call in under 8 minutes. That's Kumora's power.",
      author: "Sandra Kwame",
      role: "Campus Security Director, Global Tech Institute",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
