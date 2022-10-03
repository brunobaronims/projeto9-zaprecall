import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.status ? 'column' : 'row'};
`;

export const Image = styled.img`
  height: auto;
  width: ${props => props.status ? '7rem' : '3rem'};
`;

export const Text = styled.h2`
  width: fit-content;
  color: #FFF;
  font: 400 2rem 'Righteous', cursive;
  margin: 0;
`;