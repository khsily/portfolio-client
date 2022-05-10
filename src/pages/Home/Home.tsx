import { AnimatedPage, HomeTitle, CircularDiv, SkillHint } from 'components';
import { useCallback, useState } from 'react';

import {
  userIcon,
  ic_android,
  ic_css,
  ic_html,
  ic_ios,
  ic_js,
  ic_node,
  ic_python,
  ic_react,
  ic_ts,
  ic_sass,
} from 'static/images';

const skills = [
  { name: 'html', level: 90 },
  { name: 'css', level: 85 },
  { name: 'sass', level: 75 },
  { name: 'javascript', level: 90 },
  { name: 'typescript', level: 80 },
  { name: 'react', level: 90 },
  { name: 'nodejs', level: 80 },
  { name: 'python', level: 85 },
  { name: 'android', level: 70 },
  { name: 'ios', level: 65 },
];

const Home = () => {
  const [hintPos, setHintPos] = useState({ top: window.innerHeight / 2, left: window.innerWidth / 2 });
  const [hintVisible, setHintVisible] = useState(false);
  const [skill, setSkill] = useState(skills[0]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.getAttribute('name');
    if (!name) return;

    const skill = skills.find((skill) => skill.name === name);

    setSkill(skill!);
    setHintPos({ top: e.clientY - 20, left: e.clientX - 10 });
    setHintVisible(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setHintVisible(false);
  }, []);

  return (
    <AnimatedPage>
      <HomeTitle name='hansu kim' desc='frontend web developer' />
      <CircularDiv image={userIcon} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
        <CircularDiv name='html' image={ic_html} />
        <CircularDiv name='css' image={ic_css} />
        <CircularDiv name='sass' image={ic_sass} />
        <CircularDiv name='javascript' image={ic_js} />
        <CircularDiv name='typescript' image={ic_ts} />
        <CircularDiv name='react' image={ic_react} />
        <CircularDiv name='nodejs' image={ic_node} />
        <CircularDiv name='python' image={ic_python} />
        <CircularDiv name='android' image={ic_android} />
        <CircularDiv name='ios' image={ic_ios} />
      </CircularDiv>
      <SkillHint visible={hintVisible} position={hintPos} name={skill.name} level={skill.level} />
    </AnimatedPage>
  );
};

export default Home;
