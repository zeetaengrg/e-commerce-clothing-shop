import * as React from "react";
import { Header, Description } from "../../elements";
import { slideItems } from "../../../data";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImageContainer,
  Image,
  Info,
} from "./Slider.styles";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const timeOutRef = React.useRef(null);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentSlide(
        currentSlide > 0 ? currentSlide - 1 : slideItems.length - 1
      );
    } else {
      setCurrentSlide(
        currentSlide < slideItems.length - 1 ? currentSlide + 1 : 0
      );
    }
  };

  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  React.useEffect(() => {
    resetTimeOut();

    timeOutRef.current = setTimeout(() => {
      setCurrentSlide(
        currentSlide < slideItems.length - 1 ? currentSlide + 1 : 0
      );
    }, 2500);

    return () => {
      resetTimeOut();
    };
  }, [currentSlide]);

  return (
    <React.Fragment>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <MdArrowLeft style={{ fontSize: "2rem" }} />
        </Arrow>
        <Wrapper currentSlide={currentSlide}>
          {slideItems.map((item) => (
            <Slide key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <Info>
                <Header item={item} />
                <Description item={item} />
                {/* <Button /> */}
              </Info>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <MdArrowRight style={{ fontSize: "2rem" }} />
        </Arrow>
      </Container>
    </React.Fragment>
  );
};

export default Slider;
