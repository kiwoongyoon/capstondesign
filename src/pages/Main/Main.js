import "bootstrap/dist/css/bootstrap.min.css";

import Header from "components/Header";
import Footer from "components/Footer";
import Quote from "./Quote";
import Actions from "./Actions";
import Features from "./Features";
import Appmap from "pages/Counsel/CounselFind.js";
import Emotion from "./Emotion";
import Stress from "./Stress";
import ContactInfo from "./ContactInfo";
import SideButton from "./SideButton";

const Main = (props) => {
  return (
    <>
      <Header />
      <section className="main-section dark-mode">
        <div className="margin-auto">
          <Quote />
          <Actions />
          <Features />
        </div>
      </section>
      {/*<AxiosData />*/}
      {/*<CounselFind/>*/}
      {/* <Appmap/> */}
      <Emotion />
      <Stress />
      <ContactInfo />
      <SideButton />
      <Footer />
    </>
  );
};
export default Main;
