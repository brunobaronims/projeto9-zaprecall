import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.li`
  display: flex;
  width: fit-content;
  justify-content: center;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const PlayButton = styled.button`
  
`;

export const PlayIcon = styled.img`

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
  width: 20px;
  height: 30px;
`;

export const FlipIcon = styled.img`
  rotate: 90deg;
`;

export const CardIcon = styled.img`

`;

export const InactiveCard = styled.div`
  display: flex;
  width: 15rem;
  justify-content: space-between;
  background-color: #FFF;
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
  height: 6rem;
  width: 15rem;
  background-color: #FFFFD4;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;