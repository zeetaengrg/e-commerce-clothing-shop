import { Title } from "./Header.styles";

const Header = ({ item }) => {
  return (
    <>
      <Title>{item.title}</Title>
    </>
  );
};

export default Header;
