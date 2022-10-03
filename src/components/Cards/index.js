import styled from "styled-components";

export const List = styled.ul`
  margin-top: 6rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0.15rem 0.1rem rgba(100,100,100, 0.4));
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 1.6rem;
  justify-content: space-between;
`;

export const PlayButton = styled.button`
  height: 1rem;
`;

export const PlayIcon = styled.img`
  width: auto;
  height: 1rem;
`;

export const Button = styled.button`
  height: 2rem;
  width: 4rem;
  border-radius: 0.2rem;
  color: #FFF;
  font: 300 0.6rem 'Recursive', sans-serif;

  background-color: ${({ type }) => {
    switch (type) {
      case 'ZAP':
        return '#2FBE34';
      case 'WRONG':
        return '#FF3030';
      default:
        return '#FF922E';
    }
  }
  };
`;

export const FlipButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.3rem;
  width: fit-content;
`;

export const FlipIcon = styled.img`
  rotate: 90deg;
  height: auto;
  width: 1.3rem;
`;

export const CardIcon = styled.img`

`;

export const InactiveCard = styled.div`
  border-radius: 0.25rem;
  display: flex;
  width: 15rem;
  padding: 1rem 0.6rem;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  font: 700 0.9rem 'Recursive', sans-serif;
  color: ${({ type }) => {
    switch (type) {
      case 'zap':
        return '#2FBE34';
      case 'wrong':
        return '#FF3030';
      case 'almost':
        return '#FF922E';
      default:
        return '#333333';
    }
  }};
  text-decoration: ${({ type }) => {
    switch (type) {
      case 'wrong':
        return 'line-through';
      default:
        return 'none';
    }
  }};
`;

export const ActiveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  min-height: 6rem;
  width: 15rem;
  background-color: #FFFFD4;
  padding: 0.8rem 0.5rem 0.5rem 0.7rem;
  border-radius: 0.25rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;