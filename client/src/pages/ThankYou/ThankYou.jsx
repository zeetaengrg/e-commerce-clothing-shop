import { Announcements } from "../../components/elements";
import { Success } from "../../components/layouts";
import { Footer, Navbar, Newsletter } from "../../components/templates";

const ThankYou = () => {
  return (
    <>
      <Announcements />
      <Navbar />
      <Success />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ThankYou;
