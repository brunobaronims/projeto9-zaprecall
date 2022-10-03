import * as Styled from './index';
import logo from '../../assets/logo.png'

export default function Header ({ status }) {
  return (
    <Styled.Container status={status === 'initial'}>
      <Styled.Image src={logo} />
      <Styled.Text>ZapRecall</Styled.Text>
    </Styled.Container>
  );
}