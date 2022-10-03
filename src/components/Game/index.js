import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 8rem;
`;

export const Button = styled.input`
  font-family: 'Recursive', sans-serif;
  margin: 0;
  padding: 0;
  color: ${props => props.active ? '#ADADAD' : '#D70900'};
  background: ${props => props.active ? '#E8E8E8' : '#FFF'};
  width: 11rem;
  height: 2.5rem;
  border: ${props => props.active ? 'none' : '0.1rem solid #D70900'};
  border-radius: 0.25rem;
  filter: drop-shadow(0 0.15rem 0.1rem rgba(100,100,100, 0.4));

  :focus {
    outline: none;
  }
`;

export const Label = styled.label`

`;

export const Input = styled.input`
  font: 300 0.75rem 'Roboto', sans-serif;
  height: 2rem;
  width: 11rem;
  border: none;
  border-radius: 0.25rem;
  
  ::placeholder {
    color: #ADADAD;
  }

  :focus {
    outline: none;
  }
`;

export const List = styled.select`
  color: ${props => props.value ? 'black' : '#ADADAD'};
  font: 300 0.75rem 'Roboto', sans-serif;
  height: 2rem;
  width: 11rem;
  border: none;
  border-radius: 0.25rem;

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