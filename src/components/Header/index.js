import styled from "styled-components";


export const Image = styled.img`
  width: auto;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  min-height: 6rem;
  position: ${props => props.status ? 'static' : 'fixed'};
  margin-top: ${props => props.status ? '6rem' : '0'};
  top: 0;
  z-index: 1;
  background: #FB6B6B;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.status ? 'column' : 'row'};

  ${Image} {
    height: ${props => props.status ? '7rem' : '3rem'};
    margin: ${props => props.status ? '0' : '0 1rem 0 0'};
  }
`;

export const Text = styled.h2`
  width: fit-content;
  color: #FFF;
  font: 300 1.5rem 'Righteous', cursive;
  margin: 1rem 0;
`;