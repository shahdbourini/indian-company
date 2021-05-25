import Contact1 from '../components/contact/Contact1';
import Contact2 from '../components/contact/Contact2';
import Contact3 from '../components/contact/Contact3';
import { Divider } from 'antd';
import { Helmet } from 'react-helmet';

function Contact(props) {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/20020308.js"
        ></script>
      </Helmet>

      <Contact1 t={props.t} />
      {/* <Divider style={{ background: `black` }} />
      <Contact2 /> */}
      <Divider style={{ background: `black` }} />
      <Contact3 t={props.t} />
    </>
  );
}

export default Contact;
