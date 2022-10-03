import styled from "styled-components";

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 3rem;
  background-color: #FFF;
  padding: 1rem;
`;

export const Text = styled.p`
  white-space: pre;
  color: ${({win}) => {
    switch (win) {
      case 'true':
        return '#2FBE34'
      case 'false':
        return '#FF3030'
      default:
        return '#000'
    }
  }};
  margin-bottom: 0.25rem;
`;

export const Icons = styled.div`

`;

export const Icon = styled.img`

`;