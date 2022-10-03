import * as Styled from './index'
import Card from './Card';

export default function Cards({ decks, game, updateGame }) {
  if (game.status === 'initial')
    return null;
  return (
    <Styled.List>
      {
        decks.map(deck => {
          if (deck.name === game.deck) {
            return (
              deck.cards.map((card, index) => {
                return (
                  <Card updateGame={updateGame}
                  game={game}
                  card={card}
                  index={index}
                  key={index} />
                );
              })
            );
          } return null;
        })
      }
    </Styled.List>
  );
}