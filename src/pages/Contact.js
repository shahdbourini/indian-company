import Contact1 from '../components/contact/Contact1';
import Contact2 from '../components/contact/Contact2';
import { Divider } from 'antd';

function Contact(props) {
  return (
    <>
      <Contact1 />
      <Divider style={{ background: `black` }} />
      <Contact2 />
    </>
  );
}

export default Contact;
