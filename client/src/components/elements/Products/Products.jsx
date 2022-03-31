import {
  MdFavoriteBorder,
  MdSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Container,
  Circle,
  Image,
  Icons,
  Icon,
  Title,
  Price,
  CardBody,
  CardInfo,
} from "./Products.styles";

const Products = ({ product }) => {
  return (
    <>
      <Container>
        <CardBody>
          <Circle />
          <Image src={product.img} />
          <Icons>
            <Icon>
              <MdOutlineShoppingCart />
            </Icon>
            <Icon>
              <Link to={`/product/${product._id}`}>
                <MdSearch
                  style={{
                    display: "grid",
                    placeContent: "center",
                    color: "black",
                  }}
                />
              </Link>
            </Icon>
            <Icon>
              <MdFavoriteBorder />
            </Icon>
          </Icons>
        </CardBody>
        <CardInfo>
          <Title>{product.title}</Title>
          <Price>${product.price}</Price>
        </CardInfo>
      </Container>
    </>
  );
};

export default Products;
