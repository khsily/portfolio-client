import { AnimatedPage, HomeTitle, CircularDiv } from 'components';

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

const Home = () => {
  return (
    <AnimatedPage>
      <HomeTitle name='hansu kim' desc='frontend web developer' />
      <CircularDiv image={userIcon}>
        <CircularDiv image={ic_html} />
        <CircularDiv image={ic_css} />
        <CircularDiv image={ic_sass} />
        <CircularDiv image={ic_js} />
        <CircularDiv image={ic_ts} />
        <CircularDiv image={ic_react} />
        <CircularDiv image={ic_node} />
        <CircularDiv image={ic_python} />
        <CircularDiv image={ic_android} />
        <CircularDiv image={ic_ios} />
      </CircularDiv>
    </AnimatedPage>
  );
};

export default Home;
