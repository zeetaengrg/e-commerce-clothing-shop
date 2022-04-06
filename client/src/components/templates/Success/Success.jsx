import { useLocation } from "react-router-dom";
import { Container } from "./Success.styles";

const Success = () => {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <Container>Thank you for shopping with us!</Container>
    </>
  );
};

export default Success;
