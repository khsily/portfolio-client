import AboutSkill from '../AboutSkill/AboutSkill';
import { AboutSkillsProps } from './types';

const AboutSkills: React.FC<AboutSkillsProps> = ({ skills = [] }) => {
  return (
    <div>
      {skills.map((skill, i) => (
        <AboutSkill key={`skill_${skill.name}`} {...skill} delay={130 * (i + 1)} />
      ))}
    </div>
  );
};

export default AboutSkills;
