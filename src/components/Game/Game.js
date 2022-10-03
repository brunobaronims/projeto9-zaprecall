import * as Styled from './index';
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import { useReducer, Fragment, useEffect } from "react";

const initialState = { status: 'initial', goal: '', deck: '' };
const decks = require('../../assets/decks/decks.json');

function reducer(game, { type, payload }) {
  switch (type) {
    case 'START_GAME':
      payload.preventDefault();
      if (game.deck === '' || !checkInput(game.goal))
        return { ...game };
      return {
        ...game, status: 'active', activeCard: 'none',
        zap: [], almost: [], wrong: [], answered: []
      };
    case 'GOAL_KEYSTROKE':
      return { ...game, goal: payload };
    case 'SELECT_DECK':
      return { ...game, deck: payload };
    case 'CHOOSE_CARD':
      return { ...game, activeCard: payload, flipped: 'false' };
    case 'FLIP_CARD':
      return { ...game, flipped: 'true' };
    case 'RED_BUTTON':
      return {
        ...game, activeCard: 'none', flipped: 'false',
        wrong: game.wrong.concat(payload),
        answered: game.answered.concat(payload)
      }
    case 'YELLOW_BUTTON':
      return {
        ...game, activeCard: 'none', flipped: 'false',
        almost: game.almost.concat(payload),
        answered: game.answered.concat(payload)
      }
    case 'GREEN_BUTTON':
      return {
        ...game, activeCard: 'none', flipped: 'false',
        zap: game.zap.concat(payload),
        answered: game.answered.concat(payload)
      };
    default:
      throw new Error();
  }
}

function checkInput(input) {
  if (!isNaN(input) &&
    !isNaN(parseFloat(input)))
    return input <= 8 && input >= 1
}

export default function Game() {
  const [game, updateGame] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(game);
  })

  return (
    <Fragment>
      <Header status={game.status} />
      <Cards decks={decks} game={game} updateGame={updateGame} />
      <Styled.Container visible={game.status === 'initial'}>
        <Styled.Form onSubmit={(e) => updateGame({ type: 'START_GAME', payload: e })}>
          <Styled.Label>
            <Styled.List
              name='decks'
              value={game.deck}
              onChange={(e) => updateGame({ type: 'SELECT_DECK', payload: e.target.value })}>
              <Styled.Option value='' defaultValue=''>Escolha seu deck</Styled.Option>
              {
                decks.map(deck => {
                  return (
                    <Styled.Option value={deck.name} key={deck.name}>
                      {deck.name}
                    </Styled.Option>
                  );
                })
              }
            </Styled.List>
          </Styled.Label>
          <Styled.Label>
            <Styled.Input
              placeholder='Digite sua meta de zaps...'
              type='text'
              value={game.goal}
              onChange={(e) => updateGame({ type: 'GOAL_KEYSTROKE', payload: e.target.value })} />
          </Styled.Label>
          <Styled.Button type='submit'
            value='Iniciar Recall!'
          />
        </Styled.Form>
      </Styled.Container>
    </Fragment>
  );
}