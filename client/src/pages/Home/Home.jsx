import { Announcements } from "../../components/elements";
import { Categories } from "../../components/modules";
import {
  Navbar,
  Slider,
  Newsletter,
  NewArrivalCategory,
  Footer,
} from "../../components/templates";

const Home = () => {
  return (
    <>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <NewArrivalCategory />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
