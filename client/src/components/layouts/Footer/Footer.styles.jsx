import styled from 'styled-components';
import { mobile } from '../../../responsive';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`;