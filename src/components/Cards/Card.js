import * as Styled from './index'

const buttons = ['Não lembrei', 'Quase não lembrei', 'Zap!'];

export default function Card({ card, updateGame, index }) {
  return (
    <Styled.Card key={card.question}>
      Pergunta {index + 1}
    </Styled.Card>
  );
}