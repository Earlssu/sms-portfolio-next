import SkillDescription from "@/app/skills/SkillDescription";

const Skills = () => {
  return (
    <div className={"flex flex-col gap-8"}>
      <div className={"flex flex-1 flex-col gap-4"}>
        <h2 className={"text-2xl font-bold mt-4"}>Frontend</h2>
        <SkillDescription skill={"html5"} />
        <SkillDescription skill={"css3"} />
        <SkillDescription skill={"javascript"} />
        <SkillDescription skill={"typescript"} />
        <SkillDescription skill={"react"} />
        <SkillDescription skill={"redux"} />
        <SkillDescription skill={"styledComponent"} />
        <SkillDescription skill={"bootstrap"} />
        <SkillDescription skill={"jquery"} />
      </div>
      <div>
        <h2 className={"text-2xl font-bold mb-4"}>Communication</h2>
        <SkillDescription skill={"git"} />
        <SkillDescription skill={"github"} />
        <SkillDescription skill={"githubActions"} />
        <SkillDescription skill={"vercel"} />
        <SkillDescription skill={"figma"} />
        <SkillDescription skill={"jira"} />
      </div>
    </div>
  );
};

export default Skills;
