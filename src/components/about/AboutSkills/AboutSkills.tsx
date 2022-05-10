import { FadeIn, AboutSkill } from 'components';

import { AboutSkillsProps } from './types';

const AboutSkills: React.FC<AboutSkillsProps> = ({ skills = [] }) => {
  return (
    <FadeIn delay={0.4}>
      {skills.map((skill, i) => (
        <AboutSkill key={`skill_${skill.name}`} {...skill} delay={130 * (i + 1)} />
      ))}
    </FadeIn>
  );
};

export default AboutSkills;
