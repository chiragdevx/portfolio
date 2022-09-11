import {Layout} from '../../layout/Layout'
import { Section } from '../../styles/GlobalComponents';
import  Hero  from '../../components/v2/Hero/Hero'
import BgAnimation from '../../components/v2/BackgrooundAnimation/BackgroundAnimation'
import Projects from '../../components/v2/Projects/Projects'
import Technologies from '../../components/v2/Technologies/Technologies'
import Timeline from '../../components/v2/TimeLine/TimeLine'
import Acomplishments from '../../components/v2/Acomplishments/Acomplishments'

const Home = () => {
  return (
    <Layout>
    <Section grid>
      <Hero />
      <BgAnimation />
    </Section>
    <Projects />
    <Technologies />
    <Timeline />
    <Acomplishments />
  </Layout>
  );
};

export default Home;
