import Home1 from '../components/homeComp/Home1';
import Home2 from '../components/homeComp/Home2';
import Home3 from '../components/homeComp/Home3';
import Home4 from '../components/homeComp/Home4';
import Home5 from '../components/homeComp/Home5';
import HomeC from '../components/carusalHome/Carusal';
import Faq from '../components/faq/Faq';
import Review from '../components/reviews/Review';

function Home(props) {
  const accordionList = [
    {
      title: props.t('faq.1'),
      content: props.t('faq.2'),
    },
    {
      title: props.t('faq.3'),
      content: props.t('faq.4'),
    },
    {
      title: props.t('faq.5'),
      content: props.t('faq.6'),
    },
    {
      title: props.t('faq.7'),
      content: props.t('faq.8'),
    },
    { title: props.t('faq.9'), content: 'No' },
  ];

  return (
    <>
      <Home1 t={props.t} />
      {/* <Home2 /> */}
      <HomeC t={props.t} />
      <Home3 t={props.t} />
      <Home4 t={props.t} />
      <Home5 t={props.t} />
      <Faq accordionList={accordionList} color="black" t={props.t} />
      {/* <Review /> */}
    </>
  );
}

export default Home;
