import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
    margin: 0;
`;

export const Description = styled.p`
    margin: 0;
    color: gray;
    font-weight: 400;
`;

export const PriceDisplay = styled.h2`
  background-color: #009981;
  color: #fff;
  width: fit-content;
  padding: 15px;
  margin-block: 20px;
  border-radius: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;