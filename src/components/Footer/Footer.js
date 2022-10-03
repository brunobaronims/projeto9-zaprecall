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

export default function Footer({ game, decks }) {
  if (game.status === 'initial')
    return null;
  return (
    <Styled.Container>
      {
        decks.map(deck => {
          if (deck.name === game.deck) {
            return (
              <Fragment key={deck.name}>
                <Styled.Text>
                  {game.answered.length}/{deck.cards.length} CONCLUÍDOS
                </Styled.Text>
                <Styled.Icons>
                  {
                    game.answered.map(answer => {
                      return (
                        <Styled.Icon key={answer}
                        src={getAnswerIcon(game, answer)}/>
                      )
                    })
                  }
                </Styled.Icons>
              </Fragment>
            );
          } return null;
        })
      }
    </Styled.Container>
  );
}