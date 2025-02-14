import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Mentorsity",
    position: "Frontend Intern",
    time: "Dec 2024 - Present",
    location: "Remote",
    description:
      "Create functional, high-level, dynamic and reusable components based on mock-up given using React JS. Coordinated on team for QA, bug fixes, features and code refactoring.",
    tech: ["React Js", "Tailwind CSS", "Figma", "Git", "Github"],
  },
];
