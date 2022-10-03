import * as Styled from './index'
import { zap_icon, almost_icon, wrong_icon, play_icon, flip_icon } from '../../assets/index'

const buttons = [{ text: 'Não lembrei', type: 'WRONG' },
{ text: 'Quase não lembrei', type: 'ALMOST' }, { text: 'Zap!', type: 'ZAP' }];

function getAnswerIcon(index, game) {
  if (game.zap.includes(index))
    return zap_icon;
  if (game.almost.includes(index))
    return almost_icon;
  return wrong_icon;
};

function inactiveCard(game, index, updateGame) {
  return (
    <Styled.InactiveCard type={checkAnswer(index, game)}>
      Pergunta {index + 1}
      {
        (game.answered.includes(index)) ? <Styled.CardIcon src={getAnswerIcon(index, game)} /> :
          <Styled.PlayButton onClick={() => { updateGame({ type: 'CHOOSE_CARD', payload: index }) }}
            type='button'>
            <Styled.PlayIcon src={play_icon} />
          </Styled.PlayButton>
      }
    </Styled.InactiveCard>
  );
}

function activeCard(card, updateGame) {
  return (
    <Styled.ActiveCard>
      {card.question}
      <Styled.Container>
        <Styled.FlipButton onClick={() => { updateGame({ type: 'FLIP_CARD' }) }}>
          <Styled.FlipIcon src={flip_icon} />
        </Styled.FlipButton>
      </Styled.Container>
    </Styled.ActiveCard>
  );
}

function flippedCard(card, updateGame, index) {
  return (
    <Styled.ActiveCard>
      {card.answer}
      <Styled.Buttons>
        {
          buttons.map(button => {
            return (
              <Styled.Button key={button.text}
                type={button.type}
                onClick={() => { updateGame({ type: button.type, payload: [index] }) }}>
                {button.text}
              </Styled.Button>
            );
          })
        }
      </Styled.Buttons>
    </Styled.ActiveCard>
  );
}

function checkAnswer(index, game) {
  if (game.zap.includes(index))
    return 'zap';
  if (game.almost.includes(index))
    return 'almost';
  if (game.wrong.includes(index))
    return 'wrong';
  return 'initial';
}

function renderCard(game, index, updateGame, card) {
  if (game.activeCard !== index)
    return (
      inactiveCard(game, index, updateGame)
    );
  switch (game.flipped) {
    case 'false':
      return (
        activeCard(card, updateGame)
      );
    case 'true':
      return (
        flippedCard(card, updateGame, index)
      );
    default:
      throw new Error();
  }
}

export default function Card({ game, card, updateGame, index }) {
  return (
    <Styled.Card key={card.question}>
      {renderCard(game, index, updateGame, card)}
    </Styled.Card>
  );
}