import Home1 from '../components/homeComp/Home1';
import Home2 from '../components/homeComp/Home2';
import HomeC from '../components/carusalHome/Carusal';
import Faq from '../components/faq/Faq';
import Review from '../components/reviews/Review';

function Home(props) {
  return (
    <>
      <Home1 />
      {/* <Home2 /> */}
      <HomeC />
      <Faq />
      {/* <Review /> */}
    </>
  );
}

export default Home;
