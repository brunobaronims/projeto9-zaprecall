import styled from "styled-components";

export const List = styled.ul`
`;

export const Card = styled.li`
  display: flex;
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
  background-color: ${({ type }) => {
    switch (type) {
      case 'GREEN_BUTTON':
        return 'green';
      case 'RED_BUTTON':
        return 'red';
      default:
        return 'yellow';
    }
  }
  };
`;

export const FlipButton = styled.button`
  width: 5rem;
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
  background-color: rgb(245,245,245);
  color: ${({ type }) => {
    switch (type) {
      case 'zap':
        return 'green';
      case 'wrong':
        return 'red';
      case 'almost':
        return 'yellow';
      default:
        return 'rgb(10,10,10)';
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
  background-color: rgb(250,250,200);
`;