import { Fragment } from 'react';
import * as Styled from './index'

const buttons = [{ text: 'Não lembrei', type: 'RED_BUTTON' },
{ text: 'Quase não lembrei', type: 'YELLOW_BUTTON' }, { text: 'Zap!', type: 'GREEN_BUTTON' }];

function checkAnswer () {
  return;
};

function renderCard(game, index, updateGame, card) {
  if (game.activeCard !== index)
    return (
      <Fragment>
        Pergunta {index + 1}
        {
          (game.answered.includes(index)) ? <Styled.cardIcon /> :
            <Styled.playButton onClick={() => { updateGame({ type: 'CHOOSE_CARD', payload: index }) }}
              type='button'>
              test
            </Styled.playButton>
        }
      </Fragment>
    );
  switch (game.flipped) {
    case 'false':
      return (
        <Fragment>
          {card.question}
          <Styled.flipButton onClick={() => { updateGame({ type: 'FLIP_CARD' }) }}>
            test
          </Styled.flipButton>
        </Fragment>
      );
    case 'true':
      return (
        <Fragment>
          {card.answer}
          <Styled.Buttons>
            {
              buttons.map(button => {
                return (
                  <Styled.Button key={button.text}
                    text={button.text}
                    type={button.type}
                    onClick={() => { updateGame({ type: button.type, payload: [index] }) }}>
                    {button.text}
                  </Styled.Button>
                );
              })
            }
          </Styled.Buttons>
        </Fragment>
      )
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