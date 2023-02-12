import styled from "styled-components";
import newyear from './assets/newyear.jpg'

export const container = styled.div`
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(${newyear});
    display: flex;
    justify-content: center;
    align-items: center;
`;

