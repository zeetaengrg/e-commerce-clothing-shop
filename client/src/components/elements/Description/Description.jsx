import { Desc } from "./Description.styles";

const Description = ({ item }) => {
  return (
    <>
      <Desc>{item.description}</Desc>
    </>
  );
};

export default Description;
