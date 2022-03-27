import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`;
