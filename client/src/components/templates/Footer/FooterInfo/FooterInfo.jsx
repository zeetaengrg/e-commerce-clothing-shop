import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Container, Logo, Description, Icons } from "./FooterInfo.styles";

const FooterInfo = () => {
  return (
    <>
      <Container>
        <Logo src="/images/logo.png" alt="Company Logo" />
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          dolorem provident, quisquam aspernatur cumque numquam odio cupiditate
          consectetur facere fugit tenetur obcaecati magnam repellat iste
          pariatur aut quos ipsum sunt.
        </Description>
        <Icons>
          <FaFacebookSquare style={{ marginRight: "0.5rem" }} />
          <FaInstagramSquare style={{ marginRight: "0.5rem" }} />
          <FaTwitterSquare />
        </Icons>
      </Container>
    </>
  );
};

export default FooterInfo;
