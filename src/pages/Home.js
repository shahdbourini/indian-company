import Home1 from '../components/homeComp/Home1';
import Home2 from '../components/homeComp/Home2';
import HomeC from '../components/carusalHome/Carusal';
import Faq from '../components/faq/Faq';
import Review from '../components/reviews/Review';

function Home(props) {
  const accordionList = [
    {
      title: 'How do I create an account? ',
      content:
        'All you need to do is sign up into the website or download the app for your respective device and get going. For registering into the specific platform, you will need to do the app download and enter your details regarding your name, phone number and address. The wallet will be ready in less than 5 minutes.',
    },
    {
      title: 'Will I get any notifications? ',
      content:
        'Everytime you make a transaction through the platform, you will receive confirmation regarding payments and transactions.   If you are eligible for bonus offers, you will receive confirmation about the same in your respective email IDs. It is advisable to connect all your accounts with each other for better ideas and stay notified. ',
    },
    {
      title: 'How do I claim the bonus offer? ',
      content:
        'You will receive discounts and extra bonus for making transactions via the platform. The bonus received from transactions will be stored in your Payxmi wallet',
    },
    {
      title: 'Can I transfer money from my Paxmi wallet to my bank account?',
      content:
        'Yes. You can transfer the money from your Payxmi wallet to bank account only if they are connected.',
    },
    { title: 'Do I need to purchase any plans ', content: 'No' },
  ];

  return (
    <>
      <Home1 />
      {/* <Home2 /> */}
      <HomeC />
      <Faq accordionList={accordionList} color="black" />
      {/* <Review /> */}
    </>
  );
}

export default Home;
