import { Fragment } from 'react';
import * as Styled from './index'
import { zap_icon, almost_icon, wrong_icon } from '../../assets/index'

function getAnswerIcon(game, answer) {
  if (game.zap.includes(answer))
    return zap_icon;
  if (game.almost.includes(answer))
    return almost_icon;
  return wrong_icon;
}

function renderText(game, activeDeck) {
  if (game.status !== 'finished')
    return (
      <Styled.Text data-identifier="flashcard-counter">
        {game.answered.length}/{activeDeck.cards.length} CONCLUÍDOS
      </Styled.Text>
    );
  if (game.zap.length >= Number(game.goal))
    return (
      <Styled.Text type='win'>
        Parabéns!
      </Styled.Text>
    );
  return (
    <Styled.Text type='loss'>
      Putz...
    </Styled.Text>
  );
}

export default function Footer({ game, decks }) {
  const activeDeck = decks.filter(deck => deck.name === game.deck)[0];

  if (game.status === 'initial')
    return null;
  return (
    <Styled.Container>
      {
        <Fragment key={activeDeck.name}>
          {renderText(game, activeDeck)}
          <Styled.Icons>
            {
              game.answered.map(answer => {
                return (
                  <Styled.Icon key={answer}
                    src={getAnswerIcon(game, answer)} />
                )
              })
            }
          </Styled.Icons>
        </Fragment>
      }
    </Styled.Container>
  );
}