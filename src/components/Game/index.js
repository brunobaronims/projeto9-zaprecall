import styled from "styled-components";

export const Container = styled.div`
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  transition: visibility 1s, opacity 1s, linear;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.input`
  :focus {
    outline: none;
  }
`;

export const Label = styled.label`

`;

export const Input = styled.input`
  :focus {
    outline: none;
  }
`;

export const List = styled.select`
  color: ${props => props.value ? 'black' : 'gray'};
  
  :focus {
    outline: none;
  }
`;

export const Option = styled.option`

  &:first-of-type {
    display: none;
  }
  
  &:not(:first-of-type) {
    color: black;
  }
`;