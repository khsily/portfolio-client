import { AboutInfo, AboutPane, AboutSkills, AboutWorkBox, AnimatedPage } from 'components';

const skills = [
  { name: 'Front-end', percentage: 90, color: '#3077C6' },
  { name: 'Back-end', percentage: 75, color: '#FF2153' },
  { name: 'ReactJS', percentage: 85, color: '#D26BD5' },
  { name: 'NodeJS', percentage: 75, color: '#527399' },
];

const About = () => {
  return (
    <AnimatedPage style={{ padding: '50px 30px' }}>
      <AboutPane>
        <AboutInfo title='Skills & Experience'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ultrices leo. Sed lacinia, sapien ut
            pulvinar suscipit, leo lorem pulvinar enim, vel varius tellus ante eu lectus. Suspendisse id tellus ut
            turpis porttitor scelerisque et id erat. Nullam non neque gravida, lobortis purus in, fermentum ligula.
            Morbi purus ligula, vestibulum eu posuere in, lacinia sodales elit. Quisque facilisis bibendum metus.
          </p>
          <p>
            Praesent vitae vehicula dolor. Proin vehicula sit amet magna vitae egestas. Nunc dapibus sagittis porta.
            Proin dignissim elit vitae sem egestas, non sagittis augue placerat. Cras fringilla, ligula et bibendum
            eleifend, metus risus eleifend est, ac molestie lacus leo nec lacus. Praesent pulvinar lacus vitae ante
            interdum, ut porta leo euismod. Sed sed convallis sapien.
          </p>
          <p>
            Praesent vitae vehicula dolor. Proin vehicula sit amet magna vitae egestas. Nunc dapibus sagittis porta.
            Proin dignissim elit vitae sem egestas, non sagittis augue placerat. Cras fringilla, ligula et bibendum
            eleifend, metus risus eleifend est, ac molestie lacus leo nec lacus. Praesent pulvinar lacus vitae ante
            interdum, ut porta leo euismod. Sed sed convallis sapien.
          </p>
        </AboutInfo>
      </AboutPane>
      <AboutPane>
        <AboutSkills skills={skills} />
        <div style={{ display: 'flex' }}>
          <AboutWorkBox
            title='Frontend developer'
            desc='Praesent vitae vehicula dolor. Proin vehicula sit amet magna vitae egestas. Nunc dapibus sagittis porta.
            Proin dignissim elit vitae sem egestas'
          />
          <AboutWorkBox
            title='Full stack developer'
            desc='Praesent vitae vehicula dolor. Proin vehicula sit amet magna vitae egestas. Nunc dapibus sagittis porta.
            Proin dignissim elit vitae sem egestas'
          />
        </div>
      </AboutPane>
    </AnimatedPage>
  );
};

export default About;
