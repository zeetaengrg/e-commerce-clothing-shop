import { RiSendPlaneFill } from "react-icons/ri";
import {
  Container,
  Title,
  Description,
  Form,
  Input,
  Button,
} from "./Newsletter.styles";

const Newsletter = () => {
  return (
    <>
      <Container>
        <Title>Newsletter</Title>
        <Description>
          Get timely updates from your favorite products.
        </Description>
        <Form>
          <Input type="text" placeholder="Enter Your Email" />
          <Button type="submit">
            <RiSendPlaneFill style={{ fontSize: "1.5rem" }} />
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Newsletter;
